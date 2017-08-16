/**
 * This is where you will build your solution. This function is called in the test file and the `state`
 * object will be passed through there. If you want to see exactly what is passed in each case, take
 * a look in `title-test.js`
 * @param {object} state - the query object representing a search
 */
function parseTitle (state) {
  var title = queryStr() + brandStr() + storeStr()
  return title;

  function queryStr() {
  	let query = state.query ? toCaps( state.query.replace(/\W/, ' ') ) : '';

  	if ( query && state.store ) {
	  	if ( query.toUpperCase().includes(state.store.toUpperCase()) ) {
	  		let splits = query.split(' ')
	  		query = splits[1];
	  	}
  	}
		return query
  }

  function brandStr() {
  	let brand = state.brand ? toCaps( state.brand.replace(/\W/, ' ') ) : '';

  	if ( state.query && state.brand ) brand = ' by ' + brand;
  	
  	return brand
  }

  function storeStr() {
  	let store = state.store ? toCaps( state.store.replace(/\W/, ' ') ) : '';
  	if ( state.store ) {
	  	if ( state.store.includes('+') ) {
	  		splits = store.split(' ');
	  		store = splits[0] + '+' + splits[1];
	  	}
  	}
  	if ( (state.query || state.brand) && state.store ) store = ' at ' + store;
  	
  	return store
  }

	function toCaps (str) {
	  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	}
}
