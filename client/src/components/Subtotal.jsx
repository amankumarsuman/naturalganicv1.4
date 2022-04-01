import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./stateProvider/StateProvider";
import { getBasketTotal } from "./stateProvider/reducer";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";

function Subtotal() {
  const navigate = useNavigate();
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"RS "}
      />

      <button onClick={(e) => navigate.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
