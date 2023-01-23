import { useLayoutEffect, useState } from "react";

// components
import { Input, PokeCard, ThemeToggle } from "./components";

// containers
import { ContainerPokeList } from "./container";
import { ENDPOINTS } from "./endpoints";

// hooks
import useDebounce from "./hooks/useDebounce";

// ::
const App = () => {
  const [searchPokemon, setSearchPokemon] = useState('');
  const debounceSearchPokemon = useDebounce(searchPokemon);

  useLayoutEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') document.documentElement.classList.remove('dark')
  }, [])

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-4xl">
          <span className="text-illusion-2">#</span>
          {' '}
          Desafio <span className="text-illusion-2">fron-end</span></h1>
        <h2 className="font-semibold text-2xl">
          <span className="text-illusion-2">##</span>
          {' '}
          Pokédex
        </h2>
        <div>
          <p>
            Crie uma página para listar pokémons
          </p>
          <p className="font-semibold text-illusion-2">
            Nível: Junior, Pleno e Sênior
          </p>
          <p>
            O que define seu nível nesse projeto é a qualidade de código
            e decisões tomadas na arquitetura e estrutura do projeto.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 w-full pt-7">
        <Input
          onChange={(e) =>
            setSearchPokemon(`${ENDPOINTS.pokemon}${e.target.value}`.toLowerCase())
          }
          placeholder="Procure nome ou ID" className="max-w-xs" />
        <ThemeToggle />
      </div>
      <PokeCard url={debounceSearchPokemon} />
      <ContainerPokeList />
    </div>
  );
}

export default App
