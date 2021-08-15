import React from 'react';

import {
  InputGroup, InputLeftElement, Input,
    InputRightElement, Button, 
} from "@chakra-ui/react"

import { Search2Icon } from '@chakra-ui/icons'


function SearchBox({ setQuery, handleSearch }) {
    return (
        <InputGroup>
            <InputLeftElement
                pointerEvents="none"
                children={<Search2Icon color="gray.300" />}
            />
            <Input type="text" placeholder="Search a Pokemon" onChange={(e) => setQuery(e.target.value)} />
            <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleSearch}>
                    Search
                </Button>
            </InputRightElement>
        </InputGroup>
    )
}

export default SearchBox
