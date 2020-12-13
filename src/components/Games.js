import React from 'react';
import Catch from '../assets/images/catch.png';
import Match from '../assets/images/match-game.png';
import Connect from '../assets/images/connect.png';
import Snake from '../assets/images/snake.png';
import Rock from '../assets/images/rock.png';
import Magic from '../assets/images/magic.png';


// const panels = document.querySelectorAll('.panel')

// panels.forEach(panel => {
//     panel.addEventListener('click', () => {
//         removeActiveClasses()
//         panel.classList.add('active')
//     })
// })

// function removeActiveClasses() {
//     panels.forEach(panel => {
//         panel.classList.remove('active')
//     })
// }

const GamePage = () => (
    <>
      <section className="wrapper style6">
        <h2 className="align-center">JavaScript Games</h2>
      <div className="container">
       
        <div className="panel active" style={{backgroundImage: `url(${Catch})`}}>
            <h3>Catch-an-Ollie</h3>
           
            <a href="https://catch-an-ollie.netlify.app/" target="blank">Play</a>
        </div>

        <div className="panel active" style={{backgroundImage: `url(${Match})`}}>
            <h3>Ollie's Match Game</h3>
            <a href="https://olliesworld.rocks/games/match/index.html" target="blank">Play</a>
        </div>

        <div className="panel active" style={{backgroundImage: `url(${Connect})`}}>
            <h3>Connect Four</h3>
            
            <a href="https://olliesworld.rocks/games/connect-four/index.html" target="blank">Play</a>
        </div>

        <div className="panel active" style={{backgroundImage: `url(${Snake})`}}>
            <h3>Snake Game</h3>
          
            <a href="https://olliesworld.rocks/games/snake/index.html" target="blank">Play</a>
        </div>
        <div className="panel active" style={{backgroundImage: `url(${Rock})`}}>
            <h3>Rock, Paper, Scissors Game</h3>
          
            <a href="https://goofy-villani-10eb4f.netlify.app/" target="blank">Play</a>
        </div>
        <div className="panel active" style={{backgroundImage: `url(${Magic})`}}>
            <h3>Magic 8 Ball Game</h3>
          
            <a href="https://olliesworld.rocks/games/magic/index.html" target="blank">Play</a>
        </div>
        </div>
      </section>
      </>
);
export default GamePage;