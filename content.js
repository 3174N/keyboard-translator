const en = 'qwertyuiopasdfghjkl;zxcvbnm,./';
const he = "/'קראטוןםפשדגכעיחלךףזסבהנמצתץ.";

const createDict = (lang1, lang2) => {
    if (lang1.length !== lang2.length) return; // Language strings should be of same length.

    let dict = {};

    for (let i = 0; i < lang1.length; i++) {
        dict[lang1.charAt(i)] = lang2.charAt(i);
        dict[lang2.charAt(i)] = lang1.charAt(i);
    }

    return dict;
};

const dict = createDict(en, he);

const swap = (str) => {
    let res = '';
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        if (dict[char] !== undefined) res += dict[char];
        else res += char;
    }
    return res;
};

function swapSelected(info) {
    let text = info['selectionText'];
    let swapped = swap(text);
    if (info['editable']) {
        let selection = window.getSelection();
        if (selection.rangeCount) {
            console.log('dasf');
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
