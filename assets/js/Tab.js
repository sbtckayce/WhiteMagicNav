var listItem = document.querySelectorAll('.white-nav__item');

function activeTab(){
    listItem.forEach((item)=>
    item.classList.remove('active'));
    this.classList.add('active');
}
listItem.forEach((item)=>
item.addEventListener('click',activeTab));