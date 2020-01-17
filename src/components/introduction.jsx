import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>Hi! <br />I'm Jordan</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://drive.google.com/open?id=1BndsgB1V1DQF6q1k5pz7B4ii0hkgnHGQ" target="_blank" rel="noopener noreferrer">View Software's CV <i className="icon-download4" /></a></p>
                          <p><a className="btn btn-primary btn-learn" href="https://drive.google.com/open?id=1xC9QxaONKhFNbwWVI6BdWJZt5BB044TY" target="_blank" rel="noopener noreferrer">View Mechanical's CV <i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>I love building<br /> THINGS !!</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://github.com/jordan621k" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
                          <p><a className="btn btn-primary btn-learn" href="https://jordan621k.github.io/SnowFinder/?fbclid=IwAR3KLPRGaNuQBQU5NYCjAU-ujZCCzDOiSueGkJR0wvCIMzqVFhiA716xYd4" target="_blank" rel="noopener noreferrer">Find Dat Snow <i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>I often <br/>film ... </h1>
                          <p><a className="btn btn-primary btn-learn" href="https://www.youtube.com/user/jordan621k/featured" target="_blank" rel="noopener noreferrer">View Vlog <i className="icon-book" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
