import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductItem from '../../../shared/components/product-item';
import { loadProducts } from '../../modules/store';
import { addBasketItem } from '../../../basket/modules/basket';

import './store.css';

class Store extends Component {

  componentDidMount() {
    this.props.onLoadProducts();
  }

  addItemToBasket = (item) => () => {
    const data = { item };
    this.props.onAddBasketItem(data);
  }

  render() {
    const { productsList, basketItemsList } = this.props;

    return (
      <div>
        <h3>Available fish</h3>
        <div className="store-list-wrapper">
          {
            productsList.map((product) => {
              const id = product.get('id')
              const name = product.get('name');

              // Ignore any products already in the basket
              if (basketItemsList.get(id)) return null;

              return (
                <ProductItem key={id} name={name} icon={"/assets/add.svg"} onClick={this.addItemToBasket(product)}/>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onLoadProducts: () => dispatch(loadProducts()),
    onAddBasketItem: (data) => dispatch(addBasketItem(data)),
    dispatch,
  };
}

const mapStateToProps = state => {
  return {
    productsList: state.store.get('productsList'),
    basketItemsList: state.basket.get('itemsList'),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Store);
