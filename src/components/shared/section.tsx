import { cn } from "@/lib/utils";

export const Section = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <section className={cn(className, "px-4 sm:px-10 md:px-20 xl:px-40")}>
            {children}
        </section>
    );
};
