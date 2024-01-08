
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, emptyCart, removeFromCart } from '../redux/action';
import { productList } from '../redux/productAction';

function Main() {
    const dispatch = useDispatch();

    /**
     * DATA in MAIN Component FROM API Via saga
     */
    const productData = useSelector((state) => state.productData);
    console.log('Data in Main Component from SAGA = ', productData)

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

            <div style={{ marginTop: 20 }}>
                <button onClick={() => dispatch(productList(product))}>Get Product List</button>
            </div>

        </div>
    );
}

export default Main;
