import React, { Component } from "react";
import Form from "./form";


class Contact extends Component {

  state = {
    fields: {}
  };

  onSubmit = fields => {
    this.setState({ fields });
  };

  render() {
    return (
      <div className='contact'>
        
        <div className='contact__info'>
          <h1 className='contact__title'>CONTACT</h1>
          <div className='contact__paragraph'>
              
              <div className='contact__icons'>
                <div>
                  <i class="fas fa-mobile-alt"></i>
                </div>
                <div>
                  <i class="far fa-envelope"></i>
                </div>
                <div>
                  <i class="fab fa-github"></i>
                </div>
                <div>
                  <i class="fab fa-linkedin-in"></i>
                </div>
                <div>
                  <i class="fab fa-facebook-f"></i>
                </div>
                <div>
                  <i class="fab fa-instagram"></i>
                </div>
              </div>
              
              <div className='contact__icon-text'>
                <div>
                  phone
                </div>
                <div>
                  email
                </div>
                <div>
                  <a href="https://github.com/terenitup" 
                    target="_blank">
                    github
                  </a>
                </div>
                <div>
                  <a href="https://linkedin.com/in/terentaniuchi"
                    target="_blank">
                    linkedin
                  </a>
                </div>
                <div>
                  <a href="https://www.facebook.com/terent"
                    target="_blank">
                    facebook
                  </a>
                </div>
                <div>
                  instagram
                </div>
              </div>

            
            <div className='contact__paragraphText'>
              <div>808.753.3247</div>
              <div>terentaniuchi@gmail.com</div>
              <div>
                <a href="https://github.com/terenitup" 
                  target="_blank">
                  github.com/terenitup
                </a>
              </div>
              <div>
                <a href="https://linkedin.com/in/terentaniuchi"
                  target="_blank">
                  linkedin.com/in/terentaniuchi                
                </a>
              </div>
              <div>
                <a href="https://www.facebook.com/terent"
                  target="_blank">
                  facebook.com/terent
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/teren_itup/"
                  target="_blank">
                  @teren_itup
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/kei_designs/"
                  target="_blank"> 
                  @kei_designs
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/foodlakecity/"
                  target="_blank"> 
                  @foodlakecity
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  } 
}

export default Contact;