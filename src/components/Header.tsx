import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white border-b border-sd-army-gray-light sticky top-0 z-10 shadow-sm">
      <div className="container mx-auto flex justify-between items-center h-20 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10 rounded-full overflow-hidden bg-gradient-to-br from-sd-army-green to-sd-army-orange flex items-center justify-center">
            <span className="text-white font-bold text-lg">SD</span>
          </div>
          <span className="font-extrabold text-xl text-sd-army-gray-dark">SD<span className="text-sd-army-green">Army</span></span>
        </Link>
        
        <nav className="hidden md:flex gap-1">
          <Link 
            href="/mindmap" 
            className="px-4 py-2 text-sm font-medium text-sd-army-gray hover:text-sd-army-green hover:bg-sd-army-green-light rounded-md transition-colors"
          >
            AI Tools Map
          </Link>
          <Link 
            href="/blog" 
            className="px-4 py-2 text-sm font-medium text-sd-army-gray hover:text-sd-army-orange hover:bg-sd-army-orange-light rounded-md transition-colors"
          >
            Blog
          </Link>
          <Link 
            href="/demo" 
            className="px-4 py-2 text-sm font-medium text-sd-army-gray hover:text-sd-army-blue hover:bg-sd-army-blue-light rounded-md transition-colors"
          >
            Demo
          </Link>
          <Link 
            href="/about" 
            className="px-4 py-2 text-sm font-medium text-sd-army-gray hover:text-sd-army-green hover:bg-sd-army-green-light rounded-md transition-colors"
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className="ml-2 px-4 py-2 text-sm font-medium text-white bg-sd-army-orange hover:bg-opacity-90 rounded-md transition-colors shadow-sm"
          >
            Contact Us
          </Link>
        </nav>
        
        {/* Mobile menu button - would implement mobile menu functionality in a real site */}
        <button className="md:hidden p-2 rounded-md text-sd-army-gray-dark hover:bg-sd-army-gray-light transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
