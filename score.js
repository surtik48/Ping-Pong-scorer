const btn1 = document.querySelector('#p1button');
const btn2 = document.querySelector('#p2button');
const p1disp = document.querySelector('#p1disp');
const p2disp = document.querySelector('#p2disp');
const resetbtn = document.querySelector('#reset');
const fscore = document.querySelector('#final');

let p1score = 0;
let p2score = 0;
let winscore = 5;
let isgame = false;

btn1.addEventListener('click', function () {
    if (!isgame) {
        p1score += 1;
        if (p1score === winscore) {
            isgame = true;
            p1disp.classList.add('has-text-success');
            p2disp.classList.add('has-text-danger');
            btn1.disabled = true;
            btn2.disabled = true;
        }
        p1disp.textContent = p1score;
    }
});

btn2.addEventListener('click', function () {
    if (!isgame) {
        p2score += 1;
        if (p2score === winscore) {
            isgame = true;
            p2disp.classList.add('has-text-success');
            p1disp.classList.add('has-text-danger');
            btn1.disabled = true;
            btn2.disabled = true;
        }
        p2disp.textContent = p2score;
    }
});
fscore.addEventListener('change', function () {
    winscore = parseInt(this.value);
    reset();
});

resetbtn.addEventListener('click', reset)

function reset() {
    isgame = false;
    p1score = 0;
    p2score = 0;
    p1disp.textContent = 0;
    p2disp.textContent = 0;
    p1disp.classList.remove('has-text-success', 'has-text-danger');
    p2disp.classList.remove('has-text-danger', 'has-text-success');
    btn1.disabled = false;
    btn2.disabled = false;
}