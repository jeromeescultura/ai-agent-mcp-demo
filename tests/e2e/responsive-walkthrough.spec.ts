import { test, expect, type Page } from "@playwright/test";

// A recorded responsiveness check in Chrome. Playwright resizes the browser
// through desktop, tablet, and mobile breakpoints, touring the page at each
// size. Produces a video under test-results/, ideal for a demo GIF.

const PAUSE = 900;

const viewports = [
  { label: "Desktop", width: 1440, height: 900 },
  { label: "Tablet", width: 820, height: 1180 },
  { label: "Mobile", width: 390, height: 844 },
];

async function tour(page: Page) {
  const stops = [
    "Agents at Work: Concepts and Applications",
    "Who's used an AI agent to write code this week?",
    "The Agentic Loop",
    "The Playwright Agent, Cross-Browser",
    "Where Agents Break",
    "Agents You Already Use",
    "Key Takeaways",
  ];

  for (const name of stops) {
    const heading = page.getByRole("heading", { name }).first();
    await heading.scrollIntoViewIfNeeded();
    await expect(heading).toBeVisible();
    await page.waitForTimeout(PAUSE);
  }

  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "smooth" }));
  await page.waitForTimeout(PAUSE);
}

test("responsive check across desktop, tablet, and mobile", async ({
  page,
}) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");

  for (const vp of viewports) {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    // Settle after the resize so the layout reflows before touring.
    await page.waitForTimeout(PAUSE);
    await expect(
      page.getByRole("heading", {
        name: "Agents at Work: Concepts and Applications",
        level: 1,
      })
    ).toBeVisible();
    await tour(page);
  }
});
