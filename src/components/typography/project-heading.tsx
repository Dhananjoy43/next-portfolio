import { cn } from "@/lib/utils";
import React from "react";

export const ProjectHeading = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <h3
            className={cn(
                "text-3xl font-semibold text-center leading-10",
                className
            )}
        >
            {children}
        </h3>
    );
};
