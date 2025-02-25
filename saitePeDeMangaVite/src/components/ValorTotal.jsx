import React from "react";

const ValorTotal = ({ total }) => {
  return (
    <div className="valor-total">
      <h3>Valor total</h3>
      <div className="Valor">
        <p>{`R$${total.toFixed(2)}`}</p>
      </div>
    </div>
  );
};

export default ValorTotal;
