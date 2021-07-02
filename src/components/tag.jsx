export const Tag = (props) => {

    const type = props.type === 'fire'
        ? 'danger'
        :props.type === 'poison' ? 'success'
            :props.type === 'grass' ? 'secondary'
                :'warning text-dark'

    return (
        <span className={`badge bg-${type}`}>{props.type}</span>
    )
}