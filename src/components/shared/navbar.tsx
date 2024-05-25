"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    GITHUB_PROFILE_LINK,
    LINKEDIN_PROFILE_LINK,
    TWITTER_PROFILE_LINK,
} from "@/constants";

import {
    GitHubLogoIcon,
    LinkedInLogoIcon,
    TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export const Navbar = () => {
    const [show, setShow] = useState("translate-y-0");
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (window.scrollY > 80) {
            if (window.scrollY > lastScrollY) {
                setShow("-translate-y-[80px]");
            } else {
                setShow("shadow-sm");
            }
        } else {
            setShow("translate-y-0");
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);
    return (
        <header
            className={cn(
                "h-20 absolute top-0 w-full flex items-center justify-between leading-10 py-3 px-4 sm:px-10 md:px-20 xl:px-40 z-50 transition-all ease-in-out duration-200",
                show
            )}
        >
            <Link
                href={"/"}
                className="text-3xl font-bold tracking-wide flex items-center"
            >
                <Image src={"/logo.svg"} width={60} height={60} alt="logo" />
                <h1 className="primary_gradient_text">Portfolio</h1>
            </Link>

            <div className={`hidden lg:flex items-center justify-center gap-3`}>
                <Link
                    href={GITHUB_PROFILE_LINK}
                    className="flex items-center justify-center"
                >
                    <Button size={"icon"} variant="outline">
                        <GitHubLogoIcon height={20} width={20} />
                    </Button>
                </Link>
                <Link
                    href={TWITTER_PROFILE_LINK}
                    className="flex items-center justify-center"
                >
                    <Button size={"icon"} variant="outline">
                        <TwitterLogoIcon height={20} width={20} />
                    </Button>
                </Link>
                <Link
                    href={LINKEDIN_PROFILE_LINK}
                    className="flex items-center justify-center"
                >
                    <Button size={"icon"} variant="outline">
                        <LinkedInLogoIcon height={20} width={20} />
                    </Button>
                </Link>
            </div>
        </header>
    );
};
