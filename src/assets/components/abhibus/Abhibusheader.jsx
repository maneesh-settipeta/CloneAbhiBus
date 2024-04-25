const Abhibusheader = () => {
  return (
    <div className="mainHeaderContainer">
      <div>
        <div className="container_head">
          <img
            className="headerLogoAbhibus"
            src="src\assets\images\AbhibusLogo1.png"
          ></img>

          <button className="ButtonsStyling">
            <img
              className="headerLogo"
              src="src\assets\images\Train2.png"
            ></img>
            Train
          </button>

          <button className="ButtonsStyling">
            <img className="headerLogo" src="src\assets\images\BUS2.png"></img>
            Buses
          </button>

          <button className="ButtonsStyling">
            <img
              className="headerLogo"
              src="src\assets\images\hotel-icon-download-282.png"
            ></img>
            Hotels
          </button>
        </div>
      </div>
      <div>
        <div>
          <div className="container_head">
            <button className="ButtonsStyling">
              <img
                className="headerLogo"
                src="src\assets\images\Percentage-Free-PNG-Image.png"
              ></img>
              Offers
            </button>
            <button className="ButtonsStyling">
              <img
                className="headerLogo"
                src="src\assets\images\ticket.png"
              ></img>
              Track Ticket
            </button>
            <button className="ButtonsStyling">
              <img
                className="headerLogo"
                src="src\assets\images\Login.jpg"
              ></img>
              Login/Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Abhibusheader;
