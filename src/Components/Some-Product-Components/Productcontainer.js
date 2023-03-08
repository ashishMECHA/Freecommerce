import React from 'react'
import './Productcontainer.css'

const Productcontainer = (product) => {
    let p = product.product;
    // console.log(p)
    let overalltax = 10/100;
    let overallcommission = 10/100;
    let extraforfun = 10/100;

    


    let mrp = parseInt(p.price);
    mrp = mrp + overalltax*mrp + overallcommission*mrp + extraforfun*mrp
    const saleprice = mrp - extraforfun * mrp
  return (
      <div className='product-container'>
          <img class="product-image"src={p.productimage} alt={p.producttitle} />
    <div className='product-details'>
    <a href={`/product/${p.producttype}/${p.id}`} ><button className='producttitle'>{p.producttitle}</button></a>

        <div className='price-container'>
            <p className='mrp'>MRP: <p className='rate'>&#8377;{mrp}</p></p>
            <p className='saleprice'>Discount Price: <p className='rate'>&#8377;{saleprice}</p></p>
            <p className='yousave'>You Save: &#8377;{(mrp - saleprice)}</p>
        </div>

        <div className='buy-cart'>
            {/* <button className='btn'>Buy Now</button>
            <button className='btn'>Add to cart</button> */}
            <a href={`/product/${p.producttype}/${p.id}`} >
                <button className=''>More Details</button>
            </a>
    </div>
      </div>
      </div>
    

  )
}

export default Productcontainer