export class Nosql {
  constructor() {
    this.title = 'Using Database';
    this.description = "This pratice is to connect to a nosql database and manage the data";
    this.items = [
      { description: "Use Firebase as the backend database" },
      { description: "Use form and validation to add and update data" }
    ];
    this.isLoading = false;
  }

  getData() {
    this.isLoading = true;
    var self = this;
    var ref = firebase.database().ref("/Makes");
    ref.on('value', function (snapshot) {
      self.makes = (snapshot.val());
      self.isLoading = false;
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  }
}