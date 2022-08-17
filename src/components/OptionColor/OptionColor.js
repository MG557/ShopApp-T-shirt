import styles from './OptionColor.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }
 // console.log('!color', prepareColorClassName)

  const OptionColor = props => {
    return (
        <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.color.map((item) =>
                <li key={item}>
                    <button type="button" onClick={() => props.setCurrentColor(item)} className={clsx(prepareColorClassName(item), item === props.currentColor && styles.active)}/>
                </li>
              )}
            </ul>
        </div>
    );
  };
  
  console.log('!!! OptionColor', OptionColor);

  OptionColor.propTypes = {
    currentColor: PropTypes.string.isRequired,
    setCurrentColor: PropTypes.func.isRequired,
    colors: PropTypes.array.isRequired
  };

  export default OptionColor