$('td').css({position:'relative'})
$('td').on({
  mouseover:function(){
    $(this).animate({top:'-5px'})
  }, mouseout:function(){
    $(this).animate({top:0})
  },
})