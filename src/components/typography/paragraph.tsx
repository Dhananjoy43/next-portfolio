import { cn } from "@/lib/utils";

export const Paragraph = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return <p className={cn("text-base text-center", className)}>{children}</p>;
};
