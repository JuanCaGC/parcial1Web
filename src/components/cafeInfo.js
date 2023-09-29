import React from 'react';
import Card from 'react-bootstrap/Card';

function CafeInfo({ cafe }) {
  return (
    <div className="cafe-info">
      <Card>
        <Card.Header>{cafe.nombre}</Card.Header>
        <Card.Body>
          <Card.Text>Fecha de cultivo: {cafe.fechaCultivo}</Card.Text>
          <Card.Img src={cafe.imagen} alt={cafe.nombre} />
          <Card.Text>Notas: {cafe.notas}</Card.Text>
          <Card.Text>Altura del cultivo: {cafe.alturaCultivo} metros</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CafeInfo;