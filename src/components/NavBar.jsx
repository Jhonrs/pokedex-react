import { NavLink } from 'react-router-dom';


export const NavBar = () => {
  return (
    <nav className="navBar"> 
        <form action="" >
            <input className="nav-search" type="text"  placeholder=" Search Pokemon, Move, Ability, etc"/>
        </form>

        <ul className="navBar-nav">
            <NavLink to="/pokedex" className="navButton navButton_pokedex">
                Pokedex
            </NavLink>
            <NavLink to="/moves" className="navButton navButton_moves">
                Moves
            </NavLink>
            <NavLink to="/abilities" className="navButton navButton_abilities">
                Abilities
            </NavLink>
            <NavLink to="/items" className="navButton navButton_items">
                Items
            </NavLink>
            <NavLink to="/locations" className="navButton navButton_locations">
                Locations
            </NavLink>
            <NavLink to="/typecharts" className="navButton navButton_typeCharts">
                TypeCharts
            </NavLink>

        </ul>
    </nav>
  )
}
