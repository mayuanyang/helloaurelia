export class Nosql {
  constructor() {
    this.title = 'Using Database';
    this.description = "This pratice is to connect to a nosql database and manage the data";
    this.items = [
      { description: "Use Firebase as the backend database" },
      { description: "Use form and validation to add and update data" }
    ];
  }

  getData() {
    var self = this;
    var ref = firebase.database().ref("/Makes");
    ref.on('value', function (snapshot) {
      self.makes = (snapshot.val());
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  }
}