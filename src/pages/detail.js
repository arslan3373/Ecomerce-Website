import React, { useEffect, useState} from 'react' 
import { useParams } from 'react-router-dom' 
import { Link } from 'react-router-dom';
import { products } from '../products';
import { useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart';
import Homeproduct from '../pages/homeproduct';
import facebook from '../components/imges/Vector (1).png'
import twitter from '../components/imges/ant-design_twitter-circle-filled (1).png'
import linkin from '../components/imges/akar-icons_linkedin-box-fill.png'
import stars from '../components/imges/Group 88.png'
import '../components/Products.css'
import Footer from '../components/Footer';
const Detail = () => {
    const { slug } = useParams();
    const [detail, setDetail] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    useEffect(() => {
        const findDetail = products.filter(product => product.slug === slug);
        if(findDetail.length > 0){
            setDetail(findDetail[0]);
        }else{
            window.location.href = '/';
        }
    }, [slug])
    const handleMinusQuantity = () => {
        setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
    const handlePlusQuantity = () => {
        setQuantity(quantity + 1);
    }
    const handleAddToCart = () => {
        dispatch(addToCart({
            productId: detail.id,
            quantity: quantity
        }));
    }
  
    useEffect(() => {
      window.scrollTo({
          top:0,
          left:0,
          behavior: "smooth"
      });
    }, []);
  return (
    <div className='mt-12'>
        
        <div className='detial'>
           <div className='detial-imges'>
            <div className='allimges'>
            <img src={detail.image} alt="" className='w-full'/>
            <img src={detail.image} alt="" className='w-full'/>
            <img src={detail.image} alt="" className='w-full'/>
            <img src={detail.image} alt="" className='w-full'/>

            </div>
           <div>
                <img src={detail.image} alt="" className='singleimg'/>
            </div>
           </div>
        
            
            <div className='headrr flex flex-col gap-5'>
                <h1 className='herr uppercase '>{detail.name}</h1>
                <p className='detialprice'>
                    ${detail.price}
                </p>
                <div className='flex'>
                <img className="imggg" src={stars} alt="" />
                    <p id='op'>5 costomer review</p>
                </div>
                <p className='descrip'>
                    {detail.description}
                </p>
                <p>Size</p>
                <div className='flex gap-5'>
                    <div className='flex gap-2 justify-center items-center'>
                        <button className='bg-orange-100 h-12 w-12  text-xl rounded-xl flex justify-center items-center' >L</button>
                        <button className='bg-gray-200 h-12 w-12  text-xl rounded-xl flex justify-center items-center'>XL</button>
                        <button className='bg-gray-200 h-12 w-12  text-xl rounded-xl flex justify-center items-center'>XS</button>
                    </div>
                </div>
                <p>Color</p>
                <div className='colors'>
                    <div className='col1'></div>
                    <div className='col2'></div>
                    <div className='col3'></div>
                </div>
                <div className='allbtnss flex gap-5 wrap'>
                    <div className='flex gap-2 justify-center rounded-xl items-center border-2 p-2'>
                        <button className=' h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center' onClick={handleMinusQuantity}>-</button>
                        <span className=' h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center'>{quantity}</span>
                        <button className=' h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center' onClick={handlePlusQuantity}>+</button>
                    </div>
                    <button className=' text-black px-7 py-3 rounded-xl border-2 font-bold ' onClick={handleAddToCart}>
                        Add To Cart
                    </button>
                    <Link to='/comparison'>
                    <button className=' text-black px-7 py-3 rounded-xl border-2'>
                        + Compare 
                    </button>
                    </Link>
                    
                </div>
                <hr/>
                <div className="catdetial">
          <div className="data">
            <p>SKU</p>
            <p>: SS00lO</p>
          </div>
          <div className="data">
            <p>Catafory </p>
            <p>: SS00lO</p>
          </div>
          <div className="data">
            <p>Tags</p>
            <p>: sofa , hair , Home</p>
          </div>
          <div className="data">
            <p>Share :</p>
            <p id='apps'>
            <img className="img" src={facebook} alt="" />
            <img className="img" src={twitter} alt="" />
            <img className="img" src={linkin} alt="" />
            </p>
          </div>
          
        </div>
            </div>
            
        </div>
        <hr/>
        <div className="detial-inf">
        <div className="descip flex flex-wrap justify-center ">
          <p className='cursor-pointer'>Description</p>
          <p className='cursor-pointer dec'>Additional Information</p>
          <p className='cursor-pointer dec'>Reviews [5]</p>
        </div>
        <div className="product-0describe">
          <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
        <br />
        <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>    
        </div>
        <div className="detial-imges flex flex-wrap">
          <img src={detail.image} alt="" />
          <img src={detail.image} alt="" />
        </div>
      </div>
      <div className='related-product'>
            <p>Related Products </p>
            <Homeproduct />
            <div className="btnnn">
            <Link to='/shop'><button >Show More</button></Link>
        
      </div>
        </div> <hr className='mt-8'/>
      <Footer/>
      
    </div>
  )
}

export default Detail