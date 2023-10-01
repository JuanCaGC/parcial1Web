import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import './cafeInfo.css';

function CafeInfo({ id }) {
  const [cafe, setCafe] = useState(null);
  useEffect(() => {
    const apiUrl = `http://localhost:3001/cafes/${id}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log('Data del café:', data);
        setCafe(data);
      })
      .catch((error) => {
        console.error('Error al obtener el café:', error);
      });
  }, [id]);
  return (
    <div className="CafeInfo">
      {cafe ? (
        <Card>
          <Card.Header className='nameCafe'>{cafe.nombre}</Card.Header>
          <Card.Body>
            <Card.Text className='dateCafe'>{cafe.fecha_cultivo}</Card.Text>
            <Card.Img className='imgcafe' src={cafe.imagen} alt={cafe.nombre} />
            <Card.Text className='notasCafe'>Notas</Card.Text>
            <Card.Text className='notasCafe'>{cafe.notas}</Card.Text>
            <Card.Text className='heightCafe'>Cultivado a una altura de </Card.Text>
            <Card.Text className='heightCafe'>{cafe.altura} msnm</Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default CafeInfo;