var item = document.querySelectorAll("a");
var curentlocation = location.href;
for (let index = 0; index < item.length; index++) {
    if (item[index].href===curentlocation) {
        item[index].className="borderStyel1";
    }
    
}
// animation 
window.addEventListener('scroll',function(){
    var ant = this.document.getElementById('animation-web-textweb');
    var contentPosition = ant.getBoundingClientRect().top;
    var sc = window.scrollY;
     if(contentPosition<sc){
        ant.classList.add('anitextweb');
    }else{
      ant.classList.remove('anitextweb');
    }
  });
  window.addEventListener('scroll',function(){
    var ant = this.document.getElementById('animation-web-textweb1');
    var contentPosition = ant.getBoundingClientRect().top;
    var sc = window.scrollY;
     if(contentPosition<sc){
        ant.classList.add('anitextweb1');
    }else{
      ant.classList.remove('anitextweb1');
    }
  });
  window.addEventListener('scroll',function(){
    var ant = this.document.getElementById('animation-web-textweb2');
    var contentPosition = ant.getBoundingClientRect().top;
    var sc = window.scrollY;
     if(contentPosition<sc){
        ant.classList.add('anitextweb2');
    }else{
      ant.classList.remove('anitextweb2');
    }
  });
  window.addEventListener('scroll',function(){
    var ant = this.document.getElementById('animation-web-textweb3');
    var contentPosition = ant.getBoundingClientRect().top;
    var sc = window.scrollY;
     if(contentPosition<sc){
        ant.classList.add('anitextweb3');
    }else{
      ant.classList.remove('anitextweb3');
    }
  });
  window.addEventListener('scroll',function(){
    var ant = this.document.getElementById('animation-web-textweb4');
    var contentPosition = ant.getBoundingClientRect().top;
    var sc = window.scrollY;
     if(contentPosition<sc){
        ant.classList.add('anitextweb4');
    }else{
      ant.classList.remove('anitextweb4');
    }
  });
  window.addEventListener('scroll',function(){
    var ant = this.document.getElementById('animation-web-textweb5');
    var contentPosition = ant.getBoundingClientRect().top;
    var sc = window.scrollY;
     if(contentPosition<sc){
        ant.classList.add('anitextweb5');
    }else{
      ant.classList.remove('anitextweb5');
    }
  });

  window.addEventListener('scroll',function(){
    var ant = this.document.getElementById('animation-web-textweb6');
    var contentPosition = ant.getBoundingClientRect().top;
    var sc = window.scrollY;
     if(contentPosition<sc){
        ant.classList.add('anitextweb6');
    }else{
      ant.classList.remove('anitextweb6');
    }
  });

  window.addEventListener('scroll',function(){
    var ant = this.document.getElementById('animation-web-textweb7');
    var contentPosition = ant.getBoundingClientRect().top;
    var sc = window.scrollY;
     if(contentPosition<sc){
        ant.classList.add('anitextweb7');
    }else{
      ant.classList.remove('anitextweb7');
    }
  });
  
  
  