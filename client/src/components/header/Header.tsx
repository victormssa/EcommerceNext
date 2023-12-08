"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/drone_gaijin.png";
import { cn } from "@/lib/utils";
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
  return (
    <header className="flex align-middle items-center justify-around w-full border-b p-2">
      <div className="flex flex-col items-center justify-center">
        
          <h1 className="font-bold text-3xl text-zinc-900 ml-2">
          Drone Gaijin
          </h1>
      
        <span className="text-xs font-normal text-gray-400 self-end ml-2">
            Photography and Videography
          </span>
      </div>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger >Photos</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-4 h-auto">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-20 w-full select-none flex-col rounded-md bg-gradient-to-b from-muted/50 to-muted p-2 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 text-lg font-medium">New Photos</div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quae ducimus omnis, voluptatum eius molestias corrupti
                        odit? Laborum dolore expedita.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Categories">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                  autem nam quae.
                </ListItem>
                <ListItem href="/docs/installation" title="Promotional">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                  autem nam quae.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Vectors">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                  autem nam quae.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger >Videos</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-4 h-auto">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-20 w-full select-none flex-col rounded-md bg-gradient-to-b from-muted/50 to-muted p-2 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 text-lg font-medium">New Videos</div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quae ducimus omnis, voluptatum eius molestias corrupti
                        odit? Laborum dolore expedita.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Categories">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                  autem nam quae.
                </ListItem>
                <ListItem href="/docs/installation" title="Promotional">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                  autem nam quae.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {aboutUsSections.map((aboutUsSections) => (
                  <ListItem
                    key={aboutUsSections.title}
                    title={aboutUsSections.title}
                    href={aboutUsSections.href}
                  >
                    {aboutUsSections.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex gap-1 align-middle items-center">
      
      <Link href={'/auth'} className="flex mr-4 gap-[0.1rem] align-middle justify-center items-center font-medium text-sm">Eng<TiWorld size={"1.8rem"}/></Link>
        <Link href={'/auth'} className="text-2xl mr-4"><FaShoppingCart /></Link>
        <Link href={'/auth'} className="font-normal text-sm bg-zinc-800 text-white rounded-xl px-4 py-2">Sign-In</Link>
        <Link href={'/auth'} className="font-normal text-sm bg-zinc-800 text-white rounded-xl px-4 py-2">Join Now!</Link>
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
