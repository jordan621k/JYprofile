/* eslint-disable no-lone-blocks */
import React, { Component } from 'react'

export default class Skills extends Component {
    render() {
      return (
        <div>
          <section className="colorlib-skills" data-section="skills">
          <div className="colorlib-narrow-content">
                  <div className="row">
                      <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                          <span className="heading-meta">What I do?</span>
                          <h2 className="colorlib-heading animate-box">Here are some of my expertise</h2>
                      </div>
                  </div>
                  <div className="row row-pt-md">
                  <div className="col-md-4 text-center animate-box">
                      <div className="services color-1">
                      <span className="icon">
                          <i className="icon-bulb" />
                      </span>
                      <div className="desc">
                          <h3>Software Development </h3>
                          <p>I have experience building websites using JavaScript, React, Vue, HTML, CSS</p>
                      </div>
                      </div>
                  </div>
                  <div className="col-md-4 text-center animate-box">
                      <div className="services color-3">
                      <span className="icon">
                          <i className="icon-calculator" />
                      </span>
                      <div className="desc">
                          <h3>Mechanical Design</h3>
                          <p>As coming from the ME background, I have good grasp over fundamental concepts of machinery design and DFM</p>
                      </div>
                      </div>
                  </div>
                  <div className="col-md-4 text-center animate-box">
                      <div className="services color-5">
                      <span className="icon">
                          <i className="icon-device-desktop" />
                      </span>
                      <div className="desc">
                          <h3>3D Modeling</h3>
                          <p>As a Mechanical Designer and have knowledge creating 3D models, shop assembly drawings and detail drawings </p>
                      </div>
                      </div>
                  </div>
                  </div>
              </div>
          </section>
        </div>
      )
    }
  }
  