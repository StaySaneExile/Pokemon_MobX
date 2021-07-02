import React, {useEffect, useState, useMemo} from 'react'
import './App.css';
import {observer} from "mobx-react-lite";
import {inject} from "mobx-react";
import {PokemonCard} from "./components/pokemonCard";
import {SelectedPoke} from "./components/selectedPoke";
import {LimitLoad} from "./components/limitLoad";
import {Pagination} from "./components/pagination";


const App = inject('pokemonApp')(
  observer(({pokemonApp}) => {

      const  {
        pokemons,
        selectedPoke,
        totalCount,
        pageLimit,
      } = {...pokemonApp}


      useEffect(() => {
        pokemonApp.getPoke()
      }, [])

      const getStatsPoke = (url) => {
        pokemonApp.getStats(url)
      }

      const changePageSize = (newLimit) => {
        pokemonApp.setPageLimit(newLimit)
      }
    const changeOffset = (newOffset) => {
      pokemonApp.setOffset(newOffset)
    }

      return (
        <div className="App">

          <LimitLoad changePageSize={changePageSize}/>
          <div className="pokeWindow">
            {
              pokemons &&
              pokemons.map((pokemon, i) => (
                <PokemonCard key={`${i}_${pokemon.url}`}
                             name={pokemon.name}
                             url={pokemon.url}
                             getStatsPoke={getStatsPoke}
                />))
            }
            <div className="selectedPoke">
              {
                selectedPoke
                  ? <SelectedPoke fullStats={selectedPoke}/>
                  : 'Select poke'
              }
            </div>
          </div>
          <Pagination changeOffset={changeOffset}
                      totalCount={totalCount}
                      pageLimit={pageLimit}
                      getNextPage={pokemonApp.getNextPage}
                      getPreviousPage={pokemonApp.getPreviousPage}
          />
        </div>
      );
    }
  ))
export default App;
