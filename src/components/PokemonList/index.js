import React from 'react'
import { ListItem, UnorderedList, Link } from "@chakra-ui/react"
function PokemonList({ pokemon, setPokemon }) {
    return (
        <UnorderedList>
            {pokemon.map(p => (
                <ListItem onClick={() => setPokemon(p)} key={p.id}>
                    <Link>
                        {p.name}
                    </Link>
                </ListItem>
            ))}
        </UnorderedList>
    )
}

export default PokemonList
