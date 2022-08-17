import styles from './OptionSize.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';


const OptionSize = props => {
    return (
        <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map((size, index)=>
                <li key={index}>
                  <button type='button' onClick={() =>{
                    props.setCurrentSize(size.name);
                    props.getCurrentPrice(size.additionalPrice); 
                    //console.log('!size', setCurrentSize);
                    //console.log('price', getCurrentPrice)
                  }}
                  className={clsx(size.name === props.currentSize && styles.active)}>{size.name}</button>
                </li>
              )}
            </ul>
          </div>
    );
};
OptionSize.propTypes = {
    currentColor: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        additionalPrice: PropTypes.number
      })),
  };

export default OptionSize