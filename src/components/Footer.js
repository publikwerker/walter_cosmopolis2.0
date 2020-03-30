import React from 'react';
import bgVideomp4 from  "../images/walter-talent-show.mp4";
import bgVideowebm from "../images/walter-talent-show.webm";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={bgVideomp4} type="video/mp4">
          </source>
          <source src={bgVideowebm} type="video/webm">
          </source>
          Your Browser is not Supported!
        </video>
      </div>  

{/*    <form action="mailto:hello@waltercosmopolis.com" method="get" enctype="text/plain">
      <p>Name: <input type="text" name="name"/></p>
      <p>Email: <input type="text" name="email"/></p>
      <p>Comments:</p>
        <textarea name="comments" rows = "12" cols = "35">How can Walter help you?</textarea>
      <p><input type="submit" name="submit" value="Send" />
        <input type="reset" name="reset" value="Clear Form" />
      </p>
  </form> */}

     <div className="email-form__container">
      <h3 className="heading-tertiary">Walter can help you, too!</h3>
        <form className="email-form">
          <label className="formEmail input-label" htmlFor="email">
            <input className="email-form__input" name="email" type="email" required={true} />
            email</label>
          <label className="formName input-label" htmlFor="formName">
            <input className="email-form__input" name="formName" type="text" />
            name</label> 
          <label className="input-label" htmlFor="message">
            <textarea className="formMessage email-form__input" name="message" />
            Message</label>
          <input className="submit-button email-form__input" type="submit" value="Submit" />
        </form>
      </div>
    
      <p className="footer--text">All content Copyright &copy; 2020 <a className="footer--text-link" href="https://www.publikwerks.com" target="_blank" rel="noopener noreferrer">Publikwerks, LLC.</a> <br />Wonder Walter images courtesy of <a className="footer--text-link" href="https://www.chelseapetrakis.com" target="_blank" rel="noopener noreferrer">Chelsea Petrakis</a>.</p>
    </footer>
  )
}