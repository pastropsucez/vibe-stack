import { describe, expect, it } from "vitest"

import { cleanConvexError, cn } from "@/lib/utils"

describe("cn (className utility)", () => {
  it("merges class names", () => {
    expect(cn("foo", "bar")).toBe("foo bar")
  })

  it("handles conditional classes", () => {
    expect(cn("foo", false && "bar", "baz")).toBe("foo baz")
  })

  it("merges Tailwind classes correctly", () => {
    expect(cn("px-2", "px-4")).toBe("px-4")
    expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500")
  })

  it("handles undefined and null", () => {
    expect(cn("foo", undefined, null, "bar")).toBe("foo bar")
  })
})

describe("cleanConvexError", () => {
  it("extracts message from Convex error format", () => {
    const convexError =
      "[Request ID: abc123] Server Error Uncaught Error: Invalid email or password at handler (convex/auth.ts:42:10)"
    expect(cleanConvexError(convexError)).toBe("Invalid email or password")
  })

  it("returns original message if not Convex format", () => {
    const normalError = "Something went wrong"
    expect(cleanConvexError(normalError)).toBe("Something went wrong")
  })

  it("handles empty string", () => {
    expect(cleanConvexError("")).toBe("")
  })
})
