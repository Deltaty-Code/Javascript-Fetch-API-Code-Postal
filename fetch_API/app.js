const input = document.querySelector('#codePostal') ;
const form = document.querySelector('#form') ;
input.addEventListener('input', () => {
    if(input.value.length  == 5) {
        let url = `https://geo.api.gouv.fr/communes?codePostal=${input.value}&fields=nom,code,codesPostaux,codeDepartement,codeRegion,population&format=json&geometry=centre` ;

        fetch(url) 
        .then((response)=> response.json())
        .then((data)=> {
            console.log(data) ;
            afficher(data);
        })
        .catch((err => console.log('Error'))) ;
    }
})

const ul = document.createElement('ul') ;
ul.classList.add('list') ;
form.appendChild(ul) ;
function afficher(data) {
    // ul.innerHTML = '' ; // removechilds 
    removeAllChildNodes(ul) ; // removeChilds
    data.forEach(e => {
        const li  = document.createElement('li') ;
        const span = document.createElement('span') ;
        span.classList.add('span') ;
        const habitant = document.createTextNode(` - ${e.population} Habitants`);
        span.append(habitant) ;
        li.append(e.nom) ;
        li.appendChild(span) ;
        console.log(e.nom) ;
        ul.appendChild(li) ;
        
    });
}

function removeAllChildNodes(parent) {  
     while(parent.firstChild) {
      parent.removeChild(parent.firstChild);
     }
}









