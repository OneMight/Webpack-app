import Button from "../../components/button/button";
import "./statisticOnMain.css";
const StatisticOnMain = () => {
  return (
    <div className="statistic-div">
      <div className="statistic-container">
        <div className="statistic-direct">
          <h2 className="statistic-title">
            Have a Look at Our Unique Selling Proportions
          </h2>
          <Button
            children="Read more"
            textColor="#000"
            backgroundColor="#fff"
            borderRadius="30px"
            fontSize="20px"
            padding="5px 10px"
            width="150px"
          />
        </div>
        <div className="statistic-desc">
          <p className="statistic-desc_title">
            Our solutions are designed for those who value quality and
            reliability. We offer products that help businesses grow faster,
            work more efficiently, and achieve better results. Each tool
            undergoes thorough testing to ensure its effectiveness and
            durability.
          </p>
          <section className="statistic-desc_section">
            <article className="statistic-desc_article">
              <h2 className="statistic-desc_article-title">99%</h2>
              <p className="statistic-desc_article-description">
                Clients report increased efficiency
              </p>
            </article>
            <article className="statistic-desc_article">
              <h2 className="statistic-desc_article-title">100%</h2>
              <p className="statistic-desc_article-description">
                Meeting standards and expectations
              </p>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
};
export default StatisticOnMain;
