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
import { ProjectHeading } from "../typography/project-heading";
import { Paragraph } from "../typography/paragraph";
import { Separator } from "../ui/separator";

export const ProjectCard = ({
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
                <div className="w-full h-[26rem] lg:w-72 flex flex-col justify-center items-center border px-12 md:px-8 py-8 rounded-2xl cursor-pointer">
                    <ProjectHeading>{title}</ProjectHeading>
                    <div className="flex flex-col items-center justify-center gap-2 w-full mt-2">
                        <Image
                            src={coverPhoto}
                            height={250}
                            width={250}
                            alt={title}
                            className="rounded-xl"
                        />
                        <Paragraph className="text-muted-foreground">
                            {description}
                        </Paragraph>
                        <div className="flex justify-between items-center gap-4 mt-2">
                            <Button
                                className="gap-2"
                                size={"sm"}
                                variant={"fill"}
                                asChild
                            >
                                <Link href={sourceCode}>
                                    <GitHubLogoIcon /> Github Link
                                </Link>
                            </Button>
                            <Button
                                className="gap-2"
                                size={"sm"}
                                variant={"fill"}
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
                    <DialogDescription>{description}</DialogDescription>
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
                <DialogFooter className="w-full flex flex-row items-center justify-between">
                    <div className="flex justify-between items-center gap-4 mr-auto">
                        <Button
                            className="gap-2"
                            size={"sm"}
                            variant={"hero"}
                            asChild
                        >
                            <Link href={sourceCode}>
                                <GitHubLogoIcon /> Github Link
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
