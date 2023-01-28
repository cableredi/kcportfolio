// Get each modal and close button
const triggers = document.getElementsByClassName("trigger");
const triggerArray = Array.from(triggers).entries();
const modals = document.getElementsByClassName("modal");
const closeButtons = document.getElementsByClassName("close-button");

let modal01 = document.getElementById('modal01');
let modal02 = document.getElementById('modal02');
let modal03 = document.getElementById('modal03');
let modal04 = document.getElementById('modal04');
let modal05 = document.getElementById('modal05');
let modal06 = document.getElementById('modal06');

// Then use `for...of`-loop with the index of each item in `triggerArray` for listening to a click event which toggles each modal to open and close
for (let [index, trigger] of triggerArray) {
  function toggleModal() {
    modals[index].classList.toggle("show-modal");
  };

  trigger.addEventListener("click", toggleModal);
  closeButtons[index].addEventListener("click", toggleModal);
}

window.onclick = function(event) {
  if (event.target == modal01) {
      modal01.style.display = "none";
  }
  if (event.target == modal02) {
    modal02.style.display = "none";
  }
  if (event.target == modal03) {
    modal03.style.display = "none";
  }
  if (event.target == modal04) {
    modal04.style.display = "none";
  }
  if (event.target == modal05) {
    modal05.style.display = "none";
  }
  if (event.target == modal06) {
    modal06.style.display = "none";
  }
}

/* Highlight Menu Item on Scoll or Click */

offset = 100;
$('#menu li a[href^="#"]').click(function(event) {

    // Prevent from default action to intitiate
    event.preventDefault();
      
    //remove active from all anchor and add it to the clicked anchor
    $('#menu li a[href^="#"]').removeClass("active")
    $(this).addClass('active');
    
    // The id of the section we want to go to
    var anchorId = $(this).attr('href');

    // Our scroll target : the top position of the section that has the id referenced by our href
    var target = $(anchorId).offset().top - offset;
    //console.log(target);

    $('html, body').stop().animate({ scrollTop: target }, 500, function () {
        window.location.hash = anchorId;
    });

    return false;
});

//check the pages when scroll event occurs
$(window).scroll(function(){
    // Get the current vertical position of the scroll bar
    position = $(this).scrollTop();
    $('#menu li a[href^="#"]').each(function(){
          var anchorId = $(this).attr('href'); 
           var target = $(anchorId).offset().top - offset;
           // check if the document has crossed the page
        console.log(position,target);
        if(position>=target){
             //remove active from all anchor and add it to the clicked anchor
            $('#menu li a[href^="#"]').removeClass("active")
            $(this).addClass('active'); 
        }
    })
})
$(function(){
    //set our scroll state after dom ready
    $(window).scroll();
})