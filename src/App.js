import{BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Cart from './Components/Cart';
import UserProfile from './Components/UserProfile.js';
import AddProduct from './Components/AddProduct.js';
import PgFOF from './Components/PgFOF';
import Allproductpage from './Components/Some-Product-Components/Allproductpage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/userprofile" element={<UserProfile />} />
        <Route exact path="/sellproduct" element={<AddProduct />} />

        
        <Route exact path="/product-type/mobiles" element={<Allproductpage type={'Mobile'} />} />
        <Route exact path="/product-type/laptops" element={<Allproductpage type={'Laptop'} />} />
        <Route exact path="/product-type/cameras" element={<Allproductpage type={'Camera'} />} />
        




        <Route path="*" element={<PgFOF />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
