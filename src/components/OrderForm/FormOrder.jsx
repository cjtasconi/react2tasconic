import './FormOrder.css'
import React, {useContext,useState} from 'react'
import {getFirestore,collection, addDoc} from 'firebase/firestore'
import { CartContext } from '../../context/CartContext'
import { Formik , Form, Field, ErrorMessage } from 'formik'






export const FormOrder = () => {
    const {cart,totalPrice} = useContext(CartContext)
    const [orderId,setOrderId] = useState('')
    const [formularioEnviado, setFormularioEnviado] = useState(false)

    const sendOrder = (valores) =>{

    const order = {
        buyer: { 
            nombre: valores.nombre,
            phone: valores.telefono, 
            email: valores.correo },

        items: cart.map(product => ({id: product.id, title:product.title, price:product.price, quantity:product.quantity })),
        total: totalPrice(),
        
    }
    const db = getFirestore();
    const orderCollection = collection(db,'orders')
    addDoc(orderCollection, order).then(({id}) => setOrderId(id))
    }

    return (
        <>
        <div><h1>Formulario de Compra</h1></div>
            <Formik
            initialValues={{
                nombre:'',
                telefono:'',
                correo:'',
                confirmarCorreo:''
            }}

            validate={(valores) => {
                let errores = {} 

                //Validacion Nombre
                if(!valores.nombre){
                    errores.nombre = 'Por favor ingresa un nombre'
                }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                    errores.nombre='El nombre solo puede contener letras y espacios'
                }

                //Validacion telefono
                if(!valores.telefono){
                    errores.telefono = 'Por favor ingresa un numero de telefono'
                }else if(!/[0-9]+/g.test(valores.telefono)){
                    errores.telefono='El Telefono solo puede contener numeros'
                }

                //Validacion Correo
                if(!valores.correo){
                    errores.correo = 'Por favor ingresa un correo electronico'
                }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
                    errores.correo='El correo solo puede contener letras,numeros,puntos,guion y guion bajo'
                }

                //Validacion Confirmar Correo
                if(!valores.confirmarCorreo){
                    errores.confirmarCorreo = 'Por favor ingresa un correo electronico'
                }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.confirmarCorreo)){
                    errores.confirmarCorreo='El correo solo puede contener letras,numeros,puntos,guion y guion bajo'
                }else if(valores.correo !== valores.confirmarCorreo){
                    errores.confirmarCorreo='El correo electronico debe ser el mismo'
                }
                
                return errores
            }}

            onSubmit={ (valores,{resetForm}) => {
                setFormularioEnviado(true)
                resetForm()
                sendOrder(valores)
                setTimeout(() => {
                    setFormularioEnviado(false)
                }, 5000);
                
                }
        }
            >
                
                {( {errors} ) => (
            <div className='contenedor'>
                <Form className='formulario'>
                
                    <div>
                        <label htmlFor='nombre'>Nombre</label>
                        <Field 
                        type='text' 
                        id='nombre' 
                        name='nombre' 
                        placeholder='Ingrese su Nombre' 
                        />
                        <ErrorMessage name='nombre' component={() => (<div className='error'>{errors.nombre}</div>)} />
        
                    </div>
                    <div>
                        <label htmlFor='telefono'>Telefono</label>
                        <Field 
                        type='text' 
                        id='telefono' 
                        name='telefono' 
                        placeholder='Ingrese su Numero de Telefono' 
                        ></Field>
                        <ErrorMessage name='telefono' component={() => (<div className='error'>{errors.telefono}</div>)} />
                    </div>
                    <div>
                        <label htmlFor='correo'>Correo Electronico</label>
                        <Field 
                        type='email' 
                        id='correo' 
                        name='correo' 
                        placeholder='Ingrese su Correo Electronico' 
                        ></Field>
                        <ErrorMessage name='correo' component={() => (<div className='error'>{errors.correo}</div>)} />
                    </div>
                    <div>
                        <label htmlFor='confirmarCorreo' >Confirmar Correo</label>
                        <Field  
                        type='email'
                        id='confirmarCorreo'
                        name='confirmarCorreo'
                        placeholder='Confirmar su Correo Electronico'
                        />
                        <ErrorMessage name='confirmarCorreo' component={() => (<div className='error'>{errors.confirmarCorreo}</div>)}/>
                    </div>
                    <button type='submit'>Finalizar compra</button>
                        {formularioEnviado && <p className='exito'>Formulario enviado con exito!</p>}
                    
                </Form>
                
            </div>
            )}
            </Formik>
            
            <div className='orden-finalizada'>
                {orderId !=='' && <p>Gracias Por Su Compra, el id de su orden de compra es :{orderId}</p>}
            </div>
        </>
    )
}
