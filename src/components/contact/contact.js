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
              <div>phone</div>
              <div>email</div>
              <div>github</div>
              <div>linkedin</div>
              <div>instagram</div>
              <div>facebook</div>
            </div>
            <div className='contact__paragraphText'>
              <div>808.753.3247</div>
              <div>terentaniuchi@gmail.com</div>
              <div>github.com/terenitup</div>
              <div>linkedin.com/in/terentaniuchi</div>
              <div>@teren_itup | @kei_designs | @foodlakecity</div>
              <div>facebook.com/terent</div>
            </div>
          </div>
        </div>
        
        <div className='contact__form'> 
          <Form onSubmit={fields => this.onSubmit(fields)} />
        </div>
        <div className='contact__formOutput'>
          <p>
            {JSON.stringify(this.state.fields, null, 2)}
          </p>
        </div>
        

      </div>
    );
  } 
}

export default Contact;