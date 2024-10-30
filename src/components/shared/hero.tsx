import { BackgroundBeams } from "@/components/aceternity/background-beams";
import { Section } from "@/components/shared/section";
import { HoverBorderGradient } from "@/components/aceternity/hover-border-gradient";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "@radix-ui/react-icons";

export function Hero() {
  return (
    <Section className="relative z-20 flex h-screen w-full flex-col items-center justify-center rounded-md antialiased">
      <div className="mx-auto flex w-full flex-col items-center justify-center p-4">
        <HoverBorderGradient>Open to work and freelance</HoverBorderGradient>

        <h1 className="primary_gradient_text relative z-10 mt-4 text-center font-sans text-4xl font-bold md:mt-2 md:text-5xl md:leading-[1.5] xl:mt-0 xl:text-7xl xl:leading-[1.5]">
          Dhananjoy Mahata
        </h1>
        <p></p>
        <p className="relative mx-auto my-2 max-w-lg text-center text-sm text-secondary-foreground/50 sm:text-base">
          Hi, I am Dhananjoy Mahata, a passionate final-year college student
          specializing in web development. I am proficient in React.js, Next.js,
          Node.js (Express.js) and MongoDB, and I can build production-ready web
          applications. I am eager to expand my skills and contribute to
          real-world projects through internships or freelance work. Let&apos;s
          connect!
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
