import React from 'react'
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
import './Item.css'




export const Item = ({info}) => {
  return (
      <div className='container-card'>
      <Col>
        <Card style={{ width: "18rem" }} className="item">
            <Card.Img variant="top" src={info.image} className='card-image' />
            <Card.Body>
                <Card.Title>{info.title}</Card.Title>
                <Card.Text>
                {info.description}
                </Card.Text>
                <Card.Text>${info.price}</Card.Text>
            <Link to={`/detalle/${info.id}`}><Button variant="primary">Detalles</Button></Link>
            </Card.Body>
        </Card>
      </Col>
      </div>
    
  )
}
