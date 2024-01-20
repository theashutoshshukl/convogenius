import "../assets/styles/contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact <span>ConvoGenius</span></h1>
      <p>Welcome to Convogenius, where intelligent conversations happen seamlessly! We are thrilled to hear from you and are here to assist with any inquiries or feedback you may have. Please feel free to reach out to us through the following channels:</p>
      <br />

      {/* General Inquiries */}
      <h3>General Inquiries:</h3>
      <p>Email: ashutoshshukl99@gmail.com</p>
      <p>Mobile: [Will be Updated Soon...]</p>
      <br />

      {/* Social Media */}
      <h3>Social Media:</h3>
      <p>Stay connected with Convogenius on social media for the latest updates, and discussions.</p>
      <br />
      Twitter: [@Convogenius] <br />
      Facebook: [Convogenius Page] <br />
      LinkedIn: [Convogenius Profile] <br /><br />

      {/* Connect with the Community */}
      <h3>Connect with the Community:</h3>
      <p>
        Join our community forums and discussions to connect with other users, share ideas, and stay informed about the latest developments. [Link to Community Forums]
        <br /><br />
        Thank you for being a part of the Convogenius community. We look forward to hearing from you!
      </p>
    </div>
  );
}

export default Contact;