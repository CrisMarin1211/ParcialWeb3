// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setProducts, removeProduct } from "../redux/productSlice";
// import { addToCart } from "../redux/cartSlice";
// import { useNavigate } from "react-router-dom";
// import { RootState } from "../redux/store";

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   category: string;
//   description: string;
//   image: string;
// }

// function StorePage() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { products } = useSelector((state: RootState) => state.products);
//   const { role } = useSelector((state: RootState) => state.userAuth);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch("https://fakestoreapi.com/products?limit=20");
//         const data: Product[] = await response.json();
//         dispatch(setProducts(data));
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, [dispatch]);

//   return (
//     <div>
//       {role === "manager" && (
//         <button onClick={() => navigate("/admin/create")}>Crear Producto</button>
//       )}
//       <div className="product-grid">
//         {products.map((product: Product) => (
//           <div key={product.id} className="product-card">
//             <h3>{product.title}</h3>
//             <img src={product.image} alt={product.title} />
//             <p>${product.price}</p>
//             <p>{product.category}</p>
//             {role === "manager" ? (
//               <button onClick={() => dispatch(removeProduct(product.id))}>Eliminar</button>
//             ) : (
//               <button onClick={() => dispatch(addToCart(product))}>Agregar al Carrito</button>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default StorePage;


import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setProducts, removeProduct } from "../redux/productSlice";
import { addToCart } from "../redux/cartSlice";
import type { RootState, AppDispatch } from "../redux/store";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

function StorePage() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { products } = useSelector((state: RootState) => state.products);
  const { role } = useSelector((state: RootState) => state.auth);

 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products?limit=20");
        const data: Product[] = await response.json();
        dispatch(setProducts(data));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [dispatch]);

  const handleAddToCart = (product: Product) => {
    const cartItem: CartItem = {
      id: product.id,
      name: product.title,
      price: product.price,
      quantity: 1,
      image: product.image
    };
    dispatch(addToCart(cartItem));
  };

  return (
    <div>
      {role === "manager" && (
        <button onClick={() => navigate("/admin/create")}>Crear Producto</button>
      )}

      <div className="product-grid">
        {products.map((product: Product) => (
          <div key={product.id} className="product-card">
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} />
            <p>${product.price}</p>
            <p>{product.category}</p>

            {role === "manager" ? (
              <button onClick={() => dispatch(removeProduct(product.id))}>Eliminar</button>
            ) : (
              <button onClick={() => handleAddToCart(product)}>Agregar al Carrito</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default StorePage;
