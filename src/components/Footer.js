import React from 'react';
import bgVideomp4 from  "../images/walter-talent-show.mp4";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={bgVideomp4} type="video/mp4">
          </source>
          {/* <source src={bgVideowebm} type="video/webm">
          </source> */}
          Your Browser is not Supported!
        </video>
      </div>  
      <div className="email-form__container">
      <h3 className="heading-tertiary">Walter can help you, too!</h3>
        <form className="email-form">
          <label className="formEmail input-label" for="email">
            <input className="email-form__input" name="email" type="email" required="true" />
            email</label>
          <label className="formName input-label" for="formName">
            <input className="email-form__input" name="formName" type="text" />
            name</label> 
          <label className="input-label" for="message">
            <textarea className="formMessage email-form__input" name="message" />
            Message</label>
          <input classname="submit-button email-form__input" type="submit" value="Submit" />
        </form>
      </div>
      <p className="footer--text">All content Copyright &copy; 2019 Publikwerks, LLC</p>
    </footer>
  )
}