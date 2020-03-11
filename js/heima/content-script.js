$(function(){
			console.log("DOMContentLoaded -----------99");
	init();

			console.log("DOMContentLoaded -----------oo");
	function init(){
		console.log('这是content script! -- item search');
		
		function setCookie(name,value){
			var Days = 30;
			var exp = new Date();
			exp.setTime(exp.getTime() + Days*24*60*60*1000);
			document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
		};
		function getCookie(name){
			var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
		 
			if(arr=document.cookie.match(reg))
				return unescape(arr[2]);
			else
				return null;
		};
		//console.log(getCookie("hmtitle").split('+'));
		//console.log(getCookie("hmurl").split('+'));
		setTimeout(function() {
			console.log('heima');
			if (location.href.indexOf('https://xuexi.boxuegu.com/construe') !== -1){
				/*setTimeout(function() {
					window.location.href='https://xuexi.boxuegu.com/construe.html?id=12629'
				},5000);*/
				var hmtitle = null;
				var hmurl = null;
				var num = 1 ;
				hmurl = window.location.href;
				hmtitle = document.title;
				if(hmtitle.indexOf("杭州黑马")!==-1&&hmtitle.indexOf("Java")!==-1&&hmtitle.indexOf("32期")!==-1){
						// save
					setCookie("hmtitle",getCookie("hmtitle")+"+"+hmtitle);
					//console.log(getCookie("hmtitle"));
					setCookie("hmurl",getCookie("hmurl")+"+"+hmurl);
					//console.log(getCookie("hmurl"));
					//alert(document.cookie);
				}
				// id  split
				var hmid =hmurl.split('=')[1];
				// stop
				if(hmid.indexOf("28500")!==-1){
					//10000
					//14290
					return;
				}
				// id++
				var hmId=Number(hmid);
				hmId++;
				
				// jump
				var prefix="https://xuexi.boxuegu.com/construe.html?id=";
				window.location.href=prefix+hmId
				//window.close();
		    }
		}, 500);
	};
});