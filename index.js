const listSelector = document.querySelector(".list-group");
 

let id, todoList;
 

$.ajax({
        method : "GET",
        url: "http://localhost:5000",  //전송
        datatype:"JSON",
 

     })
    .done(function(data) {
        console.log(data);
        todoList = data;
        initial();
    });


$('#button-addon2').click(function() {
	var addTask = $("#addTask").val();
    alert(addTask);
	$.ajax({
        method : "GET",
        url : `http://localhost:5000/add?name=${addTask}`,  //전송
        datatype:"JSON",
    })
    .done(function(data) {
        location.reload();
    });

 });

function initial(){
    console.log(todoList);
 

    if(todoList){
        console.log("todoList",todoList);
        id = todoList.length;
        loadList(todoList);
    }else{
        todoList = [];
        id = 0;
    }
 

    console.log("here",todoList);
 

}
 

function loadList(array){
    array.forEach(function (item){
        addToDo(item.name, item.id, item.done) 
    });
};
 

function addToDo(name, id, done){
 

    const item = `<li class = "list-group-item">
                ${name}
                </li>
                `;
    const position = "beforeend";
    listSelector.insertAdjacentHTML(position, item);
 

};