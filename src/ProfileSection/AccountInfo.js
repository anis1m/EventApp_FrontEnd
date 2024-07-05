import React, { useEffect, useState } from "react";
import AccountNavigation from "./AccountNavigation";
import "./AccountInfo.css";
import AccountEdit from "./AccountEdit";

function AccountInfo() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("user") != null) {
      setEmail(JSON.parse(sessionStorage.getItem("user")));
    }
  }, []);
  return (
    <>
      <section className="accountinfo">
        <AccountNavigation email={email} />
        <AccountEdit />
      </section>
    </>
  );
}

export default AccountInfo;
