
var item = document.querySelectorAll("a");
var curentlocation = location.href;
for (let index = 0; index < item.length; index++) {
    if (item[index].href===curentlocation) {
        item[index].className="borderStyel1";
    }
    
}
// animation 
window.addEventListener('scroll',function(){
  var ant = this.document.getElementById('animation-web-text');
  var contentPosition = ant.getBoundingClientRect().top;
  var sc = window.scrollY;
   if(contentPosition<sc){
      ant.classList.add('anitext');
  }else{
    ant.classList.remove('anitext');
  }
});
window.addEventListener('scroll',function(){
    var ant = this.document.getElementById('animation-web-text1');
    var contentPosition = ant.getBoundingClientRect().top;
    var sc = window.scrollY;
     if(contentPosition<sc){
        ant.classList.add('anitext1');
    }else{
      ant.classList.remove('anitext1');
    }
  });
  window.addEventListener('scroll',function(){
    var ant = this.document.getElementById('animation-web-text2');
    var contentPosition = ant.getBoundingClientRect().top;
    var sc = window.scrollY;
     if(contentPosition<sc){
        ant.classList.add('anitext2');
    }else{
      ant.classList.remove('anitext2');
    }
  });
  window.addEventListener('scroll',function(){
    var ant = this.document.getElementById('animation-web-text3');
    var contentPosition = ant.getBoundingClientRect().top;
    var sc = window.scrollY;
     if(contentPosition<sc){
        ant.classList.add('anitext3');
    }else{
      ant.classList.remove('anitext3');
    }
  });
  window.addEventListener('scroll',function(){
    var ant = this.document.getElementById('animation-web-text4');
    var contentPosition = ant.getBoundingClientRect().top;
    var sc = window.scrollY;
     if(contentPosition<sc){
        ant.classList.add('anitext4');
    }else{
      ant.classList.remove('anitext4');
    }
  });
  window.addEventListener('scroll',function(){
    var ant = this.document.getElementById('animation-web-text5');
    var contentPosition = ant.getBoundingClientRect().top;
    var sc = window.scrollY;
     if(contentPosition<sc){
        ant.classList.add('anitext5');
    }else{
      ant.classList.remove('anitext5');
    }
  });
  window.addEventListener('scroll',function(){
    var ant = this.document.getElementById('animation-web-text6');
    var contentPosition = ant.getBoundingClientRect().top;
    var sc = window.scrollY;
     if(contentPosition<sc){
        ant.classList.add('anitext6');
    }else{
      ant.classList.remove('anitext6');
    }
  });



