import React from 'react';

export default function About() {
  return (
    <section className="section-about">
    <div className="title-box">
      <h2 className=" heading-secondary about__title">Proven Crowd Pleaser</h2>
        <h3 className="heading-tertiary">Walter Cosmopolis is a world-class entertainer.</h3>
    </div>
    <div className="row with-form">
      <p className="paragraph">Walter offers more than paltry banter and potty humor. Walter is comedian and minstrel, educator and mystic. With insightful eloquence, Walter speaks personally on topics ranging from Race to Religion, from Gender to Sex, and from Gentrification to Homelessness. Walter's performance transcends modern comedy's vaudevillian origins, breaking the viewer/spectacle barrier, evoking in the audience a crisis of identity and introspection.</p>

      <form action="mailto:hello@waltercosmopolis.com" method="get" enctype="text/plain">
        <label className="form-element">Name: 
          <input type="text" name="name"/>
        </label>
        <label className="form-element">Email: 
          <input type="text" name="email"/>
        </label>
        <label className="form-element">Comments:
          <textarea name="comments" rows="12" cols="35" placeholder="How can Walter help you?"></textarea>
        </label>
        <label className="form-element">Submit
          <input type="submit" name="submit" value="Send" />
        </label>
        <label className="form-element">Reset
          <input type="reset" name="reset" value="Clear Form" />
        </label>
      </form>
    </div>
  </section>
  )
}