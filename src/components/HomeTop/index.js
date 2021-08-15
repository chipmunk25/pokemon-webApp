import React from 'react';

import { CgPokemon } from 'react-icons/cg'
import {
    Button, Box, Flex, Spacer, Badge, Icon, Text
} from "@chakra-ui/react"
import { DragHandleIcon } from '@chakra-ui/icons'
function HomeTop({ handleGenerateRandom, myPokemonLists, ViewYourPokemon }) {
    return (
        <Flex>
            <Button leftIcon={<DragHandleIcon />} onClick={handleGenerateRandom}> Generate Random Pokemon</Button>
            <Spacer />
            <Flex onClick={ViewYourPokemon} style={{ cursor: 'pointer' }}>
                <Icon as={CgPokemon} w={10} h={10} />
                <Box ml="3">
                    <Text fontWeight="bold" fontSize="md">
                        Your Pokemon
                        <Badge ml="1" colorScheme="green">
                            {myPokemonLists?.length}
                        </Badge>
                    </Text>
                    <Text fontSize="sm"></Text>
                </Box>
            </Flex>
        </Flex>
    )
}

export default HomeTop
