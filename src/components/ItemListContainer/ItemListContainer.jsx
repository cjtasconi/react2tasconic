import React, {useState,useEffect} from 'react';
import { ItemList } from '../ItemList/ItemList';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import {useParams} from 'react-router-dom'
import {Loader} from '../Loader/Loader'
import './ItemListContainer.css'


export function ItemListContainer({greeting}) {
    //variable de estado inicializada en un array vacio

    const [items,setItems] = useState([])
    const [loading,setLoading] =useState(true)


    //variable con parametro de ruta
    
    const {categoriaId} = useParams();

    
    useEffect(() =>{
        
        const DB = getFirestore()
        const dbCollection = collection(DB, 'products')
        //si el parametro de ruta no esta vacio entonces se obtiene una respuesta que luego filtramos por categoria y la seteamos
        if(categoriaId){
            const queryFilter = query(dbCollection, where('category','==', categoriaId))
            getDocs(queryFilter).then(res => setItems(res.docs.map(product => ({id: product.id, ...product.data()}))))
            setLoading(false)

        // si el parametro de ruta esta vacio entonces obtenemos la respuesta con todos los productos
        }else{
            getDocs(dbCollection).then(res => setItems(res.docs.map(product => ({id: product.id, ...product.data()}))))
            setLoading(false)
        }
       
        // le pasamos al arreglo de dependencias la variable con el parametro de ruta para que renderice cada vez que cambie
    },[categoriaId])
    
    
    return(
    <> 
            <div>
            <h1 className="principal-title">{greeting}</h1>
            { loading ? <Loader></Loader>
            : <ItemList items={items}></ItemList>}
            </div>  
    
        </>
    )
}