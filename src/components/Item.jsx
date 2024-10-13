import PropTypes from 'prop-types';
import styles from "./Item.module.css";

const Item = ({foodItem}) => {
    console.log(styles);
    return (
    <li className={`${styles["kg-item"]}`}>
            <span className={styles["kg-span"]}>{foodItem}</span>
          </li>
          )
}

Item.propTypes = {
    foodItem: PropTypes.string.isRequired, // Ensure foodItem is a string and is required
};

export default Item;