"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { logoFont } from "@/lib/fonts";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        {/* <Icons.logo className="h-6 w-6" /> */}
        <span
          className={cn(
            "font-bold sm:inline-block text-3xl",
            logoFont.className
          )}
        >
          {siteConfig.logoName}
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        {/* <Link
          href="https://github.com/satyajitghana/tsai-chat-vision"
          className={cn(
            "hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
          )}
        >
          GitHub
        </Link> */}
      </nav>
    </div>
  );
}
