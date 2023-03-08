import React from 'react'
import './Sliderproductcard.css'


const Sliderproductcard = (product) => {

let p = product.product;
  let overalltax = 10/100;
  let overallcommission = 10/100;
  let extraforfun = 10/100;

  let mrp = parseInt(p.price);
  mrp = mrp + overalltax*mrp + overallcommission*mrp + extraforfun*mrp
  const saleprice = mrp - extraforfun*mrp
  return (
    <div className='mini-product-container'>
        <div className='mini-img-container'>
            <img src={p.productimage} alt="" />
        </div>

        <div className="mini-product-details">
        <a href={`/product/${p.producttype}/${p.id}`}><button className="mini-producttitle">{p.producttitle}</button></a>

          <div className='mini-price-container'>
            <p className='mrp'>MRP: <p className='rate'>&#8377;{mrp}</p></p>
            <p className='saleprice'>Discount Price: <p className='rate'>&#8377;{saleprice}</p></p>
            <p className='yousave'>You Save: &#8377;{mrp - saleprice}</p>
        </div>

        <a href={`/product/${p.producttype}/${p.id}`}><button className="showmore-btn">More Details &gt;</button></a>
       
        </div>
    </div>
  )
}

export default Sliderproductcard