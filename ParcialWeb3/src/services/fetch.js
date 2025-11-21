useEffect(() => {
  fetch("https://fakestoreapi.com/products?limit=20")
    .then(res => res.json())
    .then(data => dispatch(setProducts(data)));
}, [dispatch]);
