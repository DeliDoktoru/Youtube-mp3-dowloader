


chrome.browserAction.onClicked.addListener(function(tab) {
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
	
    
	 if(tabs[0].url.indexOf("https://www.youtube.com/watch")!== -1)
	{ 
		var newURL = "https://www.onlinevideoconverter.com/tr/mp3-converter";
		
	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
     if (request.value == "true")
		
		
          sendResponse({response : tabs[0].url }); 
	  });
	  
	chrome.tabs.create({ url: newURL });
	}
	 
	 
	 
});

 });
  

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	
  if(message.closeThis)
  {	chrome.tabs.create({ url: message.url });  
chrome.tabs.remove(sender.tab.id);
	}
});


