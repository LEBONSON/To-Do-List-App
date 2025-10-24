const inputBox= document.getElementById("input-box");  // Récupère l'élément avec l'ID "input-box" et le stocke dans la variable inputBox
const listContainer= document.getElementById("list-container"); // Récupère l'élément avec l'ID "list-container" et le stocke dans la variable listContainer

function addTask(){     
if(inputBox.value === ''){
alert("You must write something"); // Affiche une alerte si la valeur de inputBox est vide
console.log("test reussi !!");
}else{
    let li = document.createElement("li");  // Crée un nouvel élément li qui représentera une tâche dans la liste
    li.innerHTML = inputBox.value; // Définit le contenu HTML de l'élément li avec la valeur de inputBox
    listContainer.appendChild(li); // Ajoute l'élément li en tant qu'enfant de listContainer

    let span = document.createElement("span"); // Crée un nouvel élément span qui servira de bouton de suppression pour la tâche
    span.innerHTML = "\u00d7"; // Définit le contenu HTML de l'élément span avec le caractère de multiplication (×)
    li.appendChild(span); // Ajoute l'élément span en tant qu'enfant de l'élément li
}
inputBox.value = ""; // Réinitialise la valeur de inputBox à une chaîne vide
saveData(); // Appelle la fonction saveData pour enregistrer les données
} 

/* Gère les événements de clic sur les éléments de la liste */

listContainer.addEventListener("click", function(e){ // Ajoute un écouteur d'événements de clic à listContainer
if(e.target.tagName === "LI"){ // Vérifie si l'élément cliqué est un élément li
    e.target.classList.toggle("checked"); // Bascule la classe "checked" sur l'élément li cliqué
    saveData(); // Appelle la fonction saveData pour enregistrer les données

}else if(e.target.tagName === "SPAN"){ // Vérifie si l'élément cliqué est un élément span
    e.target.parentElement.remove(); // Supprime l'élément parent (l'élément li) de l'élément span cliqué
    saveData(); // Appelle la fonction saveData pour enregistrer les données
}
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML); // Enregistre le contenu HTML de listContainer dans le stockage local sous la clé "data"
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data"); // Récupère le contenu HTML stocké dans le stockage local sous la clé "data" et l'affiche dans listContainer
}

showTask(); // Appelle la fonction showTask pour afficher les tâches enregistrées lors du chargement de la page 
