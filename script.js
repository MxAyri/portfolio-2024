const navItem = document.querySelectorAll('.nav-item');
const navOpen = document.querySelector('.dropdown-btn');
const line = document.querySelectorAll('.line');
const item = document.querySelectorAll('.dpd-item')
let flag = 0;

navOpen.addEventListener('click', openNav);

item.forEach(el => {
    el.addEventListener('click', openNav)
});

navOpen.addEventListener('mouseover', () => {
    if (flag) {
        line.forEach(el => {
            el.style.backgroundColor = "var(--main-color)";
        });
    }
})
navOpen.addEventListener('mouseout', () => {
    if (flag) {
        line.forEach(el => {
            el.style.backgroundColor = "#FFF";
        });
    }
})

navItem.forEach(el => {
    el.addEventListener('click', openNav);
});

function openNav() {
    if (!flag) {
        document.getElementById("dpd").style.width = "100%";
        document.getElementById("dropdown-btn").style.transform = "rotate(90deg)";
        line.forEach(el => {
            el.style.backgroundColor = "#FFFFFF";
        });
        document.getElementById("dropdown").style.width = "320px";
        document.body.style.overflowY = "hidden";
        flag = 1;
    } else {
        document.getElementById("dpd").style.width = "0%";
        document.getElementById("dropdown-btn").style.transform = "rotate(0deg)";
        line.forEach(el => {
            el.style.backgroundColor = "var(--main-color)";
        });
        document.getElementById("dropdown").style.width = "0px";
        document.body.style.overflowY = "scroll";
        flag = 0;
    }
}

const dpdClose = document.getElementById("dpd");

window.addEventListener('click', function (event) {
    if (event.target == dpdClose) {
        document.getElementById("dpd").style.width = "0%";
        document.getElementById("dropdown-btn").style.transform = "rotate(0deg)";
        line.forEach(el => {
            el.style.backgroundColor = "var(--main-color)";
        });
        document.getElementById("dropdown").style.width = "0px";
        document.body.style.overflowY = "scroll";
        flag = 0;
    }
});
