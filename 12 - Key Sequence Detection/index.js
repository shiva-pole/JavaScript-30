const passcode = "unicorn";
let keys = [];
let idx = 0;
document.addEventListener('keydown', evt => {
    console.log('ENTERED ' + evt.key);
    if (passcode[idx] == evt.key) {
        keys.push(evt.key);
        idx++;
    } else {
        keys = [];
        idx = 0;
    }
    console.log(keys);
    if (keys.length == passcode.length) {
        cornify_add();
    }
});
