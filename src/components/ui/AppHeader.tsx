"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Logo from "../logo";

const routes = [
  {
    label: "Dashboard",
    path: "/app/dashboard",
  },
  {
    label: "Account",
    path: "/app/account",
  },
];

export default function AppHeader() {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center border-b border-gray-200">
      <Logo />
      <nav>
        <ul className="flex gap-4 text-xs">
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                href={route.path}
                className={cn(
                  "text-white/70 bg-black/10 rounded-sm px-2 py-1 hover:text-white focus:text-white transition",
                  pathname === route.path && "text-white bg-black/20"
                )}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
