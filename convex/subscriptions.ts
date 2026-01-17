import { v } from "convex/values"

import { mutation, query } from "./_generated/server"
import { auth } from "./auth"

/**
 * Get the current user's subscription
 * Returns null if user is not authenticated or has no subscription
 */
export const getUserSubscription = query({
  args: {},
  handler: async (ctx) => {
    const userId = await auth.getUserId(ctx)
    if (!userId) {
      return null
    }

    const subscription = await ctx.db
      .query("subscriptions")
      .withIndex("byUserId", (q) => q.eq("userId", userId))
      .first()

    // If no subscription exists, user is on FREE plan
    if (!subscription) {
      return {
        plan: "FREE" as const,
        status: "ACTIVE" as const,
      }
    }

    return subscription
  },
})

/**
 * Update or create a subscription after successful Stripe checkout
 * Called from Stripe webhook (no auth required)
 */
export const updateSubscription = mutation({
  args: {
    userId: v.id("users"),
    stripeCustomerId: v.string(),
    stripeSubscriptionId: v.string(),
    stripeProductId: v.string(),
    planName: v.string(),
    subscriptionStatus: v.string(),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("subscriptions")
      .withIndex("byUserId", (q) => q.eq("userId", args.userId))
      .first()

    const now = new Date().toISOString()

    // Map Stripe status to our schema status
    let status: "INCOMPLETE" | "ACTIVE" | "TRIALING" | "CANCELED" | "PAST_DUE"
    switch (args.subscriptionStatus.toLowerCase()) {
      case "trialing":
        status = "TRIALING"
        break
      case "active":
        status = "ACTIVE"
        break
      case "incomplete":
      case "incomplete_expired":
        status = "INCOMPLETE"
        break
      case "canceled":
      case "unpaid":
        status = "CANCELED"
        break
      case "past_due":
        status = "PAST_DUE"
        break
      default:
        status = "ACTIVE"
    }

    const subscriptionData = {
      stripeCustomerId: args.stripeCustomerId,
      stripeSubscriptionId: args.stripeSubscriptionId,
      stripeProductId: args.stripeProductId,
      plan: "PRO" as const,
      status,
      updatedAt: now,
    }

    if (existing) {
      await ctx.db.patch(existing._id, subscriptionData)
      return existing._id
    } else {
      const id = await ctx.db.insert("subscriptions", {
        ...subscriptionData,
        userId: args.userId,
        createdAt: now,
      })
      return id
    }
  },
})
