import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../Context/DataContext'

export default function Card(props) {
  const {theme}=useContext(DataContext)
  return (
    <Link to={`/${props.link}`}>
        <div className={`card ${theme}`}>
            <img src={props.flag} alt={props.name}/>
            <div className='card-container'>
                <h3>{props.name}</h3>
                <div>
                <p><b>Population:</b>{props.population}</p>
                <p><b>Region:</b>{props.region}</p>
                <p><b>Capital:</b>{props.capital}</p>
                </div>
            </div>
        </div>
    </Link>
  )
}
