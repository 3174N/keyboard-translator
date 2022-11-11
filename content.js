const dict = {
    q: '/',
    '/': 'q',
    w: "'",
    "'": 'w',
    e: 'ק',
    ק: 'e',
    r: 'ר',
    ר: 'r',
    t: 'א',
    א: 't',
    y: 'ט',
    ט: 'y',
    u: 'ו',
    ו: 'u',
    i: 'ן',
    ן: 'i',
    o: 'ם',
    ם: 'o',
    p: 'פ',
    פ: 'p',
    a: 'ש',
    ש: 'a',
    s: 'ד',
    ד: 's',
    d: 'ג',
    ג: 'd',
    f: 'כ',
    כ: 'f',
    g: 'ע',
    ע: 'g',
    h: 'י',
    י: 'h',
    j: 'ח',
    ח: 'j',
    k: 'ל',
    ל: 'k',
    l: 'ך',
    ך: 'l',
    ';': ';',
    ',': "'",
    z: 'ז',
    ז: 'z',
    x: 'ס',
    ס: 'x',
    c: 'ב',
    ב: 'c',
    v: 'ה',
    ה: 'v',
    b: 'נ',
    נ: 'b',
    n: 'מ',
    מ: 'n',
    m: 'צ',
    צ: 'm',
    ת: ',',
    '.': 'ץ',
    ץ: '.',
};

const swap = (str) => {
    let res = '';
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        if (dict[char] !== undefined) res += dict[char];
        else res += char;
    }
    return res;
};

browser.contextMenus.create({
    id: 'replace',
    title: 'Translate text',
    contexts: ['selection'],
});
browser.contextMenus.onClicked.addListener((info, tab) => {
    let text = info['selectionText'];
    let swapped = swap(text);
    if (info['editable']) {
        // TODO: replace text
    }
    navigator.clipboard
        .writeText(swapped)
        .then(() => {})
        .catch(() => {});
});
