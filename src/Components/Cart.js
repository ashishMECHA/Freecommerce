import React,{useEffect,useState} from 'react'
import { doc } from 'firebase/firestore'
import { getDoc } from 'firebase/firestore'
import { auth,db } from '../firebaseConfigs/firebaseConfig'
import { collection, getDocs, query, where } from 'firebase/firestore'
import Navbar from './Navbar'
import CartCard from './cartCard'

const Cart = () => {
  const [user, setUser] = useState("");
  const [cartData, setCartData] = useState([])


  useEffect(()=>{
    const GetCurrentUser = async ()=> {     
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


  useEffect(()=>{
      getCartData()
  },[user])

  
    const getCartData = async () => {
      const cartArray = [];
      const path = `cart-${user[0].uid}`
      getDocs(collection(db,path)).then((querySnapshot)=>{
        querySnapshot.forEach((doc)=>{
          cartArray.push({...doc.data(), id: doc.id})
        })
       setCartData(cartArray)
      }).catch('Error occured getting cart length')
    } 

  {console.log("data--->"+cartData)}
  return (
    <div>
      <Navbar />
      {cartData ? <div>
        <div className='card-heading'>Your Cart Items</div>
        <div className='allcartitems'>
          {cartData.map((item)=>(
            <CartCard key={item.id} itemdata={item} userid={user[0].uid}/>
          ))}
        </div>
      </div>:<p>Cart is Empty</p>}
      
    </div>
  )
}

export default Cart