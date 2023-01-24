import { isAxiosError } from "axios";

// pokemon types
import pokemonType from './pokemonTypes';

// icons
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

// react-query: hooks
import { useGetPokemonQuery } from "../../queries"

// components
import { Button, Chart, Modal } from "..";

// types
import type { TPokeCardProps } from "./types"


// ::
const PokeCard = ({ url }: TPokeCardProps) => {
  const {
    data,
    isError,
    error,
    isFetching,
    refetch,
  } = useGetPokemonQuery(url);

  if (isAxiosError(error)) {
    if (error.response?.status === 404) {
      return (
        <div className="min-h-24 flex-col text-white motion-safe:animate-fadeIn transition-colors dark:bg-illusion-4 bg-illusion-5 border dark:border-illusion-3 border-illusion-2 rounded-sm md:max-w-xs flex items-center justify-start gap-3 w-full p-4 shadow-sm dark:hover:bg-illusion-3 hover:bg-illusion-4">
          <div className="flex gap-2 items-center">
            <ExclamationCircleIcon className="h-6 w-6" />
            <h2 className="text-lg">
              Pokémon não encontrado.
            </h2>
          </div>
        </div >
      )
    }

    if (isError) {
      return (
        <div className="min-h-24 flex-col text-white motion-safe:animate-fadeIn transition-colors dark:bg-illusion-4 bg-illusion-5 border dark:border-illusion-3 border-illusion-2 rounded-sm md:max-w-xs flex items-center justify-start gap-3 w-full p-4 shadow-sm dark:hover:bg-illusion-3 hover:bg-illusion-4">
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
  }

  if (!isFetching && !data?.id) return null;

  return (
    <div className="h-24 flex items-center text-white motion-safe:animate-fadeIn transition-colors dark:bg-illusion-4 bg-illusion-5 border dark:border-illusion-3 border-illusion-2 rounded-sm md:max-w-xs justify-start gap-3 w-full shadow-sm dark:hover:bg-illusion-3 hover:bg-illusion-4">
      {data?.id && !isFetching ? (
        <Modal
          title={`${data?.name}`}
          modalTrigger={
            <button className="w-full flex items-center justify-start gap-2 p-4">
              <img
                loading="lazy"
                alt={`Imagem do pokémon ${data?.name}`}
                src={data?.sprites?.versions?.["generation-v"]?.["black-white"]?.animated.front_default || data?.sprites?.other?.["official-artwork"]?.front_default}
                className="w-16 h-16" />
              <div className="flex flex-col flex-wrap items-start justify-start">
                <h2 className="text-lg font-semibold capitalize">
                  {data?.name}
                </h2>
                <p className="text-xs text-green-400">
                  EXP: {data?.base_experience}
                </p>
              </div>
            </button>
          }>
          <div className="flex flex-col items-start justify-start">
            <div className="w-full min-h-[400px] flex flex-wrap gap-5 items-center justify-center">
              <div className="flex items-center justify-center flex-col gap-5">
                <img loading="lazy" className="h-52 w-52" src={data?.sprites?.other?.home?.front_default || data?.sprites?.other?.["official-artwork"]?.front_default} alt={`Pokémon ${data?.name}`} />
                <div className='flex gap-2 flex-wrap'>
                  {data?.types?.map((type, index) => (
                    <div key={`${type.type.name}-${index}`} className="p-2 rounded-md shadow-lg font-semibold" style={{ backgroundColor: `${pokemonType?.[type?.type.name]}` }}>
                      {type?.type.name}
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:h-72 md:w-72 h-60 w-60">
                <Chart
                  data={data?.stats?.map((item) => (
                    {
                      name: item.stat?.name,
                      stat: item?.base_stat,
                    }
                  ))}
                />
              </div>
            </div>
          </div>
        </Modal>
      ) : (
        <div className="animate-pulse flex space-x-4 items-center justify-center p-4">
          <div className="rounded-full bg-illusion-2 h-10 w-10"></div>
          <div className="flex-1 items-center w-full">
            <div className="h-3 w-40 bg-illusion-2 rounded"></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PokeCard