import styles from './Product.module.scss';
//import clsx from 'clsx';
//import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';
//import OptionColor from '../OptionColor/OptionColor';
//import OptionSize from '../OptionSize/OptionSize';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';


const Product = (props) => {
  //console.log('props', Product);

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentPrice, setCurrentPrice] = useState(props.basePrice);
  /*console.log('!Size', currentSize);
  console.log('!Color', currentColor);
  console.log('!Price', currentPrice);
  console.log(setCurrentColor);
  console.log(setCurrentSize);*/
 
  const getCurrentPrice = (price) => {
    return setCurrentPrice(props.basePrice + price);
  }
  //console.log('!setCurrentPrice', getCurrentPrice);
  
  

  const addToCart = () => {
    const BasketCard = {
      name: props.title,
      color: currentColor,
      size: currentSize,
      price: currentPrice
    }
    console.log('Sumarry', BasketCard);
  }
 

  return (
    <article className={styles.product}>
        <ProductImage name={props.name} currentColor={currentColor}/>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {currentPrice}$</span>
        </header>
        <ProductForm currentSize={currentSize} setCurrentSize={setCurrentSize} getCurrentPrice={getCurrentPrice} sizes={props.sizes} currentColor={currentColor} setCurrentColor={setCurrentColor}  color={props.colors} addToCart={addToCart} title={props.title} currentPrice={currentPrice} setCurrentPrice={setCurrentPrice}/>
      </div>
    </article>
  )
};
//console.log('?? ProductFom', ProductForm);

Product.propTypes = {
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  sizes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    additionalPrice: PropTypes.number
  })).isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

export default Product;