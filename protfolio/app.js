//Filter section

$(document).ready(function(){
    $(".button").click(function(){
        var name = $(this).attr('data-filter');
        if(name == "all"){
            $(".shot-thumbnail").show('2000');
        }else{
            $(".shot-thumbnail").not("."+name).hide('2000');
            $(".shot-thumbnail").filter("."+name).show('2000');
        }
    })

    $(".navigation a").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    })
})


window.addEventListener('scroll',function(){
    var ant = this.document.getElementById('animation-web-textp1');
    var contentPosition = ant.getBoundingClientRect().top;
    var sc = window.scrollY;
     if(contentPosition<sc){
        ant.classList.add('anitextp1');
    }else{
      ant.classList.remove('anitextp1');
    }
  });