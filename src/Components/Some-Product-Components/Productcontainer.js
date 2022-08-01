import React from 'react'
import './Productcontainer.css'

const Productcontainer = (product) => {
    let overalltax = 10/100;
    let overallcommission = 10/100;
    let extraforfun = 10/100;

    let mrp = parseInt(product.product.price.replace(/,/g,''));
    mrp = mrp + overalltax*mrp + overallcommission*mrp + extraforfun*mrp
    const saleprice = mrp - extraforfun*mrp
  return (
      <div className='product-container'>
          <img class="product-image"src={product.product.productimage} />
    <div className='product-details'>
        <p className='producttitle'>{product.product.producttitle}</p>
        <div className='price-container'>
            <p className='mrp'>MRP: <p className='rate'>&#8377;{mrp.toFixed(2)}</p></p>
            <p className='saleprice'>Discount Price: <p className='rate'>&#8377;{saleprice.toFixed(2)}</p></p>
            <p className='yousave'>You Save: &#8377;{(mrp - saleprice).toFixed(2)}</p>
        </div>

        <div className='buy-cart'>
            <button className='btn'>Buy Now</button>
            <button className='btn'>Add to cart</button>
    </div>
      </div>
      </div>
    

  )
}

export default Productcontainer