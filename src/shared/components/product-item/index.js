import React from 'react';

import './product-item.css';

const ProductItem = ({ name }) => {
  return (
    <div className="item-wrapper">
      <p className="item-name">{ name}</p>
    </div>
  );
};

export default ProductItem;
