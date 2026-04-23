import PRODUCTS from "../data.js"; 
import "./products.css";
import ProductCard from "./ProductCard/productcard.jsx";
import Navbar from "../../components/Navbar/navbar.jsx";  

function Products(){
    return(
      <div>
      <Navbar />
       <h1>Our Products</h1>
         <div className="product-card-conatainer">
          {PRODUCTS.map((product)=>{
            return  <ProductCard product={product} />;  
         })}  
       </div>
    </div>
    );
}
export default Products;