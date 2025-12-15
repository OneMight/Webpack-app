import Box from "@mui/material/Box";
import PopularProductComp from "../../layouts/popularProductComp/popularProductComp";
import StatisticOnMain from "../../layouts/statisticOnMain/statisticOnMain";
import "./home.css";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
export default function HomePage() {
  return (
    <Stack component={"main"} direction={"column"} className="home-page">
      <Stack
        component={"div"}
        direction={"column"}
        className="home-page_entire-block"
      >
        <Box component={"section"} className="home-page_article">
          <Typography component={"h2"} variant="h3" className="home-page_title">
            Crafting Comfort, Redefining Spaces. Your Home, Your Signature
            Style!
          </Typography>
          <Typography className="home-page_text">
            We create spaces where quality and comfort are the norm. Our
            products help make your home more comfortable and your work more
            convenient. Choose items that will complement your style and last
            for years to come.
          </Typography>
        </Box>
      </Stack>
      <PopularProductComp />
      <StatisticOnMain />
    </Stack>
  );
}
