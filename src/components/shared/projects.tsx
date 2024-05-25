import React from "react";
import { Section } from "./section";
import { Heading } from "../typography/heading";
import { ProjectCard } from "./project-card";

export const Projects = () => {
    return (
        <Section className="mb-6 mt-16">
            <Heading className="">Projects</Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-center gap-4 mt-8">
                <ProjectCard
                    coverPhoto="/images/weather-app.jpg"
                    title="Weather App"
                    description="A simple weather app built using the OpenWeatherMap API and ReactJS."
                    features={[
                        "Built with ReactJS",
                        "Uses Redux for state management",
                        "Fetches data asynchronously",
                    ]}
                    technologies={[
                        "React.js",
                        "JavaScript",
                        "Tailwind-css",
                        "Express.js",
                    ]}
                    liveDemo="https://weather-app-julianmr.vercel.app/"
                    sourceCode="https://github.com/JulianMR/weather-app"
                />
                <ProjectCard
                    coverPhoto="/images/weather-app.jpg"
                    title="PlayTube"
                    description="An YouTube clone app made with Next.js, Express.js and MongoDB."
                    features={[
                        "Built with ReactJS",
                        "Uses Redux for state management",
                        "Fetches data asynchronously",
                    ]}
                    technologies={[
                        "React.js",
                        "JavaScript",
                        "Tailwind-css",
                        "Express.js",
                    ]}
                    liveDemo="https://weather-app-julianmr.vercel.app/"
                    sourceCode="https://github.com/JulianMR/weather-app"
                />
                <ProjectCard
                    coverPhoto="/images/weather-app.jpg"
                    title="PlayTube"
                    description="An YouTube clone app made with Next.js, Express.js and MongoDB."
                    features={[
                        "Built with ReactJS",
                        "Uses Redux for state management",
                        "Fetches data asynchronously",
                    ]}
                    technologies={[
                        "React.js",
                        "JavaScript",
                        "Tailwind-css",
                        "Express.js",
                    ]}
                    liveDemo="https://weather-app-julianmr.vercel.app/"
                    sourceCode="https://github.com/JulianMR/weather-app"
                />
                <ProjectCard
                    coverPhoto="/images/weather-app.jpg"
                    title="PlayTube"
                    description="An YouTube clone app made with Next.js, Express.js and MongoDB."
                    features={[
                        "Built with ReactJS",
                        "Uses Redux for state management",
                        "Fetches data asynchronously",
                    ]}
                    technologies={[
                        "React.js",
                        "JavaScript",
                        "Tailwind-css",
                        "Express.js",
                    ]}
                    liveDemo="https://weather-app-julianmr.vercel.app/"
                    sourceCode="https://github.com/JulianMR/weather-app"
                />
            </div>
        </Section>
    );
};
