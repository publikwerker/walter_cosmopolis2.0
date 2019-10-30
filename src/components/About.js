import React from 'react';

export default function About() {
  return (
    <section className="section-about">
    <div className="title-box">
      <h2 className=" heading-secondary about__title">Proven Crowd Pleaser</h2>
        <h3 className="heading-tertiary">Walter Cosmopolis is a world-class entertainer.</h3>
    </div>
      <div className="row">
        <p className="paragraph">Walter offers more than paltry banter and potty humor. Walter is comedian and minstrel, educator and mystic. His performance transcends modern comedy's vaudevillian origins, breaking the viewer/spectacle barrier, evoking in the audience a crisis of identity and introspection.</p>
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
    </section>
  )
}