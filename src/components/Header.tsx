import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/sd_army_logo_placeholder.png"
            alt="SD Army Logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="font-bold text-lg text-foreground">SD Army</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="/mindmap" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            AI Tools Map
          </Link>
          <Link href="/demo" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Demo
          </Link>
          <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

