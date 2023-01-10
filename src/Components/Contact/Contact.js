import React from 'react'
import { ContactSection, ContactTitle, Span, Form, InputText, InputEmail, InputWidth100, TextArea, InputSubmit } from './style.js'
import Footer from '../Footer/Footer.js'
const Contact = () => {
  return (
    <>
      <ContactSection>
        <div className="container">
          <ContactTitle><Span>Drop </Span>Me A line</ContactTitle>
          <Form>
            <div className="form-input">
              <InputText type="text" placeholder="Your Name" />
              <InputEmail type="email" placeholder="Your Email" />
            </div>
            <InputWidth100 type="text" className="sub" placeholder="Your Subject" />
            <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
            <InputSubmit type="submit" value="Send Message" />
          </Form>
        </div>

      </ContactSection>
      <Footer />
    </>

  )
}

export default Contact