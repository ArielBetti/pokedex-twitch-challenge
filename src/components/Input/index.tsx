import { useId } from "react";

// types
import type { TInput } from "./types";

// ::
const Input = ({ label, className, ...rest }: TInput) => {
  const inputId = useId();

  return (
    <div
      className={`${className} flex flex-col justify-start items-start w-full gap-2`}
    >
      {label && (
        <label className="" htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        className="text-white transition-colors w-full p-2 outline-none focus:bg-black border dark:border-illusion-3 border-illusion-2 dark:bg-illusion-5 bg-illusion-3 placeholder:text-zinc-300 rounded-md shadow-md"
        {...rest}
        id={inputId}
        name={inputId}
      />
    </div>
  );
};

export default Input;
