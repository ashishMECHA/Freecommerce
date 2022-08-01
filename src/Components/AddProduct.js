import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { storage, auth, db } from '../firebaseConfigs/firebaseConfig'
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import './AddProduct.css'


const AddProduct = () => {
    const [producttitle, setProductTitle] = useState("")
    const [producttype, setProductType] = useState("")
    const [description, setDescription] = useState("")
    const [brand, setBrand] = useState("")
    const [customersupport, setCustomersupport] = useState("")
    const [price, setPrice] = useState("")
    const [warranty, setWarranty] = useState("")
    const [productimage, setProductImage] = useState("")

    const [successMsg, setsuccessMsg] = useState("")
  const [uploadError, setUploaderror] = useState("")
  const [imageError, setImageError] = useState("")

    
    function GetCurrentUser() {
        const [user, setUser] = useState("");
        const usersCollectionRef = collection(db, "users");
    
        useEffect(() => {
          auth.onAuthStateChanged((userlogged) => {
            if (userlogged) {
              const getUsers = async () => {
                const q = query(
                  collection(db, "users"),
                  where("uid", "==", userlogged.uid)
                );
                //  console.log(q)
                const data = await getDocs(q);
                setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
              };
              getUsers();
            } else {
              setUser(null);
            } 
          });
        }, []);
        return user;
      }
      const types =['image/jpg', 'image/png', 'image/jpeg', 'image/PNG']
      const handleProductImg = (e)=>{
        e.preventDefault();
        let selectedFile = e.target.files[0];

        if(selectedFile){
            if(selectedFile && types.includes(selectedFile.type)){
                setProductImage(selectedFile);
                setImageError('')    
            }
            else{
            setProductImage(null)
            setImageError('please select a valid image filetype(png/jpg)')
            }
        }
        else{
            setImageError('please select your file')
        }
    }


    const loggeduser = GetCurrentUser();

    const handleAddProduct = (e)=>{
        e.preventDefault();
        const storageRef = ref(storage, `product-images${producttype.toUpperCase()}/${Date.now()}`)

        uploadBytes(storageRef,productimage)
            .then(()=>{
                getDownloadURL(storageRef).then(url =>{
                   addDoc(collection(db,`products-${producttype.toUpperCase()}`),{
                    producttitle,
                    producttype,
                    description,
                    brand,
                    customersupport,
                    price,
                    warranty,
                    productimage: url

                   })
                })
            })
        

    }

  return (
      
    <div>
        <Navbar />
        {loggeduser && loggeduser[0].email == "thakurashish525@gmail.com" ?
         <div className='addprod-container'>
             <form className="addprod-form" onSubmit={handleAddProduct}>
                 <p>Add Data</p>
                 {successMsg && <div className="success-msg">{successMsg}</div>}
                 {uploadError && <div className="error-msg">{uploadError}</div>}
                 <label>Product Title</label>
                 <input type = "text" onChange={(e)=>{setProductTitle(e.target.value)}} placeholder="Product Title"/>
                 <label>Product Type</label>
                 <input type = "text" onChange={(e)=>{setProductType(e.target.value)}} placeholder="Product Type"/>
                 <label>Brand Name</label>
                 <input type = "text" onChange={(e)=>{setBrand(e.target.value)}} placeholder="Product Brand"/>
                 <label>Warranty</label>
                 <input type = "text" onChange={(e)=>{setWarranty(e.target.value)}} placeholder="Product Warranty"/>
                 <label>Image</label>
                 <input type = "file" onChange={handleProductImg} />
                 {imageError && <>
                    <div className="error-msg">{imageError}</div>
                 </>}
                 <label>Description</label>
                 <textarea onChange={(e)=>{setDescription(e.target.value)}} placeholder="Describe Product in brief"></textarea>
                 <label>Price Without Tax</label>
                 <input type = "text" onChange={(e)=>{setPrice(e.target.value)}} placeholder="Enter Price without Text"/>
                 <label>Customer Support</label>
                 <input type = "text" onChange={(e)=>{setCustomersupport(e.target.value)}} placeholder="Coustomer Support Email, Phone or address"/>

                 <button type = "submit">Add</button>
             </form>
         </div> : <div>You don't have access to add products</div>}
    </div>
  )
}

export default AddProduct