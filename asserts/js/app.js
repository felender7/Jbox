//code:felender
//1 get the value from the text box
//2 if the value is left:Right:top:botton
//2.21 Move the box to the side
$(function(){

   $('#btnMove').on('click',function(){
     //get the value from the input:#myInput
     var myVal = $('input').val().toUpperCase();
      //if input value  == left the move the box left
        if(myVal=="LEFT"){
          $('#Jbox').animate({
            left:'-=40px',

          },function(){
            $('#Jbox').text("Moving Left").css('color','#fff')
          });
        }
       //if input value  == right the move the box left
       if(myVal=="RIGHT"){
         $('#Jbox').animate({
           left:'+=40px'
         },function(){
           $('#Jbox').text("Moving Right").css('color','#fff')
         });
       }

       if(myVal!=="LEFT" && myVal !=="RIGHT"){
            $('#error').text("Type Right or Left").addClass('alert alert-danger').delay(2000).fadeOut()
       }
   })//btn function end
   //reset the position of the box
  $('#reset').click(function(){
      $('#Jbox').css('left', '0')
  })
});
