const ajaxProducts = require('./ajaxProducts.json');
import $ from 'jquery';

const PRODUCTS_URL = '/index-products';

function resolveData() {
	var dfd = $.Deferred();

	setTimeout(() => {
		dfd.resolve(ajaxProducts);
	}, 500);

	return dfd.promise();
}

const mockJqueryAjax = (() => {
	return $.ajax = function(arg) {
		if (arg === PRODUCTS_URL) {
			return $.when(resolveData());
		}
		$.ajax.apply(arguments);
	}
})();

export default mockJqueryAjax;
