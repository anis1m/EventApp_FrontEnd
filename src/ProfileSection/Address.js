import React from "react";
import "./Address.css";

function Address({ address }) {
  return (
    <>
      <section className="address">
        <form className="multiform">
          <h1> {address} address</h1>

          <aside>
            <label>Address</label>
            <input type="text" required />
          </aside>
          <aside>
            <label>Address 2</label>
            <input type="text" />
          </aside>
          <aside>
            <label>City</label>
            <input type="text" required />
          </aside>

          <aside>
            <label>Country</label>
            <select required>
              <option value="" selected>
                Select Country
              </option>
              <option value="BD">Bangladesh</option>
              <option value="BR">Brazil</option>
              <option value="CD">Democratic Republic of the Congo</option>
              <option value="CN">China</option>
              <option value="CO">Colombia</option>
              <option value="EG">Egypt</option>
              <option value="ET">Ethiopia</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
              <option value="IN">India</option>
              <option value="ID">Indonesia</option>
              <option value="IR">Iran</option>
              <option value="IT">Italy</option>
              <option value="JP">Japan</option>
              <option value="KE">Kenya</option>
              <option value="KR">South Korea</option>
              <option value="MX">Mexico</option>
              <option value="MM">Myanmar</option>
              <option value="NG">Nigeria</option>
              <option value="PK">Pakistan</option>
              <option value="PH">Philippines</option>
              <option value="RU">Russia</option>
              <option value="ZA">South Africa</option>
              <option value="ES">Spain</option>
              <option value="TH">Thailand</option>
              <option value="TZ">Tanzania</option>
              <option value="TR">Turkey</option>
              <option value="GB">United Kingdom</option>
              <option value="US">United States</option>
              <option value="VN">Vietnam</option>
            </select>
          </aside>
          <div>
            <span>
              <label>Zip/Postal Code</label>
              <input type="number" required />
            </span>
            <span>
              <label>State</label>
              <input type="text" required />
            </span>
          </div>
        </form>
      </section>
    </>
  );
}

export default Address;
