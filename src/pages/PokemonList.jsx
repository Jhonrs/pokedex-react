import React from "react";
import { PokemonItem } from "../components/PokemonItem";

export const PokemonList = () => {
    return (
            <section>
                <h1>PokemonList</h1>

                <ul>
                    <PokemonItem />
                    <PokemonItem />
                    <PokemonItem />
                    <PokemonItem />
                    <PokemonItem />
                    <PokemonItem />
                    <PokemonItem />
                </ul>
            </section>
    );
};
