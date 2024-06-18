import React from "react";
import "./Footer.css";
import { TfiTwitterAlt } from "react-icons/tfi";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import FoodItem1 from "../../Assets/Images/food-item-1.png";
import FoodItem2 from "../../Assets/Images/food-item-2.png";
import FoodItem3 from "../../Assets/Images/food-item-3.png";
import FoodItem4 from "../../Assets/Images/food-item-4.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footerContainer">
          <div className="shortSummary">
            <div className="websiteLogo">
              <svg
                width="57"
                height="55"
                viewBox="0 0 57 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_8_1982)">
                  <path
                    d="M48.1694 0.803952C47.8608 0.62592 47.493 0.57519 47.1464 0.662861C46.7999 0.750533 46.5028 0.969467 46.3202 1.27175L36.6488 17.3632C36.5992 17.4466 36.5592 17.5352 36.5294 17.6273C35.4473 18.0213 34.4373 18.5849 33.5386 19.296C30.6082 14.4065 25.2389 11.3277 19.3731 11.3277C10.322 11.3277 2.95955 18.5484 2.93432 27.4318H0.800781L0.99155 28.9241C2.1017 37.5971 7.54786 45.1726 15.3786 49.1616V54.2827H35.5842C38.1454 54.2827 40.2291 52.2344 40.2291 49.7183V49.1623C48.0623 45.1714 53.506 37.5959 54.6186 28.9241L54.8094 27.4306H50.9565C50.9386 22.8964 47.978 19.0416 43.8599 17.5862L55.9263 6.18186C56.4629 5.67478 56.4802 4.83467 55.962 4.30763C55.8392 4.18216 55.6925 4.08167 55.5302 4.0119C55.3678 3.94214 55.1931 3.90447 55.0159 3.90104C54.8388 3.89762 54.6627 3.92851 54.4977 3.99195C54.3327 4.05539 54.182 4.15013 54.0543 4.27077L40.6131 16.9764C40.4925 16.9715 40.3725 16.9582 40.25 16.9582C40.1725 16.9582 40.098 16.9691 40.0217 16.9703L48.6457 2.62016C48.7359 2.47019 48.7951 2.30425 48.8199 2.13181C48.8448 1.95937 48.8348 1.78381 48.7906 1.61516C48.7464 1.4465 48.6687 1.28806 48.5621 1.14887C48.4556 1.00968 48.3221 0.892478 48.1694 0.803952ZM19.3725 13.9804C24.5399 13.9804 29.25 16.8374 31.5928 21.3135C30.7387 22.4673 30.1331 23.78 29.8131 25.1714C28.7392 20.4764 24.4697 16.957 19.3725 16.957C13.4851 16.957 8.69555 21.652 8.67032 27.4312H5.63524C5.65986 20.011 11.8112 13.9804 19.3725 13.9804ZM19.3725 22.5936C16.6463 22.5936 14.4279 24.7604 14.4026 27.4312H11.3719C11.3971 23.1146 14.9743 19.6103 19.3725 19.6103C23.7719 19.6103 27.3528 23.1146 27.3755 27.4312H24.3411C24.3171 24.7604 22.0986 22.5936 19.3725 22.5936ZM21.6383 27.4318H17.1066C17.1187 26.8488 17.3627 26.2936 17.7865 25.8851C18.2102 25.4766 18.78 25.2473 19.3737 25.2463C19.9672 25.2475 20.5366 25.4769 20.9599 25.8854C21.3832 26.2939 21.6267 26.8491 21.6383 27.4318ZM51.6974 30.0845C50.1965 37.793 44.874 44.3646 37.4974 47.5123H33.1743V50.1656H37.4685C37.3674 50.5819 37.1266 50.9526 36.7849 51.2183C36.4433 51.4839 36.0205 51.6289 35.5848 51.63H18.0802V50.1656H23.1442V47.5123H18.1128C10.7362 44.3664 5.41309 37.793 3.91094 30.0845H51.6974ZM37.9848 27.4318C37.9967 26.849 38.2404 26.294 38.6638 25.8855C39.0872 25.4771 39.6565 25.2476 40.25 25.2463C40.844 25.2468 41.4142 25.4759 41.8382 25.8845C42.2623 26.293 42.5064 26.8485 42.5183 27.4318H37.9848ZM40.25 19.6109C44.6512 19.6109 48.2334 23.1152 48.2568 27.4318H45.2205C45.1959 24.761 42.9768 22.5942 40.25 22.5942C37.5239 22.5942 35.3072 24.761 35.2826 27.4318H32.2494C32.274 23.1152 35.8512 19.6109 40.25 19.6109Z"
                    fill="white"
                  />
                  <path
                    d="M39.6741 42.9139C39.8901 42.9139 40.1086 42.8637 40.3098 42.7568C41.9591 41.8897 43.4065 40.6947 44.5598 39.248C45.7131 37.8012 46.5469 36.1345 47.0082 34.3539C47.0524 34.1848 47.0622 34.0088 47.037 33.8361C47.0118 33.6633 46.9522 33.4971 46.8614 33.347C46.7707 33.1969 46.6507 33.0659 46.5083 32.9615C46.3659 32.8571 46.2039 32.7813 46.0316 32.7385C45.8593 32.6957 45.6801 32.6867 45.5043 32.7121C45.3285 32.7374 45.1595 32.7967 45.007 32.8863C44.8545 32.976 44.7215 33.0943 44.6157 33.2346C44.5099 33.3748 44.4334 33.5342 44.3904 33.7035C44.0221 35.1266 43.356 36.4588 42.4345 37.6151C41.5131 38.7714 40.3565 39.7265 39.0384 40.4196C38.7726 40.5585 38.5618 40.7808 38.4395 41.051C38.3172 41.3213 38.2905 41.6239 38.3636 41.9108C38.4367 42.1976 38.6054 42.4522 38.8429 42.634C39.0804 42.8158 39.373 42.9143 39.6741 42.9139Z"
                    fill="white"
                  />
                  <path
                    d="M36.4059 45.0064C37.2903 45.0064 38.0072 44.3023 38.0072 43.4337C38.0072 42.5652 37.2903 41.8611 36.4059 41.8611C35.5216 41.8611 34.8047 42.5652 34.8047 43.4337C34.8047 44.3023 35.5216 45.0064 36.4059 45.0064Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_8_1982">
                    <rect
                      width="56"
                      height="55"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <p>Bistro Bliss</p>
            </div>
            <p>
              In the new era of technology we look a in the future with
              certainty and pride to for our company and.
            </p>
            <div className="socialMedia">
              <div className="iconContainer">
                <TfiTwitterAlt className="twitterIcon" />
              </div>
              <div className="iconContainer">
                <TiSocialFacebook className="facebookIcon" />
              </div>
              <div className="iconContainer">
                <IoLogoInstagram className="instaIcon" />
              </div>
              <div className="iconContainer">
                <FaGithub className="githubIcon" />
              </div>
            </div>
          </div>
          <div className="links">
            <ul className="pagesList">
              <li className="firstItem">Pages</li>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>Pricing</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>Delivery</li>
            </ul>
            <ul className="utilityList">
              <li className="firstItem">Utility Pages</li>
              <li>Start Here</li>
              <li>Styleguide</li>
              <li>Password Protected</li>
              <li>404 Not Found</li>
              <li>Licenses</li>
              <li>Changelog</li>
              <li>View More</li>
            </ul>
          </div>
          <div className="images">
            <p>Follow Us On Instagram</p>
            <div className="imageContainer">
              <img src={FoodItem4} alt="food-item" />
              <img src={FoodItem1} alt="food-item" />
              <img src={FoodItem2} alt="food-item" />
              <img src={FoodItem3} alt="food-item" />
            </div>
          </div>
        </div>
        <hr className="divider" />
        <div className="copyrightText">
          <p>Copyright &copy; 2024 Built by Amr Osama. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
