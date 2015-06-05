angular.module('MODULE.SUBMODULE').factory(
    'FACTORY_SERVICE',
    function FACTORY_SERVICEProvider(
        $log,
        otherService
    ) {
        'use strict';

        var constructor;

        constructor = function constructor (spec) {

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

            initialize = function initialize(spec) {
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

            destroy = function destroy () {
                // body...
            }

            // -----
            // EXECUTE
            // ----------

            initialize(spec);
            return {
                public1: public1,
                public2: public2,
                destroy: destroy
            };
        }

        return constructor

    }

);


// Usage
angular.module('MODULE.SUBMODULE').contoller(
    'CONTROLLER',
    function SERVICEProvider(
        FACTORY_SERVICE
    ) {

        if (currentObject) {
            currentObject.destroy();
            currentObject = undefined;
        }

        currentObject = FACTORY_SERVICE(spec);

    }
);
