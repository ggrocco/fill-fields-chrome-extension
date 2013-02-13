chrome.contextMenus.onClicked.addListener(function onClickHandler(tab){
  chrome.tabs.executeScript(null, {code: "call();"});
});

chrome.contextMenus.create({
  id: "fill",
  title: "Fill fields",
  contexts: ['page']
});
