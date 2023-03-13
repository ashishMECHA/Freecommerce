import React from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'


const Banner = () => {
   
  return (
    
//        <Carousel>
//   <Carousel.Item>
//     <img
//       className="d-block w-100 h-2"
//       src= "https://www.shahtechnologies.in/img/opencart-app-banner3web.jpg"
//       alt="First slide"
//     />
//     <Carousel.Caption>
//       <h3>Buy Gadgets</h3>
//       <p>Upto 60% off on all gadgets</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100 h-2"
//       src= "https://d2slcw3kip6qmk.cloudfront.net/marketing/press/images/template-gallery/banner-promotion-1200x400.jpeg"
//       alt="Second slide"
//     />

//     <Carousel.Caption>
//       <h3>Buy women clothing</h3>
//       <p>The Biggest Sale</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100 h-2"
//       src= "https://cdn3.notifyvisitors.com/blog/wp-content/uploads/2019/01/11064310/Top-5-Push-Notifications-Templates-For-Ecommerce-Website-banner1.jpg"
//       alt="Third slide"
//     />

//     <Carousel.Caption>
//       <h3>Friday Sale</h3>
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel> 

<div className='wrapper-container'>
    <div className='child-1'>
      <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      
    </div>
    <div className='child-2'>
      <img src="https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg" alt="buy laptops" />
 
    </div>

    <div className='child-3'>
    <div className='child-4'>
      <img src="https://images.pexels.com/photos/3497060/pexels-photo-3497060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="buy cameras" />
      
    </div>
    <div className='child-5'>
      <img src="https://images.unsplash.com/photo-1570222094114-d054a817e56b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=905&q=80" alt="buy Appliances" />
    </div>
    </div>
</div>

    
  )
}

export default Banner