import React, { useState } from "react"
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'
const AddProduct=()=>{
    const [image, setImage] = useState(false)
    const imageHander = (e)=>{
        setImage(e.target.files[0])
    }
    const [productDetails, setproductDetails] = useState({
        name: "",
        image: "",
        category: "women",
        new_price: "",
        old_price: ""
    })
    const changeHandler = (e)=>{
        setproductDetails({...productDetails, [e.target.name]:e.target.value})
    }
    const Add_Product = async()=>{
        console.log(productDetails)
        let responseData
        let product = productDetails

        let formData = new FormData()
        formData.append('product', image)
        await fetch('http://localhost:4000/upload',{
            method: 'POST',
            headers:{
                Accept: 'application/json',
            },
            body:formData,
        }).then(response=>response.json())
        .then((data)=>{responseData=data})
        if(responseData.success){
            product.image = responseData.image_url
            console.log(product)
            await fetch('http://localhost:4000/addproduct', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(product),
            }).then((response)=>response.json()).then((data)=>{
                data.success?alert("Product added"):alert("add failed")
            })
        }
    }
    return(
        <div className="add-product"> 
            <div className="addproduct-itemfield">
                <p>Product title</p>
                <input type="text" value={productDetails.name} onChange={changeHandler} name='name' placeholder="Type here" />
            </div>
            <div className="add-product-price">
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input type="text" value={productDetails.old_price} onChange={changeHandler} name='old_price' placeholder="Type here" />
                </div>
                <div className="addproduct-itemfield">
                    <p>OfferPrice</p>
                    <input type="text" value={productDetails.new_price} onChange={changeHandler} name='new_price' placeholder="Type here" />
                </div>
            </div>
            <div className="addproduct-itemfield">
                <p>Product Category</p>
                <select name="category" value={productDetails.category} onChange={changeHandler} className="add-product-selector">
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="kid">Kid</option>
                </select>
            </div>
            <div className="addproduct-itemfield">
                <label htmlFor="file-input">
                    <img src={image?URL.createObjectURL(image):upload_area} className="addproduct-thumnail-img" alt="" />
                    <input onChange={imageHander} type="file" name='image' id='file-input' hidden/>
                </label>
            </div>
            <button onClick={()=>{Add_Product()}} className="addproduct-btn">ADD</button>
        </div>
    )
}

export default AddProduct