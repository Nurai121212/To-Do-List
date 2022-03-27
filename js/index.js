let taskList = $('.task-list');
let taskInput = $('.task-input');

$(document).ready(function(){
  $('.task-add').on('click', function(e){
    if(!taskInput.val()){return false}
    taskList.append(`<li><p class="task-text"> ${taskInput.val()}</p><button class="delete">delete</button></li>`);
    taskInput.val('');
    $('.footer').removeClass("focus");

    $('.delete').on('click', function(){
      let parent = $(this).parent();
      parent.fadeOut('fast');
    })
  });
  taskInput.focus(function() {
    $('.footer').addClass("focus");
  })
})


