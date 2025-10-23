const inputBox= document.getElementsById("input-box");  // Récupère l'élément avec l'ID "input-box" et le stocke dans la variable inputBox
const listContainer= document.getElementsById("list-container"); // Récupère l'élément avec l'ID "list-container" et le stocke dans la variable listContainer

function addTask(){     
if(inputBox.value === ''){
alert("You must write something"); // Affiche une alerte si la valeur de inputBox est vide
}else{
    let li = document.createElement("li");  // Crée un nouvel élément li qui représentera une tâche dans la liste
    li.innerHTML = inputBox.value; // Définit le contenu HTML de l'élément li avec la valeur de inputBox
    listContainer.appendChild(li); // Ajoute l'élément li en tant qu'enfant de listContainer
}

} 