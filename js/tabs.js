window.onload = function() {
	document.querySelector('.tab__title').addEventListener('click', clickTabs);
	var categories = [
    {categoryId:1, categoryName: 'Футболки'},
    {categoryId:2, categoryName: 'Майки'},
    {categoryId:3, categoryName: 'Носки'},
    {categoryId:4, categoryName: 'Джинсы'},
    {categoryId:5, categoryName: 'Брюки'},
	];

	var products = [
    {productId:1, productName: 'Товар 1', categoryId:1},
    {productId:2, productName: 'Товар 2', categoryId:2},
    {productId:3, productName: 'Товар 3', categoryId:3},
    {productId:4, productName: 'Товар 4', categoryId:4},
    {productId:5, productName: 'Товар 5', categoryId:5},
    {productId:6, productName: 'Товар 6', categoryId:1},
    {productId:7, productName: 'Товар 7', categoryId:2},
    {productId:8, productName: 'Товар 8', categoryId:3},
    {productId:9, productName: 'Товар 9', categoryId:4},
    {productId:10, productName: 'Товар 10', categoryId:5},
    {productId:11, productName: 'Товар 11', categoryId:1},
    {productId:12, productName: 'Товар 12', categoryId:2},
    {productId:13, productName: 'Товар 13', categoryId:3},
    {productId:14, productName: 'Товар 14', categoryId:4},
    {productId:24, productName: 'Товар 24', categoryId:4},
    {productId:25, productName: 'Товар 25', categoryId:5}
    	];
    
    var titleBlock = document.getElementsByClassName('tab__title-elem');	
	for (var i = 0; i < titleBlock.length; i++) {
		titleBlock[i].innerHTML = categories[i].categoryName;		
	}
				
	for (i = 0; i< products.length; i++){
		var layoutElem = document.createElement('div');
		layoutElem.innerHTML = products[i].productName;
		layoutElem.className = 'body__elem';	
		switch (products[i].categoryId){
			case 1:
				var layout = document.getElementsByClassName('tab__body-elem')[0];
				layout.appendChild(layoutElem);
				break;
			case 2:
				var layout = document.getElementsByClassName('tab__body-elem')[1];
				layout.appendChild(layoutElem);
				break;
			case 3:
				var layout = document.getElementsByClassName('tab__body-elem')[2];
				layout.appendChild(layoutElem);
				break;
			case 4:
				var layout = document.getElementsByClassName('tab__body-elem')[3];
				layout.appendChild(layoutElem);
				break;
			case 5:
				var layout = document.getElementsByClassName('tab__body-elem')[4];
				layout.appendChild(layoutElem);
				break;	
	}	
	}
	function clickTabs(event) {
	
		console.log(event);
		if(event.target.className == 'tab__title-elem'){
			
			for (var i = 0; i < titleBlock.length; i++) {
					titleBlock[i].classList.remove('tab__title-elem_active')
			}
			event.target.classList.add('tab__title-elem_active')
			var dataTab = event.target.getAttribute('data-tab');
			var bodyElem = document.getElementsByClassName('tab__body-elem');
			for (var i = 0; i < bodyElem.length; i++) {
				if (dataTab == i) {
					bodyElem[i].style.display = 'block';
				}
				else{
					bodyElem[i].style.display = 'none';
				}		
			}
			
		}
	}	
}


