// api: requesters
import { requester } from "../api/requester";

// end-poins
import { ENDPOINTS } from "../endpoints";

// types
import type { TPokemonListEndpoint } from "../interfaces";

export const getPokemonList = async (offSet: string): Promise<TPokemonListEndpoint> => {
  const { data } = await requester()
    .get<TPokemonListEndpoint>(offSet || `${ENDPOINTS.listOfPokemons}`);

  return data;
};
