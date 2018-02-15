
if(window.location.href.indexOf("https://www.onlinevideoconverter.com/tr/success")!== -1)
{
	
	
	//location.replace(document.querySelector("#downloadq").getAttribute("href"));
	chrome.runtime.sendMessage({closeThis: true, url: document.querySelector("#downloadq").getAttribute("href")  });

}
else{
	chrome.runtime.sendMessage({value: "true"}, function(response) {
	document.querySelector("#texturl").value=response.response;
	document.querySelector("#convert1").click();
	
});
}

	
