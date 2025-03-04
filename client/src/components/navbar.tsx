import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center">
        <Link href="/">
          <a className="mr-8 flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">Local Harvest Gardens</span>
          </a>
        </Link>
        <div className="flex items-center space-x-6 text-sm font-medium">
          <Link href="/contractors">
            <a className="transition-colors hover:text-primary">Find Contractors</a>
          </Link>
          <Link href="/gallery">
            <a className="transition-colors hover:text-primary">Project Gallery</a>
          </Link>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Link href="/quote">
            <Button>Get a Quote</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
