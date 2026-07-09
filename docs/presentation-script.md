# Agents at Work: Concepts and Applications

**Presentation Script — Part 01 of 02**
_Brownbag Session · © 2026 Brownbag_

---

## Opening — Title & Hook

> _(Slide: "Agents at Work: Concepts and Applications")_

Good [morning/afternoon] everyone, and welcome to this Brownbag session.

Today's talk is titled **"Agents at Work: Concepts and Applications."** This is
**Part 1 of 2** — today we build the mental model, and in the next session we'll
go deeper into building and deploying.

Let me open with the single line that anchors this entire talk:

> **"A model answers. An agent acts."**

Sit with that for a second. It sounds simple, but it captures a _structural_
shift in how we build software. Large Language Models give us an inference
engine — but Agents wrap that engine in **logic, memory, and tools** so it can
execute complex goals autonomously. That's the difference between something that
_talks_ and something that _does_.

---

## Warm-up — Show of Hands

> _(Slide: "Who's used an AI agent to write code this week?")_

Before we get into definitions, quick show of hands.

> **Who's used an AI agent to write code this week?**

Keep your hand up if it actually shipped. Keep it up if it did something you
_didn't_ fully check afterwards.

Look around the room. That's the whole point of today — most of us are already
using these things. Now let's understand what's actually happening under the
hood.

---

## Section 1 — The Model vs. The Agent

> _(Slide: "The Model" / "The Agent")_

Let's separate these two clearly, because people conflate them constantly.

**The Model** — a Large Language Model on its own — is:

- **Stateless prediction** — it doesn't remember what happened before.
- **Text-in, text-out** — you give it text, it returns text.
- **Unable to affect external state** — it can't touch a database, a browser, or an API.
- **A point-in-time snapshot** — frozen knowledge from its training cut-off.

Now contrast that with **The Agent**, which adds:

- **A stateful execution loop** — it maintains context across steps.
- **Tool and API utilization** — it can actually reach out and _do_ things.
- **Goal-oriented behavior** — it works toward an objective, not just a reply.
- **Dynamic self-correction** — when it fails, it observes and adjusts.

So the model is the _capability_. The agent is the _system_ that puts that
capability to work.

---

## Section 2 — The Structural Analogy

> _(Slide: engine vs. car line-art diagram)_

Here's the analogy I want you to walk away remembering:

> **If the LLM is the engine — a powerful generator of potential force — then the
> Agent is the car.**

The car includes the steering, the brakes, the dashboard, and the wheels.
Without the agentic framework around it, the engine just sits on the floor,
revving loudly and going absolutely nowhere.

The engine is necessary but not sufficient. The value comes from wrapping it in
the structure that lets it move with purpose and control.

---

## Section 3 — The Agentic Loop

> _(Slide: PLAN → ACT → OBSERVE → DECIDE)_

So how does an agent actually operate? Through a continuous loop with four
stages:

1. **PLAN** — The agent reasons about _how_ to reach the goal.
2. **ACT** — It takes an action, usually by calling a tool.
3. **OBSERVE** — It looks at the result of that action.
4. **DECIDE** — It determines the next step, then loops back.

This loop is what makes agents feel autonomous. It's not one shot — it's a cycle
of trying, checking, and adjusting until the goal is met.

---

## Section 4 — Case Study: The Playwright Agent

> _(Slide: Playwright Agent execution steps)_

Let's make this concrete with a real example — an agent driving a browser using
**Playwright**.

The **agent input** is a plain-English instruction:

> _"Navigate to dashboard, find the user named 'A. Lovelace', and change their
> role to 'Admin'."_

Now watch the **execution steps**:

1. **Browser Initialization** — The agent spins up a headless Chromium instance via Playwright.
2. **DOM Analysis** — The LLM parses the simplified HTML tree to identify the "User" table.
3. **Action** — It clicks "Edit" next to the target name.
4. **Validation** — The agent observes the screen change and _confirms_ the role was updated before exiting.

Notice that last step. It doesn't just click and hope — it **verifies**. That
validation step is the agentic loop in action: act, observe, decide.

---

## Section 5 — Cross-Browser Demo: Testing This Site

> _(Slide: Playwright agent GIF — Chrome, Firefox, Safari)_

Let's see it live. This is a Playwright agent testing **this very website** —
the one you're looking at right now.

From a single plain-English goal, it drives three browsers — **Chrome, Firefox,
and Safari** — navigating, clicking, and validating along the way.

Watch how it doesn't follow a hard-coded script. It reads the page, decides what
to do next, and self-corrects when a browser behaves differently. That's the
agentic loop from Section 3, running in the wild.

_(This is a preview of Part 2, which is all about building and demoing agents
like this.)_

---

## Section 6 — Anatomy of an Agent

> _(Slide: 5-layer anatomy table)_

Every capable agent is built from five layers. Think of these as the organs of
the system:

| Layer             | Function                             | Implemented With        |
| ----------------- | ------------------------------------ | ----------------------- |
| **1. Perception** | Ingesting data (text, vision, audio) | Multimodal LLM          |
| **2. Brain**      | Decision making & reasoning          | Inference loop          |
| **3. Tools**      | Interacting with the world           | Function calling / APIs |
| **4. Memory**     | Remembering past actions             | RAG / Redis cache       |
| **5. Grounding**  | Sticking to the truth / facts        | Context injection       |

If you remember one thing here: **Perception takes it in, the Brain decides,
Tools act, Memory persists, and Grounding keeps it honest.**

### Why this matters — three benefits

- **Speed** ⚡ — Automate workflows that take humans _hours_ in mere seconds.
- **Consistency** ✓ — Eliminate variance in repetitive tasks through structured logs.
- **Safety** 🔒 — Deterministic guardrails ensure agents operate within bounds.

---

## Section 7 — Where Agents Break

> _(Slide: Hallucination · Infinite Loops · Cost & Latency · Prompt Injection)_

Now the honest part — because our junior teammate has bad days too. Deploy
agents without knowing the failure modes and they _will_ surprise you.

- **Hallucination** — It confidently invents facts, APIs, or file paths that
  don't exist. The output _looks_ right, which is exactly what makes it
  dangerous.
- **Infinite Loops** — It gets stuck retrying the same failed action, convinced
  the next attempt will finally work.
- **Cost & Latency** — Every reasoning step burns tokens and time. A runaway
  loop isn't just slow — it's expensive.
- **Prompt Injection** — Malicious text inside a web page or file can hijack the
  agent's instructions. This is the security story you need to care about.

None of this means "don't use agents." It means **design around the failure
modes** — guardrails, budgets, human-in-the-loop, and validation. That's the
difference between a demo and production.

---

## Section 8 — The Multi-Agent Pipeline

> _(Slide: Researcher → Writer → Critic → Publisher)_

One agent is powerful. But the real leverage comes when you **chain them
together**, each with a specialized role:

1. **RESEARCHER** — Gathers the raw data.
2. **WRITER** — Drafts the initial content.
3. **CRITIC** — Fact-checks and edits.
4. **PUBLISHER** — Formats and deploys.

This is exactly how a good human team works — you don't ask one person to
research, write, edit, _and_ publish all at once. You divide the labor. The same
principle applies to agents, and it lets you solve problems that are far too big
for a single context window.

---

## Section 9 — Agents You Already Use

> _(Slide: Copilot Agent Mode · Claude Code / Cursor · Agentic Tests · PR Review)_

Here's the reframe: this isn't the future. It's your Tuesday.

- **Copilot Agent Mode** — Plans, edits across multiple files, runs your tests,
  and fixes its own errors.
- **Claude Code / Cursor** — Terminal- and editor-native agents that refactor
  and ship real changes.
- **Agentic Test Writing** — Generates and runs unit and E2E tests, then
  iterates until they pass.
- **Automated PR Review** — Reads the diff, flags bugs, and suggests fixes
  before a human even looks.

Every one of these is the exact loop we've been describing — plan, act, observe,
decide — wrapped around tools you already touch every day. And a quick word on
what connects them: **MCP, the Model Context Protocol** — think of it as USB-C
for agents. One standard way to plug tools and data into any agent, so you're
not rebuilding integrations for every model.

---

## Section 10 — The Junior Teammate Metaphor

> _(Slide: The Junior Teammate Metaphor)_

Here's the framing I'd like you to adopt when you start working with agents:

> **Treat an agent like an exceptionally fast, infinite-memory junior teammate.**

They can follow complex instructions and use tools — but they need **clear
boundaries, specific objectives, and occasional oversight** so they don't wander
off track.

And this is the key: they are **not magic**. They are advanced _deterministic
software_ wrapped in _probabilistic intelligence_. Give them clarity, and they're
extraordinary. Give them ambiguity, and they'll confidently go the wrong way.

---

## Section 11 — Key Takeaways

> _(Slide: Key Takeaways)_

Let me leave you with four things to carry out of this room:

1. **Structural Shift** — Stop thinking about models as search engines. Start thinking about them as _operating systems for logic_.
2. **Composability** — The power of agents lies in chaining them together to solve problems too big for a single context window.
3. **Tool Dependency** — An agent is only as good as the tools you give it. _Interface design is now agent design._
4. **Guardrails** — Agents fail in predictable ways. Design around the failure modes with validation, budgets, and human-in-the-loop.

---

## Closing

That's Part 1. Today we covered _what_ agents are, _how_ they're structured, and
_why_ they matter. In **Part 2**, we'll get hands-on and build.

The one line to remember on your way out:

> **A model answers. An agent acts.**

Thank you — I'll take any questions.

_BROWNBAG · © 2026 Brownbag_
