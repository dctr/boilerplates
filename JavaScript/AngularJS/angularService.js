angular.module('MODULE.SUBMODULE').factory(
    'SERVICE',
    function SERVICEProvider(
        $log,
        otherService
    ) {
        'use strict';

        var initialize,
            instanceVar1,
            instanceVar2,
            private1,
            private2,
            public1,
            public2;

        // -----
        // PRIVATE
        // ----------

        initialize = function initialize() {
            // Constructor-like function.
            instanceVar1 = 42;
            instanceVar2 = 'foo';
        };

        private1 = function private1(spec) {
            // body...
        };

        private2 = function private2(spec) {
            // body...
        };        

        // -----
        // PUBLIC
        // ----------

        public1 = function public1(spec) {
            // body...
        };

        public2 = function public2(spec) {
            // body...
        };

        // -----
        // EXECUTE
        // ----------

        initialize();
        return {
            public1: public1,
            public2: public2
        };
    }

);
