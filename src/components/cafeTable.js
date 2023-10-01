import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import CafeInfo from './cafeInfo';
import './cafeTable.css';
import {FormattedMessage} from 'react-intl';

function CafeTable() {
  const [cafes, setCafes] = useState([]);
  
  useEffect(() => {
    const apiUrl = 'http://localhost:3001/cafes';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setCafes(data);
      })
      .catch((error) => {
        console.error('Error al obtener la lista de cafés:', error);
      });
  }, []);


  const [selected, setSelected] = useState(null);

  const handleClick = (id) => {
    setSelected(id);
  };

  return (
    <div className= 'CafeTable'>

      <div className='frame_arriba'>
        <p className='elAromaMagico'>El aroma magico</p>
        <div className='image1'></div>
      </div>
    <Table striped bordered hover className='table1'>
        <thead >
          <tr>
            <th>#</th>
            <th><FormattedMessage id="name"/></th>
            <th><FormattedMessage id="type"/></th>
            <th><FormattedMessage id="region"/></th>
          </tr>
        </thead>
        <tbody>
          {cafes.map((cafe) => (
            <tr  key={cafe.id} onClick={() => handleClick(cafe.id)}>
              <td className='id'>{cafe.id}</td>
              <td className='textobody'>{cafe.nombre}</td>
              <td className='textobody'>{cafe.tipo}</td>
              <td className='textobody'>{cafe.region}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {selected &&<div className='cafeInfoBox'> <CafeInfo id={selected} /></div>}
      </div>
  );
}

export default CafeTable;