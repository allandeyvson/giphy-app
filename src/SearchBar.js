import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

function SearchBar({ searchTerm, changeSearchTerm, getGifs }){
    return (
        <div>
            <br></br>
            <Container>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Search Gifs"
                        aria-label="Search Gifs"
                        value={searchTerm}
                        onChange={changeSearchTerm}
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary" type="submit" onClick={getGifs} >Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Container>
        </div>
    )
}

export default SearchBar