
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, emptyCart, removeFromCart } from '../redux/action';

function Main() {
    const dispatch = useDispatch();
    const product = {
        id: 1,
        name: 'Dell Inspiron',
        type: 'laptop',
        color: 'gray',
        price: '50000'
    }
    return (
        <div>

            <div style={{ marginTop: 20 }}>
                <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
            </div>
            <div style={{ marginTop: 20 }}>
                <button onClick={() => dispatch(removeFromCart(product.name))}>Remove from Cart</button>
            </div>
            <div style={{ marginTop: 20 }}>
                <button onClick={() => dispatch(emptyCart(product))}>Empty Cart</button>
            </div>

        </div>
    );
}

export default Main;
