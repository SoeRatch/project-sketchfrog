$(document).ready(function() {

var a=16;

var count=0;

var flag=0;

built(a);

$(document).on('click','.button2',function(){
  $('.unit').css("background-color","white");
});

$(document).on('click','.set2',function(){
  flag=1;
});

function rem(){
    $('.unit').remove();
}

function built(a){
    rem();
    var cw=$('.container2').width();
    var w=cw/a;
    var bor=w/32;
      for(var x = 0; x <a;x++) {
        for(var y = 0; y < a; y++) {
            var unit = $("<div class='unit'></div>");
          $('.container2').append(unit);
      }
    }
      $('.unit').css("width",w).css("height",w);
}

$(document).on('mouseenter','.unit',function(){
    if(flag==0)
      $(this).css("background-color","black");
    else {
      $(this).css("background-color","#"+((1<<24)*Math.random()|0).toString(16));
    }
    });

$(".frog,.set1,.button").click(function(){
  if(count==0)
  $(".container2,.button2").slideToggle("slow");
  else{
      $(".container2").slideToggle("slow");
      $(".container2").slideToggle("slow");
      var a=prompt("enter grid size in a*a form where a is=  ?");
      built(a);
      }
  count++;
});

});
