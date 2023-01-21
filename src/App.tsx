import { useLayoutEffect } from "react";

// components
import { Input, ThemeToggle } from "./components";

// containers
import { ContainerPokeList } from "./container";

// ::
const App = () => {
  useLayoutEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') document.documentElement.classList.remove('dark')
  }, [])

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-4xl"><span className="text-illusion-1">#</span> Desafio fron-end</h1>
        <h2 className="font-bold text-2xl">
        <span className="text-illusion-1">##</span> Desafio Front end: Pokédex
        </h2>
        <div>
          <p>
            Crie uma página para listar pokémons
          </p>
          <p className="font-semibold text-illusion-1">
            Nível:  Juniors, Pleno e Sênior
          </p>
          <p>
            O que define seu nível nesse projeto é a qualidade de código e decisões tomadas na arquitetura e estrutura do projeto.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 w-full">
        <Input placeholder="Procure nome ou ID" className="max-w-xs" />
        <ThemeToggle />
      </div>
      <ContainerPokeList />
    </div>
  );
}

export default App
