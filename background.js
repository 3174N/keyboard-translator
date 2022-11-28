browser.contextMenus.create({
    id: 'replace',
    title: 'Translate text',
    contexts: ['selection'],
});
browser.contextMenus.onClicked.addListener((info, tab) => {
    browser.tabs.sendMessage(tab.id, { info: info }, function (response) {});
});
