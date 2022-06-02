var item = document.querySelectorAll("a");
var curentlocation = location.href;
for (let index = 0; index < item.length; index++) {
    if (item[index].href===curentlocation) {
        item[index].className="borderStyel1";
    }
    
}
// animation 
window.addEventListener('scroll',function(){
    var ant = this.document.getElementById('animation-web-textl1');
    var contentPosition = ant.getBoundingClientRect().top;
    var sc = window.scrollY;
     if(contentPosition<sc){
        ant.classList.add('anitextl1');
    }else{
      ant.classList.remove('anitextl1');
    }
  });
  window.addEventListener('scroll',function(){
    var ant = this.document.getElementById('animation-web-textl2');
    var contentPosition = ant.getBoundingClientRect().top;
    var sc = window.scrollY;
     if(contentPosition<sc){
        ant.classList.add('anitextl2');
    }else{
      ant.classList.remove('anitextl2');
    }
  });
  window.addEventListener('scroll',function(){
    var ant = this.document.getElementById('animation-web-textl3');
    var contentPosition = ant.getBoundingClientRect().top;
    var sc = window.scrollY;
     if(contentPosition<sc){
        ant.classList.add('anitextl3');
    }else{
      ant.classList.remove('anitextl3');
    }
  });
  window.addEventListener('scroll',function(){
    var ant = this.document.getElementById('animation-web-textl4');
    var contentPosition = ant.getBoundingClientRect().top;
    var sc = window.scrollY;
     if(contentPosition<sc){
        ant.classList.add('anitextl4');
    }else{
      ant.classList.remove('anitextl4');
    }
  });
  window.addEventListener('scroll',function(){
    var ant = this.document.getElementById('animation-web-textl5');
    var contentPosition = ant.getBoundingClientRect().top;
    var sc = window.scrollY;
     if(contentPosition<sc){
        ant.classList.add('anitextl5');
    }else{
      ant.classList.remove('anitextl5');
    }
  });
  window.addEventListener('scroll',function(){
    var ant = this.document.getElementById('animation-web-textl6');
    var contentPosition = ant.getBoundingClientRect().top;
    var sc = window.scrollY;
     if(contentPosition<sc){
        ant.classList.add('anitextl6');
    }else{
      ant.classList.remove('anitextl6');
    }
  });
  