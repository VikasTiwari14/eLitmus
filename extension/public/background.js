chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    console.log(tab.url);
    if (tab.url.includes('https://www.elitmus.com/')) {
        chrome.browserAction.enable(tabId);
    }
});