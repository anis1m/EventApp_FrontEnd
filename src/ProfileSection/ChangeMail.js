import React from "react";
import "./ChangeMail.css";
import AccountFooter from "./AccountFooter";

function ChangeMail() {
  return (
    <>
      <section className="changemail">
        <main className="insidechangemail">
          <aside>
            <h1>Change Mail</h1>
          </aside>
          <aside>
            <h2>Account Email Address</h2>
            <p>dummymail@gmail.com</p>
            <button>Change</button>
          </aside>
        </main>
      </section>
      <AccountFooter />
    </>
  );
}

export default ChangeMail;
