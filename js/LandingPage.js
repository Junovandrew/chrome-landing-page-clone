let favoritesHTML = '';

favorites.forEach((favorite)=>{
    favoritesHTML += `
        <div class="js-container" title="${favorite.name}">
            <a class="tile">
                <div class="tile-icon">
                    <img src="${favorite.image}">
                </div>

                <div class="masked-icon">
                    <img onclick="showEdit(this,0)" class="masked-image" title="More actions" src="../resources/icon_more_vert.svg">
                    <dialog class="dialog">
                            <ul onclick="showEdit(this,1)" >
                            <img class="ul-img" src="../resources/backspace-fill.svg"/>
                            </li>
                            <li onclick="showModal('${favorite.name}','${favorite.url}')" class="edit">Edit
                            Shortcut</li>
                            <li class="remove">Remove</li>
                        </ul>
                    </dialog>
                </div>
                
                <div class="tile-title">
                    <span>${favorite.name}</span>
                </div>
            </a>      
        </div>
    `
})

document.querySelector('.js-container').innerHTML = favoritesHTML;

function showEdit(img,close){
    let parent = img.parentElement;
    let dialog = parent.children[1];
    if(close){
        dialog = parent.parentElement.children[1];
        dialog.close();
        return;
    }

    dialog.show();
}

function showModal(name,url){
    let modal = document.getElementById('dialog');
    document.getElementById('name-d').value= name;
    document.getElementById('url-d').value = url; 
    modal.showModal();
}

let backdrop = document.querySelector('.cancel');
backdrop.onclick = ()=>{
    let modal = document.getElementById('dialog');
    modal.close();
}


