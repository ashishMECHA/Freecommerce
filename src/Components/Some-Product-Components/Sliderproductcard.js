import React from 'react'
import './Sliderproductcard.css'

const Sliderproductcard = (product) => {

  let overalltax = 10/100;
  let overallcommission = 10/100;
  let extraforfun = 10/100;

  let mrp = parseInt(product.product.price.replace(/,/g,''));
  mrp = mrp + overalltax*mrp + overallcommission*mrp + extraforfun*mrp
  const saleprice = mrp - extraforfun*mrp
  return (
    <div className='mini-product-container'>
        <div className='mini-img-container'>
            <img src={product.product.productimage} alt="" />
        </div>

        <div className="mini-product-details">
          <p className="mini-producttitle">{product.product.producttitle}</p>

          <div className='mini-price-container'>
            <p className='mrp'>MRP: <p className='rate'>&#8377;{mrp.toFixed(2)}</p></p>
            <p className='saleprice'>Discount Price: <p className='rate'>&#8377;{saleprice.toFixed(2)}</p></p>
            <p className='yousave'>You Save: &#8377;{(mrp - saleprice).toFixed(2)}</p>
        </div>

       <button className="showmore-btn">Show more &gt;</button>
        </div>
    </div>
  )
}

export default Sliderproductcard