import React, { useState } from 'react';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import {
    Container, Heading, Center, Stack, useToast,
} from "@chakra-ui/react"
import { CircularProgress, } from "@chakra-ui/react"
import { AddToTeam, RemoveFromTeam } from '../../appRedux/actions';
import { FindPokemonAlreadyExist } from "../../appRedux/reducers"
import { useHistory } from 'react-router-dom';
import HomeTop from '../../components/HomeTop';
import SearchBox from '../../components/SearchBox';
import PokemonDetail from '../../components/PokemonDetail';
const baseURL = "https://pokeapi.co/api/v2/pokemon"
const Homepage = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const toast = useToast()
    const { myPokemonLists, } = useSelector(({ cart }) => cart);

    const [pokemon, setPokemon] = useState(undefined)

    const [loading, setLoading] = useState(false)
    const [query, setQuery] = useState("")


    const handleGenerateRandom = () => {
        setLoading(true)
        var query = Math.floor(Math.random() * 152);
        axios.get(`${baseURL}/${query}`).then(res => {
            setLoading(false)
            setPokemon(res.data)
        }).catch(err => console.log(err.message))

    }
    const handleSearch = () => {
        setLoading(true)
        axios.get(`${baseURL}/${query?.toLowerCase()}`).then(res => {
            setLoading(false)
            setPokemon(res.data)
        }).catch(err => {
            setLoading(false)
            toast({
                title: `Pokemon not Found`,
                status: 'error',
                isClosable: true,
            })
        })

    }

    const AddToTeamHandler = () => {
        if (!pokemon) {
            toast({
                title: `No Pokemon Selected`,
                status: 'error',
                isClosable: true,
            })
            return
        }
        if (myPokemonLists?.length >= 6) {
            toast({
                title: `You have reached the number of Pokemon you can have`,
                status: 'error',
                isClosable: true,
            })
            return
        }
        if (FindPokemonAlreadyExist(myPokemonLists, pokemon.id)) {
            toast({
                title: `Pokemon Already in Your Team`,
                status: 'error',
                isClosable: true,
            })
            return
        }
        dispatch(AddToTeam(pokemon))
        toast({
            title: `pokemon added`,
            status: 'success',
            isClosable: true,
            position: 'top-right'
        })

    }
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
    const ViewYourPokemon = () => {
        history.push('/yourpokemon')
    }
    return (
        <Container>
            <Center>
                <Heading>Pokemon Home</Heading>
            </Center>
            <Stack direction="column">
                <HomeTop
                    handleGenerateRandom={handleGenerateRandom}
                    myPokemonLists={myPokemonLists}
                    ViewYourPokemon={ViewYourPokemon}
                />

                <SearchBox
                    setQuery={setQuery}
                    handleSearch={handleSearch}
                />

                {
                    loading ? <Center> <CircularProgress isIndeterminate color="green.300" />  </Center> :
                        <>
                            <PokemonDetail
                                actionText={FindPokemonAlreadyExist(myPokemonLists, pokemon?.id) ? "Remove from Team" : "Add to Team"}
                                pokemon={pokemon}
                                AddRemoveTeamHandler={FindPokemonAlreadyExist(myPokemonLists, pokemon?.id) ? RemoveFromTeamHandler : AddToTeamHandler}
                            />
                        </>
                }
            </Stack>

        </Container>
    )
}

export default Homepage
