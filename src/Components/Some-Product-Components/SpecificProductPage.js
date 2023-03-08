import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar'
import { doc } from 'firebase/firestore'
import { getDoc } from 'firebase/firestore'
import { auth,db } from '../../firebaseConfigs/firebaseConfig'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { addDoc } from 'firebase/firestore'
import './SpecificProductPage.css';
import ProductSlider from './ProductSlider'

const SpecificProductPage = () => {
    const{type, id} = useParams()
    const[product, setProduct] = useState('');
    const [successMsg, setsuccessMsg] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    const [user, setUser] = useState("");

   
    useEffect(()=>{
      GetCurrentProduct()
    },[])

    
      
    
    
function GetCurrentProduct(){
    const getProduct = async()=>{
      const docRef = doc(db, `products-${type.toUpperCase()}`, id);
      const docSnap = await getDoc(docRef);
      setProduct(docSnap.data())
    }
    getProduct();
}

    
useEffect(()=>{

  const GetCurrentUser = async ()=> {
    // const usersCollectionRef = collection(db, "users");
    
      auth.onAuthStateChanged((userlogged) => {
        if (userlogged) {
          const getUsers = async () => {
            const q = query(
              collection(db, "users"),
              where("uid", "==", userlogged.uid)
            );
            const data = await getDocs(q);
            setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            
          };
          getUsers();
        } else {
          setUser(null);
        } 
      });
  }
 GetCurrentUser();


},[])
    
    // async function getUser(){
    //   const User = await GetCurrentUser();
    //   setLoggedUser(User);
    //   console.log(User)
    // }
    // getUser();
    

    let overalltax = 10/100;
    let overallcommission = 10/100;
    let extraforfun = 10/100;
    let mrp = parseInt(product.price);
    mrp = mrp + overalltax*mrp + overallcommission*mrp + extraforfun*mrp
    const saleprice = mrp - extraforfun*mrp

    const addToCart = () => {
      if(user){
        // console.log(user[0])
        addDoc(collection(db, `cart-${user[0].uid}`),{  
          product, quantity:1
        }).then(()=>{
          setsuccessMsg('Product added to cart')
        }).catch((error) => {setErrorMsg(error.message) });
      } 
      else{
        setErrorMsg('You need to login first')
      }
    }
    
  return (
    <div>
        <Navbar/>
        
        {product ? 
        <div className='cont'>
        <div className='myprod-container'>
            <img src={product.productimage} className="prod-img-cont" alt="image" />
            <div className='buttons'>
          <button onClick={()=>{addToCart()}}>ADD TO CART</button>
          <button className='buynow'>BUY NOW</button>
        </div>
        {successMsg && <>
            <div className="success-msg">
              {successMsg}
              </div></>}
          {errorMsg && <>
          <div className='error-msg'>
            {errorMsg}
            </div></>}
        </div>
        <div className='right-container'>
        <p className='product-title'>{product.producttitle}</p>
        <div className='price-cont'>
            <p className='p1'>MRP: <span className='rate'>&#8377;{mrp}</span></p>
            <p className='p2'>Discount Price: <span className='rate'>&#8377;{saleprice}</span></p>
            <p className='p3'>You Save: &#8377;{(mrp - saleprice)}</p>
        </div>
        <div className="details">
        <p className="details-heading">Details</p>
        <p>{product.description}</p>
        </div>
        
        </div>
        </div>
        : <div>loading...</div>}
        <div className='slider-section'>
        <p className='prod-details-head'>Similar Items</p>
        <ProductSlider type={type}/>
        </div>
        </div>
  )
}

export default SpecificProductPage