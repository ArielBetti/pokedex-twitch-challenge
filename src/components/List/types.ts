import { InfiniteData } from "@tanstack/react-query"
import { TPokemonListEndpoint, TPokemonListEndpointResult } from "../../interfaces"

export type TListProps = {
  list: InfiniteData<TPokemonListEndpoint> | undefined;
}