import { Outlet } from "react-router-dom";
import { AppBar, Container } from "@mui/material";
import { styled } from "@mui/system";

const CustomAppBar = styled(AppBar)({
  backgroundImage: "url(https://junlu.co/images/ELC-NewLogo.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
});

export default function MainLayout() {
  return (
    <>
      <CustomAppBar position="static"></CustomAppBar>
      <Container sx={{ mt: 4 }}>
        <Outlet />
      </Container>
    </>
  );
}
