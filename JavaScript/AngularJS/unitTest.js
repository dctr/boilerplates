/*global afterEach, beforeEach, expect, describe, it */
describe('MODULE.SUBMODULE.SERVICE tests', function SERVICETests() {
    'use strict';

    var SERVICE;

    beforeEach(function beforeEach() {
        module('MODULE.SUBMODULE');

        // Spies, stubs and mocks before inject!
        module(function replaceDependencies($provide) {
            $provide.constant('constantDependency', constantDependencyDummy);
            $provide.value('otherDependency', otherDependencyDummy);
        });

        // Inject the service under test
        inject(function injectBeforeEach($injector) {
            SERVICE = $injector.get('SERVICE');
        });

    });

    it('should do something nice', function () {
        expect(true).to.be.true;
    });

});
