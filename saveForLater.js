function saveForLater() {
	var query = document.querySelectorAll("form#activeCartViewForm div.sc-product-details > div:not(.sc-hidden) input[value='Save for later']")
	if (query.length) {
		query[0].click();
	}
	if (query.length > 1) {
		setTimeout(saveForLater, 500);
	}
	else {
		console.log('Finished');
	}
}

saveForLater();
