"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/imgs/logo_site.png";
import { cn } from "@/lib/utils";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { SiDrone } from "react-icons/si";
import { FaShoppingCart } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { TiWorld } from "react-icons/ti";
const aboutUsSections: { title: string; href: string; description: string }[] = [
  {
    title: "Our Mission",
    href: "/about-us/mission",
    description:
      "Learn about our core mission and the values that guide us in everything we do.",
  },
  {
    title: "Meet the Team",
    href: "/about-us/team",
    description:
      "Get to know the passionate individuals who contribute to our success and innovation.",
  },
  {
    title: "Company History",
    href: "/about-us/history",
    description:
      "Explore the journey that has shaped us, from our humble beginnings to where we are today.",
  },
  {
    title: "Corporate Responsibility",
    href: "/about-us/responsibility",
    description: "Discover how we contribute to the well-being of society and the environment.",
  },
  {
    title: "Partnerships",
    href: "/about-us/partnerships",
    description:
      "Learn about the strategic collaborations that enhance our capabilities and reach.",
  },
  {
    title: "Recognition",
    href: "/about-us/recognition",
    description:
      "See the awards and accolades that acknowledge our commitment to excellence and innovation.",
  },
];

const Header: React.FC = () => {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!isNavbarOpen);
  };
  useEffect(() => {
    // Verificar se o cookie session_info existe
    const sessionInfoCookie = Cookies.get("session_info");

    if (!sessionInfoCookie) {
      // Se não existir, criar o cookie com cc sendo undefined
      const initialSessionInfo = { cc: undefined };
      Cookies.set("session_info", JSON.stringify(initialSessionInfo), {
        expires: 365, // ou qualquer outro período desejado
        secure: true,
        sameSite: "strict",
      });
    }
  }, []);
  return (
    <header className="flex fixed z-10 bg-transparent items-center justify-between w-screen p-2 mb-40">
          <Image src={logo} alt="Drone Gaijin Logo" className="w-56 h-auto ml-4"/>
      <div className="hidden md:hidden lg:flex gap-2 pb-20 pr-4">
      <nav className="flex items-center gap-4">
        <button className="text-white flex items-center">
          Midia <MdArrowDropDown />
        </button>
        <button className="text-white flex items-center">
          Services <MdArrowDropDown />
        </button>
        <button className="text-white flex items-center">
        About Us <MdArrowDropDown />
        </button>
        <button className="text-white flex items-center">
        Contact
        </button>
      </nav>
      
      <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="hidden md:hidden lg:flex ml-20 gap-[0.1rem] align-middle justify-center items-center font-medium text-sm text-white">Eng<TiWorld size={"1.8rem"}/></button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Select your language</AlertDialogTitle>
          <AlertDialogDescription>
          If your language Is not found, await for further updates.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>English (Eng)</AlertDialogAction>
          <AlertDialogAction>Brazilian Portuguese (PT-BR)</AlertDialogAction>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    <button className="hidden md:hidden lg:flex mx-4 gap-[0.1rem] align-middle justify-center items-center font-medium text-sm text-white"><FaShoppingCart size={"1.8rem"}/></button>
    
        <Link href={'/eng/auth'} className="hidden md:hidden lg:flex font-normal text-sm bg-white rounded-xl px-4 py-2">Sign-In</Link>
        
      </div>
      
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;
