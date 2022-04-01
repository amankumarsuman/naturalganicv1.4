import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./stateProvider/StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }] = useStateValue();

  function check(ary, checkValue) {
    for (let item = 0; item <= ary.length; item++) {
      console.log(item, checkValue, item.id === checkValue.id, "checkingId");
      if (ary[item]?.id === checkValue.id) {
        return true;
      }
    }
    return false;
  }
  function myFunc(obj) {
    return obj.reduce(function (acc, item) {
      if (check(acc, item)) {
        acc.forEach((element) => {
          if (element.id === item.id) {
            element.quantity += 1;
          }
        });
      } else {
        acc.push({ ...item, quantity: 1 });
      }

      return acc;
    }, []);
  }

  const checking = myFunc(basket);

  console.log(checking, "check");
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://th.bing.com/th/id/R.e960d1d667d6d6c89227b8abe23ec905?rik=mlE6VB7C9z%2fDsQ&riu=http%3a%2f%2fblog.kulikulifoods.com%2fwp-content%2fuploads%2f2014%2f11%2forganic-zone.jpg&ehk=3F9AGtSempORgV474BOK1z%2f1JVD1fGM8SjDOFwxkrxs%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
          alt=""
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {checking.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={`${item.price} ${" "} X ${" "}${
                item.quantity
              }${" "}= ${" "}${item.price * item.quantity}`}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export { Checkout };
