const checkBoxes = document.querySelectorAll('[type="checkbox"]');
let lastChecked = null;

const onCheck = (evt, idx) => {
    console.log(evt.target.checked, idx)

    //check if shift is active
    if (evt.shiftKey && evt.target.checked) {
        if (lastChecked != null && lastChecked < idx) {
            //check boxes in between
            for (let from = lastChecked; from < idx; from++) {
                checkBoxes[from].checked = true;
            }
        }
    }
    //save last checked idx
    if (evt.target.checked) {
        lastChecked = idx;
    }
}

checkBoxes.forEach((ch, i) => {
    ch.addEventListener('click', (evt) => onCheck(evt, i))
});