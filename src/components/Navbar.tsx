import { SignedIn, UserButton } from "@clerk/nextjs";
import { FlameIcon } from "lucide-react";
import Link from "next/link";
import DashboardBtn from "./DashboardBtn";
import { ModeToggle } from "./ModeToggle";

function Navbar() {
  return (
    <nav className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-2xl mr-6 font-mono hover:opacity-80 transition-opacity"
        >
          <FlameIcon className="size-6 text-primary" />
          <span className="bg-gradient-to-r from-rose-500 via-pink-400 to-amber-400 bg-clip-text text-transparent font-bold">
            PixyCode
          </span>
        </Link>

        <SignedIn>
          <div className="flex items-center space-x-4 ml-auto">
            <DashboardBtn />
            <ModeToggle />
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
}
export default Navbar;
