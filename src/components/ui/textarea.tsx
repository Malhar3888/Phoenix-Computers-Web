// src/components/ui/textarea.tsx - CORRECTED
import * as React from "react"; // Make sure you have 'import * as React from "react";' 
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(
  // Line 6: START of the arrow function definition
  ({ className, ...props }, ref) => { 
    return ( 
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  } // Line 15/16: END of the arrow function definition and forwardRef call
);

Textarea.displayName = "Textarea";

export { Textarea };