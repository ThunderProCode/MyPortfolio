import React, { Component } from 'react';
import classes from './Education.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Education extends Component {
  render() {
    return (
      <div className={classes.box} id='education'>
        <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2}
          animateOnce={true}
          initiallyVisible={true}
        >
          <span className={classes.head}>MY JOURNEY</span>
          <section className={classes.container}>
            <div className={classes.container_content}>
              <div className={classes.row}>
                <div className={classes.row_md_12}>
                  <div className={classes.timeline_centered}>
                    <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                          <MdWork />
                        </div>
                        <div className={classes.label}>
                          <h2>
                            Experience <span>January(2018)-December(2022)</span>
                          </h2>
                          <p>
                            I had a role as <b>Audiovisuals lead</b> at{' '}
                            <a target='_blank' href='https://www.facebook.com/soyirg'>
                              <b>Iglesia Adventista de Rio Grande.</b>
                            </a>{' '}
                            <i>
                             I skillfully managed live transmissions of our worship services on popular platforms. Additionally, I took charge of creating compelling content for social media, amplifying the church's outreach and engagement.
                              I also oversaw and operated the church's audio and visual equipment during in-person gatherings.
                              I played a pivotal role in enhancing the church's multimedia ministry, leaving a positive impact on both local and digital communities, 
                            </i>{' '}
                            while boosting my professional skills.
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>
                    <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div className={classes.timeline_icon}>
                          <MdSchool />
                        </div>
                        <div className={classes.label}>
                          <h2>
                          Software Engineering Student <span>January(2023) - Now</span>
                          </h2>
                          <p>
                          Currently enrolled as a passionate Software Engineering student at Snow College, I have nurtured a long-standing love for all things software-related. With an insatiable curiosity and a drive to learn, I eagerly embrace every opportunity to expand my technical expertise and contribute to innovative projects in the tech world.
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>
                    {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}>
                          <FaSchool />
                        </div>
                        <div className={classes.label}>
                          <h2>
                            Higher Education <span>2014-2016</span>
                          </h2>
                          <p>
                            I have completed my higher education from HKIS with major subjects as
                            Physics,Chemistry & Maths with 85% merit in CBSE board.{' '}
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>

                    <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article>
                        <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}>
                          <MdWork />
                        </div>
                        <div className={classes.label}>
                          <h2>Internship</h2>
                          <p>
                            Completed one month Internship in React Js with Internity Foundation
                          </p>
                        </div>
                        <div className={classes.timeline_entry_inner}>
                          <div className={classes.timeline_icon_3 || classes.color_none}></div>
                        </div>
                      </article>
                    </ScrollAnimation> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Education;
