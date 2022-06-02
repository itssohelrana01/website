var item = document.querySelectorAll("a");
var curentlocation = location.href;
for (let index = 0; index < item.length; index++) {
    if (item[index].href===curentlocation) {
        item[index].className="borderStyel1";
    }
    
}
// animation 
window.addEventListener('scroll',function(){
    var ant = this.document.getElementById('animation-web-textm');
    var contentPosition = ant.getBoundingClientRect().top;
    var sc = window.scrollY;
     if(contentPosition<sc){
        ant.classList.add('anitextm');
    }else{
      ant.classList.remove('anitextm');
    }
  });

  window.addEventListener('scroll',function(){
      var ant = this.document.getElementById('animation-web-text1m');
      var contentPosition = ant.getBoundingClientRect().top;
      var sc = window.scrollY;
       if(contentPosition<sc){
          ant.classList.add('anitext1m');
      }else{
        ant.classList.remove('anitext1m');
      }
    });
    window.addEventListener('scroll',function(){
      var ant = this.document.getElementById('animation-web-text2m');
      var contentPosition = ant.getBoundingClientRect().top;
      var sc = window.scrollY;
       if(contentPosition<sc){
          ant.classList.add('anitext2m');
      }else{
        ant.classList.remove('anitext2m');
      }
    });
    window.addEventListener('scroll',function(){
      var ant = this.document.getElementById('animation-web-text3m');
      var contentPosition = ant.getBoundingClientRect().top;
      var sc = window.scrollY;
       if(contentPosition<sc){
          ant.classList.add('anitext3m');
      }else{
        ant.classList.remove('anitext3m');
      }
    });
    window.addEventListener('scroll',function(){
      var ant = this.document.getElementById('animation-web-text4m');
      var contentPosition = ant.getBoundingClientRect().top;
      var sc = window.scrollY;
       if(contentPosition<sc){
          ant.classList.add('anitext4m');
      }else{
        ant.classList.remove('anitext4m');
      }
    });
    window.addEventListener('scroll',function(){
      var ant = this.document.getElementById('animation-web-text4-m');
      var contentPosition = ant.getBoundingClientRect().top;
      var sc = window.scrollY;
       if(contentPosition<sc){
          ant.classList.add('anitext4-m');
      }else{
        ant.classList.remove('anitext4-m');
      }
    });
    window.addEventListener('scroll',function(){
      var ant = this.document.getElementById('animation-web-text5m');
      var contentPosition = ant.getBoundingClientRect().top;
      var sc = window.scrollY;
       if(contentPosition<sc){
          ant.classList.add('anitext5m');
      }else{
        ant.classList.remove('anitext5m');
      }
    });
    window.addEventListener('scroll',function(){
      var ant = this.document.getElementById('animation-web-text6sm');
      var contentPosition = ant.getBoundingClientRect().top;
      var sc = window.scrollY;
       if(contentPosition<sc){
          ant.classList.add('anitext6sm');
      }else{
        ant.classList.remove('anitext6sm');
      }
    });
    window.addEventListener('scroll',function(){
      var ant = this.document.getElementById('animation-web-text6m');
      var contentPosition = ant.getBoundingClientRect().top;
      var sc = window.scrollY;
       if(contentPosition<sc){
          ant.classList.add('anitext6m');
      }else{
        ant.classList.remove('anitext6m');
      }
    });
    window.addEventListener('scroll',function(){
      var ant = this.document.getElementById('animation-web-text7m');
      var contentPosition = ant.getBoundingClientRect().top;
      var sc = window.scrollY;
       if(contentPosition<sc){
          ant.classList.add('anitext7m');
      }else{
        ant.classList.remove('anitext7m');
      }
    });
  