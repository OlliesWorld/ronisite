import React from 'react';
import "animate.css/animate.min.css";
// import Fade from 'react-reveal/Fade';
// import {Animated} from "react-animated-css";

  function GamePage() {
  

  return(
    
      <section className="wrapper style1">
        <h2 className="align-center">JavaScript Games</h2>
      <div className="container">
           
      <div className="btn">
      
        <a href="https://catch-an-ollie.netlify.app/" target="blank"><h3>Catch-an-Ollie</h3></a>
       
     </div>
       
     <div className="btn">
     
            <a href="https://olliesworld.rocks/games/match/index.html" target="blank"> <h3>Match Game</h3></a>
         
        </div>
            
        <div className="btn">
        
            <a href="https://olliesworld.rocks/games/connect-four/index.html" target="blank"><h3>Connect Four</h3></a>
           
        </div>
            
        <div className="btn">
        
            <a href="https://olliesworld.rocks/games/snake/index.html" target="blank"><h3>Snake Game</h3></a>
            
        </div>
        <div className="btn">
            <a href="https://goofy-villani-10eb4f.netlify.app/" target="blank"><h3>Rock, Paper, Scissors</h3></a>
          
        </div>
        <div className="btn">
        
                <a href="https://olliesworld.rocks/games/magic/index.html" target="blank"><h3>Magic 8 Ball</h3></a>
  
        </div>
         
      </div>
      </section>
     
)};
export default GamePage;