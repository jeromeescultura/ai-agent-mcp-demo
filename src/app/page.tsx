import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Badge } from "@/components/ui/badge";

const modelTraits = [
  { icon: "chat_bubble", label: "Stateless prediction" },
  { icon: "description", label: "Text-in, text-out" },
  { icon: "block", label: "Cannot affect external state" },
  { icon: "schedule", label: "Point-in-time snapshot" },
];

const agentTraits = [
  { icon: "memory", label: "Stateful execution loop" },
  { icon: "build", label: "Tool & API utilization" },
  { icon: "task_alt", label: "Goal-oriented behavior" },
  { icon: "sync", label: "Dynamic self-correction" },
];

const loopStages = [
  { icon: "lightbulb", label: "Plan" },
  { icon: "play_arrow", label: "Act" },
  { icon: "visibility", label: "Observe" },
  { icon: "gavel", label: "Decide" },
];

const projectAgents = [
  {
    icon: "rocket_launch",
    title: "CI/CD Agent",
    role: "GitHub Actions & Vercel",
    text: "Reads the app source and existing workflows, then writes and updates our GitHub Actions pipelines. It keeps builds inside CI so security scanning runs every time, then deploys to Vercel.",
  },
  {
    icon: "web",
    title: "Front-End UI Agent",
    role: "Components & responsive fixes",
    text: "Handles UI fixes, component work, and responsive and accessibility issues across the monorepo. It validates its own changes live in the browser with Playwright before calling the job done.",
  },
  {
    icon: "merge",
    title: "PR Prep Agent",
    role: "Branch, commit, pull request",
    text: "Creates the feature branch, commits with conventional messages, opens the pull request, comments on the linked issue, and moves the ticket to In Review on the project board.",
  },
  {
    icon: "visibility",
    title: "Visual QA Agent",
    role: "Design & a11y verification",
    text: "Verifies components in Storybook and on live pages against the Figma design and the spec, checking variants, states, responsive behavior, accessibility, and cross-browser rendering.",
  },
];

const mcpServers = [
  {
    icon: "hub",
    title: "GitHub MCP",
    text: "The PR Prep agent uses it to open pull requests, comment on issues, and update statuses, no manual Git ceremony.",
  },
  {
    icon: "smart_display",
    title: "Playwright MCP",
    text: "The Front-End and Visual QA agents drive real browsers through it, separate servers for Chromium, Firefox, and WebKit.",
  },
  {
    icon: "description",
    title: "Atlassian MCP",
    text: "Visual QA pulls the Functional Spec straight from Confluence to check the build against acceptance criteria.",
  },
  {
    icon: "brush",
    title: "Figma MCP",
    text: "Visual QA reads design context and screenshots from Figma to compare the rendered component to the source design.",
  },
];

const modelTiers = [
  {
    tag: "Complex work",
    model: "Claude Opus 4.8",
    text: "Multi-file component builds, tricky refactors, and full PR workflows. Highest capability, and the highest token cost.",
  },
  {
    tag: "Simple fixes",
    model: "Claude Haiku",
    text: "Typos, small style tweaks, quick one-file changes. We drop to a cheaper, faster model to keep cost down.",
  },
];

const benefits = [
  {
    icon: "bolt",
    title: "Speed",
    text: "Automate workflows that take humans hours in mere seconds.",
  },
  {
    icon: "verified",
    title: "Consistency",
    text: "Eliminate variance in repetitive tasks through structured logs.",
  },
  {
    icon: "security",
    title: "Safety",
    text: "Deterministic guardrails ensure agents operate within bounds.",
  },
];

const takeaways = [
  {
    n: "01 / SPECIALIZED AGENTS",
    text: "We split the work across focused agents, CI/CD, front-end fixes, PR prep, and visual QA, each owning one part of the workflow.",
  },
  {
    n: "02 / MCP CONNECTS EVERYTHING",
    text: "MCP let our agents plug into GitHub, Playwright, Confluence, and Figma without building a custom integration for each one.",
  },
  {
    n: "03 / HAND OVER THE LOOP",
    text: "We let agents build, test, and even open and update PRs end-to-end, with a human reviewing at the boundaries.",
  },
  {
    n: "04 / MATCH MODEL TO TASK",
    text: "Opus 4.8 for complex work, a cheaper model like Haiku for simple fixes. Capability and cost are a dial you control.",
  },
];

const browsers = [
  { icon: "trip_origin", label: "Chrome" },
];

const failureModes = [
  {
    icon: "psychology_alt",
    title: "Hallucination",
    text: "Confidently invents facts, APIs, or file paths that don't exist. The output looks right, that's what makes it dangerous.",
  },
  {
    icon: "sync_problem",
    title: "Infinite Loops",
    text: "Gets stuck retrying the same failed action, convinced the next attempt will finally work.",
  },
  {
    icon: "payments",
    title: "Cost & Latency",
    text: "Every reasoning step burns tokens and time. A runaway loop isn't just slow, it's expensive.",
  },
  {
    icon: "gpp_bad",
    title: "Prompt Injection",
    text: "Malicious text inside a page or file can hijack the agent's instructions. This is the security story that matters.",
  },
];

function Icon({ name, className }: { name: string; className?: string }) {
  return (
    <span className={`material-symbols-outlined ${className ?? ""}`}>
      {name}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="mx-auto w-full max-w-7xl px-page">
        {/* Hero */}
        <section className="flex flex-col items-center py-stack-xl text-center">
          <h1 className="font-headline-xl max-w-5xl">
            Agents at Work: Concepts and Applications
          </h1>
          <div className="mt-stack-md flex gap-4">
            <Badge className="line-border rounded-none bg-transparent px-4 py-1 font-label-bold uppercase text-foreground">
              Part 01 of 02
            </Badge>
          </div>
        </section>

        {/* Warm-up poll */}
        <section className="flex flex-col items-center border-t-2 border-black py-stack-xl text-center">
          <Badge className="line-border rounded-none bg-transparent px-4 py-1 font-label-bold uppercase text-foreground">
            Warm-up · Show of Hands
          </Badge>
          <h2 className="font-headline-xl mt-stack-md max-w-5xl">
            Who&apos;s used an AI agent to write code this week?
          </h2>
          <p className="mt-stack-md max-w-2xl font-body-lg text-secondary-ink">
            Hit the raise-hand button in Teams or drop a reaction in the chat.
          </p>
        </section>

        {/* The Hook */}
        <section className="border-t-2 border-black py-stack-lg">
          <div className="grid grid-cols-1 items-end gap-gutter md:grid-cols-12">
            <div className="md:col-span-8">
              <h2 className="font-headline-lg lg:font-headline-xl leading-none">
                A model answers.
                <br />
                An agent acts.
              </h2>
            </div>
            <div className="md:col-span-4">
              <p className="font-body-lg text-secondary-ink">
                The distinction is structural. While Large Language Models
                provide the inference engine, Agents wrap that engine in logic,
                memory, and tools to execute complex goals autonomously.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-stack-lg">
          <div className="grid grid-cols-1 border-2 border-black md:grid-cols-2">
            <div className="border-b-2 border-black p-12 md:border-b-0 md:border-r-2">
              <h3 className="mb-8 font-headline-lg">The Model</h3>
              <ul className="space-y-6 font-body-lg">
                {modelTraits.map((t) => (
                  <li key={t.label} className="flex items-center gap-4">
                    <Icon name={t.icon} />
                    {t.label}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-12">
              <h3 className="mb-8 font-headline-lg">The Agent</h3>
              <ul className="space-y-6 font-body-lg">
                {agentTraits.map((t) => (
                  <li key={t.label} className="flex items-center gap-4">
                    <Icon name={t.icon} />
                    {t.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Structural analogy */}
        <section className="flex flex-col items-center gap-gutter py-stack-lg md:flex-row">
          <div className="w-full md:w-1/2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Line art diagram comparing a car engine and a full vehicle"
              className="line-border h-auto w-full p-8"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuArd8icN-ogl3hLxRbo3yKdXmkT0pJp9unv4rwO14AxKRUeaCI_PsU0JUdbRQJdJwerZpbj96pYTQu6gO_GC0dmJS-eiOti8lVxS4e_zcNJhoWvcCwtAmOOEbLlETPg9oxdR6mQgGGOQiIXRQ6UtR-YhSs3O9cpQXgL2l8SuZymEaX8eWgO5yK2tX4PSqshNZWU2CfQMf4zvebxo-c7vu3MXQ84JL6TJLVB5gyUyfwdVpuiiuSZkYdO-8vXokDhN_ruml7_v2QOvD4o5wE"
            />
          </div>
          <div className="w-full p-stack-md md:w-1/2">
            <h3 className="mb-6 font-headline-lg">Structural Analogy</h3>
            <p className="font-body-lg">
              If the LLM is the engine—a powerful generator of potential
              force—the Agent is the car. The car includes the steering, the
              brakes, the dashboard, and the wheels. Without the agentic
              framework, the engine just sits on the floor, revving.
            </p>
          </div>
        </section>

        {/* The Agentic Loop */}
        <section className="border-y-2 border-black py-stack-lg">
          <div className="mb-16 text-center">
            <h3 className="font-headline-lg">The Agentic Loop</h3>
          </div>
          <div className="flex flex-col items-center justify-between gap-8 px-8 md:flex-row">
            {loopStages.map((stage, i) => (
              <div key={stage.label} className="contents">
                <div className="line-border flex flex-1 flex-col items-center gap-4 p-8">
                  <Icon name={stage.icon} className="text-4xl" />
                  <span className="font-label-bold uppercase">
                    {stage.label}
                  </span>
                </div>
                {i < loopStages.length - 1 && (
                  <Icon name="arrow_forward" className="hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Cross-Browser Demo */}
        <section className="py-stack-xl">
          <div className="mb-stack-md flex flex-col items-center text-center">
            <Badge className="line-border rounded-none bg-transparent px-4 py-1 font-label-bold uppercase text-foreground">
              Live Demo · Part 02 Preview
            </Badge>
            <h3 className="mt-6 font-headline-lg">
              The Playwright Agent, Cross-Browser
            </h3>
            <p className="mt-6 max-w-2xl font-body-lg text-secondary-ink">
              Watch the agent test this very website in Chrome.
            </p>
          </div>

          <div className="mb-8 flex flex-wrap justify-center gap-4">
            {browsers.map((b) => (
              <div
                key={b.label}
                className="line-border flex items-center gap-3 px-6 py-3"
              >
                <Icon name={b.icon} />
                <span className="font-label-bold uppercase">{b.label}</span>
              </div>
            ))}
          </div>

          {/* Recorded Playwright responsive walkthrough (desktop → tablet → mobile) */}
          <video
            className="line-border aspect-video w-full bg-surface object-contain"
            src="/playwright-responsive-demo.webm"
            autoPlay
            loop
            muted
            playsInline
          />
        </section>

        {/* The Four Agents We Built */}
        <section className="py-stack-xl">
          <div className="mb-16 flex flex-col items-center text-center">
            <Badge className="line-border rounded-none bg-transparent px-4 py-1 font-label-bold uppercase text-foreground">
              From Our Last Project
            </Badge>
            <h3 className="mt-6 font-headline-lg">Four Agents We Built</h3>
            <p className="mt-6 max-w-2xl font-body-lg text-secondary-ink">
              Not theory, these are the custom agents we actually used to ship
              work. Each one owns a slice of the workflow.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
            {projectAgents.map((a) => (
              <div key={a.title} className="line-border flex flex-col gap-4 p-10">
                <Icon name={a.icon} className="text-4xl" />
                <div>
                  <h4 className="font-label-bold uppercase">{a.title}</h4>
                  <span className="font-mono text-xs text-secondary-ink">
                    {a.role}
                  </span>
                </div>
                <p className="text-secondary-ink">{a.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* MCP */}
        <section className="py-stack-xl">
          <div className="mb-16 flex flex-col items-center text-center">
            <h3 className="font-headline-lg">MCP, How the Agents Connect</h3>
            <p className="mt-6 max-w-2xl font-body-lg text-secondary-ink">
              MCP, the Model Context Protocol, is USB-C for agents: one standard
              way to plug tools and data into any agent. Our four agents leaned
              on it constantly.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-4">
            {mcpServers.map((m) => (
              <div key={m.title} className="line-border flex flex-col gap-4 p-8">
                <Icon name={m.icon} className="text-4xl" />
                <h4 className="font-label-bold uppercase">{m.title}</h4>
                <p className="text-secondary-ink">{m.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How We Maximized Agents */}
        <section className="py-stack-xl">
          <div className="mb-16 flex flex-col items-center text-center">
            <h3 className="font-headline-lg">How We Maximized Them</h3>
            <p className="mt-6 max-w-2xl font-body-lg text-secondary-ink">
              We were encouraged to hand the agent the whole loop, build the
              component, test it, and even open the PR and keep its status and
              comments up to date.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
            {modelTiers.map((t) => (
              <div key={t.model} className="line-border flex flex-col gap-4 p-10">
                <span className="font-label-bold uppercase">{t.tag}</span>
                <h4
                  className="font-headline-lg"
                  style={{ fontSize: 28, lineHeight: 1 }}
                >
                  {t.model}
                </h4>
                <p className="text-secondary-ink">{t.text}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-stack-md max-w-3xl text-center font-body-lg text-secondary-ink">
            The trick is matching the model to the task: reach for{" "}
            <span className="font-bold text-foreground">Opus 4.8</span> when the
            work is complex, and drop to a cheaper model like{" "}
            <span className="font-bold text-foreground">Haiku</span> for simple
            fixes to keep token cost in check.
          </p>
        </section>

        {/* Why this matters */}
        <section className="py-stack-xl">
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="line-border flex flex-col items-center gap-6 p-12 text-center"
              >
                <Icon name={b.icon} className="text-5xl" />
                <h4
                  className="font-headline-lg"
                  style={{ fontSize: 32, lineHeight: 1 }}
                >
                  {b.title}
                </h4>
                <p className="text-secondary-ink">{b.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Where Agents Break */}
        <section className="py-stack-xl">
          <div className="mb-16 flex flex-col items-center text-center">
            <h3 className="font-headline-lg">Where Agents Break</h3>
            <p className="mt-6 max-w-2xl font-body-lg text-secondary-ink">
              The junior teammate has bad days too. Knowing the failure modes is
              how you design around them.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-4">
            {failureModes.map((f) => (
              <div
                key={f.title}
                className="line-border flex flex-col gap-4 p-8"
              >
                <Icon name={f.icon} className="text-4xl" />
                <h4 className="font-label-bold uppercase">{f.title}</h4>
                <p className="text-secondary-ink">{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="mb-stack-lg py-stack-xl">
          <h3 className="mb-16 font-headline-lg">Key Takeaways</h3>
          <div className="grid grid-cols-1 gap-stack-md md:grid-cols-2">
            {takeaways.map((t) => (
              <div key={t.n} className="space-y-4">
                <span className="mb-4 block font-label-bold">{t.n}</span>
                <p className="font-body-lg">{t.text}</p>
              </div>
            ))}
          </div>
        </section>

         {/* Quiz link */}
        <section className="flex justify-center py-stack-xl">
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="line-border flex flex-col items-center gap-6 bg-transparent p-12 text-center text-foreground transition-colors duration-200 hover:bg-foreground hover:text-background"
          >
            <Icon name="quiz" className="text-5xl" />
            <h4 className="font-headline-lg" style={{ fontSize: 32, lineHeight: 1 }}>
              Take the Short Assessment Quiz
            </h4>
            <span className="font-label-bold uppercase">Start Now</span>
          </a>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
