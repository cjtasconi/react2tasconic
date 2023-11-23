import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const ItemCart = ({product}) => {
    const{removeItem} = useContext(CartContext)
  return (
    <div className='container-card'>
      <Col>
        <Card style={{ width: "18rem" }} className="item">
            <Card.Img variant="top" src={product.image} className='card-image' />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>Cantidad: {product.quantity}</Card.Text>
                <Card.Text>Precio: ${product.price}</Card.Text>
                <Card.Text>Subtotal: ${product.quantity * product.price}</Card.Text>
            <Button variant="primary" onClick={()=> removeItem(product.id)}>Eliminar</Button>
            </Card.Body>
        </Card>
      </Col>
      </div>
  )
}
