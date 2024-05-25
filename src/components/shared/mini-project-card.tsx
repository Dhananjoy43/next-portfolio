import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog";
import { GitHubLogoIcon, Link1Icon } from "@radix-ui/react-icons";
import { Paragraph } from "../typography/paragraph";
import { MiniProjectHeading } from "../typography/mini-project-heading";
import { Separator } from "../ui/separator";

export const MiniProjectCard = ({
    coverPhoto,
    title,
    description,
    features,
    technologies,
    liveDemo,
    sourceCode,
}: {
    coverPhoto: string;
    title: string;
    description?: string | JSX.Element;
    features?: string[];
    technologies?: string[];
    liveDemo: string;
    sourceCode: string;
}) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className=" w-full lg:w-60 xl:w-56 h-[22rem] flex flex-col justify-center items-center border px-12 md:px-6 py-8 rounded-2xl cursor-pointer">
                    <MiniProjectHeading>{title}</MiniProjectHeading>
                    <div className="flex flex-col items-center justify-center gap-2 w-full mt-2">
                        <Image
                            src={coverPhoto}
                            height={250}
                            width={250}
                            alt={title}
                            className="rounded-xl"
                        />
                        <Paragraph className="md:text-sm text-muted-foreground">
                            {description}
                        </Paragraph>
                        <div className="flex justify-between items-center gap-2 mt-4">
                            <Button
                                className="gap-2"
                                size={"xs"}
                                variant={"hero"}
                                asChild
                            >
                                <Link href={sourceCode}>
                                    <GitHubLogoIcon /> Github
                                </Link>
                            </Button>
                            <Button
                                className="gap-2"
                                size={"xs"}
                                variant={"hero"}
                                asChild
                            >
                                <Link href={liveDemo}>
                                    <Link1Icon /> Live Demo
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent className="max-w-sm sm:max-w-lg p-8">
                <DialogHeader>
                    <DialogTitle className="text-3xl text-purple-600">
                        {title}
                    </DialogTitle>
                    <DialogDescription className="text-muted-foreground">
                        {description}
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col justify-center items-start">
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        {technologies?.map((tectnology) => (
                            <Button
                                key={tectnology}
                                variant={"outline"}
                                size={"sm"}
                            >
                                {tectnology}
                            </Button>
                        ))}
                    </div>
                    <Separator className="my-4" />
                    <ul className="list-item px-4">
                        <h5 className="text-2xl font-semibold leading-10">
                            Features:
                        </h5>
                        {features?.map((feature) => (
                            <li
                                key={feature}
                                className="text-muted-foreground list-disc"
                            >
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
                <DialogFooter className="flex flex-row items-center justify-between">
                    <div className="flex justify-between items-center gap-2 mr-auto">
                        <Button
                            className="gap-2"
                            size={"sm"}
                            variant={"hero"}
                            asChild
                        >
                            <Link href={sourceCode}>
                                <GitHubLogoIcon /> Github
                            </Link>
                        </Button>
                        <Button
                            className="gap-2"
                            size={"sm"}
                            variant={"hero"}
                            asChild
                        >
                            <Link href={liveDemo}>
                                <Link1Icon /> Live Demo
                            </Link>
                        </Button>
                    </div>
                    <DialogClose asChild>
                        <Button variant={"outline"}>Close</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
