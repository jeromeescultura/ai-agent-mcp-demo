import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

const executionSteps = [
  {
    n: "01",
    text: "Browser Initialization: Agent spins up a headless Chromium instance via Playwright.",
  },
  {
    n: "02",
    text: 'DOM Analysis: LLM parses the simplified HTML tree to identify the "User" table.',
  },
  { n: "03", text: 'Action: Clicks "Edit" next to the target name.' },
  {
    n: "04",
    text: "Validation: Agent observes the screen change and confirms the role has been updated before exiting.",
  },
];

const ingredients = [
  {
    name: "1. Perception",
    role: "Ingesting data (Text, Vision, Audio)",
    layer: "Multimodal LLM",
  },
  {
    name: "2. Brain",
    role: "Decision making & reasoning",
    layer: "Inference Loop",
  },
  {
    name: "3. Tools",
    role: "Interacting with the world",
    layer: "Function Calling / APIs",
  },
  {
    name: "4. Memory",
    role: "Remembering past actions",
    layer: "RAG / Redis Cache",
  },
  {
    name: "5. Grounding",
    role: "Sticking to the truth/facts",
    layer: "Context Injection",
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

const pipeline = [
  { n: "01. RESEARCHER", text: "Gathers raw data" },
  { n: "02. WRITER", text: "Drafts initial content" },
  { n: "03. CRITIC", text: "Fact-checks and edits" },
  { n: "04. PUBLISHER", text: "Formats and deploys" },
];

const takeaways = [
  {
    n: "01 / STRUCTURAL SHIFT",
    text: "Stop thinking about models as search engines. Start thinking about them as operating systems for logic.",
  },
  {
    n: "02 / COMPOSABILITY",
    text: "The power of agents lies in their ability to be chained together to solve problems too big for a single context window.",
  },
  {
    n: "03 / TOOL DEPENDENCY",
    text: "An agent is only as good as the tools you give it. Interface design is now agent design.",
  },
  {
    n: "04 / GUARDRAILS",
    text: "Agents fail in predictable ways. Design around the failure modes with validation, budgets, and human-in-the-loop.",
  },
];

const browsers = [
  { icon: "trip_origin", label: "Chrome" },
];

const failureModes = [
  {
    icon: "psychology_alt",
    title: "Hallucination",
    text: "Confidently invents facts, APIs, or file paths that don't exist. The output looks right — that's what makes it dangerous.",
  },
  {
    icon: "sync_problem",
    title: "Infinite Loops",
    text: "Gets stuck retrying the same failed action, convinced the next attempt will finally work.",
  },
  {
    icon: "payments",
    title: "Cost & Latency",
    text: "Every reasoning step burns tokens and time. A runaway loop isn't just slow — it's expensive.",
  },
  {
    icon: "gpp_bad",
    title: "Prompt Injection",
    text: "Malicious text inside a page or file can hijack the agent's instructions. This is the security story that matters.",
  },
];

const familiarAgents = [
  {
    icon: "code",
    title: "Copilot Agent Mode",
    text: "Plans, edits across multiple files, runs your tests, and fixes its own errors.",
  },
  {
    icon: "terminal",
    title: "Claude Code / Cursor",
    text: "Terminal- and editor-native agents that refactor and ship real changes.",
  },
  {
    icon: "bug_report",
    title: "Agentic Test Writing",
    text: "Generates and runs unit and E2E tests, then iterates until they pass.",
  },
  {
    icon: "rate_review",
    title: "Automated PR Review",
    text: "Reads the diff, flags bugs, and suggests fixes before a human even looks.",
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
            Hands up. Keep them up if it actually shipped and if it did
            something you didn&apos;t fully check afterwards.
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

        {/* Case Study: Playwright Agent */}
        <section className="py-stack-xl">
          <div className="grid grid-cols-1 gap-gutter lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h3 className="sticky top-32 font-headline-lg">
                Case Study: The Playwright Agent
              </h3>
            </div>
            <div className="space-y-12 lg:col-span-8">
              <div className="line-border bg-white p-8">
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-label-bold uppercase">Agent Input</span>
                  <span className="font-mono text-xs text-secondary-ink">
                    0.4s Latency
                  </span>
                </div>
                <p className="border border-black/10 bg-surface p-4 font-mono text-lg">
                  &quot;Navigate to dashboard, find the user named &apos;A.
                  Lovelace&apos;, and change their role to
                  &apos;Admin&apos;.&quot;
                </p>
              </div>
              <div className="line-border p-8">
                <h4 className="mb-4 font-label-bold uppercase">
                  Execution Steps
                </h4>
                <ol className="space-y-4">
                  {executionSteps.map((step, i) => (
                    <li
                      key={step.n}
                      className={`flex gap-4 ${
                        i < executionSteps.length - 1
                          ? "border-b border-black/10 pb-4"
                          : ""
                      }`}
                    >
                      <span className="font-bold">{step.n}</span>
                      <span>{step.text}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
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

        {/* Five Ingredients Table */}
        <section className="py-stack-lg">
          <h3 className="mb-stack-md text-center font-headline-lg">
            Anatomy of an Agent
          </h3>
          <div className="no-scrollbar w-full overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-b-2 border-black hover:bg-transparent">
                  <TableHead className="px-4 py-6 font-label-bold uppercase text-foreground">
                    Ingredient
                  </TableHead>
                  <TableHead className="px-4 py-6 font-label-bold uppercase text-foreground">
                    Role
                  </TableHead>
                  <TableHead className="px-4 py-6 font-label-bold uppercase text-foreground">
                    Technical Layer
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ingredients.map((row, i) => (
                  <TableRow
                    key={row.name}
                    className={`hover:bg-transparent ${
                      i < ingredients.length - 1 ? "border-b-2 border-black" : ""
                    }`}
                  >
                    <TableCell className="px-4 py-8 font-bold">
                      {row.name}
                    </TableCell>
                    <TableCell className="px-4 py-8">{row.role}</TableCell>
                    <TableCell className="px-4 py-8 text-secondary-ink">
                      {row.layer}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
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

        {/* Multi-Agent Pipeline */}
        <section className="py-stack-lg">
          <div className="flex flex-col items-center">
            <h3 className="mb-stack-md text-center font-headline-lg">
              The Multi-Agent Pipeline
            </h3>
            <div className="relative mb-12 h-px w-full bg-black">
              <div className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-black" />
              <div className="absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-black" />
            </div>
            <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-4">
              {pipeline.map((p) => (
                <div key={p.n} className="text-center">
                  <div className="mb-4 font-label-bold">{p.n}</div>
                  <p className="text-sm text-secondary-ink">
                    {p.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Agents You Already Use */}
        <section className="py-stack-xl">
          <div className="mb-16 flex flex-col items-center text-center">
            <h3 className="font-headline-lg">Agents You Already Use</h3>
            <p className="mt-6 max-w-2xl font-body-lg text-secondary-ink">
              This isn&apos;t the future — it&apos;s your Tuesday. If you shipped
              code this week, you probably worked with one.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
            {familiarAgents.map((a) => (
              <div
                key={a.title}
                className="line-border flex gap-6 p-10"
              >
                <Icon name={a.icon} className="text-4xl" />
                <div>
                  <h4 className="mb-2 font-label-bold uppercase">{a.title}</h4>
                  <p className="text-secondary-ink">{a.text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-stack-md max-w-3xl text-center font-body-lg text-secondary-ink">
            What connects them?{" "}
            <span className="font-bold text-foreground">
              MCP — the Model Context Protocol
            </span>
            : think USB-C for agents. One standard way to plug tools and data
            into any agent.
          </p>
        </section>

        {/* Junior Teammate Metaphor */}
        <section className="-mx-page bg-black px-page py-stack-lg text-white">
          <div className="mx-auto max-w-4xl py-stack-md text-center">
            <h3 className="mb-8 font-headline-lg">
              The Junior Teammate Metaphor
            </h3>
            <p className="font-body-lg leading-relaxed text-white/80">
              Treat an agent like an exceptionally fast, infinite-memory junior
              teammate. They are capable of following complex instructions and
              using tools, but they require clear boundaries, specific
              objectives, and occasional oversight to ensure they don&apos;t
              wander off track. They are not magic; they are advanced
              deterministic software wrapped in probabilistic intelligence.
            </p>
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
