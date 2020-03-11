
// 监听来自content-script的消息
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
	console.log('收到来自content-script的消息：');
	console.log(request, sender);
	/*if (request.cmd && request.cmd == 'mtop') {
		console.log('消息是mtop类型，消息体是：', request.msg);
		if (request.msg && request.msg.type && MockHelper[request.msg.type]) {
			MockHelper[request.msg.type](request.msg.data);
		}
	}*/
	$.ajax({
      type: "POST",
      url: "http://localhost:8080/addItems",
      data: JSON.stringify(request.item),
      //dataType : "json",
	  contentType: "application/json",
      success: function (d) {
        console.log("23", d);
      }
    });
	//$.post('',request.item,function(){
		//console.log('=================================');
		//console.log(KeyRepoMap.ANDROID["portal"]);
		//alert('跨域调用成功！');
	//}, "json");
});


	/*$.post('http://localhost:8080/addItems',item,function(){
		console.log('=================================');
		//console.log(KeyRepoMap.ANDROID["portal"]);
		//alert('跨域调用成功！');
	});*/

$('#test_cors').click((e) => {
	$.get('https://www.baidu.com', function(html){
		// console.log( html);
		console.log(KeyRepoMap.ANDROID["portal"]);
		alert('跨域调用成功！');
	});
});

$('#get_popup_title').click(e => {
	var views = chrome.extension.getViews({type:'popup'});
	if(views.length > 0) {
		alert(views[0].document.title);
	} else {
		alert('popup未打开！');
	}
});

// 获取当前选项卡ID
function getCurrentTabId(callback)
{
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
	{
		if(callback) callback(tabs.length ? tabs[0].id: null);
	});
}

// 预留一个方法给popup调用
function testBackground() {
	alert('你好，我是background！');
}

// 是否显示图片
var showImage;
chrome.storage.sync.get({showImage: true}, function(items) {
	showImage = items.showImage;
});