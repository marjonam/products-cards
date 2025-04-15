import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card sx={{ width: 250 }}>
      <CardMedia
        component="img"
        height="140"
        image={product.thumbnail}
        alt={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" noWrap>
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to={`/product/${product.id}`}>
          read more
        </Button>
      </CardActions>
    </Card>
  );
}
