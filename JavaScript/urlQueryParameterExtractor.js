// slice(1) removes the "?" from the query string
var queryParameters = decodeURIComponent(window.location.search.slice(1))
  .split('&')
  .reduce(function reduce(collector, current) {
    current = current.split('=');
    collector[current[0]] = current[1];
    return collector;
  }, {});
