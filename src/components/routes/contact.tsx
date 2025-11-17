import React from 'react';
import '../styles/contact.css';
import { useState } from 'react';

function Contact () {
  
  const [email, setEmail] = useState("");
  
  function handleChange(e: { target: { value: React.SetStateAction<string>; }; }){
    setEmail(e.target.value);
  }

  function twilioEmail(e: any){
    e.preventDefault();
    if (email === ""){
      alert("Please enter a valid email");
    } else if (email !== ""){
      // do nothing for now
    }
  }

  return (
  <div className="container">
    <div>
      <h2>Unlock Exclusive Deals</h2>
      <p>Suscribe now for the best deals on tires and mechanic work</p>
      <form>
        <label>
          <p style={{ margin: '4px' }}>Email</p>
          <input className='emailInput' type="text" name="Email" placeholder='Email...' value={email} onChange={handleChange}/>
        </label>
      </form>
      <button className='suscribeButton' onClick={twilioEmail}>
        Subscribe
      </button>
    </div>
    <div>
      <h1>1. What We Do At Burnout Tire Shop?</h1>
      <h3>At Burnout Tire Shop, we buy, sell and change your tires. Our shop has 6 bays, open 7 days a week. There is no day we can't fit you in!</h3>
      <br></br>
      <h1>2. Does Burnout Tire Shop Only Work On Tires?</h1>
      <h3>
        No! Burnout Tire Shop has scoured the California Area for the most Qualified Mechanics to attend to your vehicle. Since we are a performance car shop,
        we have hired Mechanics from Porsche, Audi, Ford Performance, Shelby Motor Company, Lamborghini and many more!
      </h3>
      <br></br>
      <h1>3. Does Burnout Tire Shop Install Exhaust Systems?</h1>
      <h3>Yes! At Burnout Tire Shop, we feel it is essential to have a killer exhaust on your performance vehicle. We install everything from Borla, Akrapovic, Magnaflow and many more!</h3>
      <br></br>
      <h1>4. Does Burnout Tire Shop Tune Cars?</h1>
      <h3>
        Yes! We also the best tuners in the industry from all over the world. We have guys from Hondata, Lund Performance, Bimmer Tunes etc. 
        Each of our qualified tuners has years of experience tuning cars. You won't be disappointed.
      </h3>
      <br></br>
      <h1>5. Does Burnout Tire Shop Sell Warranties With Their Tunes?</h1>
      <h3>
        Yes! We do in fact sell warranties with our tunes. However, our warranty will only cover what was done by our team. If the customer has 
        in any shape or form modified the car further on their own. We will not honor the warranty. You will need to pay out of pocket for the damages
        you incurred on your vehicle. 
      </h3>
    </div>
  </div>
  )
}

export default Contact