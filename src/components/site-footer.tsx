export function SiteFooter() {
  return (
    <footer className="flex w-full flex-col items-center justify-between border-t-2 border-black bg-surface px-page py-stack-lg md:flex-row">
      <div className="mb-8 font-headline-lg md:mb-0">BROWNBAG</div>
      <div className="flex flex-col gap-12 text-center md:flex-row md:text-left">
        <div className="flex items-end">
          <p className="text-secondary-ink">
            © 2026 Brownbag
          </p>
        </div>
      </div>
    </footer>
  );
}
