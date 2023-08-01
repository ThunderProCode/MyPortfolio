import React, { Component } from 'react';
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

class About extends Component {
  render() {
    return (
      <div className={classes.box} id='about'>
        <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2.4}
          animateOnce={true}
          initiallyVisible={true}
        >
          <span className={classes.head}>ABOUT ME</span>
          <h2 className={classes.heading}>Who Am I?</h2>
          <div className={classes.About}>
            <p>
              My name is <b>Hector Acosta</b> {' '}
              <b>
                {' '}
                <a className={classes.link} target='_blank' href='https://www.springworks.in/'>
                  Snow College
                </a>
              </b>
              . I'm a passionate software engineering student at Snow College with an insatiable love for all things tech. 
              From a young age, I've been immersed in the world of technology, and my curiosity has only grown with time. 
              I thrive on learning new concepts and mastering the latest tools and languages. 
              My journey as a tech enthusiast has led me to embark on exciting projects, and I'm always eager to take on new challenges. :)
            </p>
            <p className={classes.br}>
            Through my portfolio, I aim to showcase my journey, experiences, and the innovative projects I've created along the way.
            Join me on this tech-filled adventure, and let's explore the endless possibilities together.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default About;
