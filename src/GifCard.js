import React from 'react'
import { CardColumns, CardGroup, Card, Figure } from 'react-bootstrap'

const GifCard = ({ gif }) => {
    return (
        <Figure>
            <Figure.Image src={gif.images.fixed_height.url} alt="gif" rounded />            
        </Figure>
    )
}

export default GifCard