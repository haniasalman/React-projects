import React from "react";

class SearchBar extends React.Component {

    // onInputChange(event){
    //     console.log(event.target.value)
    // }
    state = {term: ''};

    onFormSubmit = event => {
      event.preventDefault(); //used to prevent by default page refresh when enter/submit button is pressed in form tag

      this.props.onSubmit(this.state.term) //in class based components props are called using this.props
  
      // console.log(this.state.term)
    }

  
  

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="ui search">
            <div className="ui icon input">
              <input className="prompt" placeholder="Search here..." 
              type="text"
              onChange= {e => this.setState({term: e.target.value})}
              value= {this.state.term}/>
              <i className="search icon"></i>
            </div>
            {/* <div class="results"></div> */}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
