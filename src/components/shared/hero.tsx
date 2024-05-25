import { BackgroundBeams } from "@/components/aceternity/background-beams";
import { Section } from "@/components/shared/section";
import { HoverBorderGradient } from "@/components/aceternity/hover-border-gradient";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "@radix-ui/react-icons";

export function Hero() {
    return (
        <Section className="h-screen w-full rounded-md relative flex flex-col items-center justify-center antialiased z-20">
            <div className="w-full flex flex-col items-center justify-center mx-auto p-4">
                <HoverBorderGradient>
                    Open to work and freelance
                </HoverBorderGradient>

                <h1 className="relative z-10 text-4xl md:text-5xl xl:text-7xl md:leading-[1.5] xl:leading-[1.5] primary_gradient_text  text-center font-sans font-bold mt-4 md:mt-2 xl:mt-0">
                    Dhananjoy Mahata
                </h1>
                <p></p>
                <p className="text-secondary-foreground/50 text-sm sm:text-base max-w-lg mx-auto my-2 text-center relative ">
                    Hi, I'm Dhananjoy Mahata, a passionate third-year college
                    student specializing in web development. I'm proficient in
                    React.js, Next.js, Node.js (Express.js) and MongoDB, and I
                    can build production-ready web applications. I'm eager to
                    expand my skills and contribute to real-world projects
                    through internships or freelance work. Let's connect!
                </p>
                <Button
                    variant={"hero"}
                    className="shadow-2xl transition-all duration-300 ease-in-out"
                >
                    <DownloadIcon className="mr-1" /> Download Resume
                </Button>
            </div>
            <BackgroundBeams className="-z-10" />
        </Section>
    );
}
