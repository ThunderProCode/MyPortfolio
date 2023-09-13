import React from 'react';
import classes from './Projects.module.css';
import restaurant from '../images/restaurant.jpg';
import rickandmorty from '../images/rickandmorty.jpg';
import weather from '../images/weatherapp.jpg';
import todo from '../images/todoapp.jpg';
import tictactoe from '../images/tictactoe.jpg';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

// Web projects
const cardItem = [
  {
    link: 'https://github.com/ThunderProCode/CS-1400-Final-Project',
    title: 'TCP Protocol Tic Tac Toe',
    techStack: '.net',
    desc: 'The project is a C# console-based Tic Tac Toe game with a client-server architecture. The game allows two players to play against each other, with both players acting as clients that connect to a local server.',
    image: tictactoe
  },
  {
    link: 'https://thunderprocode.github.io/Gericht-Restaurant/',
    title: 'Restaurant Landing Page',
    techStack: 'React',
    desc: 'Discover an immersive interface, seamless navigation, and enticing visuals that invite users to explore the restaurant.',
    image: restaurant
  },
  {
    link: 'https://rick-and-morty-rho-five.vercel.app/',
    title: 'Rick and Morty Characters',
    techStack: 'React',
    desc: 'This React App Connects to the Rick and Morty API, allowing users to search and discover character info effortlessly.',
    image: rickandmorty
  },
  {
    link: 'https://thunderprocode.github.io/Weather-App/',
    title: 'Weather App',
    techStack: 'React, Bootstrap',
    desc: 'This React app connects to a weather API, and users can easily search and access real-time weather data for any city worldwide.',
    image: weather
  },
  {
    link: 'https://thunderprocode.github.io/Todo-App/',
    title: 'Todo-List',
    techStack: 'React, Bootstrap',
    desc: 'Stay organized and productive with this feature-rich React Todo List app! Seamlessly manage your tasks with the ability to add, remove, update, and mark todos as completed.',
    image: todo
  }
];

export default function Projects() {
  const getProjectCard = (cardItem) => {
    return (
      <li>
        <a href={cardItem.link} className={classes.card} target='_blank'>
          <img src={cardItem.image} className={classes.card__image} alt='' />
          <div className={classes.card__overlay}>
            <div className={classes.card__header}>
              <svg className={classes.card__arc} xmlns='http://www.w3.org/2000/svg'>
                <path />
              </svg>
              <div className={classes.card__header_text}>
                <h3 className={classes.card__title}>{cardItem.title}</h3>
                <span className={classes.card__status}>{cardItem.techStack}</span>
              </div>
            </div>
            <p className={classes.card__description}>{cardItem.desc}</p>
          </div>
        </a>
      </li>
    );
  };

  return (
    <div className={classes.box} id='projects'>
      <ScrollAnimation
        offset={0}
        animateIn='fadeInLeft'
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      >
        <span className={classes.head}>MY WORK</span>
        <h2 className={classes.heading}>PROJECTS</h2>
        <ul className={classes.cards}>
          {cardItem.map((item) => {
            return getProjectCard(item);
          })}
        </ul>
      </ScrollAnimation>
    </div>
  );
}
