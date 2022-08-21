import styles from './ProductForm.module.scss';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const addToCart = (props) => {
    const BasketCard = {
      name: props.title,
      color: props.currentColor,
      size: props.currentSize,
      price: props.currentPrice
    }
    console.log ('Sumarry', BasketCard)
  }

  const ProductForm = (props) => {
    return (
        <from>
            <OptionSize currentSize={props.currentSize} setCurrentSize={props.setCurrentSize} getCurrentPrice={props.getCurrentPrice} sizes={props.sizes}/>
            <OptionColor currentColor={props.currentColor} setCurrentColor={props.setCurrentColor} color={props.color}/>
            <Button className={styles.button} 
                onClick={(e) => {
                    e.preventDefault();
                    addToCart(props);
                }}>
                <span className="fa fa-shopping-cart" />
            </Button>
        </from>
    )
  }
 //console.log('## OptColor', OptionColor);

  ProductForm.propTypes = {
    title: PropTypes.string.isRequired,
    currentSize: PropTypes.string.isRequired,
    currentColor: PropTypes.string.isRequired,
    color: PropTypes.arrayOf(PropTypes.string).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      additionalPrice: PropTypes.number
    })).isRequired,
  }
    
  
  

  export default ProductForm