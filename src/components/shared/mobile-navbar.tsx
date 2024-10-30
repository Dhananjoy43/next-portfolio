import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { navigationLinks, socialLinks } from "@/data/navigation-menu";

export function MobileNavbar({ showHideNavbar }: { showHideNavbar: string }) {
  return (
    <Sheet>
      <div
        className={cn(
          "sticky top-0 z-50 flex h-20 w-full items-center justify-between px-4 py-3 leading-10 backdrop-blur-md transition-all duration-200 ease-in-out sm:px-10",
          showHideNavbar,
        )}
      >
        <Link
          href={"/"}
          className="flex items-center text-3xl font-bold tracking-wide"
        >
          <Image src={"/logo.svg"} width={60} height={60} alt="logo" />
          <h1 className="primary_gradient_text">Portfolio</h1>
        </Link>
        <SheetTrigger asChild>
          <Menu />
        </SheetTrigger>
      </div>
      <SheetContent className="flex flex-col justify-between sm:max-w-xs">
        <SheetHeader>
          <SheetTitle>
            <Link
              href={"/"}
              className="flex items-center text-3xl font-bold tracking-wide"
            >
              <Image src={"/logo.svg"} width={60} height={60} alt="logo" />
              <h1 className="primary_gradient_text">Portfolio</h1>
            </Link>
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col items-center justify-center gap-4">
          {navigationLinks.map((navigationLink) => (
            <SheetClose key={navigationLink.href} asChild>
              <Link
                className="w-full rounded-full p-2 text-center text-lg font-semibold"
                href={navigationLink.href}
              >
                {navigationLink.label}
              </Link>
            </SheetClose>
          ))}
        </nav>
        <SheetFooter className="mx-auto flex flex-row gap-3">
          {socialLinks.map((socialLink) => (
            <SheetClose key={socialLink.url} asChild>
              <Link
                href={socialLink.url}
                target="_blank"
                className="flex items-center justify-center"
              >
                <Button size={"icon"} variant="outline">
                  <socialLink.icon height={20} width={20} />
                </Button>
              </Link>
            </SheetClose>
          ))}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
