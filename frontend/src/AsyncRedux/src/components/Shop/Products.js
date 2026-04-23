import ProductItem from './ProductItem';
import classes from './Products.module.css';
import {useDispatch} from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const DUMMY_PRODUCTS = [
  { id: 'p11', price: 6, title: 'My First Book', description: 'The first book I ever wrote' },
  { id: 'p22', price: 5, title: 'My Second Book', description: 'The second book I ever wrote' },
];


const Products = (props) => {
   const dispatch = useDispatch();
   const {title, price, description, id} = props;
  const addToCartHandler = () => {
    console.log(id, title, price, description);
    dispatch(cartActions.addToCart({
        id,
        title,
        price,
        description
    }));
  };

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            onAddToCart={addToCartHandler}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
