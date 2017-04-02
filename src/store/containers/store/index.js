import React, { Component } from 'react';

import ProductItem from '../../../shared/components/product-item';
import fishData from '../../../../lib/fish';

import './store.css';

class Store extends Component {

  constructor() {
    super();

    this.state = {
      productsList: [],
    };
  }

  componentDidMount() {
    const { fishList } = fishData;
    this.setState({ productsList: fishList });
  }

  render() {
    const { productsList } = this.state;

    return (
      <div>
        <h3>Available fish</h3>
        <p>Drag and drop the fish into the basket to check if they’re compatible.</p>
        <div className="store-list-wrapper">
          {
            productsList.map((product) => {
              return (
                <ProductItem name={product} />
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default Store;
