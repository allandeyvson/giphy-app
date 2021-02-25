import React from 'react'
import { CardColumns, CardGroup, Card, Figure } from 'react-bootstrap'

const GifCard = ({ gif }) => {
    return (
        <Figure>
            <Figure.Image src={gif.images.fixed_height.url} alt="gif" rounded />            
        </Figure>
        // <CardColumns>
        //     <Card>
        //         <Card.Img src={gif.images.fixed_height.url} alt="gif" variant="top" />
        //         <Card.Body>
        //             <Card.Link href={gif.url}>{gif.title} </Card.Link>
        //         </Card.Body>
        //     </Card>
        // </CardColumns>
    )
}

export default GifCard