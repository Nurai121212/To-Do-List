let taskList = $('.task-list');
let taskInput = $('.task-input');

$(document).ready(function(){
  $('.task-add').on('click', function(){
    if(!taskInput.val()){return false}
    taskList.append(`<li><p class="task-text"> ${taskInput.val()}</p><button class="delete">delete</button></li>`);
    taskInput.val('');
  
    $('.delete').on('click', function(){
      $(this).parent().remove();
    })
  })
})


