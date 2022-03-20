import emailjs from "@emailjs/browser";
import "./SendPages.css";
import Darkmode from "../../Darkmode/Darkmode";

export default function SendPage() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ur1udol",
        "template_jvqoifc",
        e.target,
        "ciStEv9LA4JcEzR1m"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className='inner-box SendContents'>
      <form onSubmit={sendEmail} className='boxContents'>
        <div>
          <p className='sendPageBoxTitle'>Write your information</p>
          <p>Name</p>
          <input
            type='text'
            className='form-control form-control-md '
            id='name'
            placeholder='Enter your name'
            name='name'
            required='required'
          />
          <p>email</p>
          <input
            type='text'
            className='form-control form-control-md'
            id='email'
            placeholder='Your email address'
            name='email'
            required='required'
          />
          <p>title</p>
          <input
            type='text'
            className='form-control form-control-md'
            id='discussion-title'
            placeholder='Enter the discussion title'
            name='subject'
            required='required'
          />
          <p>message</p>
          <textarea
            className='form-control textBox'
            name='message'
            id='message'
            style={{ height: 100 }}
            placeholder='Write your message'
            required='required'
          ></textarea>
          <br />
          <button type='submit' className='contact-button'>
            Send Message Now
          </button>
        </div>
      </form>
    </div>
  );
}
