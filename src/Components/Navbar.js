import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
// import logo from '../Components/assets/logo.png'
import logo from '../Components/assets/logo-1.png'
import cartlogo from '../Components/assets/cart-icon-28356.png'
import profilelogo from '../Components/assets/person-icon-1671.png'
import { auth, db } from '../firebaseConfigs/firebaseConfig'
import { collection, getDocs, query, where } from 'firebase/firestore'
const Navbar = () => {
  const [cartData, setCartData] = useState([])
  const [loggeduser, setUser] = useState("");

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

    const navigate = useNavigate()
    const handleLogout = ()=>{
        auth.signOut().then(()=>{
            navigate("/login")
        })
    }

    if(loggeduser){
      const getCartData = async () => {
        const cartArray = [];
        const path = `cart-${loggeduser[0].uid}`
        getDocs(collection(db,path)).then((querySnapshot)=>{
          querySnapshot.forEach((doc)=>{
            cartArray.push({...doc.data(), id: doc.id})
          })
          setCartData(cartArray)
        }).catch('Error occured getting cart length')
      }
      getCartData()
    }

    
  return (
    <div className='wrapper'>
      <div className="navbar">
         <div className="leftContainer">
         <Link to='/'><img className="shoplogo" src= {logo} alt='logo' /></Link>    
         </div>
         <div className="RightContainer">
             {!loggeduser && <nav>
                 <Link to='/'><button>Home</button></Link>
                 <Link to='/signup'><button>Register</button></Link>
                 <Link to='/login'><button>Login</button></Link>

                 <div className="cart-btn">
                     <img src={cartlogo} className="cartlogo" alt='no img' />
                     <span className='cart-icon-css'>0</span>
                 </div>
                 <Link to='/userprofile'>
                     <img src={profilelogo} className='profile-icon' />
                 </Link>

                 </nav>}

                 {loggeduser &&
                 <nav>
                     <Link to='/'><button>Home</button></Link>
                     <Link to='/sellproduct'><button>Sell</button></Link>
                     <div className="cart-btn">
                     <Link to='/cartdata'>
                     <img src={cartlogo} className="cartlogo" alt='no img' />
                     </Link>
                     <span className='cart-icon-css'>{cartData.length}</span>
                 </div>
                 <Link to='/userprofile'>
                     <img src={profilelogo} className='profile-icon' />
                 </Link>
                 <button className='logout-btn' onClick={handleLogout}>Logout</button>
                 </nav>
                 
                 }
         </div>
      </div>
      <div className='product-types'>
        <a href='/product-type/mobiles'><button>Mobiles</button></a>
        <a href='/product-type/laptops'><button>laptops</button></a>
        <a href='/product-type/cameras'><button>Cameras</button></a>
      </div>
    </div>
  )
}

export default Navbar