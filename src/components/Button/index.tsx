import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";

// types
import type { TButton } from "./types";

// ::
const Button = forwardRef<HTMLButtonElement, TButton>(
  ({ children, asChild = false, className, ...rest }, ref) => {
    const Component = asChild ? Slot : "button";
    return (
      <Component
        {...rest}
        ref={ref}
        className={`${className} flex cursor-pointer items-center justify-center gap-1 rounded-md border-2 border-green-400 bg-green-500 hover:bg-green-600 p-2 text-white shadow-md transition-colors`}
      >
        {children}
      </Component>
    );
  }
);

Button.displayName = 'Button';

export default Button;
