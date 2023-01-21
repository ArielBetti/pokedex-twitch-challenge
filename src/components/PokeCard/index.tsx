// icons
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

// react-query: hooks
import { useGetPokemonQuery } from "../../queries"

// components
import { Button } from "..";

// types
import type { TPokeCardProps } from "./types"

// ::
const PokeCard = ({ url }: TPokeCardProps) => {
  const {
    data,
    isError,
    isFetching,
    refetch,
  } = useGetPokemonQuery(url);

  if (isFetching) {
    return (
      <div className="h-24 flex items-center text-white motion-safe:animate-fadeIn transition-colors bg-illusion-4 border border-illusion-3 rounded-sm md:max-w-xs gap-3 w-full p-4 shadow-sm hover:bg-illusion-3">
        <div className="animate-pulse flex space-x-4 items-center justify-center">
          <div className="rounded-full bg-illusion-2 h-10 w-10"></div>
          <div className="flex-1 items-center w-full">
            <div className="h-3 w-40 bg-illusion-2 rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="min-h-24 flex-col text-white motion-safe:animate-fadeIn transition-colors bg-illusion-4 border border-illusion-3 rounded-sm md:max-w-xs flex items-start justify-start gap-3 w-full p-4 shadow-sm hover:bg-illusion-3">
        <div className="flex gap-2 items-center">
          <ExclamationCircleIcon className="h-6 w-6" />
          <h2 className="text-lg">
            Ocorreu um erro
          </h2>
        </div>
        <div>
          <Button onClick={() => refetch()}>
            Tentar novamente
          </Button>
        </div>
      </div >
    );
  }

  return (
    <div className="h-24 text-white motion-safe:animate-fadeIn transition-colors bg-illusion-4 border border-illusion-3 rounded-sm md:max-w-xs flex items-center justify-start gap-3 w-full p-4 shadow-sm hover:bg-illusion-3">
      <img alt={`Imagem do pokémon ${data?.name}`} src={data?.sprites?.versions["generation-v"]["black-white"].animated.front_default || data?.sprites.other["official-artwork"].front_default} className="w-16 h-16" />
      <h2 className="text-lg font-semibold capitalize">
        {data?.name}
      </h2>
      <p className="text-xs text-green-400">
        EXP: {data?.base_experience}
      </p>
    </div>
  )
}

export default PokeCard