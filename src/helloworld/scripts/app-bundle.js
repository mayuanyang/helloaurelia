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
      config.map([{ route: ['', 'home'], nav: true, name: 'home', title: 'Home', moduleId: 'home/home' }, { route: ['about'], nav: true, name: 'about me', title: 'About Me', moduleId: 'aboutme/aboutme' }, { route: ['contact'], nav: true, name: 'contact me', title: 'Contact Me', moduleId: 'contactme/contactme' }, { route: ['http'], nav: true, name: 'http', title: 'Http Pratice', moduleId: 'httppratice/http-pratice' }]);
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

    this.message = 'You can contact me by calling xxxxx';
  };
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

    this.message = 'My name is Eddy Ma';
  };
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

  var Home = exports.Home = function Home() {
    _classCallCheck(this, Home);

    this.message = 'Welcome to my Aurelia Pratices';
    this.style = "default";
    this.description = "Please click on the following cards to see what the pratice is";
  };
});
define('httppratice/http-pratice',['exports', 'aurelia-fetch-client'], function (exports, _aureliaFetchClient) {
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

  var HttpPratice = exports.HttpPratice = function () {
    function HttpPratice() {
      _classCallCheck(this, HttpPratice);

      this.term = "aurelia";
      var webapiUrl = 'https://www.googleapis.com/youtube/v3/search';
      var api_key = 'AIzaSyDrPpZkJ6tBkdCemWS3jXu6zKTipcZA7SQ';
      var url = webapiUrl + '?q=' + this.term + '&part=snippet&maxResults=25&key=' + api_key;
      console.log(url);

      this.title = "Http Pratice";
      this.description = "This pratice is to use the build in aurelia-fetch-client to fetch the videos from youtube by using youtube api. ";
      this.client = new _aureliaFetchClient.HttpClient();
      this.client.fetch(url).then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log(data);
      });
    }

    HttpPratice.prototype.onkeyup = function onkeyup() {

      console.log('keyup');
    };

    return HttpPratice;
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

  var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3;

  var ReadMe = exports.ReadMe = (_class = function () {
    function ReadMe() {
      _classCallCheck(this, ReadMe);

      _initDefineProp(this, "title", _descriptor, this);

      _initDefineProp(this, "description", _descriptor2, this);

      _initDefineProp(this, "style", _descriptor3, this);
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
  })), _class);
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"navbar/navbar\"></require><div class=\"row\"><navbar router.bind=\"router\"></navbar></div><div class=\"row\"><router-view></router-view></div></template>"; });
define('text!aboutme/aboutme.html', ['module'], function(module) { module.exports = "<template><h1>${message}</h1></template>"; });
define('text!contactme/contactme.html', ['module'], function(module) { module.exports = "<template><h1>${message}</h1></template>"; });
define('text!home/home.html', ['module'], function(module) { module.exports = "<template><video loop=\"\" autoplay=\"\" id=\"slider-video\"><source src=\"https://s3-ap-southeast-2.amazonaws.com/tatts-group-website-storage/wp-content/uploads/2016/08/15114716/Tatts-Group-values-cutdown-960-V2.mp4\" type=\"video/mp4\">Your browser doesn't support HTML5 video tag</video></template>"; });
define('text!httppratice/http-pratice.html', ['module'], function(module) { module.exports = "<template><require from=\"../readme/read-me\"></require><div class=\"container\"><read-me title.bind=\"title\" description.bind=\"description\"></read-me><h3>Youtube Search</h3><input id=\"search-box\" onkeyup.bind=\"onkeyup()\" class=\"form-control\"><div class=\"row\" style=\"margin-bottom:10px;margin-top:10px\"><div class=\"col-md-6\"><img [src]=\"result.snippet.thumbnails.high.url\" class=\"img-rounded\" alt=\"Cinque Terre\"></div><div class=\"col-md-6\"><a href=\"https://www.youtube.com/watch?v={{result.id.videoId}}\" target=\"_blank\"><h3>{{result.snippet.title}}</h3></a><p>{{result.snippet.description}}</p></div></div></div></template>"; });
define('text!readme/read-me.html', ['module'], function(module) { module.exports = "<template><div class=\"panel panel-${style}\"><div class=\"panel-heading\">${title}</div><div class=\"panel-body\">${description}</div></div></template>"; });
define('text!navbar/navbar.html', ['module'], function(module) { module.exports = "<template><nav class=\"navbar navbar-default\"><div class=\"container-fluid\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\"><span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span></button> <a class=\"navbar-brand\" href=\"#\">Aurelia Pratices</a></div><div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\"><ul class=\"nav navbar-nav\"><li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\"><a href.bind=\"row.href\">${ row.title }</a></li></ul></div></div></nav></template>"; });
//# sourceMappingURL=app-bundle.js.map