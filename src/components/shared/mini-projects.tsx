import React from "react";
import { Section } from "./section";
import { Heading } from "../typography/heading";
import { MiniProjectCard } from "./mini-project-card";

export const MiniProjects = () => {
    return (
        <Section className="mt-16 mb-6">
            <Heading className="">Mini Projects</Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 place-items-center gap-4 mt-8">
                <MiniProjectCard
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
                <MiniProjectCard
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
                <MiniProjectCard
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
                <MiniProjectCard
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
                <MiniProjectCard
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
