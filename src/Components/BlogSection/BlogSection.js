import React from "react";
import "./BlogSection.css";
import post1 from "../../Assets/Images/main-post-img.png";
import post2 from "../../Assets/Images/post2.png";
import post3 from "../../Assets/Images/post3.png";
import post4 from "../../Assets/Images/post4.png";
import post5 from "../../Assets/Images/post5.png";

const BlogSection = () => {
  return (
    <div className="BlogSectionWrapper">
      <div className="BlogSectionTitlebar">
        <h2>Our Blog & Articles</h2>
        <button className="filledBtn">Read All Articles</button>
      </div>
      <div className="postsContainer">
        <div className="mainPost">
          <div className="post">
            <img src={post1} alt="post-img" />
            <div className="postContent">
              <p className="postDate">January 3, 2023</p>
              <p className="postTitle">
                The secret tips & tricks to prepare a perfect burger & pizza for
                our customers
              </p>
              <p className="postDescription">
                Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim
                semper adipiscing massa gravida nisi cras enim quis nibholm
                varius amet gravida ut facilisis neque egestas.
              </p>
            </div>
          </div>
        </div>
        <div className="miscPosts">
          <div className="post">
            <img src={post2} alt="post-img" />
            <div className="postContent">
              <p className="postDate">January 3, 2023</p>
              <p className="postTitle">
                How to prepare the perfect french fries in an air fryer
              </p>
            </div>
          </div>
          <div className="post">
            <img src={post3} alt="post-img" />
            <div className="postContent">
              <p className="postDate">January 3, 2023</p>
              <p className="postTitle">
                How to prepare delicious chicken tenders
              </p>
            </div>
          </div>
          <div className="post">
            <img src={post4} alt="post-img" />
            <div className="postContent">
              <p className="postDate">January 3, 2023</p>
              <p className="postTitle">
                7 delicious cheesecake recipes you can prepare
              </p>
            </div>
          </div>
          <div className="post">
            <img src={post5} alt="post-img" />
            <div className="postContent">
              <p className="postDate">January 3, 2023</p>
              <p className="postTitle">
                5 great pizza restaurants you should visit this city
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
