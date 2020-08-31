// const toDoText = document.querySelector('#TODO').value;

let toDos = new Array();

let List = {
  addArray : function() {
    toDos.push(document.querySelector('#TODO').value);
  }
}


function addList() {
  List.addArray();
  console.log(toDos);
  $('#ListTag').empty();
  for (let i = 0; i < toDos.length; i++) {
    document.querySelector('#ListTag').innerHTML += '<li>' + toDos[i] + '<br></li>';
  }
}
