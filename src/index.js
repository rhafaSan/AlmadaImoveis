window.addEventListener('load', start);
var div = document.querySelector('#listagem');
var form = document.getElementById('formulario');
var ul = document.createElement('ul');
var anuncio = {
    title : '',
    description : '',
    rooms : '',
    vacancies : '',
    area : '',
    workArea : '',
    location : '',
    price : '',
    image : '',

}

var anuncios = [];

function start(){
    handlePreventDefault(form);
}

function handlePreventDefault(Objeto){
    Objeto.addEventListener('submit', function (event){
        event.preventDefault();
    });
}

function captureValues(){
    anuncio.title = (document.getElementById('title')).value;
    anuncio.description = document.getElementById('description').value;
    anuncio.rooms = document.getElementById('rooms').value;
    anuncio.vacancies = document.getElementById('vacancies').value;
    anuncio.area = document.getElementById('area').value;
    anuncio.workArea = document.getElementById('work-area').value;
    anuncio.location = document.getElementById('location').value;
    anuncio.price = document.getElementById('price').value;
    anuncio.image = document.getElementById('image').value;

    anuncios.push(JSON.parse(JSON.stringify(anuncio)));
}

function createSpan(valor){
    var span = document.createElement('span');
    span.textContent = valor
    span.classList.add('spanComponent');

    return span;
}
function createH1(valor){
    var h1 = document.createElement('h1');
    h1.innerHTML = valor
    h1.classList.add('h1Component');

    return h1;
}

function createImg(valor){
    var img = document.createElement('img');
    console.log(valor);
    img.src = String(valor);
    img.classList.add('imgComponent');

    return img;
}


function handleList(item){
    
    
item.forEach(element => {
    var liTitle = document.createElement('li');
    var liDescription = document.createElement('li');
    var liRooms = document.createElement('li');
    var liVacancies = document.createElement('li');
    var liArea = document.createElement('li');
    var liWorkArea = document.createElement('li');
    var liLocation = document.createElement('li');
    var liPrice = document.createElement('li');
    var liImage = document.createElement('li');

    liTitle.appendChild(createH1(element.title));
    liDescription.appendChild(createSpan(element.description));
    liRooms.appendChild(createSpan(element.rooms));
    liVacancies.appendChild(createSpan(element.vacancies));
    liArea.appendChild(createSpan(element.area));
    liWorkArea.appendChild(createSpan(element.workArea));
    liLocation.appendChild(createSpan(element.location));
    liPrice.appendChild(createSpan(element.price));
    liImage.appendChild(createImg(element.image));   

    ul.appendChild(liTitle);
    ul.appendChild(liDescription);
    ul.appendChild(liRooms);
    ul.appendChild(liVacancies);
    ul.appendChild(liArea); 
    ul.appendChild(liWorkArea);
    ul.appendChild(liLocation);
    ul.appendChild(liPrice);
    ul.appendChild(liImage);
});
    
    

}

function list(){
    ul.innerHTML = '';
    captureValues();
    handleList(anuncios);
    div.appendChild(ul);
}
function handleCreate(){
    console.log("TESTE",anuncios);
    list();
}