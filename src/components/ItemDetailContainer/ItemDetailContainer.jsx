import React, { useEffect, useState } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'
import {getFirestore, doc,getDoc} from 'firebase/firestore'
import { Loader } from '../Loader/Loader'


export const ItemDetailContainer = () => {
    const [item,setItem] = useState({});
    const [loading,setLoading] =useState(true)




    const {detalleId} = useParams();

  useEffect(()=>{
    // creo una variable DB que trae el servicio de firestore
    const DB = getFirestore()
    // crea un puntero al dato que queremos traer
    const dbDoc = doc(DB,'products',detalleId)
    // traer el dato con una promesa
    getDoc(dbDoc).then(res => setItem({id: res.id, ...res.data()}))
    setLoading(false)
    
  },[detalleId])
    
  return (
    <>
      { loading ? <Loader></Loader>  
      : <ItemDetail item={item}></ItemDetail>}
    </>
  )
}
