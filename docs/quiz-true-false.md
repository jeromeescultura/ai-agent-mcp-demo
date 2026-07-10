# Quiz — Agents at Work: Concepts and Applications

**Format:** True or False (15 items)
*Brownbag Session · Part 01 of 02*

Mark each statement **TRUE** or **FALSE**.

---

1. A Large Language Model on its own can directly change external state, such as updating a database or clicking a button in a browser.

2. The phrase that summarizes the core distinction is: "A model answers. An agent acts."

3. A standalone model is stateless and produces output based on a point-in-time snapshot of its knowledge.

4. In the structural analogy, the LLM is the car and the Agent is the engine.

5. An agent uses a stateful execution loop rather than treating every request as an isolated, memory-less event.

6. The four stages of the agentic loop are PLAN, ACT, OBSERVE, and DECIDE.

7. The project used four custom agents: a CI/CD agent, a Front-End UI agent, a PR Prep agent, and a Visual QA agent.

8. The CI/CD agent offloads the build step to Vercel and skips running it inside CI.

9. The Front-End UI agent validates its own changes live in a browser using Playwright before considering the work done.

10. The PR Prep agent creates the feature branch, commits, opens the pull request, comments on the linked issue, and moves the ticket to "In Review".

11. MCP (the Model Context Protocol) is a standard way to plug tools and data into an agent, described as "USB-C for agents".

12. The PR Prep agent used the GitHub MCP to open pull requests and update issue statuses, while the Visual QA and Front-End agents used the Playwright MCP to drive real browsers.

13. On the project, agents were only allowed to write code and were never permitted to open or update pull requests.

14. For simple fixes, the team switched from the more expensive Opus 4.8 to a cheaper, faster model like Claude Haiku to keep token cost down.

15. Common agent failure modes — such as hallucination, infinite loops, and prompt injection — should be designed around with guardrails like validation, budgets, and human-in-the-loop.

---

## Answer Key

1. **False** — A standalone model cannot affect external state; it is text-in, text-out.
2. **True** — This is the anchoring line of the presentation.
3. **True** — The model is stateless and reflects a point-in-time snapshot.
4. **False** — The LLM is the *engine*; the Agent is the *car*.
5. **True** — Agents maintain a stateful execution loop.
6. **True** — PLAN → ACT → OBSERVE → DECIDE.
7. **True** — CI/CD, Front-End UI, PR Prep, and Visual QA were the four agents built.
8. **False** — The CI/CD agent keeps builds inside CI so security scanning runs every time, then deploys to Vercel.
9. **True** — It opens the change in a real browser with Playwright and checks it before calling the job done.
10. **True** — That is the full PR Prep workflow, including moving the ticket to "In Review".
11. **True** — MCP is one standard connector, described as USB-C for agents.
12. **True** — GitHub MCP for PR Prep; Playwright MCP for the browser-driving agents.
13. **False** — Agents were handed the whole loop, including opening and updating PRs and their status/comments.
14. **True** — Opus 4.8 for complex work; a cheaper model like Haiku for simple fixes.
15. **True** — Agents fail in predictable ways, so you design guardrails around them.
