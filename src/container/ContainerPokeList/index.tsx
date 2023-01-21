// components
import { Button, InlineLoading, List,  } from "../../components";

// react-query: hooks
import { useGetPokemonListQuery } from "../../queries"

// ::
const ContainerPokeList = () => {
  // queries
  const {
    data: list,
    hasNextPage,
    isError: listError,
    isFetching: listLoading,
    fetchNextPage,
  } = useGetPokemonListQuery();

  return (
    <div className="flex flex-col gap-5">
      <List list={list} />
      <div className="flex gap-2 items-center">
        <Button disabled={listLoading || !hasNextPage} onClick={() => fetchNextPage()}>Carregar mais</Button>
        <InlineLoading isLoading={listLoading} text="Carregando Pokémons" />
      </div>
    </div>
  )
}

export default ContainerPokeList
