
var settingsMenu = document.querySelector(".setting-menu");
var darkBtn = document.getElementById("dark-btn");
function settingMenuToggle(){
  settingsMenu.classList.toggle("setting-menu-height");
}
darkBtn.onclick = function(){
  darkBtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");
  if(localStorage.getItem("theme")=="light"){
    localStorage.setItem("theme","dark");
  }
  else{
    localStorage.setItem("theme","light");
  }
}
if(localStorage.getItem("theme")=="light"){
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");

}
else if(localStorage.getItem("theme")=="dark"){
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.add("dark-theme");
}
else{
  localStorage.setItem("theme","light");
}

async function loadUsers(){
  let response = await fetch('https://dummyapi.io/data/v1/post?limit=100',{headers: {'app-id':'6369466b369b7602f0a1a287'}})
  let data = await response.json();
  return data;
}

let cardContainer;

let createCard = (user)=>{
  let card = document.createElement('div');
  card.className = 'card';
  let cardBody = document.createElement('div');
  cardBody.className = 'card-body';
  let title = document.createElement('h5');
  title.innerText = user.id;
  title.className = 'card-title';
  let paragraph = document.createElement('p');
  paragraph.className = 'card-text';
  paragraph.innerText = user.text;
  let image = document.createElement('img');
  image.className = "card-img-top";
  image.src = user.image;
  let cardFooter = document.createElement('div');
  cardFooter.className = "card-footer bg-transparent border-success";
  cardFooter.innerText = 'Footer';
  cardBody.appendChild(title);
  cardBody.appendChild(paragraph);
  card.appendChild(cardBody);
  card.appendChild(image);
  card.appendChild(cardFooter);
  card.style.margin = "20px 0";
  cardContainer.appendChild(card);
}
loadUsers().then(response => {
  let users = response["data"];
  if (cardContainer){
    debugger
    document.getElementById('card-container').replaceWith(cardContainer);
    return;
  }
  cardContainer = document.getElementById('card-container');
  users.forEach(user =>{
    createCard(user);
    console.log(user);
  })
});
