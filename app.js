var listOfActivities=[];

var input =document.getElementById("input");

var toDoList =document.getElementById("todolist");

document.getElementById("button").onclick=click;

function click(){
    listOfActivities.push(input.value);

    console.log(listOfActivities);

    input.value="";

    showList();

}

function showList(){
    toDoList.innerHTML="";

    listOfActivities.forEach(functionc(current_value, index){
        toDoList.innerHTML +=("<li>"+current_value+"<a onclick='edititem("+index")'>edit</a>"+
        <a onclick= "d"+ index") >edit</a>

    })
}

function edititem(index){
    var newValue=prompt("please insert you value");

    listOfActivities.slice(index,1,newValue);
    showList();
}


function deleteItem(index){
    listOfActivities.slice(index,1);
}