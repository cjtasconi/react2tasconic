import React, {useContext} from 'react'
import { Button, ButtonGroup, Container,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { ItemCart } from '../ItemCart/ItemCart'
import { FormOrder } from '../OrderForm/FormOrder'
import './Cart.css'
import emptyCart from '../../img/emptycart.png'

export const Cart = () => {
  const {cart,totalPrice,clear} = useContext(CartContext)
  
  
  if (cart.length === 0) {
    return(
      <>
        <div>
        <img src={emptyCart} alt='carrito vacio'></img>
        </div>
        <p className='custom-cart'>No Hay elementos en el carrito</p>
        <Link to="/" className='nav-link'><Button variant='primary' size='lg'>Hacer compras</Button></Link>
      </>
    )
  }

  return (
    <>
    <Container>
      <Row xs={1} md={2} lg={3}>
    {
      cart.map(product => <ItemCart key={product.id} product={product}></ItemCart>)
    }
        
    </Row>
    <div className='col-xs-3'>
    <ButtonGroup aria-label="First group"> 
      <Button variant='primary' size='xs' onClick={() => {clear()}}>Limpiar Carrito</Button></ButtonGroup>{' '}
      <ButtonGroup aria-label='Second group'>
      <Link to='/'><Button variant='primary' size='xs'>Seguir Comprando</Button></Link> </ButtonGroup>
    </div>
    <div>
    <p className='custom-cartPrice'> Total: ${totalPrice()}</p>
    </div>
    <div>
      <FormOrder/>
      
    </div>
    
    </Container>
    </>
    
  )
}
