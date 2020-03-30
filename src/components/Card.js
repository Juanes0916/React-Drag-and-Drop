import React from 'react'

/* Elementos a mover entre los contenedores */

function Card(props) {
  const dragStart = e => {
    const target = e.target;

    e.dataTransfer.setData('card_id', target.id);

    /* Permite eliminar las cards si se sueltan fuera 
    de los contenedores */

    // setTimeout(() => {
    //   target.style.display = 'none'
    // }, 0);
  }

  const dragOver = e => {
    e.stopPropagation();
  }

  return (
    <div
      id={props.id}
      className={props.className}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  )
}

export default Card
