import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBar: ""
    }
    this.searchBarChanged = this.searchBarChanged.bind(this);
    this.searchButtonClicked=this.searchButtonClicked.bind(this);
  }


  searchButtonClicked(){
    console.log(this.state.searchBar);
    return this.state.searchBar;
  }

  searchBarChanged(e){
    this.setState(prevState => ({
      ...prevState,
      searchBar: e.target.value
    }))
  }

    render() {
      return (
        <div className="header-bar">
            {/* display store logo */}
            <img className="logo" alt="store-logo" src={this.props.logo} />
            <div className="line"> 
            <div className="header-bar-text">
              {/* sub div with headings for products and cart */}
              <div className="products">
                <span className="highlight">PRODUCTS</span>
              </div>
              <div className="cart">
                <div class = "cart-text"> CART </div>
                {/* shows the popup message when "add to cart" button is clicked */}
                <div class ="popup" id="PopupText">
                  <div className="small-font"> Added to cart: </div><br/>
                  <div className="small-font bold" id="roll-name"> Raisin cinnamon roll </div>
                  <div className="small-font" id="roll-glazing"> Double chocolate glazing </div>
                  <div className="small-font" id="roll-size"> Pack of 6 </div>
                  <div className="small-font" id="roll-price"> Price: $22.45 </div>
                </div>
                {/* displays cart item count and cart total--updates dynamically as items are added to cart */}
                <div className="small-font right-align" id="item-count"> 0 items </div>
                <div className="small-font right-align" id="total-cost"> Total: $0 </div>
              </div>

            </div>
            <hr className="line-weight" />
                <div className="description">
                  Our hand-made cinnamon rolls
                </div>
                <div className="subheading">
                  <div className="search">
                    <input type="search" id="query" onChange={this.searchBarChanged} value={this.state.searchBar} placeholder="Search..."></input>
                    <button  onClick={() => this.props.filterRolls(this.searchButtonClicked())}>Search</button>
                  </div>

                  <div className="small-font">
                    sort by: 
                    <select value={this.state.glazingIndex}>
                      <option value="0">Base Price</option>
                      <option value="1">Name</option>
                    </select>
                  </div>
                </div>
            </div>
        </div>
      );
    }
  }
  //onClick={this.searchButtonClicked}
  
  export default NavBar