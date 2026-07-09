import { test, expect } from "@playwright/test";

test.describe("Agents at Work landing page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("renders the header brand and hero", async ({ page }) => {
    await expect(page).toHaveTitle(/.+/);
    await expect(
      page.getByRole("heading", {
        name: "Agents at Work: Concepts and Applications",
        level: 1,
      })
    ).toBeVisible();
    await expect(page.getByText("Part 01 of 02")).toBeVisible();
  });

  test("shows the warm-up poll heading", async ({ page }) => {
    await expect(
      page.getByRole("heading", {
        name: "Who's used an AI agent to write code this week?",
      })
    ).toBeVisible();
  });

  test("shows the model vs agent comparison", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "The Model", exact: true })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "The Agent", exact: true })
    ).toBeVisible();
    await expect(page.getByText("Stateless prediction")).toBeVisible();
    await expect(page.getByText("Tool & API utilization")).toBeVisible();
  });

  test("shows the agentic loop stages", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "The Agentic Loop" })
    ).toBeVisible();
    for (const stage of ["Plan", "Act", "Observe", "Decide"]) {
      await expect(
        page.getByText(stage, { exact: true }).first()
      ).toBeVisible();
    }
  });

  test("shows the Playwright case study", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Case Study: The Playwright Agent" })
    ).toBeVisible();
    await expect(page.getByText("Agent Input")).toBeVisible();
  });

  test("shows the cross-browser demo with browser badges", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "The Playwright Agent, Cross-Browser" })
    ).toBeVisible();
    for (const browser of ["Chrome", "Firefox", "Safari"]) {
      await expect(page.getByText(browser, { exact: true })).toBeVisible();
    }
    await expect(
      page.getByText("GIF Placeholder — Demo Coming Soon")
    ).toBeVisible();
  });

  test("shows the anatomy table", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Anatomy of an Agent" })
    ).toBeVisible();
    await expect(
      page.getByRole("cell", { name: "1. Perception" })
    ).toBeVisible();
    await expect(page.getByRole("cell", { name: "5. Grounding" })).toBeVisible();
  });

  test("shows the where agents break section", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Where Agents Break" })
    ).toBeVisible();
    for (const mode of [
      "Hallucination",
      "Infinite Loops",
      "Cost & Latency",
      "Prompt Injection",
    ]) {
      await expect(
        page.getByRole("heading", { name: mode, exact: true })
      ).toBeVisible();
    }
  });

  test("shows the agents you already use section", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Agents You Already Use" })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Copilot Agent Mode" })
    ).toBeVisible();
    await expect(page.getByText("MCP — the Model Context Protocol")).toBeVisible();
  });

  test("shows the multi-agent pipeline", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "The Multi-Agent Pipeline" })
    ).toBeVisible();
    await expect(page.getByText("01. RESEARCHER")).toBeVisible();
    await expect(page.getByText("04. PUBLISHER")).toBeVisible();
  });

  test("shows key takeaways", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Key Takeaways" })
    ).toBeVisible();
  });

  test("quiz link points to google and opens in a new tab", async ({
    page,
  }) => {
    const quizLink = page.getByRole("link", {
      name: /Take the Short Assessment Quiz/i,
    });
    await quizLink.scrollIntoViewIfNeeded();
    await expect(quizLink).toBeVisible();
    await expect(quizLink).toHaveAttribute("href", "https://www.google.com");
    await expect(quizLink).toHaveAttribute("target", "_blank");
    await expect(quizLink).toHaveAttribute("rel", /noopener/);
  });
});
