import './Card.js'

function Card(props){
  return <div className='card'>
    {props.children}
  </div>
}

export default Card;