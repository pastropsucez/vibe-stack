import { expect, test } from "@playwright/test"

test.describe("Home Page", () => {
  test("should display the main heading", async ({ page }) => {
    await page.goto("/")
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible()
  })

  test("should have login and signup links", async ({ page }) => {
    await page.goto("/")
    await expect(page.getByRole("link", { name: /sign in/i })).toBeVisible()
    await expect(page.getByRole("link", { name: /get started/i })).toBeVisible()
  })

  test("should navigate to login page", async ({ page }) => {
    await page.goto("/")
    await page.getByRole("link", { name: /sign in/i }).click()
    await expect(page).toHaveURL("/login")
  })

  test("should navigate to signup page", async ({ page }) => {
    await page.goto("/")
    await page.getByRole("link", { name: /get started/i }).click()
    await expect(page).toHaveURL("/signup")
  })
})

test.describe("Auth Pages", () => {
  test("login page should have email and password fields", async ({ page }) => {
    await page.goto("/login")
    await expect(page.getByLabel(/email/i)).toBeVisible()
    await expect(page.getByLabel(/password/i)).toBeVisible()
  })

  test("signup page should have name, email, and password fields", async ({
    page,
  }) => {
    await page.goto("/signup")
    await expect(page.getByLabel(/name/i)).toBeVisible()
    await expect(page.getByLabel(/email/i)).toBeVisible()
    await expect(page.getByLabel(/password/i)).toBeVisible()
  })
})
