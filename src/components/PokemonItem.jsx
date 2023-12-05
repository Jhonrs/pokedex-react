import React from 'react'

export const PokemonItem = () => {
  return (
    <article className="item">

        <span className="item__id">id</span>
        <h3 className="item__name">Nombre</h3>
        <p className="item__type">Principal Type</p>
        <p className="item__type">Secondary Type</p>
        <img className="item__img" src="" alt="" />

    </article>
  )
}
