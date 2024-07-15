import React, { useEffect, useState } from "react";
import AccountNavigation from "./AccountNavigation";
import "./AccountInfo.css";
import AccountEdit from "./AccountEdit";

function AccountInfo() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (sessionStorage.getItem("user") != null) {
      setUserData(JSON.parse(sessionStorage.getItem("user")));
      console.log(userData);
    }
  }, []);
  return (
    <>
      <section className="accountinfo">
        <AccountNavigation email={userData.email} />
        <AccountEdit />
      </section>
    </>
  );
}

export default AccountInfo;
