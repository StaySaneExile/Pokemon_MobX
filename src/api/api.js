import axios from 'axios'

export const api = {
    getPokemons(offset, limit ) {
        return axios
            .get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
            .then((res) => {
                return res.data
            })
    },
    getPokemonStats(url) {
        return axios.get(url).then((res) => {
            return res.data
        })
    },
    nextPage(url) {
        return axios
            .get(url)
            .then((res) => {
                return res.data
            })
    },
    previousPage(url) {
        return axios
            .get(url)
            .then((res) => {
                return res.data
            })
    }
}
