import {api} from "../api/api";

const {makeAutoObservable} = require("mobx");

class PokemonApp {

  pokemons = []
  selectedPoke = ''
  nextPage = ''
  previousPage = ''
  totalCount = 0
  pageLimit = 10
  pageOffset = 0


  constructor() {
    makeAutoObservable(this, {}, {deep: true, autoBind: true})
  }


  setPoke = (payload) => {
    this.pokemons = [...payload]
  }
  setSelectedPoke = (payload) => {
    this.selectedPoke = payload
  }
  setNextPage = (payload) => {
    this.nextPage = payload
  }
  setPreviousPage = (payload) => {
    this.previousPage = payload
  }
  setPageLimit = (payload) => {
    this.pageLimit = payload
    this.getPoke(this.pageOffset, this.pageLimit)
  }


  setOffset = (payload) => {
    this.pageOffset = payload
    this.getPoke(this.pageOffset, this.pageLimit)
  }


  getPoke = async () => {
    try {
      let res = await api.getPokemons(this.pageOffset, this.pageLimit)
      this.setPoke(res.results)
      this.setNextPage(res.next)
      this.setPreviousPage(res.previous)
      this.totalCount = res.count
    } catch (e) {
      console.log(e)
    }
  }

  getNextPage = async () => {
    try {
      let res = await api.nextPage(this.nextPage)
      this.setPoke(res.results)
      this.setNextPage(res.next)
      this.setPreviousPage(res.previous)
    } catch (e) {
      console.log(e)
    }
  }
  getPreviousPage = async () => {
    try {
      let res = await api.previousPage(this.previousPage)
      this.setPoke(res.results)
      this.setNextPage(res.next)
      this.setPreviousPage(res.previous)
    } catch (e) {
      console.log(e)
    }
  }

  getStats = async (url) => {
    try {
      let res = await api.getPokemonStats(url)
      this.setSelectedPoke(res)
      console.log(res)
    } catch (e) {
      console.log(e)
    }
  }


}


export default PokemonApp