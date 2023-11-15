import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {

  componentDidMount() {
    //gapi is available on window scope
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '647570991015-qiqglji9f41phnk1lmo3sa8r9v4s80dj.apps.googleusercontent.com',
        scope: 'email'  //Scopes enable your application to only request access to the resources that it needs 
      })
      .then(() => {
        this.auth = window.gapi.auth2.getAuthInstance(); //this,auth will give a reference to the instance that we can use to sign in or our the user
  
        // Listen for sign-in state changes.
        this.onAuthChange(this.auth.isSignedIn.get());  //it will return true/false based on sign in status
        this.auth.isSignedIn.listen(this.onAuthChange); //listen fn will listen to any changes in the authentication status (sign in/out)

    });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
