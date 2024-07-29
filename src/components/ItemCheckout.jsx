import React, {useState, useEffect} from 'react' 
import { products } from '../products';
import './Products.css'
import './Cartpage.css'
const ItemCheckout = (props) => {
    const {productId, quantity} = props.data;
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        const findDetail = products.filter(product => product.id === productId)[0];
        setDetail(findDetail);
    }, [productId])
    return (
        <>

        <div className="totals">
        <div className="subtotal">
            <span id='spprod'>{detail.name} x <span id='uu'>{quantity}</span></span>
            <span>${detail.price}</span>
        </div>
          <div className="subtotal">
            <span>Subtotal</span>
            <span>${detail.price * quantity}</span>
          </div>
        </div>
    <div>
    </div>    
    </>
  )
}

export default ItemCheckout