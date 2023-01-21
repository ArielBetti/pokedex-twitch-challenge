import { useInfiniteQuery } from '@tanstack/react-query'

// end-points
import { ENDPOINTS } from '../endpoints'

// services
import { getPokemonList } from '../services/getPokemonList'

// ::
export const useGetPokemonListQuery = () => {
  return useInfiniteQuery({
    queryKey: ['list', ENDPOINTS.listOfPokemons],
    queryFn: ({ pageParam }) => getPokemonList(pageParam),
    getPreviousPageParam: (firstPage) => firstPage.next ?? undefined,
    getNextPageParam: (lastPage) => lastPage.next ?? undefined,
    refetchOnWindowFocus: false,
  })
}
