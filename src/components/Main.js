
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, emptyCart, removeFromCart } from '../redux/action';
import { productList } from '../redux/productAction';
import { useEffect } from 'react';

function Main() {
    const dispatch = useDispatch();

    /**
     * DATA in MAIN Component FROM API Via saga
     */
    const data = useSelector((state) => state.productData);
    console.log('Data in Main Component from SAGA = ', data)

    const product = {
        id: 1,
        name: 'Dell Inspiron',
        type: 'laptop',
        color: 'gray',
        price: '50000'
    }

    useEffect(() => {

        dispatch(productList())

        //   return () => {
        //     second
        //   }
    }, [])

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>

                {/* <div style={{ marginTop: 20 }}>
                    <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
                </div>
                <div style={{ marginTop: 20 }}>
                    <button onClick={() => dispatch(removeFromCart(product.name))}>Remove from Cart</button>
                </div> */}
                <div style={{ marginTop: 20 }}>
                    <button onClick={() => dispatch(emptyCart(product))}>Empty Cart</button>
                </div>

                <div style={{ marginTop: 20 }}>
                    <button onClick={() => dispatch(productList(product))}>Get Product List</button>
                </div>
            </div>

            <div className='product-container'>
                {
                    data.map((item) => <div key={item.id} className='product-item'>
                        {/* <img src={item.photo} /> */}
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7FOsBBgSmMXLBO9bYJ0AGMrip9ZSMTT7ha15aVkRaFyvV30LkZS-HNzaTYH6zWIJCKiM&usqp=CAU" />
                        <div>id : {item.id}  </div>
                        <div>Name : {item.name}  </div>
                        <div>category : {item.category}  </div>
                        <div>color : {item.color}  </div>
                        <div>price : $ {item.price}  </div>
                        <div>brand : {item.brand}  </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: 0 }}>
                            <button onClick={() => dispatch(addToCart(item))}>Add To Cart</button>
                            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove from Cart</button>
                        </div>
                    </div>)
                }

            </div>

        </div>
    );
}

export default Main;
