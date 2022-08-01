import React from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


const Banner = () => {
   
  return (
    
       <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 h-5"
      src= "https://www.shahtechnologies.in/img/opencart-app-banner3web.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Buy Gadgets</h3>
      <p>Upto 60% off on all gadgets</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-5"
      src= "https://d2slcw3kip6qmk.cloudfront.net/marketing/press/images/template-gallery/banner-promotion-1200x400.jpeg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Buy women clothing</h3>
      <p>The Biggest Sale</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-5"
      src= "https://cdn3.notifyvisitors.com/blog/wp-content/uploads/2019/01/11064310/Top-5-Push-Notifications-Templates-For-Ecommerce-Website-banner1.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Friday Sale</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 
    
  )
}

export default Banner