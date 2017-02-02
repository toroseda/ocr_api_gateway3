(function () {
    'use strict';

    angular
        .module('ocrApiGateway3App')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
