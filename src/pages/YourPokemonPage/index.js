import React, { useState } from 'react'
import { Container, Stack, Center, Heading, useToast, Flex, Spacer, Button, Box, } from '@chakra-ui/react';
import PokemonList from '../../components/PokemonList';

import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PokemonDetail from '../../components/PokemonDetail';
import { RemoveFromTeam } from '../../appRedux/actions';
const YourPokemonPage = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const toast = useToast()
    const { myPokemonLists, } = useSelector(({ cart }) => cart);
    const [pokemon, setPokemon] = useState(undefined)

    const RemoveFromTeamHandler = () => {
        if (!pokemon) {
            toast({
                title: `No Pokemon Selected`,
                status: 'error',
                isClosable: true,
            })
            return
        }
        dispatch(RemoveFromTeam(pokemon))
        toast({
            title: `Pokemon Removed`,
            status: 'success',
            isClosable: true,
            position: 'top-right'
        })
        setPokemon(undefined)
    }
    return (
        <Container maxW="container.lg">
            <Center>
                <Heading >Your Pokemon</Heading>
            </Center>
            <Center>
                <Button onClick={() => history.push("/")}>Go to Home</Button>
            </Center>
            <Flex direction="Row">
                <Stack>
                    <Heading size="md">Pokemon List</Heading>
                    <Box w="200px">
                        <PokemonList
                            pokemon={myPokemonLists}
                            setPokemon={setPokemon}
                        />
                    </Box>

                </Stack>
                <Spacer />
                <PokemonDetail
                    actionText="Remove from Team"
                    pokemon={pokemon}
                    AddRemoveTeamHandler={RemoveFromTeamHandler}
                />
            </Flex>
        </Container>
    )
}

export default YourPokemonPage
