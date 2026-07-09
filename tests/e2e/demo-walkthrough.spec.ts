import { test, expect, type Page } from "@playwright/test";

// A slow, guided tour of the landing page so the recorded video is watchable.
// Produces one video per browser (chromium / firefox / webkit) under
// test-results/, ideal for turning into a demo GIF.

const PAUSE = 1100;

async function reveal(page: Page, name: string, exact = false) {
  const heading = page.getByRole("heading", { name, exact }).first();
  await heading.scrollIntoViewIfNeeded();
  await expect(heading).toBeVisible();
  await page.waitForTimeout(PAUSE);
}

test("guided walkthrough of the landing page", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");

  // Hero
  await expect(
    page.getByRole("heading", {
      name: "Agents at Work: Concepts and Applications",
      level: 1,
    })
  ).toBeVisible();
  await page.waitForTimeout(PAUSE);

  // Tour each section top-to-bottom.
  await reveal(page, "Who's used an AI agent to write code this week?");
  await reveal(page, "The Model", true);
  await reveal(page, "Structural Analogy");
  await reveal(page, "The Agentic Loop");
  await reveal(page, "Case Study: The Playwright Agent");
  await reveal(page, "The Playwright Agent, Cross-Browser");
  await reveal(page, "Anatomy of an Agent");
  await reveal(page, "Where Agents Break");
  await reveal(page, "The Multi-Agent Pipeline");
  await reveal(page, "Agents You Already Use");
  await reveal(page, "The Junior Teammate Metaphor");
  await reveal(page, "Key Takeaways");

  // Quiz call-to-action: scroll in and hover to show the color inversion.
  const quizLink = page.getByRole("link", {
    name: /Take the Short Assessment Quiz/i,
  });
  await quizLink.scrollIntoViewIfNeeded();
  await expect(quizLink).toBeVisible();
  await page.waitForTimeout(PAUSE);
  await quizLink.hover();
  await page.waitForTimeout(PAUSE);
  await expect(quizLink).toHaveAttribute("href", "https://www.google.com");

  // Back to top to close the tour.
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "smooth" }));
  await page.waitForTimeout(PAUSE);
});
