import { memo } from "react";

// types
import type { TListProps } from "./types";

// components
import { PokeCard } from "..";

// ::
const List = ({ list }: TListProps) => {
  if (!list) return null;

  return (
    <div className="transition-colors bg-fixed animate-infinityParallax pattern-cross pattern-illusion-2 dark:pattern-illusion-4 dark:pattern-bg-illusion-5 pattern-bg-illusion-3 pattern-opacity-100 pattern-size-6 flex md:flex-row flex-col flex-wrap gap-2 items-start justify-center bg-illusion-5 border border-illusion-3 rounded-md shadow-sm p-10">
      {list.pages?.map((page) =>
        page.results.map((pokemon) => (
          <PokeCard url={pokemon.url} key={pokemon.url} />
        ))
      )}
    </div>
  );
};

export default memo(List);
