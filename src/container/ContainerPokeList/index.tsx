// components
import { Button, InlineLoading, List, } from "../../components";

// react-query: hooks
import { useGetPokemonListQuery } from "../../queries"

// ::
const ContainerPokeList = () => {
  // queries
  const {
    data: list,
    hasNextPage,
    isError,
    isFetching: listLoading,
    fetchNextPage,
    refetch,
  } = useGetPokemonListQuery();

  return (
    <div className="flex flex-col gap-5">
      <List isError={isError} list={list} />
      {isError && (
        <div className="animate-rightSlide">
          <p className="text-red-500">Ops! Ocorreu um erro, você pode tentar novamente se quiser!</p>
        </div>
      )}
      <div className="flex gap-2 items-center">
        {!!list && (
          <Button disabled={listLoading || !hasNextPage} onClick={() => fetchNextPage()}>Carregar mais</Button>
        )}
        {isError && (
          <Button disabled={listLoading} onClick={() => hasNextPage ? fetchNextPage() : refetch()}>Tentar novamente</Button>
        )}
        <InlineLoading isLoading={listLoading} text="Carregando Pokémons" />
      </div>
    </div>
  )
}

export default ContainerPokeList
