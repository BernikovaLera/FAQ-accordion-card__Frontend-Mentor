import React from "react";
import { Book } from "./questions";

import './index.css';
import mobile from "./images/illustration-woman-online-mobile.svg"
import desktop from "./images/illustration-woman-online-desktop.svg"

const App = () => {
  return (
    <div className="dashboard">
      <article>
        <picture>
          <source media="(min-width: 340px)" srcSet={desktop}/>
          <img srt={mobile} alt=""/>
        </picture>
      </article>
      <article >
      <h1>FAQ</h1>
        <Book name="How many team members can I invite?"  
        questions="You can invite up to 2 additional users on the Free plan. There is no limit on 
        team members for the Premium plan." />
        <Book name="What is the maximum file upload size?" 
        questions="No more than 2GB. All files in your account must fit your allotted storage space." />
        <Book name="How do I reset my password?" 
        questions="Click “Forgot password” from the login page or “Change password” from your profile page.
        A reset link will be emailed to you." />
        <Book name="Can I cancel my subscription?" 
        questions="Yes! Send us a message and we`ll process your request no questions asked." />
        <Book name="Do you provide additional support?" 
        questions="Chat and email support is available 24/7. Phone lines are open during normal business hours." />
      </article>
    </div>
  );
};

export default App;
