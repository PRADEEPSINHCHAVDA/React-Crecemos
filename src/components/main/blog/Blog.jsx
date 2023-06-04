import "./BlogStyles.css";
import "./ResponsiveBlog.css";
import { PostBlog } from "./PostBlog/PostBlog";

import BlogPic1 from "../../../assets/blog_image_1.svg";
import BlogPic2 from "../../../assets/bloco_image_2.svg";
import BlogPic3 from "../../../assets/bloco_image_3.svg";
// import BlogPic4 from "../../../assets/bloco_image_4.svg";
import ProfilePic from "../../../assets/profile.jpg";

export const Blog = () => {
  return (
    <section className="blog">
      <div className="blogWrapper">
        <div className="topInfo">
          <h2>Read Our Blog</h2>
         
        </div>

        <div className="postsWrapper">
            <div className="postBtn">
            <button className="left">←</button>
            </div>
            
          <PostBlog
            src={BlogPic1}
            alt="alimento1"
            title="NEW TECHNOLOGY 1"
            profile={ProfilePic}
            name="fabio"
            author="Fabio de Andrade"
          />

          <PostBlog
            src={BlogPic2}
            alt="alimento2"
            title="NEW TECHNOLOGY 2"
            profile={ProfilePic}
            name="Rapha Gama"
            author="Raphael Gama"
          />

          <PostBlog
            src={BlogPic3}
            alt="alimento3"
            title="NEW TECHNOLOGY 3"
            profile={ProfilePic}
            name="MM"
            author="Marllon Maia"
          />

          {/* <PostBlog
            src={BlogPic4}
            alt="alimento4"
            title="How to get stronger without Gym"
            profile={ProfilePic}
            name="Will"
            author="Atevilson Freitas"
          /> */}
          <div className="postBtn">
            <button className="rigth">→</button>
            </div>
        </div>
      </div>
    </section>
  );
};
