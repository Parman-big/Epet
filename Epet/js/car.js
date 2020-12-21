const carMenu = document.querySelectorAll('.car-menu li');
const navCurrent = document.querySelector('.nav-current')

carMenu.forEach((item,index,arr) => {
  item.onmouseenter = function() {
    navCurrent.style.width = item.offsetWidth + 'px';
    if(index == 0){
      navCurrent.style.marginLeft = 0;
    }else if(index == 1){
      navCurrent.style.marginLeft = (arr[index - 1].offsetWidth) + 'px';
    }else if(index == 2){
      navCurrent.style.marginLeft = (arr[index - 2].offsetWidth) + (arr[index - 1].offsetWidth) + 'px';
    }else if(index == 3){
      navCurrent.style.marginLeft = (arr[index - 3].offsetWidth) + (arr[index - 2].offsetWidth) + (arr[index - 2].offsetWidth) + 'px';
    }
  }
  item.onmouseleave = function(){
    navCurrent.style.width = arr[0].offsetWidth + 'px';
    navCurrent.style.marginLeft = '0';
  }
})