browser.contextMenus.create({
    id: 'replace',
    title: 'Translate text',
    contexts: ['selection'],
});
browser.contextMenus.onClicked.addListener((info, tab) => {
    browser.tabs.sendMessage(tab.id, { info: info }, function (response) {});
    // let text = info['selectionText'];
    // let swapped = swap(text);
    // if (info['editable']) {
    //     let selection = window.getSelection();
    //     if (selection.rangeCount) {
    //         console.log('dasf');
    //         let range = selection.getRangeAt(0);
    //         range.deleteContents();
    //         range.insertNode(document.createTextNode('test'));
    //     } else {
    //         console.log('asdfaaaa');
    //     }
    // } else
    //     navigator.clipboard
    //         .writeText(swapped)
    //         .then(() => {})
    //         .catch(() => {});
});
