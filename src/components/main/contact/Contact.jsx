import "./Styles.css";
import "./ResponsiveContact.css";
import ContactPic from "../../../assets/bloco_final_image.svg";

export const Contact = () => {
  return (
    <section className="contact">
      <div className="contatWrapper">
        <div className="leftContact">
          <div className="infosContact">
            <h2>Connect with us by providing your email  </h2>
            <div className="btnContact">
              <input type="text" placeholder="Enter your email"/>
              <button>Join</button>
            </div>
          </div>
        </div>
        <div className="rigthContact">
          <img src={ContactPic} alt="draw of two persons doing a hand shek" />
        </div>
      </div>
    </section>
  );
};
