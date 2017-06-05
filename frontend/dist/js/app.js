angular.module("apptemplates", []).run(["$templateCache", function($templateCache) {$templateCache.put("TEMPLATE_CACHE/docs.html","<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags --><meta name=\"description\" content=\"\"><meta name=\"author\" content=\"\"><title>Djangular3 - docs</title><!-- Bootstrap core CSS --><link rel=\"stylesheet\" href=\"./css/lib.css\"><link rel=\"stylesheet\" href=\"./css/app.css\"><link rel=\"stylesheet\" href=\"./css/docs.css\"><script src=\"./js/lib.js\"></script><!--APPJS--><!--APPJS END--><script>DOCS.angular_dependencies = [\'appdocs\'];\n            APPDOCS.angular_dependencies = [];\n            if(APP.USE_TEAMPLE_CACHE){\n                DOCS.angular_dependencies.push(\'apptemplates\');\n                DOCS.angular_dependencies.push(\'docstemplates\');\n            }</script><!--DOCSJS--><!--DOCSJS END--><!--APPDOCSJS--><!--APPDOCSJS END--><script>angular.module(\'appdocs\', APPDOCS.angular_dependencies);</script></head><body ng-app=\"docs_main\"><nav class=\"navbar navbar-inverse navbar-fixed-top\"><div class=\"container-fluid\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\"><span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span></button> <a class=\"navbar-brand\" href=\"#\">O incrível DOCS</a></div><div id=\"navbar\" class=\"navbar-collapse collapse\"><ul class=\"nav navbar-nav navbar-right\"><li><a href=\"#\">Dashboard</a></li><li><a href=\"#\">Settings</a></li><li><a href=\"#\">Profile</a></li><li><a href=\"#\">Help</a></li></ul><form class=\"navbar-form navbar-right\"><input type=\"text\" class=\"form-control\" placeholder=\"Search...\"></form></div></div></nav><div class=\"container-fluid\"><div class=\"row\"><div class=\"col-sm-3 col-md-2 sidebar\"><component-catalog-tree group=\"app\"></component-catalog-tree></div><div class=\"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main\"><div ui-view></div></div></div></div></body></html>");
$templateCache.put("TEMPLATE_CACHE/index.html","<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags --><meta name=\"description\" content=\"\"><meta name=\"author\" content=\"\"><link rel=\"icon\" href=\"../../favicon.ico\"><title>Djangular3 Single Page Application</title><link rel=\"stylesheet\" href=\"./css/lib.css\"><link rel=\"stylesheet\" href=\"./css/app.css\"><link rel=\"stylesheet\" href=\"./css/index.css\"><script src=\"./js/lib.js\"></script><!--APPJS--><!--APPJS END--></head><body ng-app=\"app_main\" ng-controller=\"AppMainCtrl\"><!-- Fixed navbar --><apptoolbar></apptoolbar><div ui-view></div></body></html>");
$templateCache.put("TEMPLATE_CACHE/cameras/cameras.html","<div><span ng-show=\"repo.loading\">loading...</span><ul><li ng-repeat=\"camera in repo.cameras\">{[{camera.name}]}</li></ul></div>");
$templateCache.put("TEMPLATE_CACHE/home/apphome.html","<div class=\"container\"><!-- Main component for a primary marketing message or call to action --><div class=\"jumbotron\"><h1>Djangular</h1><p>Esta é uma aplicação de exemplo com Django e AngularJS.</p><p>Tem um cadastro de câmeras que vc pode mexer usando o django admin (se vc logar com um superusuario), e uma visualização de câmeras com AJAX que só funciona se vc tiver logado.</p><p>A aplicação é uma SPA (single page application) com algumas \"features arquiteturais\" bastante desejáveis, como</p><ul><li>Help executável do projeto</li><li>Modo de desenvolvimento front-end only, com back-end fake</li><li>Catálogo de componentes Angular</li><li>Exemplo do \"pattern\" de modelo como serviço</li><li>Testes unitários javascript</li><li>E mais um monte de boas práticas</li></ul><p>Modéstia parte, tá fodástico esse projeto e eu pretendo reusar isso aqui por muito tempo, lógico, melhorando esse esqueleto constantemente.</p></div></div>");
$templateCache.put("TEMPLATE_CACHE/login/applogin.html","<div><div><input type=\"text\" placeholder=\"username\" ng-model=\"m.username\"></div><div><input type=\"password\" placeholder=\"password\" ng-model=\"m.password\"></div><button ng-click=\"m.login()\">OK</button> <span ng-show=\"m.loading\">loading...</span></div>");
$templateCache.put("TEMPLATE_CACHE/viewuser/appviewuser.html","<div><div ng-if=\"m.loading\">loading...</div><div ng-if=\"!m.loading\"><div>login: {[{m.user.username}]}</div><div>name: {[{m.user.name}]}</div></div></div>");
$templateCache.put("TEMPLATE_CACHE/components/todo_example/todo.html","<div><div class=\"form-group\"><label for=\"newtodo\">New todo</label><input class=\"form-control\" id=\"newtodo\" placeholder=\"Novo todo\" ng-model=\"m.newtodo\"></div><button ng-click=\"m.add()\">Add</button><div ng-if=\"m.adding\" class=\"progress-bar progress-bar-striped active\" style=\"width: 100%\">adding...</div><ul class=\"todo\"><li ng-repeat=\"todo in m.todos\"><span>{[{todo.description}]}</span> <button ng-click=\"m.remove(todo)\">Remove</button></li></ul></div>");
$templateCache.put("TEMPLATE_CACHE/components/toolbar/apptoolbar.html","<nav class=\"navbar navbar-default navbar-fixed-top\"><div class=\"container\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\"><span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span></button> <a class=\"navbar-brand\" ui-sref=\"home\">Djangular3</a></div><div id=\"navbar\" class=\"navbar-collapse collapse\"><ul class=\"nav navbar-nav\"><li ng-class=\"{active: $state.current.name == \'home\'}\"><a ui-sref=\"home\">Home</a></li><li ng-class=\"{active: $state.current.name == \'admin\'}\" ng-if=\"auth.has_permission(\'ADMIN\')\"><a ui-sref=\"admin\">Admin</a></li><li ng-class=\"{active: $state.current.name == \'cameras\'}\"><a ui-sref=\"cameras\">Cameras</a></li></ul><ul class=\"nav navbar-nav navbar-right\"><li><a ui-sref=\"login\" ng-if=\"!auth.authenticated()\">Login</a></li><li class=\"dropdown\" ng-if=\"auth.authenticated()\"><a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">{[{auth.user.username}]} <span class=\"caret\"></span></a><ul class=\"dropdown-menu\"><li><a ui-sref=\"viewuser({login: auth.user.username})\">Ver Perfil</a></li><li role=\"separator\" class=\"divider\"></li><li><a href ng-click=\"auth.logout()\">Logout</a></li></ul></li></ul></div><!--/.nav-collapse --></div></nav>");}]);
if(!window.APP){
    window.APP = {};
}
APP.BASE_URL = 'TEMPLATE_CACHE/';
APP.USE_TEAMPLE_CACHE = true;

if(!window.DOCS){
    window.DOCS = {};
}
DOCS.BASE_URL = 'TEMPLATE_CACHE/';
DOCS.SAMPLE_BASE_URL = './docs_samples/';

if(!window.APPDOCS){
    window.APPDOCS = {};
}
if(!APPDOCS.angular_dependencies){
	APPDOCS.angular_dependencies = [];
}

if(!window.APP){
	window.APP = {};
}

window.jsutils = {};

jsutils.has_ng_module = function(name){
	try{
		angular.module(name);
		return true;
	} catch(ex){
		return false;
	}
};
angular.module('appajax', ['ngCookies']);

angular.module('appajax').config(
    function($httpProvider){
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    }
);

angular.module('appajax').factory('AppAjax', function($http, $cookies, $log){

    var global_error_handler;

    var AppAjax = {
        get: get,
        post: post,
        set_error_handler: set_error_handler,
    };

    function get(url, params){
        if(!params){
            params = {};
        }
        var promise = $http({
            method: 'GET',
            url: url,
            params: params
        });
        if(global_error_handler){
            promise.catch(global_error_handler);
        }
        return promise;
    }

    function post(url, params){
        if(!params){
            params = {};
        }
        $http.defaults.headers.post['X-CSRFToken'] = $cookies.get('csrftoken');
        var promise = $http({
            method: 'POST',
            url: url,
            data: $.param(params)
        });
        if(global_error_handler){
            promise.catch(global_error_handler);
        }
        return promise;
    }

    function set_error_handler(f){
        global_error_handler = f;
    }

    return AppAjax;
});

angular.module('appadmin', ['appapi']);

angular.module('appadmin').factory('AppAdminModel', function(AppApi){
	var m = {};

	return m;
});

angular.module('appadmin').directive('appadmin', function(){
	return {
		restrict: 'E',
		replace: true,
		scope: {},
		template: '<iframe class="admin-iframe" src="/admin"></iframe>',
	};
});
angular.module('cameras', ['appapi']);

angular.module('cameras').factory('CamerasRepository', function(AppApi){
	var m = {
		loading: false,
		cameras: [],
	};

	angular.extend(m, {
		init: init,
	});

	function init(){
		m.loading = true;
		AppApi.list_cameras().then(function(result){
			m.cameras = result.data;
		}).finally(function(){
			m.loading = false;
		});
	}

	return m;
});

angular.module('cameras').directive('cameras', function(){
	return {
		restrict: 'E',
		replace: true,
		scope: {},
		templateUrl: APP.BASE_URL+'cameras/cameras.html',
		controller: function($scope, CamerasRepository){
			CamerasRepository.init();
			$scope.repo = CamerasRepository;
		},
	};
});
angular.module('apphome', ['appapi']);

angular.module('apphome').factory('AppHomeModel', function(AppApi){
	var m = {};

	return m;
});

angular.module('apphome').directive('apphome', function(){
	return {
		restrict: 'E',
		replace: true,
		scope: {},
		templateUrl: APP.BASE_URL+'home/apphome.html',
		controller: function($scope, AppHomeModel){

		},
	};
});
(function(){
	var deps = [
		'ui.router',
		'apptoolbar',
		'apphome',
		'applogin',
		'appadmin',
		'appviewuser',
		'appapi',
		'cameras',
		'appajax',
	];
	if(APP.USE_TEAMPLE_CACHE){
		deps.push('apptemplates');
	}
	angular.module('app_main', deps);

	angular.module('app_main').config(function($interpolateProvider, $stateProvider, $urlRouterProvider) {
	    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
	    $urlRouterProvider.otherwise('/');

	    $stateProvider
	        .state('home', {url: '/', template: '<apphome></apphome>'})
	        .state('admin', {url: '/admin', template: '<appadmin></appadmin>'})
	        .state('cameras', {url: '/cameras', template: '<cameras></cameras>'})
	        .state('login', {url: '/login', template: '<applogin></applogin>'})
	        .state('viewuser', {url: '/user/:login', template: '<appviewuser></appviewuser>', controller: 'ViewUserStateCtrl'})
	});

	angular.module('app_main').controller('AppMainCtrl', function($scope, AppAuth){
	});

	angular.module('app_main').run(function(AppAjax){
		AppAjax.set_error_handler(function(response){
			if(response.status == 401 && response.data.not_authenticated){
				alert('Voce não está logado. Faça login pra ter acesso a esta funcionalidade');
			}
		})
	})
})();

angular.module('appauth', ['appapi']);

angular.module('appauth').factory('AppAuth', function(AppApi){
	var auth = {
		user: null,
		authenticated: authenticated,
		has_permission: has_permission,
		set_user: set_user,
		logout: logout,
	};

	function authenticated(){
		return auth.user !== null && auth.user !== undefined;
	}

	function has_permission(permission){
		return auth.user && auth.user.permissions[permission];
	}

	function set_user(user){
		auth.user = user;
	}

	function logout(){
		AppApi.logout().then(function(){
			auth.user = null;
		});
	}

	function _check_for_authentication(){
		AppApi.whoami().then(function(result){
			var _who = result.data;
			if(_who.authenticated){
				auth.user = _who.user;
			} else {
				auth.user = null;
			}
		});
	}

	_check_for_authentication();

	return auth;
});
angular.module('applogin', ['appapi']);

angular.module('applogin').factory('AppLoginModel', function(AppAuth, AppApi, $state){
	var m = {
		username: '',
		password: '',
		loading: false,
		login: login,
	};

	function login(){
		m.loading = true;
		AppApi.login(m.username, m.password).then(function(result){
			var logged_user = result.data;
			if(logged_user){
				AppAuth.set_user(result.data);
				$state.go('home');
			} else {
				alert('wrong credentials');
			}
		}).finally(function(){
			m.loading = false;
		});
	}

	return m;
});

angular.module('applogin').directive('applogin', function(){
	return {
		restrict: 'E',
		replace: true,
		scope: {},
		templateUrl: APP.BASE_URL+'login/applogin.html',
		controller: function($scope, AppLoginModel){
			$scope.m = AppLoginModel;
		},
	};
});

angular.module('ng_bind_html_unsafe', []);
angular.module('ng_bind_html_unsafe').directive('ngBindHtmlUnsafe', ['$sce', function ($sce) {
    return function (scope, element, attr) {
        element.addClass('ng-binding').data('$binding', attr.ngBindHtmlUnsafe);
        scope.$watch(attr.ngBindHtmlUnsafe, function ngBindHtmlUnsafeWatchAction(value) {
            element.html(value || '');
        });
    };
}]);

angular.module('appviewuser', ['appapi']);

angular.module('appviewuser').factory('AppViewUserModel', function(AppApi){
	var m = {
		loading: false,
		user: null,
		load: load,
	};

	function load(username){
		m.loading = true;
		AppApi.get_user_details(username).then(function(result){
			m.user = result.data;
		}).finally(function(){
			m.loading = false;
		});
	}

	return m;
});

angular.module('appviewuser').controller('ViewUserStateCtrl', function($scope, $stateParams, AppViewUserModel){
	var login = $stateParams.login;
	AppViewUserModel.load(login);
});

angular.module('appviewuser').directive('appviewuser', function(){
	return {
		restrict: 'E',
		replace: true,
		scope: {},
		templateUrl: APP.BASE_URL+'viewuser/appviewuser.html',
		controller: function($scope, AppViewUserModel){
			$scope.m = AppViewUserModel;
		},
	};
});
//This is a toy component to demonstrate how to make them

angular.module('todo', ['appapi']);

angular.module('todo').factory('TODOModel', function(AppApi){
    var m = {
        newtodo: '',
        adding: false,
        todos: [],
    };

    angular.extend(m, {
        add: add,
        remove: remove,
    });

    function add(){
        var todo = {description: m.newtodo};
        m.adding = true;
        AppApi.add(todo).then(function(result){
            var saved_todo = result.data;
            m.todos.push(saved_todo);
        }).finally(function(){
            m.adding = false;
        });
        m.newtodo = '';
    }

    function remove(todo){
        var idx = m.todos.indexOf(todo);
        m.todos.splice(idx, 1);
        //TODO: remove the todo using an API
    }

    return m;
});

angular.module('todo').directive('todo', function(){
    return {
        restrict: 'E',
        replace: true,
        scope: {},
        templateUrl: APP.BASE_URL+'components/todo_example/todo.html',
        controller: function($scope, TODOModel){
            var m = $scope.m = TODOModel;
        }
    };
});

function teste_pra_brincar_com_todo_no_console(){
    var m = {
        newtodo: '',
        todos: [],
        add: function(){
            var todo = {description: m.newtodo};
            m.todos.push(todo);
            m.newtodo = '';
        },
        remove: function(idx){
            m.todos.splice(idx, 1);
        },
        print: function(){
            console.log(JSON.stringify(m, null, 4));
        }
    };
}
angular.module('apptoolbar', ['appauth']);

angular.module('apptoolbar').directive('apptoolbar', function(){
	return {
		restrict: 'E',
		replace: true,
		scope: {},
		templateUrl: APP.BASE_URL+'components/toolbar/apptoolbar.html',
		controller: function($scope, AppAuth, $state){
			$scope.auth = AppAuth;
			$scope.$state = $state;
		}
	};
});

angular.module('appapi', ['appajax']);

angular.module('appapi').factory('AppApi', function(AppAjax){
	var api = {
		add: todo,
		login: login,
		logout: logout,
		whoami: whoami,
		list_cameras: list_cameras,
		get_user_details: get_user_details,
	};

	function todo(){}

	function login(username, password){
		return AppAjax.post('/api/login', {username: username, password: password});
	}

	function logout(){
		return AppAjax.get('/api/logout');
	}

	function whoami(){
		return AppAjax.get('/api/whoami');
	}

	function list_cameras(filters){
		return AppAjax.get('/api/list_cameras', {filters: angular.toJson(filters)});
	}

	function get_user_details(username){
		return AppAjax.get('/api/get_user_details', {username: username});	
	}

	return api;
});
