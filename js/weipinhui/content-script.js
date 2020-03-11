$(function(){
	init();
	
	/*发送数据至background连接服务器后台
	function sendMessageToBackground(item) {
	chrome.runtime.sendMessage({item:item}, function() {
		console.log('发送请求成功');
	});
	*/
	
	//唯品会下载图片
	function init(){
		console.log('这是content script! -- item search');
		setTimeout(function() {
			console.log("weipinhui");
			if (location.href.indexOf('https://detail.vip.com/detail') !== -1){
				console.log("sdfsadfa");
				var itemsDiv = document.querySelector(".dc-img-detail");
				var itemCells = itemsDiv.children;
				var B=new Array();
				$.each(itemCells, (i, itemCell) => {
					var imgUrl = itemCell.getElementsByTagName('img')[0].getAttribute('data-original');
					//var imgUrl = itemCell.getElementsByTagName('img')[0].getAttribute('data-src');
					//var price = itemCell.querySelector('.ctx-box div:nth-child(1) strong').innerText;
					//var deal = itemCell.querySelector('.ctx-box div:nth-child(1) .deal-cnt').innerText.split('人')[0];
					//var itemUrl = itemCell.querySelector('.ctx-box .title a').getAttribute('href');
					//var title = itemCell.querySelector('.ctx-box .title a').innerText;
					//var shopName = itemCell.querySelector('.row-3 .shopname').innerText;
					//var location = itemCell.querySelector('.row-3 .location').innerText;
					//var createDate = new Date();
					window.open(imgUrl);
					/*
					var item = {
						imgUrl:imgUrl,
						//itemprice:price,
						//itemtitle:title,
						createDate:createDate
					};
					*/
					//console.log(item);
					//sendMessageToBackground(item);
					/*console.log('第', i + 1,'个商品数据为：');
					console.log('title: ', title);
					console.log('itemUrl: ', itemUrl);
					console.log('price', price);
					console.log('deal', deal);
					console.log('imgUrl', imgUrl);
					console.log('shopName', shopName);
					console.log('location', location);*/
				});
				//var lastpage = document.querySelector('#mainsrp-pager .next a ');
				//lastpage.click();
			}
		}, 100);
	};
});