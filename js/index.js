let taskList = $('.task-list');
let taskInput = $('.task-input');
let notification = $('.notification');


$(document).ready(function(){
  function displayNotification(){
    if(!taskList.children().length){
      notification.fadeIn('fast');
    }else{
      notification.css('display','none');
    }
  };
  $('.task-add').on('click', function(e){
    if(!taskInput.val()){return false}
    taskList.append(`<li><p class="task-text"> ${taskInput.val()}</p><button class="delete">delete</button></li>`);
    taskInput.val('');
    displayNotification();
    $('.footer').removeClass("focus");

    $('.delete').on('click', function(){
      let parent = $(this).parent();
      parent.fadeOut('fast').remove();

      displayNotification();
    })
  });

  taskInput.focus(function() {
    $('.footer').addClass("focus");
  })
})


