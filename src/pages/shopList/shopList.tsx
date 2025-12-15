import "./shopList.css";
import { PaymentDiv } from "../../components";
import { useAppSelector } from "../../app/hooks";
import { ProductBasket } from "../../components";
export default function ShopList() {
  const product = useAppSelector((state) => state.userProduct.product);
  const totalSum = useAppSelector((state) => state.userProduct.subtotal);

  return (
    <main className="main-shop-list">
      {product?.length != 0 ? (
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
            <section className="main-product__things">
              {product.map((elem) => {
                return <ProductBasket thing={elem} key={elem.id} />;
              })}
            </section>
          </section>
          <section className="main-total-sum">
            <div className="main-total__title">
              <p className="main-product__table-text right-table">Cart Total</p>
            </div>
            <section className="main-total__payment">
              <PaymentDiv title="SUBTOTAL" sum={totalSum} />
              <PaymentDiv title="DISCOUNT" sum={"---"} />
              <PaymentDiv title="TOTAL" sum={totalSum} />
            </section>
          </section>
        </div>
      ) : (
        <p className="main-shop__not-add">
          Your basket is empty. Add something from shop page
        </p>
      )}
    </main>
  );
}
