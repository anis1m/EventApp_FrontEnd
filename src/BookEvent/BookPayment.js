import React, { useState } from "react";
import "./BookPayment.css";
import { useLocation } from "react-router-dom";

function BookPayment() {
  const query = new URLSearchParams(useLocation().search);
  const price = query.get("price");
  console.log(price);

  const [count, setCount] = useState(1);
  return (
    <>
      <section className="bookPayment">
        <div>
          <blockquote>
            <i class="fa-solid fa-indian-rupee-sign"></i>
            <h1>{price}</h1>
          </blockquote>

          <aside>
            <h2>No. of Tickets</h2>
            <mark>
              <i
                class="fa-solid fa-minus"
                onClick={() => {
                  if (count <= 1) {
                    setCount(1);
                  } else {
                    setCount(count - 1);
                  }
                }}
              ></i>
              <h1>{count}</h1>

              <i
                class="fa-solid fa-plus"
                onClick={() => {
                  setCount(count + 1);
                }}
              ></i>
            </mark>
          </aside>
        </div>
        <hr />
        <figure>
          <h1>TOTAL</h1>
          <blockquote>
            <i class="fa-solid fa-indian-rupee-sign"></i>
            <h1>{price * count}</h1>
          </blockquote>
        </figure>
        <hr />
        <button>Continue</button>
      </section>
    </>
  );
}

export default BookPayment;
