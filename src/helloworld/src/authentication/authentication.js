export class Authentication {
  constructor() {
    this.title = "Authentication";
    this.description = "This pratice is to use Auth0 for the authentication, currently will only support Google"
    this.items = [
      {description: "Integrete with Firebase authentication"},
      {description: "Auth0 implementation"}
    ];
    
      this.user = JSON.parse(localStorage.getItem("user"));
   console.log(this.user);
  }

  login() {
    let provider;

    // Determine which provider to use depending on provided type
    // which is passed through from app.html

    provider = new firebase.auth.GoogleAuthProvider();

    // Call the Firebase signin method for our provider
    // then take the successful or failed result and deal with
    // it accordingly.
    firebase.auth().signInWithPopup(provider).then((result) => {
      // The token for this session
      this.authToken = result.credential.accessToken;

      // The user object containing information about the current user
      this.user = result.user;
      localStorage.setItem("user", JSON.stringify(result.user));

      // Set a class variable to true to state we are logged in
      this.userLoggedIn = true;
      console.log(this.user);
    }).catch(error => {
      let errorCode = error.code;
      let errorMessage = error.message;
      let email = error.email;
      let credential = error.credential;
    });
  }

  logout() {
    // Self-explanatory signout code
    firebase.auth().signOut().then(() => {
      this.userLoggedIn = false;
      localStorage.clear();
      this.user = null;
    }).catch(error => {
      throw new Error(error);
    });
  }

}