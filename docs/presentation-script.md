# Agents at Work: Concepts and Applications

**Presentation Script — Part 01 of 02**
Brownbag Session · © 2026 Brownbag

---

## Opening — Title & Hook

> (Slide: Agents at Work: Concepts and Applications)

Good [morning/afternoon] everyone, and welcome to this Brownbag session.

Today's talk is titled **Agents at Work: Concepts and Applications**. This is
**Part 1 of 2**. I'm not here as an expert — I'm sharing what we actually
learned using agents on our last project. Today we build a simple mental model
and walk through what worked for us; in the next session we go deeper into
testing and watching it in action.

---

## Warm-up — Show of Hands

> (Slide: Who's used an AI agent to write code this week?)

Before we get into definitions, a quick interactive poll — jump in on this one.

> **Who's used an AI agent to write code this week?**

Hit the raise-hand button in Teams, or drop a reaction in the chat. No wrong
answers — I just want a quick read before we dig in.

That's the whole point of today — most of us are already using these things.
Now let's understand what's actually happening under the hood.

---

## The Hook — A Model Answers, an Agent Acts

> (Slide: A model answers. An agent acts.)

Let me anchor the whole talk with a single line:

> **A model answers. An agent acts.**

Sit with that for a second. It's simple, but it's the thing that finally made
agents click for me on our project. A Large Language Model on its own is just an
inference engine — but an Agent wraps that engine in **logic, memory, and tools**
so it can actually go and do the work. That's the difference between something
that **talks** and something that **does**.

---

## Section 1 — The Model vs. The Agent

> (Slide: The Model / The Agent)

Let's separate these two clearly, because people conflate them constantly.

**The Model** — a Large Language Model on its own — is:

- **Stateless prediction** — it doesn't remember what happened before.
- **Text-in, text-out** — you give it text, it returns text.
- **Unable to affect external state** — it can't touch a database, a browser, or an API.
- **A point-in-time snapshot** — frozen knowledge from its training cut-off.

Now contrast that with **The Agent**, which adds:

- **A stateful execution loop** — it maintains context across steps.
- **Tool and API utilization** — it can actually reach out and do things.
- **Goal-oriented behavior** — it works toward an objective, not just a reply.
- **Dynamic self-correction** — when it fails, it observes and adjusts.

So the model is the **capability**. The agent is the **system** that puts that
capability to work.

---

## Section 2 — The Structural Analogy

> (Slide: engine vs. car line-art diagram)

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

> (Slide: PLAN → ACT → OBSERVE → DECIDE)

So how does an agent actually operate? Through a continuous loop with four
stages:

1. **PLAN** — The agent reasons about how to reach the goal.
2. **ACT** — It takes an action, usually by calling a tool.
3. **OBSERVE** — It looks at the result of that action.
4. **DECIDE** — It determines the next step, then loops back.

This loop is what makes agents feel autonomous. It's not one shot — it's a cycle
of trying, checking, and adjusting until the goal is met.

---

## Section 4 — Cross-Browser Demo: Testing This Site

> (Slide: Playwright agent GIF — Chrome, Firefox, Safari)

Let's see it live. This is a Playwright agent testing **this very website** —
the one you're looking at right now.

From a single plain-English goal, it drives the browser — navigating, clicking,
resizing, and validating along the way across desktop, tablet, and mobile.

Watch how it doesn't follow a hard-coded script. It reads the page, decides what
to do next, and self-corrects when something behaves differently. That's the
agentic loop from Section 3, running on our own project.

(This is a preview of Part 2, which is all about building and demoing agents
like this.)

---

## Section 5 — The Four Agents We Built

> (Slide: CI/CD · Front-End UI · PR Prep · Visual QA)

This is the part I actually want to talk about — the four agents we set up on
our last project. Nothing fancy. Each one is just a written prompt with a clear
role, a set of tools, and some boundaries. Here's what each did and roughly how
it worked.

**1. The CI/CD Agent.** Its job was our pipelines. It reads the app source and
our existing GitHub Actions workflows, then writes or updates the workflow
files. One rule we baked in: builds always happen inside CI so our security
scanning runs every time — it never shortcuts the build — and then it deploys to
Vercel.

**2. The Front-End UI Agent.** This one handled UI fixes — component tweaks,
responsive bugs, accessibility issues. It works across the monorepo, but the key
part is it doesn't just claim it fixed something. It opens the change in a real
browser with Playwright and checks the result at desktop and mobile before
saying it's done.

**3. The PR Prep Agent.** This was the boring-but-brilliant one. When the code
was ready, it created the feature branch, committed with a proper conventional
commit message, opened the pull request, commented on the linked issue, and
moved the ticket to **In Review** on the board. All the ceremony we usually
forget or rush.

**4. The Visual QA Agent.** This one verified the UI against the design and the
spec — in Storybook and on live pages. It checks variants, states, responsive
behaviour, accessibility, and even cross-browser rendering, and reports what
passed and what didn't.

The pattern across all four: **narrow role, clear tools, defined boundaries.**
That's what made them reliable.

---

## Section 6 — MCP: How the Agents Connect

> (Slide: GitHub · Playwright · Atlassian · Figma)

So how do these agents actually reach out and touch GitHub, or a browser, or
Figma? Through **MCP — the Model Context Protocol.** The way I explain it to
myself: it's USB-C for agents. One standard way to plug a tool or a data source
into any agent, so you're not hand-building an integration for every model.

Here's how our four agents used it:

- **GitHub MCP** — this is what let the **PR Prep** agent open pull requests,
  comment on issues, and update statuses without any manual Git steps from us.
- **Playwright MCP** — this is how the **Front-End** and **Visual QA** agents
  drove real browsers. We ran separate servers for Chromium, Firefox, and
  WebKit, so one agent could check all three.
- **Atlassian MCP** — the **Visual QA** agent used this to pull the functional
  spec straight from Confluence and check the build against the acceptance
  criteria.
- **Figma MCP** — same agent read design context and screenshots from Figma to
  compare what we shipped against the actual design.

The nice thing is we didn't write bespoke plumbing for any of these. MCP was the
one connector, and each agent just picked the tools it needed.

---

## Section 7 — How We Maximized Them

> (Slide: Hand over the loop · Match the model to the task)

Here's the mindset shift that got the most value for us: we were encouraged to
hand the agent the **whole loop**, not just a snippet. Don't just ask it to
write a component — let it **build the component, test it in the browser, open
the PR, and keep the status and comments up to date.** The more of the workflow
we handed over, the more time it actually saved.

The second thing was being deliberate about **which model** we used, because it
directly hits cost:

- For **complex work** — multi-file builds, tricky refactors, the full PR
  workflow — we mostly used **Claude Opus 4.8.** It's the most capable, but it
  burns a lot of tokens.
- For **simple fixes** — a typo, a small style tweak, a quick one-file change —
  we'd switch down to a much cheaper, faster model like **Claude Haiku.**

That's the whole trick: match the model to the task. Reaching for the biggest
model on every tiny fix just quietly runs up the bill.

### Why this paid off — three wins

- **Speed** ⚡ — Work that used to take us hours came back in seconds.
- **Consistency** ✓ — The boring steps got done the same way every time.
- **Safety** 🔒 — Clear boundaries kept the agents operating within bounds.

---

## Section 8 — Where Agents Break

> (Slide: Hallucination · Infinite Loops · Cost & Latency · Prompt Injection)

Now the honest part — because our junior teammate has bad days too. Deploy
agents without knowing the failure modes and they **will** surprise you.

- **Hallucination** — It confidently invents facts, APIs, or file paths that
  don't exist. The output looks right, which is exactly what makes it
  dangerous.
- **Infinite Loops** — It gets stuck retrying the same failed action, convinced
  the next attempt will finally work.
- **Cost & Latency** — Every reasoning step burns tokens and time. A runaway
  loop isn't just slow — it's expensive.
- **Prompt Injection** — Malicious text inside a web page or file can hijack the
  agent's instructions. This is the security story you need to care about.

None of this means don't use agents. It means **design around the failure
modes** — guardrails, budgets, human-in-the-loop, and validation. That's the
difference between a demo and production.

---

## Section 9 — Key Takeaways

> (Slide: Key Takeaways)

Let me leave you with four things from our experience:

1. **Specialized Agents** — We split the work across focused agents — CI/CD, front-end fixes, PR prep, and visual QA — each owning one part of the workflow.
2. **MCP Connects Everything** — MCP let our agents plug into GitHub, Playwright, Confluence, and Figma without building a custom integration for each one.
3. **Hand Over the Loop** — We let agents build, test, and even open and update PRs end-to-end, with a human reviewing at the boundaries.
4. **Match the Model to the Task** — Opus 4.8 for complex work, a cheaper model like Haiku for simple fixes. Capability and cost are a dial you control.

---

## Closing

That's Part 1. Today we covered what agents are, and how we actually put them
to work on our last project. In **Part 2**, we'll get hands-on and build.

The one line to remember on your way out:

> **A model answers. An agent acts.**

Thank you — I'll take any questions.

BROWNBAG · © 2026 Brownbag
