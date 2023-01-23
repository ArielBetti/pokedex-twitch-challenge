import { useCallback, useState } from "react";

// icons
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

// radix: components
import * as Toggle from "@radix-ui/react-toggle";

// ::
const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme'));

  // callbacks
  const onToggle = useCallback(() => {
    theme === 'dark' ? localStorage.theme = 'light' : localStorage.theme = 'dark'
    document.documentElement.classList.toggle('dark')
    setTheme(localStorage.getItem('theme'));
  }, [localStorage.theme]);

  return (
    <Toggle.Root
      aria-label="Toggle theme"
      className="h-10 transition-colors flex dark:bg-illusion-4 bg-illusion-3 border dark:border-illusion-3 border-illusion-2 hover:bg-illusion-2 dark:hover:bg-illusion-3 justify-center items-center gap-2 w-10 rounded-md p-2 text-white shadow-md"
      onClick={() => onToggle()}
    >
      {theme === "light" ? (
        <MoonIcon className="h-5 w-5" />
      ) : (
        <SunIcon className="h-5 w-5" />
      )}
    </Toggle.Root>
  );
};

export default ThemeToggle;
