// See also: https://github.com/idanush/ngdocs/wiki/API-Docs-Syntax

// Module overview documentation.
/**
 * @ngdoc overview
 * @name MODULE.SUBMODULE
 * @requires COMPONENT
 * @author David Christ <david.christ@bridging-it.de>
 * @copyright Bosch GmbH
 * @version GENERATOR-TAG
 * @description
 * Description (allows Markdown).
 */

// File header for services
/**
 * @ngdoc service
 * @name MODULE.SUBMODULE.SERVICE
 * @requires COMPONENT
 * @description
 * Description (allows Markdown).
 */

// File header for controllers, etc..
// Note the doubled @name usage. ngDoc requires "TYPE:" in front of the name if not a service.
// However, WebStorm does not recognize this syntax and thus does not provide auto-completion / checking / etc.
/**
 * @ngdoc directive | event | filter | function | inputType | interface | method | object | overview | property
 * @name MODULE.SUBMODULE.WHATEVER
 * @name MODULE.SUBMODULE.TYPE:WHATEVER
 * @requires COMPONENT
 * @description
 * Description (allows Markdown).
 */

// Function of a directive | object | service | ... .
/**
 * @ngdoc function
 * @name MODULE.SUBMODULE.WHATEVER#FUNCTION
 * @methodOf MODULE.SUBMODULE.WHATEVER
 * @param {type} variableName Description
 * @returns {type} Description
 * @description
 * Description (allows Markdown).
 */

// Object passed around
// Note the doubled name usage. ngDoc requires "object:" type in front of the name if not a service.
// However, WebStorm does not recognize this syntax and thus does not provide auto-completion / checking / etc.
/**
 * @ngdoc object
 * @name MODULE.SUBMODULE.OBJECT
 * @name MODULE.SUBMODULE.object:OBJECT
 * @property {type} variableName Description
 * @description
 * Description (allows Markdown).
 */
