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
      config.map([{ route: ['', 'home'], nav: true, name: 'home', title: 'Home', moduleId: 'home/home' }, { route: ['about'], nav: true, name: 'about me', title: 'About Me', moduleId: 'aboutme/aboutme' }, { route: ['contact'], nav: true, name: 'contact me', title: 'Contact Me', moduleId: 'contactme/contactme' }, { route: ['http'], nav: true, name: 'http', title: 'Http Pratice', moduleId: 'httppratice/http-pratice' }, { route: ['dynamicloader'], nav: true, name: 'dynamicloader', title: 'Dynamic Component Loader', moduleId: 'dynamicloader/dynamic-loader' }]);
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

    this.message = 'My name is Eddy Ma';
  };
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
      }];

      this.title = "Dynamic Component Loading";
      this.description = "It is quite often that you only know what components need to be loaded until runtime, Aurelia provides a dynamic loading element <compose> which will helo with that";
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
    this.screenWidth = screen.width;
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
define('text!style.css', ['module'], function(module) { module.exports = ".row{\r\n    margin: 0;\r\n}\r\n\r\n.navbar{\r\n    margin-bottom: 0px;\r\n}\r\n\r\nvideo {\r\n    width: 1516px;\r\n    display: block;\r\n}\r\n\r\n.component-box{\r\n    margin: 10px 10px 10px 10px;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    background-color: #fff;\r\n    border-color: #ddd;\r\n    border-width: 1px;\r\n    border-radius: 4px 4px 0 0;\r\n    -webkit-box-shadow: none;\r\n    box-shadow: none;\r\n    border-style: solid;\r\n}"; });
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"navbar/navbar\"></require><require from=\"style.css\"></require><div class=\"row\"><navbar router.bind=\"router\"></navbar></div><div class=\"row\"><router-view></router-view></div></template>"; });
define('text!aboutme/aboutme.html', ['module'], function(module) { module.exports = "<template><h1>${message}</h1></template>"; });
define('text!contactme/contactme.html', ['module'], function(module) { module.exports = "<template><h1>${message}</h1></template>"; });
define('text!dynamicloader/dynamic-loader.html', ['module'], function(module) { module.exports = "<template><require from=\"../readme/read-me\"></require><div class=\"container\"><read-me title.bind=\"title\" description.bind=\"description\"></read-me><ul class=\"list-group\"><li class=\"list-group-item\" repeat.for=\"component of components\"><div class=\"btn-group\" role=\"group\" aria-label=\"...\" style=\"float:right;margin-bottom:5px\"><button click.trigger=\"addComponent(component)\" class=\"btn btn-sm btn-success\">Add</button></div>${component.name}</li></ul></div><div class=\"row component-box\" repeat.for=\"vm of viewModels\"><button click.trigger=\"removeComponent($index)\" class=\"btn btn-sm btn-danger\">Remove</button><compose view-model.bind=\"vm.path\"></compose></div></template>"; });
define('text!home/home.html', ['module'], function(module) { module.exports = "<template><video loop=\"\" autoplay=\"\" id=\"slider-video\"><source src=\"https://s3-ap-southeast-2.amazonaws.com/tatts-group-website-storage/wp-content/uploads/2016/08/15114716/Tatts-Group-values-cutdown-960-V2.mp4\" type=\"video/mp4\">Your browser doesn't support HTML5 video tag</video></template>"; });
define('text!httppratice/http-pratice.html', ['module'], function(module) { module.exports = "<template><require from=\"../readme/read-me\"></require><div class=\"container\"><read-me title.bind=\"title\" description.bind=\"description\" items.bind=\"items\"></read-me><h3>Youtube Search</h3><div class=\"input-group\"><span class=\"input-group-addon\" id=\"basic-addon1\">Search youtube</span> <input id=\"search-box\" type=\"text\" class=\"form-control\" placeholder=\"\" aria-describedby=\"basic-addon1\" keyup.trigger=\"onkeyup()\" value.bind=\"term\"></div><div class=\"row\" repeat.for=\"result of videos\" style=\"margin-bottom:10px;margin-top:10px\"><div class=\"col-md-6\"><img src=\"${result.snippet.thumbnails.high.url}\" class=\"img-rounded\" alt=\"\"></div><div class=\"col-md-6\"><a href=\"https://www.youtube.com/watch?v=${result.id.videoId}\" target=\"_blank\"><h3>${result.snippet.title}</h3></a><p>${result.snippet.description}</p></div></div></div></template>"; });
define('text!navbar/navbar.html', ['module'], function(module) { module.exports = "<template><nav class=\"navbar navbar-default\"><div class=\"container-fluid\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\"><span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span></button> <a class=\"navbar-brand\" href=\"#\">Aurelia Pratices</a></div><div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\"><ul class=\"nav navbar-nav\"><li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\"><a href.bind=\"row.href\">${ row.title }</a></li></ul></div></div></nav></template>"; });
define('text!readme/read-me.html', ['module'], function(module) { module.exports = "<template><div class=\"panel panel-${style}\"><div class=\"panel-heading\">${title}</div><div class=\"panel-body\">${description}<p></p><ul class=\"list-group\"><li class=\"list-group-item\" repeat.for=\"item of items\">${item.description}</li></ul></div></div></template>"; });
define('text!dynamicloader/dynamic-loader.css', ['module'], function(module) { module.exports = ".component{\r\n        margin-right: 0;\r\n    margin-left: 0;\r\n    background-color: #fff;\r\n    border-color: #ddd;\r\n    border-width: 1px;\r\n    border-radius: 4px 4px 0 0;\r\n    -webkit-box-shadow: none;\r\n    box-shadow: none;\r\n}"; });
//# sourceMappingURL=app-bundle.js.map