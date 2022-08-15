import styles from './ProductForm.module.scss';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const addToCart = props => {
    const BasketCard = {
      name: props.title,
      color: props.currentColor,
      size: props.currentSize,
      price: props.currentPrice
    }
    console.log ('Sumarry', BasketCard)
  }

  const ProductForm = props => {
    return (
        <from>
            <OptionColor currentColor={props.currentColor} setCurrentColor={props.setCurrentColor} color={props.color}/>
            <OptionSize currentSize={props.currentSize} setCurrentSize={props.setCurrentSize} getCurrentPrice={props.getCurrentPrice} sizes={props.sizes}/>
            <Button className={styles.button} 
                onClick={(e) => {
                    e.preventDefault();
                    addToCart();
                }}>
                <span className="fa fa-shopping-cart" />
            </Button>
        </from>
    )
  }
 // console.log('## OptColor', OptionColor);

  ProductForm.propTypes = {

    title: PropTypes.string.isRequired,
    basePrice: PropTypes.number.isRequired,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      additionalPrice: PropTypes.number
    })).isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }

  export default ProductForm