import React, {useState, useEffect} from 'react' 
import { products } from '../products';
import { useDispatch } from 'react-redux';
import { changeQuantity } from '../stores/cart';
import delette from './imges/Vector (4).png'
import './Products.css'
import './Cartpage.css'
const ItemCartTab = (props) => {
    const {productId, quantity} = props.data;
    const [detail, setDetail] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        const findDetail = products.filter(product => product.id === productId)[0];
        setDetail(findDetail);
    }, [productId])
    const handleMinusQuantity = () => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity - 1
        }));
    }
    return (
        <>
    <div className='prod-cart'>
        <img src={detail.image} alt="" className='imgee'/>
        <h3>{detail.name}</h3>
        <p className='price'>${detail.price}</p>
        <span>{quantity}</span>
    <span> ${detail.price * quantity} </span>
    <div>

            <button  onClick={handleMinusQuantity}><img src={delette} alt="" /></button>
        </div>
    </div>    
    </>
  )
}

export default ItemCartTab