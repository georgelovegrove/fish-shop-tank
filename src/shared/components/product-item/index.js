import React from 'react';

import './product-item.css';

const ProductItem = ({ name, icon, onClick }) => {
  return (
    <div className="item-wrapper" onClick={onClick}>
      <p className="item-name">{ name }</p>
      <img className="item-icon" src={icon} />
    </div>
  );
};

export default ProductItem;
