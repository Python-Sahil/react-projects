
function Middle(){
    return (
      <main className="middle-section">
        <div className="left-container">
          <h1 className="heading">YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="button-container">
            <button className="shop-now-button">Shop Now</button>
            <button className="category-button">Category</button>
          </div>
          <div className="available-container">
            <p className="available-message">Also Available On</p>
            <div className="shop-container">
              <img src="/flipkart.png" alt="flipcart-logo" />
              <img src="/amazon.png" alt="amazon-logo" />
            </div>
          </div>
        </div>
        <div className="right-container">
          <img src="/shoe_image.png" alt="shoe-display-image" />
        </div>
      </main>
    );
}

export default Middle;