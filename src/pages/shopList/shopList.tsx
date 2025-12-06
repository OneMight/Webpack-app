import "./shopList.css";
import { PaymentDiv } from "../../components";
export function ShopList() {
  return (
    <main className="main-shop-list">
      <div className="main-tables">
        <section className="main-product-list">
          <div className="main-product__title">
            <p className="main-product__table-text">Product</p>
            <article className="main-product__header-table">
              <p className="main-product__table-text">Price</p>
              <p className="main-product__table-text">Quantity</p>
              <p className="main-product__table-text">Total</p>
            </article>
          </div>
          <section className="main-product__things"></section>
        </section>
        <section className="main-total-sum">
          <div className="main-total__title">
            <p className="main-product__table-text right-table">Cart Total</p>
          </div>
          <section className="main-total__payment">
            <PaymentDiv title="SUBTOTAL" sum={400} />
            <PaymentDiv title="DISCOUNT" sum={"---"} />
            <PaymentDiv title="TOTAL" sum={400} />
          </section>
        </section>
      </div>
    </main>
  );
}
