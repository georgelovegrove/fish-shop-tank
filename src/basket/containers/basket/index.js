import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductItem from '../../../shared/components/product-item';
import { deleteBasketItem } from '../../modules/basket';

import './basket.css';

class Basket extends Component {

  deleteItemInBasket = (item) => () => {
    const data = { id: item.get('id') };
    this.props.onDeleteBasketItem(data);
  }

  render() {
    const { basketItemsList } = this.props;

    return (
      <div>
        <h3>Fish tank (Basket)</h3>
        <div className="basket-list-wrapper">
          {
            basketItemsList.size > 0 && basketItemsList.map((product) => {
              const id = product.get('id')
              const name = product.get('name');
              return (
                <ProductItem key={id} name={name} icon={"/assets/cross.svg"} onClick={this.deleteItemInBasket(product)} />
              );
            })
          }
          { basketItemsList.size === 0 && <p>Nothing in the basket.</p> }
        </div>
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onDeleteBasketItem: (data) => dispatch(deleteBasketItem(data)),
  };
}

const mapStateToProps = state => {
  return {
    basketItemsList: state.basket.get('itemsList'),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
