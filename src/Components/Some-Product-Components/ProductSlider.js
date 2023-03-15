import React, { useState, useEffect } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { db } from '../../firebaseConfigs/firebaseConfig';
import { collection, getDocs, query, onSnapshot } from 'firebase/firestore';
import Sliderproductcard from './Sliderproductcard';

function ProductSlider(props)  {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 605 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 605, min: 400 },
          items: 2
        },
        device: {
          breakpoint: { max: 400, min: 0 },
          items: 1
        }
      };



        const [products, setProducts] = useState([]);
        useEffect(() => {
            const getProducts =()=>{
            const productsArray = [];
            const path  = `products-${props.type.toUpperCase()}`;
            console.log(props)
        
            getDocs(collection(db,path)).then((querySnapshot)=>{
                querySnapshot.forEach((doc)=>{
                    productsArray.push({ ...doc.data(), id:doc.id })
                    // console.log(doc.id, "=>", doc.data());
                });
                setProducts(productsArray)
            }).catch('error')
            }
            getProducts();
        }, [])


  return (
    <div>
        <Carousel responsive={responsive}>
            {products.map((product)=>
            <Sliderproductcard key={product.id} product= {product} />
            )}
        </Carousel>
  </div>
  )
}

export default ProductSlider