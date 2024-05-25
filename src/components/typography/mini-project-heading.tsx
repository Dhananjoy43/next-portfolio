import React from "react";
import { cn } from "@/lib/utils";

export const MiniProjectHeading = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <h3
            className={cn(
                "text-3xl md:text-2xl font-semibold text-center leading-8",
                className
            )}
        >
            {children}
        </h3>
    );
};
