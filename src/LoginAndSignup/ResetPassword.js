import React from "react";
import "./ResetPassword.css";

function ResetPassword() {
  return (
    <>
      <section className="resetPassword">
        <form>
          <input type="password" placeholder="Enter New Password" />
          <input type="password" placeholder="Enter New Password Again" />
          <button type="submit">Continue</button>
        </form>
      </section>
    </>
  );
}

export default ResetPassword;
