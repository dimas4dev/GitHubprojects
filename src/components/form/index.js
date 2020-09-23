import React from "react";
import "./style.scss";

const Form = ({ handleChange, value, handleSubmit }) => (
  <section className="container">
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__input">
        <img src="https://www.flaticon.com/svg/static/icons/svg/2111/2111425.svg" />
        <input type="text" value={value} onChange={handleChange} />
      </div>

      <button type="submit" value="Submit">
        <img src="../images/loupe" />
      </button>
    </form>
  </section>
);

export default Form;
