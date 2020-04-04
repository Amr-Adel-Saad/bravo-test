import React from 'react';

import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__contact">
        <div>
          <a href="#"><img src="/Group 479.svg" alt="facebook" /></a>
          <a href="#"><img src="/Group 478.svg" alt="instagram" /></a>
          <a href="#"><img src="/Group 477.svg" alt="linkedIn" /></a>
          <a href="#"><img src="/Group 476.svg" alt="youtube" /></a>
          <a href="#"><img src="/Group 475.svg" alt="twitter" /></a>
        </div>
        <a href="#"><img style={{ marginLeft: "-9px" }} src="/Group 480.png" alt="message" /></a>
      </section>
      <section className="footer__copyright">
        <div><img src="/bravo-9-1.svg" alt="bravo" /></div>
        <div>
          <img src="/Image 3.png" alt="powered-by" />
          <small>All rights reserved &copy; 2020</small>
        </div>
      </section>
      <Form className="footer__newsletter">
        <FormGroup>
          <h3>Newsletter</h3>
          <Label for="email">Enter your email to get all new about bankruptcy</Label>
          <div className="footer__newsletter--user-input d-flex">
            <Input type="email" id="email" placeholder="Write your email" />
            <Button>Join</Button>
          </div>
        </FormGroup>
      </Form>
    </footer>
  );
}

export default Footer;