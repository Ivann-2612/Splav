import React from 'react'

function Footer() {
    return (
      <div class="flex items-center justify-around bg-black">
        <div class="py-2 text-center items-center justify-start flex bg-black shadow-xl text-gray-700 flex-wrap">
          <span class="mr-6 mb-8">
            <p>Copyright by <span>Ivan Nikolic</span> &copy;2020</p>
          </span>
        </div>

        <div
          className="footer"
          class="py-6 text-center items-center justify-end flex bg-black shadow-xl text-gray-700 flex-wrap"
        >
          <span class="mr-6 mb-8">
            <i
              class="fab fa-twitter-square"
              style={{ fontSize: "32px", color: "blue" }}
            ></i>
          </span>
          <span class="mr-6 mb-8">
            <i
              class="fab fa-facebook-square"
              style={{ fontSize: "32px", color: "azureblue" }}
            ></i>
          </span>
          <span class="mr-8 mb-8" style={{ fontSize: "32px", color: "red" }}>
            <i class="fab fa-instagram"></i>
          </span>
        </div>
      </div>
    );
}

export default Footer
