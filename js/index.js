let taskList = $('.task-list');
let taskInput = $('.task-input');
let notification = $('.notification');


$(document).ready(function(e){
  function displayNotification(){
    if(!taskList.children().length){
      notification.fadeIn('fast');
    }else{
      notification.css('display','none');
    }
  };

  taskInput.focus(function(e) {
    $('.footer').addClass("focus");
  }).blur(function(){
    if(taskInput.val()){return false}
    $('.footer').removeClass("focus");
  });

  $('.task-add').on('click', function(e){
    if(!taskInput.val()){return false}
    taskList.append(`<li><p class="task-text"> ${taskInput.val()}</p><button class="delete">delete</button></li>`);
    taskInput.val('');
    displayNotification();
    $('.footer').removeClass("focus");

    $('.delete').on('click', function(){
      let parent = $(this).parent();
      parent.fadeOut('fast', function(){
        parent.remove();

        displayNotification();
      });
    })
  });
})


