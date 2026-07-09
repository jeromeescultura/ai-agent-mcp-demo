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

7. In the Playwright case study, the agent skips validation and exits immediately after clicking "Edit."

8. In the Playwright case study, the agent uses a headless Chromium instance to carry out the browser task.

9. "Grounding" in the anatomy of an agent refers to keeping the agent stuck to the truth and facts.

10. In the five-layer anatomy, "Tools" is the layer responsible for remembering past actions.

11. Memory in an agent can be implemented using approaches like RAG or a Redis cache.

12. According to the talk, agents introduce more variance into repetitive tasks compared to humans.

13. The multi-agent pipeline follows the order: Researcher → Writer → Critic → Publisher.

14. The Junior Teammate metaphor describes agents as pure magic that require no boundaries or oversight.

15. One key takeaway is that we are shifting from "Software as a Service" (SaaS) toward "Service as a Software" (agentic automation).

---

## Answer Key

1. **False** — A standalone model cannot affect external state; it is text-in, text-out.
2. **True** — This is the anchoring line of the presentation.
3. **True** — The model is stateless and reflects a point-in-time snapshot.
4. **False** — The LLM is the *engine*; the Agent is the *car*.
5. **True** — Agents maintain a stateful execution loop.
6. **True** — PLAN → ACT → OBSERVE → DECIDE.
7. **False** — The agent validates the change and confirms the role update before exiting.
8. **True** — It spins up a headless Chromium instance via Playwright.
9. **True** — Grounding means sticking to the truth/facts via context injection.
10. **False** — "Memory" remembers past actions; "Tools" interacts with the world.
11. **True** — Memory is implemented with RAG / Redis cache.
12. **False** — Agents provide consistency and *eliminate* variance in repetitive tasks.
13. **True** — Researcher → Writer → Critic → Publisher.
14. **False** — They are *not* magic; they need clear boundaries, objectives, and occasional oversight.
15. **True** — The future shift is from SaaS to "Service as a Software."
