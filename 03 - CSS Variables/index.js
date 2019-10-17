const inputs = document.querySelectorAll('input');
const spacingEl = document.getElementById("spacing");
const blurEl = document.getElementById("blur");
const baseEl = document.getElementById("base");
const bodyStyles = document.body.style;

const onInputChange = () => {
    let spacing = spacingEl.value;
    let blur = blurEl.value;
    let base = baseEl.value;
    base

    bodyStyles.setProperty('--bg-color', base);
    bodyStyles.setProperty('--padding', spacing + 'px');
    bodyStyles.setProperty('--blur', blur + 'px');

    console.log('--bg-color', base);
    console.log('--padding', spacing + 'px');
    console.log('--blur', blur + 'px');

}
inputs.forEach(ip => ip.addEventListener('input', onInputChange));