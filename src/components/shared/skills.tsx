import { Section } from "./section";
import { Heading } from "@/components/typography/heading";
import { SkillCard } from "./skill-card";

export const Skills = () => {
    return (
        <Section className="my-8 mt-16">
            <Heading className="">Skills</Heading>
            <div className="flex items-center justify-center flex-wrap gap-4 mt-8">
                <SkillCard image="/icons/react-js.svg" name="React.js" />
                <SkillCard image="/icons/mongodb.svg" name="MongoDB" />
                <SkillCard image="/icons/nextauth.png" name="Next-Auth" />
            </div>
        </Section>
    );
};
