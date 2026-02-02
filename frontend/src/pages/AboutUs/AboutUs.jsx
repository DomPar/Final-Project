import './AboutUs.css'

function AboutUs() {
  return (
    <div className="aboutus-container">
      <div className="aboutus-card">
        
        <div className="aboutus-row">
          <div className="aboutus-text">
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <img src=".././images/UserRegister.png" alt="" id=""/>
        </div>

        <div className="aboutus-row">
          <img src=".././images/WelcomePicture.jpg" alt="" id=""/>
          <div className="aboutus-text">
            <h2>Lorem Ipsum</h2>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutUs