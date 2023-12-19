import { useEffect, useState } from "react";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  async function getProducts() {
    let products = await fetch('https://fakestoreapi.com/products');
    let productJson = await products.json();
    setProducts(productJson)
  }

  useEffect(() => {
    getProducts();
  })

  return (
    <div className="ProductListPage">
      {products.map((product) => (
        <div key={product.id}>
          <h1>{product.title}</h1>
          <div>
            <img src={product.image} />
          </div>
        </div>
      )
      )}
    </div>
  );
}

export default ProductListPage;
