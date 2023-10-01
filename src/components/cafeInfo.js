import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import './cafeInfo.css';
import {FormattedMessage, FormattedDate} from 'react-intl';

function CafeInfo({ id }) {
  const [cafe, setCafe] = useState(null);
  useEffect(() => {
    const apiUrl = `http://localhost:3001/cafes/${id}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
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
            <Card.Text className='dateCafe'>
              <FormattedDate
                value={new Date(cafe.fecha_cultivo)}
                year='numeric'
                month='long'
                day='numeric'
                weekday='long'
              />
            </Card.Text>
            <Card.Img className='imgcafe' src={cafe.imagen} alt={cafe.nombre} />
            <Card.Text className='notasCafe'><FormattedMessage id="notes"/></Card.Text>
            <Card.Text className='notasCafe'>{cafe.notas}</Card.Text>
            <Card.Text className='heightCafe'><FormattedMessage id="grownAt"/> </Card.Text>
            <Card.Text className='heightCafe'>{cafe.altura} <FormattedMessage id="masl"/></Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default CafeInfo;