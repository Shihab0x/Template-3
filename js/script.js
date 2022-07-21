let nav = document.querySelectorAll(".nav-link");
let dropdown = document.querySelectorAll(".dropdown-item");
let choose = document.getElementsByClassName("choose-item");
let src = document.getElementById("img");
let title = document.getElementById("title");
let desc = document.getElementById("desc");

let data = [
  {
    src: "images/choose-us-image-01.png",
    title: "best education",
    desc: 'our School is free educational HTML template with Bootstrap 5 CSS layout. Feel free to use it for educational or commercial purposes. You may want to make <a href="#" class="link">a little donation</a> to TemplateMo. Please tell your friends about us. Thank you.',
  },
  {
    src: "images/choose-us-image-02.png",
    title: "top level",
    desc: "you can modify this HTML layout by editing contents and adding more pages as you needed. Since this template has options to add dropdown menus, you can put many HTML pages. <br/><br/>suspendisse tincidunt, magna ut finibus rutrum, libero dolor euismod odio, nec interdum quam felis non ante.",
  },
  {
    src: "images/choose-us-image-03.png",
    title: "quality meeting",
    desc: 'You are NOT allowed to redistribute this template ZIP file on any template collection website. However, you can use this template to convert into a specific theme for any kind of CMS platform such as WordPress. For more information, you shall <a href="#" class="link">contact TemplateMo</a> now.',
  },
];

nav.forEach(el => {
  el.onclick = e => {
    e.preventDefault();
    let Scroll = el.getAttribute("data-scroll");
    let ele = document.getElementById(Scroll);
    scroll(0, ele.offsetTop);
  };
});

dropdown.forEach(el => {
  el.onclick = _ => {
    let Scroll = el.getAttribute("data-scroll");
    let ele = document.querySelector(`.about .${Scroll}`);
    scroll(0, ele.offsetTop);
    return false;
  }
})

document.onscroll = _ => {
  let component = document.querySelectorAll(".component");
  component.forEach((el, i) => {
    if(el.offsetTop < scrollY && el.nextElementSibling.offsetTop > scrollY) {
      nav.forEach(el => el.classList.remove("active"))
      nav[i].classList.add("active");
    }
  })
} 

for (let i = 0; i < choose.length; i++) {
  choose[i].onclick = function () {
    src.src = data[i].src;
    title.innerText = data[i].title;
    desc.innerHTML = data[i].desc;
    for (let j = 0; j < choose.length; j++) {
      choose[j].classList.remove("active");
    }
    choose[i].classList.add("active");
  };
}

let owl = document.querySelectorAll(".carousel-content .item");
var num = 0;
(function carousel() {
  setInterval(() => {
    num < 5 ? num : (num = 0);
    if (owl[num].style.order > 1000) {
      owl.forEach((el) => {
        el.style.order = 0;
      });
    }
    owl[num].style.order += 1;
    num++;
  }, 3000);
})();

function time() {
  let time = new Date()
  document.getElementById("day").textContent = time.getDate()
  document.getElementById("hour").textContent = time.getHours()
  document.getElementById("minute").textContent = time.getMinutes()
  document.getElementById("second").textContent = time.getSeconds()
}

setInterval(() => {
  time();
}, 1000);
