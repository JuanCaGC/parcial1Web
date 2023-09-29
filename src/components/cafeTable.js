import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import CafeInfo from './cafeInfo';

function CafeTable() {
  const cafes = [
    { nombre: 'Café 1', tipo: 'Tipo 1', region: 'Región 1' },
    { nombre: 'Café 2', tipo: 'Tipo 2', region: 'Región 2' },
    { nombre: 'Café 3', tipo: 'Tipo 3', region: 'Región 3' },
  ];
  const [selected, setSelected] = useState(null);

  const handleClick = (cafe) => {
    setSelected(cafe);
  };

  return (
    <div>
    <h1>El aroma magico</h1>
      <div>
        <img src="http://dummyimage.com/300x200.png/dddddd/000000"/>
        </div>
    <Table striped bordered hover>
        <thead>
          <tr>
          <th>#</th>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Región</th>
          </tr>
        </thead>
        <tbody>
          {cafes.map((cafe, index) => (
            <tr key={index} onClick={() => handleClick(cafe)}>
              <td>{index}</td>
              <td>{cafe.nombre}</td>
              <td>{cafe.tipo}</td>
              <td>{cafe.region}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {selected && <CafeInfo cafe={selected} />}
      </div>
  );
}

export default CafeTable;