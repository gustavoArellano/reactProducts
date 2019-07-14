import React from "react";
import productData from "./vschoolProducts"
import Product from "./Product"

// ***************BY PUTTING IN ITEM, IT GRABS ALL THE DATA FROM THE VSCHOOLPRODCUTS FILE***************
const App = () => {
  const productComponents = productData.map((item) => {
    return (
      <Product key={item.id} product={item}/>
    )
  })
  return (
    <div>
      {productComponents}
    </div>
  )
}

export default App