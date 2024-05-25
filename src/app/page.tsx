import { About } from "@/components/shared/about";
import { Contact } from "@/components/shared/contact";
import { Hero } from "@/components/shared/hero";
import { MiniProjects } from "@/components/shared/mini-projects";
import { Projects } from "@/components/shared/projects";
import { Skills } from "@/components/shared/skills";

export default function Home() {
    return (
        <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <MiniProjects />
            <Contact />
        </main>
    );
}
