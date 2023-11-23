import React, {useState,useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import './ItemDetail.css'
import { ItemCount } from '../ItemCount/ItemCount'
import { NavLink } from 'react-router-dom'
import { Button } from 'react-bootstrap'





export const ItemDetail = ({item}) => {
  
  const {addItem} = useContext(CartContext)

  const [irCarrito,setIrCarrito] = useState(false);



  

  const onAdd = (quantity) => {
    setIrCarrito(true);
    addItem(item,quantity);
    
    
    
}
  
  return (
    <>
    <div className='custom-detail'>
      <div>
          <img src={item.image} alt="imagen"></img>
          <h1>{item.title}</h1>
          <h2>{item.description}</h2>
      </div>
      { irCarrito
      ? <NavLink to="/cart"><Button variant="primary" size="lg" >Ir al Carrito</Button></NavLink>
      : <ItemCount initial={1} stock={item.stock} onAdd={onAdd}></ItemCount> }
    </div>
    </>
  )
}
