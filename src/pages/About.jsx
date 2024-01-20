import "../assets/styles/about.css";

const About = () => {
  return (
    <div className="about">
      <h1>About <span>ConvoGenius</span></h1>
      <p>Welcome to Convogenius, an innovative project crafted for learning and exploration! Convogenius is a creation born out of a passion for artificial intelligence and natural language processing. This project, initiated by <strong>Ashutosh shukla</strong>, is designed to emulate conversational intelligence, much like the renowned ChatGPT.</p>
      <br />

      {/* Key Features */}
      <h3>Key Features:</h3>
      <p><strong>Conversational Learning:</strong> Engage in dynamic and interactive conversations to enhance your understanding of AI and language processing. <br /><br />
        <strong>Customization:</strong> Tailor Convogenius to suit your specific needs and preferences, whether its for educational purposes or personal exploration. <br /><br /></p>

      {/* Join the Conversation */}
      <h3>Join the Conversation:</h3>
      <p>We invite you to join us on this exciting journey of exploration and discovery. Whether you are a novice or an expert in AI.
        <br />
        <br />
        Thank you for being a part of Convogenius. Lets explore the potential of AI-driven conversations together!</p>
    </div>
  );
}

export default About;