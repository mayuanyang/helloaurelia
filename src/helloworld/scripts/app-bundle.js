define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function () {
    App.prototype.configureRouter = function configureRouter(config, router) {
      this.router = router;
      config.title = 'Aurelia';
      config.map([{ route: ['', 'home'], nav: true, name: 'home', title: 'Home', moduleId: 'home/home' }, { route: ['http'], nav: true, name: 'http', title: 'Http Pratice', moduleId: 'httppratice/http-pratice' }, { route: ['dynamicloader'], nav: true, name: 'dynamicloader', title: 'Dynamic UI Composition', moduleId: 'dynamicloader/dynamic-loader' }, { route: ['nosql'], nav: true, name: 'nosql', title: 'Connect to Database', moduleId: 'nosql/nosql' }, { route: ['authentication'], nav: true, name: 'authentication', title: 'Authentication', moduleId: 'authentication/authentication' }, { route: ['about'], nav: true, name: 'about me', title: 'About Me', moduleId: 'aboutme/aboutme' }, { route: ['contact'], nav: true, name: 'contact me', title: 'Contact Me', moduleId: 'contactme/contactme' }]);
    };

    function App() {
      _classCallCheck(this, App);

      this.message = 'Hello World!';
    }

    return App;
  }();
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('aboutme/aboutme',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Aboutme = exports.Aboutme = function Aboutme() {
    _classCallCheck(this, Aboutme);

    this.title = 'About Me';
    this.description = 'This component is more about to show the router is working';
    this.items = [{ description: "Get the router working for SPA" }];
  };
});
define('authentication/authentication',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Authentication = exports.Authentication = function () {
    function Authentication() {
      _classCallCheck(this, Authentication);

      this.title = "Authentication";
      this.description = "This pratice is to use Auth0 for the authentication, currently will only support Google";
      this.items = [{ description: "Integrete with Firebase authentication" }, { description: "Auth0 implementation" }];

      this.user = JSON.parse(localStorage.getItem("user"));
      console.log(this.user);
    }

    Authentication.prototype.login = function login() {
      var _this = this;

      var provider = void 0;

      provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth().signInWithPopup(provider).then(function (result) {
        _this.authToken = result.credential.accessToken;

        _this.user = result.user;
        localStorage.setItem("user", JSON.stringify(result.user));

        _this.userLoggedIn = true;
        console.log(_this.user);
      }).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
    };

    Authentication.prototype.logout = function logout() {
      var _this2 = this;

      firebase.auth().signOut().then(function () {
        _this2.userLoggedIn = false;
        localStorage.clear();
        _this2.user = null;
      }).catch(function (error) {
        throw new Error(error);
      });
    };

    return Authentication;
  }();
});
define('dynamicloader/dynamic-loader',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var DynamicLoader = exports.DynamicLoader = function () {
    function DynamicLoader() {
      _classCallCheck(this, DynamicLoader);

      this.components = [{
        id: "1",
        name: "Http Pratice",
        path: "../httppratice/http-pratice"
      }, {
        id: "2",
        name: "About Me",
        path: "../aboutme/aboutme"
      }, {
        id: "3",
        name: "Contact Me",
        path: "../contactme/contactme"
      }, {
        id: "4",
        name: "Home",
        path: "../home/home"
      }, {
        id: "5",
        name: "Authentication",
        path: "../authentication/authentication"
      }, {
        id: "6",
        name: "Database",
        path: "../nosql/nosql"
      }];

      this.title = "Dynamic UI Composition";
      this.description = "It is quite often that you only know what components need to be loaded until runtime, Aurelia provides a mechanism for dynamic UI compisition, it can instruct Aurelia what component to load at runtime by using the <compose>";
      this.items = [{ description: "Add or Remove component on the fly" }, { description: "Each component has its own state" }];
      this.viewModels = [];
    }

    DynamicLoader.prototype.addComponent = function addComponent(com) {
      this.viewModels.push(com);
    };

    DynamicLoader.prototype.removeComponent = function removeComponent(index) {
      this.viewModels.splice(index, 1);
    };

    return DynamicLoader;
  }();
});
define('contactme/contactme',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Contactme = exports.Contactme = function Contactme() {
    _classCallCheck(this, Contactme);

    this.title = 'Contact Me';
    this.description = 'Router is working';
    this.items = [];
    this.displayName = "Eddy Ma";
    this.photoURL = "";
    this.email = "eddy.ma616@gmail.com";
  };
});
define('httppratice/http-pratice',['exports', '../modules/youtube.service', 'aurelia-framework'], function (exports, _youtube, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.HttpPratice = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var HttpPratice = exports.HttpPratice = (_dec = (0, _aureliaFramework.inject)(_youtube.YoutubeService), _dec(_class = function () {
    function HttpPratice(youtubeService) {
      _classCallCheck(this, HttpPratice);

      this.term = "";

      this.youtubeService = youtubeService;

      this.title = "Http Pratice";
      this.description = "This pratice is to use the build in aurelia-fetch-client to fetch the videos from youtube by using youtube api. ";
      this.items = [{ description: "Create module to talk to youtube api" }, { description: "Use dependancy injection to inject the youtube module" }, { description: "Use Rxjs to handle the onkeyup event with conditions of: wait for 300ms pause in events, ignore if next search term is same as previous" }];
    }

    HttpPratice.prototype.onkeyup = function onkeyup() {
      var self = this;
      this.youtubeService.fetch(this.term).then(function (response) {
        return response.json();
      }).then(function (data) {
        self.videos = data.items;
      });;
    };

    return HttpPratice;
  }()) || _class);
});
define('home/home',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Home = exports.Home = function () {
        function Home() {
            _classCallCheck(this, Home);

            this.message = 'Welcome to my Aurelia Pratices';
            this.style = "default";
            this.description = "Please click on the following cards to see what the pratice is";
        }

        Home.prototype.attached = function attached() {
            console.log("attached");
        };

        Home.prototype.activated = function activated() {
            console.log("activated");
        };

        Home.prototype.created = function created() {
            console.log("created");
            this.screenWidth = screen.width - 100;
        };

        Home.prototype.activate = function activate() {
            console.log("activate");
            this.screenWidth = screen.width - 100;
        };

        Home.prototype.canActivate = function canActivate() {
            console.log("canActivate");
        };

        return Home;
    }();
});
define('modules/youtube.service',['exports', 'aurelia-fetch-client'], function (exports, _aureliaFetchClient) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.YoutubeService = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var YoutubeService = exports.YoutubeService = function () {
        function YoutubeService() {
            _classCallCheck(this, YoutubeService);

            this.webapiUrl = 'https://www.googleapis.com/youtube/v3/search';
            this.api_key = 'AIzaSyDrPpZkJ6tBkdCemWS3jXu6zKTipcZA7SQ';
            this.client = new _aureliaFetchClient.HttpClient();
        }

        YoutubeService.prototype.fetch = function fetch(term) {
            console.log(term);
            var url = this.webapiUrl + '?q=' + term + '&part=snippet&maxResults=25&key=' + this.api_key;
            var result = this.client.fetch(url);

            console.log(result);
            return result;
        };

        return YoutubeService;
    }();
});
define('navbar/navbar',["exports", "aurelia-framework"], function (exports, _aureliaFramework) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Navbar = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _desc, _value, _class, _descriptor;

  var Navbar = exports.Navbar = (_class = function Navbar() {
    _classCallCheck(this, Navbar);

    _initDefineProp(this, "router", _descriptor, this);
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  })), _class);
});
define('nosql/nosql',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Nosql = exports.Nosql = function () {
    function Nosql() {
      _classCallCheck(this, Nosql);

      this.title = 'Using Database';
      this.description = "This pratice is to connect to a nosql database and manage the data";
      this.items = [{ description: "Use Firebase as the backend database" }, { description: "Use form and validation to add and update data" }];
      this.isLoading = false;
      this.country = "";
      this.displayName = "";
      this.makeId = "";
    }

    Nosql.prototype.getData = function getData() {
      this.isLoading = true;
      var self = this;
      var ref = firebase.database().ref("/Makes");
      ref.on('value', function (snapshot) {
        self.makes = snapshot.val();
        self.isLoading = false;
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });
    };

    Nosql.prototype.saveData = function saveData() {
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
    };

    return Nosql;
  }();
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('readme/read-me',["exports", "aurelia-framework"], function (exports, _aureliaFramework) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ReadMe = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;

  var ReadMe = exports.ReadMe = (_class = function () {
    function ReadMe() {
      _classCallCheck(this, ReadMe);

      _initDefineProp(this, "title", _descriptor, this);

      _initDefineProp(this, "description", _descriptor2, this);

      _initDefineProp(this, "style", _descriptor3, this);

      _initDefineProp(this, "items", _descriptor4, this);
    }

    ReadMe.prototype.contructor = function contructor() {
      console.log('i am readme');
    };

    return ReadMe;
  }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "title", [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return "title goes here";
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "description", [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return "description goes here";
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "style", [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return "info";
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "items", [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return [];
    }
  })), _class);
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"navbar/navbar\"></require><require from=\"style.css\"></require><div class=\"row\"><navbar router.bind=\"router\"></navbar></div><div class=\"row router-view\"><router-view></router-view></div></template>"; });
define('text!style.css', ['module'], function(module) { module.exports = ".row{\r\n    margin: 0;\r\n}\r\n\r\n.navbar{\r\n    margin-bottom: 0px;\r\n    \r\n    font-size: 16px;\r\n}\r\n\r\nvideo {\r\n    width: 100%;\r\n    overflow: auto;\r\n    -webkit-overflow-scrolling: touch;\r\n    top:50px; /* start 470px below top left corner */\r\n    bottom: 0px; /* This is the trick - specify bottom instead of height */\r\n    left:0px;\r\n}\r\n\r\n.component-box{\r\n    margin: 10px 10px 10px 10px;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    background-color: #fff;\r\n    border-color: #ddd;\r\n    border-width: 1px;\r\n    border-radius: 4px 4px 0 0;\r\n    -webkit-box-shadow: none;\r\n    box-shadow: none;\r\n    border-style: solid;\r\n}\r\n\r\n.grid{\r\n    margin-top: 20px;\r\n    display: block;\r\n}\r\n\r\n.grid-item{\r\n    width: 33.33%;\r\n    display: block;\r\n    float: left;\r\n}\r\n\r\n.pod__item__image {\r\n    position: relative;\r\n    width: 200px;\r\n    height: 200px;\r\n    margin: 0 auto 30px;\r\n    border-radius: 1000px;\r\n    overflow: hidden;\r\n    background-color: #003e69;\r\n}\r\n\r\n.pod__item__heading {\r\n    font-size: 20px;\r\n    line-height: 1em;\r\n    margin-bottom: .5em;\r\n    text-transform: uppercase;\r\n    color: #003e69;\r\n    text-align: center;\r\n        font-weight: 700;\r\n}\r\n\r\n.pod__item__heading1{\r\n    color: #116900;\r\n}\r\n\r\n.pod__item__heading2{\r\n    color: #003e69;\r\n}\r\n\r\n.pod__item__heading3{\r\n    color: #8a6d3b;\r\n}\r\n\r\n.pod__item__1{\r\n    background-color: #116900;\r\n}\r\n\r\n\r\n\r\n.pod__item__2{\r\n    background-color: #003e69;\r\n    color: #003e69;\r\n}\r\n\r\n.pod__item__3{\r\n    background-color: #8a6d3b;\r\n    color: #8a6d3b;\r\n}\r\n\r\n.pod__item__image__mask {\r\n    position: absolute;\r\n    top: 2px;\r\n    right: 2px;\r\n    bottom: 2px;\r\n    left: 2px;\r\n    background-color: #fff;\r\n    border-radius: 1000px;\r\n}\r\n\r\n.pod__item__image img {\r\n    width: 138px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%,-50%);\r\n    transform: translate(-50%,-50%);\r\n}\r\n\r\n.project-description {\r\n    min-height: 200px;\r\n    color: white;\r\n    margin: 0;\r\n    padding: 0;\r\n    background-image: -webkit-gradient(linear, top, from(#6E4D9B), to(#E82887));\r\n    background-image: -webkit-linear-gradient(top, #6E4D9B, #E82887);\r\n    background-image: -moz-linear-gradient(top, #6E4D9B, #E82887);\r\n    background-image: linear-gradient(to top, #6E4D9B, #E82887);\r\n}\r\n\r\n.project-description .big-title{\r\n    font-size: 40px;\r\n    text-align: center;\r\n    color: white;\r\n}\r\n\r\n.project-description .big-title .small{\r\n    font-size: 20px;\r\n    text-align: center;\r\n    color: white;\r\n}\r\n\r\n.project-description .content{\r\n    font-size: 20px;\r\n    text-align: center;\r\n    color: white;\r\n}\r\n\r\n\r\n/*Business Card Css */\r\n.business-card {\r\n  border: 1px solid #cccccc;\r\n  background: #f8f8f8;\r\n  padding: 10px;\r\n  border-radius: 4px;\r\n  margin-bottom: 10px;\r\n}\r\n.profile-img {\r\n  height: 120px;\r\n  background: white;\r\n}\r\n.job {\r\n  color: #666666;\r\n  font-size: 17px;\r\n}\r\n.mail {\r\n  font-size: 16px;\r\n }\r\n\r\n.col-sm-6{\r\n    padding-left: 0px;\r\n}\r\n\r\n.video-thumb{\r\n    width: 350px;\r\n}"; });
define('text!aboutme/aboutme.html', ['module'], function(module) { module.exports = "<template><require from=\"../readme/read-me\"></require><div class=\"container\"><read-me title.bind=\"title\" description.bind=\"description\" items.bind=\"items\"></read-me></div></template>"; });
define('text!contactme/contactme.html', ['module'], function(module) { module.exports = "<template><require from=\"../readme/read-me\"></require><div class=\"container\"><read-me title.bind=\"title\" description.bind=\"description\" items.bind=\"items\"></read-me></div><br><div class=\"container\"><div class=\"row\"><div class=\"col-sm-6\"><div class=\"business-card\"><div class=\"media\"><div class=\"media-left\"><img class=\"media-object img-circle profile-img\" src=\"${photoURL}\"></div><div class=\"media-body\"><h2 class=\"media-heading\">${displayName}</h2><div class=\"mail\"><a href=\"mailto:eddy.ma616@gmail.com\">${email}</a></div></div></div></div></div></div></div></template>"; });
define('text!authentication/authentication.html', ['module'], function(module) { module.exports = "<template><require from=\"../readme/read-me\"></require><div class=\"container\"><read-me title.bind=\"title\" description.bind=\"description\" items.bind=\"items\"></read-me><button click.trigger=\"login()\" class=\"btn btn-primary\" if.bind=\"user == undefined\">Login</button> <button click.trigger=\"logout()\" class=\"btn btn-warning\" if.bind=\"user != undefined\">Logout</button></div><br><div class=\"container\" if.bind=\"user != undefined\"><div class=\"row\"><div class=\"col-sm-6\"><div class=\"business-card\"><div class=\"media\"><div class=\"media-left\"><img class=\"media-object img-circle profile-img\" src=\"${user.photoURL}\"></div><div class=\"media-body\"><h2 class=\"media-heading\">${user.displayName}</h2><div class=\"mail\"><a href=\"mailto:daniel@bla.ch\">${user.email}</a></div></div></div></div></div></div></div></template>"; });
define('text!home/home.html', ['module'], function(module) { module.exports = "<template><div class=\"home\"><video loop=\"\" autoplay=\"\" id=\"slider-video\"><source src=\"https://s3-ap-southeast-2.amazonaws.com/tatts-group-website-storage/wp-content/uploads/2016/08/15114716/Tatts-Group-values-cutdown-960-V2.mp4\" type=\"video/mp4\">Your browser doesn't support HTML5 video tag</video><div class=\"container grid\"><div class=\"grid-item grid__item--third\"><div class=\"pod__item pod__item--purple js-wow fadeInUp\" data-wow-delay=\"0.1s\" data-wow-offset=\"20\" data-wow-duration=\"1s\" style=\"visibility:visible;animation-duration:1s;animation-delay:.1s;animation-name:fadeInUp\"><div class=\"pod__item__image pod__item__1\"><div class=\"pod__item__image__mask\"><img src=\"../assets/images/testability.png\" alt=\"testability\"></div></div><h4 class=\"pod__item__heading pod__item__heading1\">Testability</h4></div></div><div class=\"grid-item grid__item--third\"><div class=\"pod__item pod__item--purple js-wow fadeInUp\" data-wow-delay=\"0.1s\" data-wow-offset=\"20\" data-wow-duration=\"1s\" style=\"visibility:visible;animation-duration:1s;animation-delay:.1s;animation-name:fadeInUp\"><div class=\"pod__item__image pod__item__2\"><div class=\"pod__item__image__mask\"><img src=\"../assets/images/maintainability.jpg\" alt=\"Maintainability\"></div></div><h4 class=\"pod__item__heading pod__item__heading2\">Maintainability</h4></div></div><div class=\"grid-item grid__item--third\"><div class=\"pod__item pod__item--purple js-wow fadeInUp\" data-wow-delay=\"0.1s\" data-wow-offset=\"20\" data-wow-duration=\"1s\" style=\"visibility:visible;animation-duration:1s;animation-delay:.1s;animation-name:fadeInUp\"><div class=\"pod__item__image pod__item__3\"><div class=\"pod__item__image__mask\"><img src=\"../assets/images/extensibility.jpg\" alt=\"Extensibility\"></div></div><h4 class=\"pod__item__heading pod__item__heading3\">Extensibility</h4></div></div></div><div class=\"project-description\"><div class=\"big-title\">Aurelia allows us to focus on business logic, not on the framework - so concise and simple, yet so powerful and flexible!<br><small class=\"small\">Ats Uiboupin</small></div><div class=\"content\">This site is mainly setup for study purpose, it including the following items<ul><li>Router</li><li>Use http module to send request</li></ul></div></div></div></template>"; });
define('text!dynamicloader/dynamic-loader.html', ['module'], function(module) { module.exports = "<template><require from=\"../readme/read-me\"></require><div class=\"container\"><read-me title.bind=\"title\" description.bind=\"description\" items.bind=\"items\"></read-me><h3>Components to be loaded</h3><ul class=\"list-group\"><li class=\"list-group-item\" repeat.for=\"component of components\"><div class=\"btn-group\" role=\"group\" aria-label=\"...\" style=\"float:right;margin-bottom:5px\"><button click.trigger=\"addComponent(component)\" class=\"btn btn-sm btn-success\">Add</button></div>${component.name}</li></ul></div><div class=\"row component-box\" repeat.for=\"vm of viewModels\"><button click.trigger=\"removeComponent($index)\" class=\"btn btn-sm btn-danger\">Remove</button><compose view-model.bind=\"vm.path\"></compose></div></template>"; });
define('text!httppratice/http-pratice.html', ['module'], function(module) { module.exports = "<template><require from=\"../readme/read-me\"></require><div class=\"container\"><read-me title.bind=\"title\" description.bind=\"description\" items.bind=\"items\"></read-me><h3>Youtube Search</h3><div class=\"input-group\"><span class=\"input-group-addon\" id=\"basic-addon1\">Search youtube</span> <input id=\"search-box\" type=\"text\" class=\"form-control\" placeholder=\"\" aria-describedby=\"basic-addon1\" keyup.trigger=\"onkeyup()\" value.bind=\"term\"></div><div class=\"row\" repeat.for=\"result of videos\" style=\"margin-bottom:10px;margin-top:10px\"><div class=\"col-md-6\"><a href=\"https://www.youtube.com/watch?v=${result.id.videoId}\" target=\"_blank\"><img src=\"${result.snippet.thumbnails.high.url}\" class=\"img-rounded video-thumb\" alt=\"\"></a></div><div class=\"col-md-6\"><a href=\"https://www.youtube.com/watch?v=${result.id.videoId}\" target=\"_blank\"><h3>${result.snippet.title}</h3></a><p>${result.snippet.description}</p></div></div></div></template>"; });
define('text!navbar/navbar.html', ['module'], function(module) { module.exports = "<template><nav class=\"navbar navbar-default\"><div class=\"container-fluid\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\"><span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span></button> <a class=\"navbar-brand\" href=\"#\">Aurelia Pratices</a></div><div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\"><ul class=\"nav navbar-nav\"><li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\"><a href.bind=\"row.href\">${ row.title }</a></li></ul></div></div></nav></template>"; });
define('text!nosql/nosql.html', ['module'], function(module) { module.exports = "<template><require from=\"../readme/read-me\"></require><div class=\"container\"><read-me title.bind=\"title\" description.bind=\"description\" items.bind=\"items\"></read-me><button click.trigger=\"getData()\" class=\"btn btn-primary\">Get Data</button><div class=\"progress\" if.bind=\"isLoading\"><div class=\"progress-bar progress-bar-success progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:100%\"><span class=\"sr-only\">40% Complete (success)</span></div></div><form><div class=\"row\"><div class=\"col-lg-3\"><div class=\"input-group\"><span class=\"input-group-addon\">Country </span><input type=\"text\" class=\"form-control\" aria-label=\"...\" value.bind=\"country\"></div></div><div class=\"col-lg-3\"><div class=\"input-group\"><span class=\"input-group-addon\">Display Name </span><input type=\"text\" class=\"form-control\" aria-label=\"...\" value.bind=\"displayName\"></div></div><div class=\"col-lg-3\"><div class=\"input-group\"><span class=\"input-group-addon\">Make Id </span><input type=\"text\" class=\"form-control\" aria-label=\"...\" value.bind=\"makeId\"></div></div><div class=\"col-lg-3\"><div class=\"input-group\"><button class=\"btn btn-primary\" click.trigger=\"saveData()\">Add</button></div></div></div></form><table class=\"table\" if.bind=\"makes.length > 0\"><th>Country of Origin</th><th>Display Name</th><th>Make Id</th><tr repeat.for=\"record of makes\"><td>${record.make_country}</td><td>${record.make_display}</td><td>${record.make_id}</td></tr></table></div></template>"; });
define('text!readme/read-me.html', ['module'], function(module) { module.exports = "<template><div class=\"panel panel-${style}\" style=\"margin-top:10px\"><div class=\"panel-heading\"><span class=\"glyphicon glyphicon-info-sign\"></span>${title}</div><div class=\"panel-body\"><p class=\"readme-descriptioin\">${description}</p><p></p><b>Important things covered in this pratice</b><ul class=\"list-group\"><li class=\"list-group-item\" repeat.for=\"item of items\">${item.description}</li></ul></div></div></template>"; });
//# sourceMappingURL=app-bundle.js.map