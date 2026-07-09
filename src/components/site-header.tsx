import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Architecture", active: true },
  { label: "Agent Types", active: false },
  { label: "Docs", active: false },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-between border-b-2 border-black bg-surface px-page py-6">
      <div className="font-headline-lg tracking-tighter">Brownbag</div>
      {/* <nav className="hidden gap-8 md:flex">
        {navItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={
              item.active
                ? "cursor-pointer border-b-2 border-black pb-1 font-label-bold transition-colors duration-200 active:scale-95"
                : "cursor-pointer px-2 py-1 font-label-bold text-secondary-ink transition-colors duration-200 hover:bg-black hover:text-white active:scale-95"
            }
          >
            {item.label}
          </a>
        ))}
      </nav>
      <Button
        variant="outline"
        className="line-border inverted-hover rounded-none px-6 py-2 font-label-bold uppercase transition-all active:scale-95"
      >
        Get Started
      </Button> */}
    </header>
  );
}
