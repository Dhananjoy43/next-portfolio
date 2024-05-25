import { Section } from "./section";
import { Heading } from "../typography/heading";
import Image from "next/image";
import { Paragraph } from "../typography/paragraph";

import { aboutInfo } from "@/data/about-info";

export const About = () => {
    const { bio, education } = aboutInfo;
    return (
        <Section className="mb-6 mt-0">
            <Heading className="mb-0">About me</Heading>
            <div className="w-full flex flex-col xl:flex-row items-center justify-center gap-8">
                <Image
                    src={"/images/about.svg"}
                    height={500}
                    width={500}
                    alt="About-image"
                />
                <div className="xl:w-1/2 flex flex-col items-start">
                    <div className="">
                        <Paragraph className="text-start text-muted-foreground">
                            {bio}
                        </Paragraph>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <h4 className="text-2xl font-semibold mt-4">
                            Education:
                        </h4>
                        <div className="w-full flex flex-col items-start">
                            <div className="w-full flex items-center justify-between">
                                <h5 className="font-medium">
                                    {education.graduation.course}
                                </h5>
                                <Paragraph className="text-muted-foreground hidden md:block">
                                    {education.graduation.duration}
                                </Paragraph>
                            </div>
                            <Paragraph className="text-purple-600">
                                {education.graduation.institution},{" "}
                                {education.graduation.place}
                            </Paragraph>
                            <Paragraph className="text-muted-foreground md:hidden">
                                {education.graduation.duration}
                            </Paragraph>
                        </div>
                        <div className="w-full flex flex-col items-start">
                            <div className="w-full flex items-center justify-between">
                                <h5 className="font-medium">
                                    {education.higherSecondary.course}
                                </h5>
                                <Paragraph className="text-muted-foreground hidden md:block">
                                    {education.higherSecondary.duration}
                                </Paragraph>
                            </div>
                            <Paragraph className="text-purple-600">
                                {education.higherSecondary.institution},{" "}
                                {education.higherSecondary.place}
                            </Paragraph>
                            <Paragraph className="text-muted-foreground md:hidden">
                                {education.higherSecondary.duration}
                            </Paragraph>
                        </div>
                        <div className="w-full flex flex-col items-start">
                            <div className="w-full flex items-center justify-between">
                                <h5 className="font-medium">
                                    {education.secondary.course}
                                </h5>
                                <Paragraph className="text-muted-foreground hidden md:block">
                                    {education.secondary.duration}
                                </Paragraph>
                            </div>
                            <Paragraph className="text-purple-600">
                                {education.secondary.institution},{" "}
                                {education.secondary.place}
                            </Paragraph>
                            <Paragraph className="text-muted-foreground md:hidden">
                                {education.secondary.duration}
                            </Paragraph>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};
