const AbhiBusContainer3 = () => {
  return (
    <div>
      <div className="container3">
        <div className="bottomSideHeader">
          <h1>Bus Booking Discount Offers</h1>
        </div>
        <button className="viewAll">View All</button>
        {/* <button className="viewAll">View All</button> */}
      </div>
      <div className="cardsContainer">
        <img className="offerCards" src="src\assets\images\Discount1.jpg"></img>
        <img
          className="offerCards"
          src="src\assets\images\Discount2.webp"
        ></img>
        <img className="offerCards" src="src\assets\images\Discount3.jpg"></img>
        <img className="offerCards" src="src\assets\images\Discount4.jpg"></img>
      </div>

      <div>
        <div>
          <h1 className="bottomSideHeader">
            {" "}
            Why Choose AbhiBus for Bus Ticket Booking ?{" "}
          </h1>
          <p className="bottomSideHeaderr">
            AbhiBus is India’s fastest growing online ticket booking platform.
            AbhiBus is the official ticketing partner of several State Road
            Transport Corporation (SRTC) operators and over 3500+ private bus
            partners covering more than 100,000 bus routes
          </p>
        </div>
      </div>
      <div className="cardsContainer">
        <div className="cardsContainerr">
          <img className="cardsImage" src="src\assets\images\card1.png"></img>
          <div>
            <h1 className="cardsHeading">1,00,000+ Bus Routes</h1>
            <p className="cardsPara">
              offering unparalleled choices for<br></br> your travel needs
            </p>
          </div>
        </div>
        <div className="cardsContainerr">
          <img className="cardsImage" src="src\assets\images\card2.jpg"></img>
          <div>
            <h1 className="cardsHeading">1,00,000+ Bus Routes</h1>
            <p className="cardsPara">
              offering unparalleled choices for<br></br> your travel needs
            </p>
          </div>
        </div>
        <div className="cardsContainerr">
          <img className="cardsImage" src="src\assets\images\card3.png"></img>
          <div>
            <h1 className="cardsHeading">1,00,000+ Bus Routes</h1>
            <p className="cardsPara">
              offering unparalleled choices for<br></br> your travel needs
            </p>
          </div>
        </div>
        <div className="cardsContainerr">
          <img className="cardsImage" src="src\assets\images\card4.jpg"></img>
          <div>
            <h1 className="cardsHeading">1,00,000+ Bus Routes</h1>
            <p className="cardsPara">
              offering unparalleled choices for<br></br> your travel needs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbhiBusContainer3;
