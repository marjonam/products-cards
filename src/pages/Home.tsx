import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { TextField, Box } from "@mui/material";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box p={2}>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        sx={{ mb: 4 }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <Box
        display="grid"
        gridTemplateColumns={{
          xs: "1fr",
          sm: "1fr 1fr",
          md: "1fr 1fr 1fr",
          lg: "1fr 1fr 1fr 1fr",
        }}
        gap={3}
      >
        {filteredProducts.map((product) => (
          <Box key={product.id}>
            <ProductCard product={product} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
