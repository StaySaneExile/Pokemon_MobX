import '../styles/slectedPoke.css'
import {Tag} from "./tag";

export const SelectedPoke = ({fullStats}) => {

  const arrType = []
  const arrStats = []


  fullStats.types.forEach(el => {
    arrType.push(el['type'].name)
  })

  fullStats.stats.forEach( obj => {
    let arr = []
    arr.push(obj.stat['name'], obj['base_stat'])
    arrStats.push(arr)
  })

  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1542779283-429940ce8336?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        className="card-img-top" alt="..."/>
      <div className="card-body">
        <h4 className="card-title">{fullStats.name}</h4>
      </div>
      <ul className="list-group list-group">
        {
          arrStats.map( (el,i) => (
          <li key={`${i}_${el[0]}`} className="list-group-item">
            <h5>{el[0]}</h5>
            <h4>{el[1]}</h4>
          </li>
          ))
        }
      </ul>
      <li className="list-group-item">
        <div className="btn-group" role="group" aria-label="Basic mixed styles example">
          {
            arrType.map(type => (<Tag key={`i_${type}`} type={type}/>))
          }
        </div>
      </li>
    </div>
  )
}