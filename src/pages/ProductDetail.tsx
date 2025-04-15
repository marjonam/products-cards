import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Typography, CircularProgress } from "@mui/material";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <CircularProgress />;

  return (
    <Box
      sx={{
        display: "flex",
        gap: 4,
        alignItems: "start",
        fontFamily: "montserrat",
      }}
    >
      <img src={product.thumbnail} alt={product.title} width="500" />
      <Box>
        <Typography variant="h3" fontFamily={"monospace"}>
          {product.title}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          ${product.price}
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          {product.description}
        </Typography>
      </Box>
    </Box>
  );
}
