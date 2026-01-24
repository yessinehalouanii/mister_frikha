export default function Footer() {
  return (
    <footer className="mt-10 border-t bg-white">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-steel-500 flex flex-wrap items-center justify-between gap-3">
        <div>© {new Date().getFullYear()} SIM Group. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="#contact" className="hover:text-steel-900">Contact</a>
          <a href="/catalog.pdf" target="_blank" className="hover:text-steel-900">Catalog</a>
        </div>
      </div>
    </footer>
  );
}
