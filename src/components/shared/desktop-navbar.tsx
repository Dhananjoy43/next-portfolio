import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { navigationLinks, socialLinks } from "@/data/navigation-menu";

export const DesktopNavbar = ({
  showHideNavbar,
}: {
  showHideNavbar: string;
}) => {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 flex h-20 w-full items-center justify-between px-4 py-3 leading-10 backdrop-blur-md transition-all duration-200 ease-in-out sm:px-10 md:px-20 xl:px-40",
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

      <NavigationMenu className="rounded-full border p-1">
        <NavigationMenuList>
          {navigationLinks.map((navigationLink) => (
            <NavigationMenuItem key={navigationLink.href}>
              <Link
                className={cn(navigationMenuTriggerStyle(), "rounded-full")}
                href={navigationLink.href}
              >
                {navigationLink.label}
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className={`flex items-center justify-center gap-3`}>
        {socialLinks.map((socialLink) => (
          <Link
            key={socialLink.url}
            href={socialLink.url}
            target="_blank"
            className="flex items-center justify-center"
          >
            <Button size={"icon"} variant="outline">
              <socialLink.icon height={20} width={20} />
            </Button>
          </Link>
        ))}
      </div>
    </header>
  );
};
