import React from 'react';
export default function Form(){
  return (
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
  );
};