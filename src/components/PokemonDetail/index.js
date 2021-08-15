import React from 'react'

import {
    Heading, Button, Stack, Box, Flex, Spacer,
    Image, Grid, GridItem, ListItem, UnorderedList, Progress, Container
} from "@chakra-ui/react"

function PokemonDetail({ pokemon, AddRemoveTeamHandler, actionText }) {
    return (
        < Container maxW="container.xl" mt={5}>
            <Box bg="#FBF0B9" w="100%" minHeight={100} color="black" borderColor="black"
                borderWidth="3px" borderRadius="lg" >
                {pokemon ?
                    <Grid
                        h="100%"
                        templateRows="repeat(2, 1fr)"
                        templateColumns="repeat(5, 1fr)"
                        gap={4}
                    >
                        <GridItem rowSpan={2} colSpan={2}  >
                            <Image
                                boxSize={200}
                                objectFit="cover"
                                src={pokemon?.sprites?.front_default}
                                alt={pokemon?.name} />
                        </GridItem>
                        <GridItem rowSpan={2} colSpan={3}>
                            <Stack direction="column">
                                <Heading>
                                    {pokemon?.name?.toUpperCase()}
                                </Heading>

                                <Heading mb={4} as="h3" size="xs">
                                    {pokemon && "Abilities:"}
                                </Heading>
                                <UnorderedList>
                                    {pokemon?.abilities?.map((item, key) => (
                                        <ListItem key={key}>{item.ability.name} </ListItem>
                                    ))}
                                </UnorderedList>
                                <Heading mb={4} as="h3" size="xs">
                                    {pokemon && "Types:"}
                                </Heading>
                                <UnorderedList>
                                    {pokemon?.types?.map((item, key) => (
                                        <ListItem key={key}>{item.type.name} </ListItem>
                                    ))}
                                </UnorderedList>
                            </Stack>
                        </GridItem>
                    </Grid>
                    : null}
            </Box>
            <Box pt={5}>
                <Flex direction="row">
                    <Heading>Base Stats</Heading>
                    <Spacer />
                    <Button onClick={AddRemoveTeamHandler}>{actionText}</Button>
                </Flex>
                {pokemon?.stats?.map((item, key) => (
                    <React.Fragment key={key}>
                        <Heading as="h3" size="xs">{item.stat.name}</Heading>
                        <Progress hasStripe value={item.base_stat} key={key} max={100} />
                    </React.Fragment >
                ))}
            </Box>
        </Container>
    )
}

export default PokemonDetail
