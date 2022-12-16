# Amazon Cart Items to Save for Later

If you have bunch of items in your Amazon Cart and too lazy to click one by one on Save for Later button, well, my friend this function is for you.
Just copy and paste this code in your console your items will be clicked to Save for Later with 500 milsec interval. Goodluck.


```
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
```
