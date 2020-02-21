import React from "react";
import { container, sub, deleteBtn } from "./Item.module.css";

export const Item = props => {
  const { deleteHandler } = props;
  const { name, lastname, asistencia, carnet } = props.person;
  return (
    <div className={container}>
      <div className={sub}>
        <h4>{`${name} ${lastname}`}</h4>
        <span
          onClick={id => {
            deleteHandler(id);
          }}
          className={deleteBtn}
        >
          x
        </span>
      </div>
      <div className={sub}>
        <span>Asistencia: {asistencia ? 'Ausente' : 'Presente'}</span>
        <span>Carnet: {carnet}</span>
      </div>
    </div>
  );
};