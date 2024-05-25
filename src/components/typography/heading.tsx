import { cn } from "@/lib/utils";

export const Heading = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <h1 className={cn("text-5xl text-center font-bold", className)}>
            {children}
        </h1>
    );
};
