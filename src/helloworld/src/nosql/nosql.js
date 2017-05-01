export class Nosql {
  constructor() {
    this.title = 'Using Database';
    this.description = "This pratice is to connect to a nosql database and manage the data";
    this.items = [
      { description: "Use Firebase as the backend database" },
      { description: "Use form and validation to add and update data" }
    ];
    this.isLoading = false;
    this.country = "";
    this.displayName = "";
    this.makeId = "";
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

  saveData() {
    console.log(this.makes.length);
    var nextId = this.makes.length;
    firebase.database().ref('/Makes/' + nextId).set({
      make_country: this.country,
      make_display: this.displayName,
      make_id: this.makeId,
      make_is_common: 0
    }, function (errorObject) {
      if (errorObject) {
        console.log("The save failed: " + errorObject);
      }

    });
  }
}