import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../context/CartContext'

export function CartWidget() {
  const {totalProducts} = useContext(CartContext)
  return (
    <>
        <FontAwesomeIcon icon={faCartShopping} />
        <span> {totalProducts() || ''}</span>
    </>
  )
}

