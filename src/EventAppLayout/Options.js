import React from "react";
import "./Options.css";

function Options() {
  return (
    <>
      <section className="options">
        <section className="innerOptions">
          <div id="music">
            <button>
              <i class="fa-solid fa-music"></i>
            </button>
            <p>Music</p>
          </div>
          <div id="nightlife">
            <button>
              <i class="fa-solid fa-moon"></i>
            </button>
            <p>Nightlife</p>
          </div>
          <div>
            <button>
              <i class="fa-solid fa-masks-theater"></i>
            </button>

            <p>Performing and Visual Arts</p>
          </div>
          <div>
            <button>
              <i class="fa-solid fa-mug-hot"></i>
            </button>
            <p>Holidays</p>
          </div>
          <div>
            <button>
              <i class="fa-solid fa-hand-holding-heart"></i>
            </button>
            <p>Dating</p>
          </div>
          <div>
            <button>
              <i class="fa-solid fa-palette"></i>
            </button>
            <p>Hobbies</p>
          </div>
          <div>
            <button>
              <i class="fa-solid fa-business-time"></i>
            </button>
            <p>Business</p>
          </div>
          <div>
            <button>
              <i class="fa-solid fa-utensils"></i>
            </button>
            <p>Food and Drink</p>
          </div>
        </section>
      </section>
    </>
  );
}

export default Options;
