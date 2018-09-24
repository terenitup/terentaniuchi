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
            <div className='contact__paragraphHeading'>
              <div>
                <i class="fas fa-mobile-alt"></i>
                phone
              </div>
              <div><i class="far fa-envelope"></i>
                email
              </div>
              <div><i class="fab fa-github"></i>
                github
              </div>
              <div><i class="fab fa-linkedin-in"></i>
                linkedin
              </div>
              <div><i class="fab fa-instagram"></i>
                instagram
              </div>
              <div>
                <br></br>
                <br></br>
                <i class="fab fa-facebook-f"></i>
                facebook
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
                <a href="https://linked.com/in/terentaniuchi"
                  target="_blank">
                  linkedin.com/in/terentaniuchi                
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/teren_itup/"
                  target="_blank">
                  @teren_itup
                </a> 
                <a href="https://www.instagram.com/kei_designs/"
                  target="_blank"> 
                  <br></br>@kei_designs
                </a>
                <a href="https://www.instagram.com/foodlakecity/"
                  target="_blank"> 
                  <br></br>@foodlakecity
                </a>
              </div>
              <div>
                <a href="https://www.facebook.com/terent"
                  target="_blank">
                  facebook.com/terent
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* <div className='contact__form'> 
          <Form onSubmit={fields => this.onSubmit(fields)} />
        </div>
        <div className='contact__formOutput'>
          <p>
            {JSON.stringify(this.state.fields, null, 2)}
          </p>
        </div>
         */}

      </div>
    );
  } 
}

export default Contact;