import Item from "./Item";
import PropTypes from 'prop-types';

function FoodItems({items}) {
    return (
        <ul className="list-group">
        {items.map((item) => (
          <Item key={item} foodItem={item}/>
        ))}
      </ul>
    )
}

FoodItems.propTypes = {
    items: PropTypes.array.isRequired, // Ensure items is an array and is required
};


export default FoodItems;