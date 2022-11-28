const en = "qwertyuiopasdfghjkl;zxcvbnm,./'";
const he = "/'קראטוןםפשדגכעיחלךףזסבהנמצתץ.,";

const swap = (str, lang1 = en, lang2 = he) => {
    let res = '';
    let isL1 = true;
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);

        let charInL1 = lang1.includes(char);
        let charInL2 = lang2.includes(char);
        if (charInL1 || charInL2) isL1 = charInL1;
        else {
            res += char;
            continue;
        }

        let resChar;
        if (isL1) resChar = lang2.charAt(lang1.indexOf(char));
        else resChar = lang1.charAt(lang2.indexOf(char));
        res += resChar;
    }
    return res;
};

function swapSelected(info) {
    let text = info['selectionText'];
    let swapped = swap(text);
    if (info['editable']) {
        let selection = window.getSelection();
        if (selection.rangeCount) {
            let range = selection.getRangeAt(0);
            range.deleteContents();
            range.insertNode(document.createTextNode(swapped));
        }
    } else {
        navigator.clipboard
            .writeText(swapped)
            .then(() => {})
            .catch(() => {});
    }
}

function handleMessage(request, sender, sendResponse) {
    swapSelected(request.info);
}

browser.runtime.onMessage.addListener(handleMessage);
