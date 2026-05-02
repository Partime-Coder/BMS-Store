// import { useEffect, useState } from "react";
// import { getProductById } from "../../services/productServices/productService";

// export default function useProduct(id) {
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (!id) return;

//     setLoading(true);
//     setError("");

//     getProductById(id)
//       .then((data) => {
//         setProduct(data);
//       })
//       .catch((err) => {
//         setError(err.message);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, [id]);

//   return {
//     product,
//     loading,
//     error,
//   };
// }