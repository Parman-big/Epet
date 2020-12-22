const carMenu = document.querySelectorAll('.car-menu li');
const navCurrent = document.querySelector('.nav-current')

carMenu.forEach((item, index, arr) => {
  item.onmouseenter = function () {
    navCurrent.style.width = item.offsetWidth + 'px';
    if (index == 0) {
      navCurrent.style.marginLeft = 0;
    } else if (index == 1) {
      navCurrent.style.marginLeft = (arr[index - 1].offsetWidth) + 'px';
    } else if (index == 2) {
      navCurrent.style.marginLeft = (arr[index - 2].offsetWidth) + (arr[index - 1].offsetWidth) + 'px';
    } else if (index == 3) {
      navCurrent.style.marginLeft = (arr[index - 3].offsetWidth) + (arr[index - 2].offsetWidth) + (arr[index - 2].offsetWidth) + 'px';
    }
  }
  item.onmouseleave = function () {
    navCurrent.style.width = arr[0].offsetWidth + 'px';
    navCurrent.style.marginLeft = '0';
  }
})

const shop = document.querySelector('.shop');
const single = document.querySelectorAll('.single');
const all = document.querySelector('.all-left input');
const add = document.querySelectorAll('.add');
const reduce = document.querySelectorAll('.reduce');
const price = document.querySelectorAll('.price');
const count = document.querySelectorAll('.count');
const allPrice = document.querySelector('.all-price');

window.onload = () => {
  reduce.forEach((item,index) => {
    item.disabled = true;
  })
}

all.onclick = function () {
  single.forEach((item, index) => {
    item.checked = this.checked;
    shop.checked = this.checked;
  })
  countPrice();
}

shop.onclick = function () {
  single.forEach((item, index) => {
    item.checked = this.checked;
    all.checked = this.checked;
  })
  countPrice();
}

single.forEach((item, index) => {
  item.onclick = function () {
    let index = 0;
    for (let i = 0; i < single.length; i++) {
      if (single[i].checked) {
        index++;
      }
      if (index == single.length) {
        all.checked = true;
        shop.checked = true;
      } else {
        all.checked = false;
        shop.checked = false;
      }
    }
    countPrice();
  }
})

add.forEach((item,index) => {
  item.onclick = () => {
    if(count[index].value < 1){
      reduce[index].disabled = true;
    }else{
      reduce[index].disabled = false;
    }
    count[index].value++;
    single[index].checked = true;
    countPrice();
  }
})

reduce.forEach((item,index) => {
  item.onclick = () => {
    if(count[index].value <= 2){
      item.disabled = true;
    }else{
      item.disabled = false;
    }
    count[index].value--;
    countPrice();
  }
})

function countPrice() {
  let sum = 0,x = 0;
  for (let i = 0; i < single.length; i++) {
    if (single[i].checked == true) {
      // console.log(price[i],count[i]);
      x = Number(price[i].innerHTML) * Number(count[i].value);
    }else{
      x = 0;
    }
    sum += x;
    allPrice.innerHTML = sum;
  }
}