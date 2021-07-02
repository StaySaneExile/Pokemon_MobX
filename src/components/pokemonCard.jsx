import '../styles/pokemonCard.css'

export const PokemonCard = (props) => {

    const getStats = () => {
        props.getStatsPoke(props.url)
    }

    return (
        <div className="card text-white bg-dark mb-3">
            <h2 className="card-header">{props.name.toUpperCase()}</h2>
            <div className="card-body">
                <p className="card-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Corporis itaque non totam. Error, molestias, provident?
                </p>
            </div>
            <div className='cardFooter'>
                <button type="button" className="btn btn-primary"
                        onClick={getStats}>
                    View stats
                </button>
            </div>
        </div>
    )
}
