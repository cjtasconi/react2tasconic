import React from 'react'
import { Item } from '../Item/Item';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';


export  const ItemList = ({ items = []}) => {
    
    return (
        
        <Container>
            <Row xs={1} md={2} lg={3}>
                {items.map(juegos => <Item key={juegos.id} info={juegos} />)}
            </Row>
        </Container>
    
    )
}