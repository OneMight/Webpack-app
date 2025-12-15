import Box from "@mui/material/Box";
import Button from "../../components/button/buttonUI";
import "./statisticOnMain.css";
import Typography from "@mui/material/Typography";
const StatisticOnMain = () => {
  return (
    <Box className="statistic-div">
      <Box className="statistic-container">
        <Box className="statistic-direct">
          <Typography component={"h2"} variant="h4" className="statistic-title">
            Have a Look at Our Unique Selling Proportions
          </Typography>
          <Button
            children="Read more"
            tint="#000"
            background="#fff"
            radius="30px"
            fontSize="20px"
            padding="5px 10px"
            width="150px"
          />
        </Box>
        <Box className="statistic-desc">
          <Typography component={"p"} className="statistic-desc_title">
            Our solutions are designed for those who value quality and
            reliability. We offer products that help businesses grow faster,
            work more efficiently, and achieve better results. Each tool
            undergoes thorough testing to ensure its effectiveness and
            durability.
          </Typography>
          <Box component={"section"} className="statistic-desc_section">
            <Box component={"article"} className="statistic-desc_article">
              <Typography
                component={"h2"}
                variant="h3"
                className="statistic-desc_article-title"
              >
                99%
              </Typography>
              <Typography
                component={"p"}
                className="statistic-desc_article-description"
              >
                Clients report increased efficiency
              </Typography>
            </Box>
            <Box component={"article"} className="statistic-desc_article">
              <Typography
                component={"h2"}
                variant="h3"
                className="statistic-desc_article-title"
              >
                100%
              </Typography>
              <Typography
                component={"p"}
                className="statistic-desc_article-description"
              >
                Meeting standards and expectations
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default StatisticOnMain;
