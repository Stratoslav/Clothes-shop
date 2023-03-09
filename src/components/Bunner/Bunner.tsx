import "../../styles/home.scss";

const Banner = () => (
  <section className={"banner-home"}>
    <div className={"left-home"}>
      <p className={"content-home"}>
        NEW YEAR
        <span>SALE</span>
      </p>
      <button className={"more-home"}>See more</button>
    </div>

    <div
      className={"right-home"}
      style={{
        backgroundImage: `url(https://previews.123rf.com/images/starlena/starlena1902/starlena190200029/125455397-special-offer-mega-sale-banner-template-vector-design.jpg)`,
      }}
    >
      <p className={"discount-home"}>
        save up to <span>50%</span> off
      </p>
    </div>
  </section>
);

export default Banner;
