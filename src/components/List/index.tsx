
// types
import type { TListProps } from './types';

// components
import { PokeCard } from '..';

// ::
const List = ({ list }: TListProps) => {
  if (!list) return null;

  return (
    <div className='pattern-cross pattern-illusion-4 pattern-bg-illusion-5 pattern-opacity-100 pattern-size-6 flex md:flex-row flex-col flex-wrap gap-2 items-start justify-center bg-illusion-5 border border-illusion-3 rounded-md shadow-sm p-10'>
      {list.pages?.map((page) => page.results.map((pokemon) => (
        <PokeCard url={pokemon.url} key={pokemon.url} />
      )))}
    </div>

  )
}

export default List;
