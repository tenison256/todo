updateList();
function addEvent(){
    var input =document.getElementById("Task_input")
    var tasksArr=JSON.parse(localStorage.tasks);
    tasksArr.push(input.value)
    localStorage.tasks=JSON.stringify(tasksArr);
    input.value="";
    updateList();    
}
function updateList(){
    var ul= document.getElementById("tasks");
    var tasksArr= JSON.parse(localStorage.tasks);
    var length= tasksArr.length;
    var html="";

    for(var i=0; i<length; i++){
       html += '<li class="list-group-item" id=" '+ '">' +tasksArr[i]+'<span class="btn btn-danger btn-sm float-right remove-btn" onclick="removeItem(this)">Remove</span></li>' 
    }
       ul.innerHTML=html;
    }
    function removeItem(span_tag){
       var index_id = span_tag.parentElement.id;

       var tasksArr= JSON.parse(localStorage.tasks);

       tasksArr.splice=(index_id,1);

       localStorage.tasks= JSON.stringify(tasksArr);
    updateList();

    }