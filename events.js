// IMPORTAR PAQUETES
// Se debe activar la integración con NodeJs en el main.js o proceso principal
const { ipcRenderer } = require('electron');
// ESCUCHAR MENSAJES DEL PROCESO PRINCIPAL:
// Escuchar mensaje al proceso principal, main.js
ipcRenderer.on('data-from-server', (event, args) => {
  // Los valores enviados por el servidor llegan en los args
  console.log('Mensaje del servidor', args);
});
// ENVIAR MENSAJES AL PROCESO PRINCIPAL
ipcRenderer.send('data-from-web', 'Hola Server');
// Enviar desde un evento click en el Front
const onClick = () => {
  ipcRenderer.send('data-from-web-click', {dato: 'el coco'})
}

// CREAR CONTACTOS =======================>
const createContacts = (contacts) => {
  let list = '';
  contacts.forEach((contact, index) => {
    list += `
      <li class="p-2 card mt-2" onclick="showChat(${index})">
        <div class="card-body">
          <div class="d-flex">
            <div>
              <img class="rounded-pill me-3" width="60" src="${ contact.image }">
            </div>
            <div>
              <p class="fw-bold mb-0 text-light">${ contact.name }</p>
              <p class="small text-muted">${ contact.last_chat[0].message }</p>
            </div>
            <div>
              <p class="small text-muted">${ contact.last_chat[0].date }</p>
              <span class="badge bg-danger rounded-pill float-end">${ contact.last_chat.length }</span>
            </div>
          </div>
        </div>
      </li>
    `
  });
  document.querySelector('.contact').innerHTML = list;
}

// CREAR CHATS ===========================>
const createChats = (chats) => {  
  let list = '';
  chats.forEach(chat => {
    list += `
      <div class="d-flex chat">
        <!-- DISEÑO CAJA IMAGEN -->
        <div class="w-25 d-flex align-items-end justify-content-end">
          <img class="rounded-pill me-3 avatar" width="60" src="${ chat.image }">
        </div>
        <!-- DISEÑO CAJA CHAT -->
        <div class="w-75">
          <div class="card">
            <div class="card-body">${ chat.last_chat.message }</div>
          </div>
          <p class="small text-light">${ chat.last_chat.date }</p>
        </div>
      </div> 
    `
  });
  document.querySelector('.chats').innerHTML = list;
}
// MOSTAR CHAT ===========================>
const showChat = (idChat) => {
  console.log("idChat", idChat);
  ipcRenderer.send('pp-get-chat', {id: idChat});
}

// RECIBIR DATOS =========================>
// Cotanctos
ipcRenderer.on('contacts', (event, contacts) => {
  createContacts(contacts);
});
// Chats
ipcRenderer.on('chats', (event, chats) => {
  createChats(chats);
});
// Recibir chat =>
ipcRenderer.on('pr-get-chat', (event, chats_user) => {
  console.log(chats_user);
  let list = '';
  chats_user.forEach(chat => {
    list += `
      <div class="d-flex chat">
        <!-- DISEÑO CAJA IMAGEN -->
        <div class="w-25 d-flex align-items-end justify-content-end">
          <img class="rounded-pill me-3 avatar" width="60" src="${ chat.image }">
        </div>
        <!-- DISEÑO CAJA CHAT -->
        <div class="w-75">
          <div class="card">
            <div class="card-body">${ chat.chat.message }</div>
          </div>
          <p class="small text-light">${ chat.chat.date }</p>
        </div>
      </div> 
    `
  });
  document.querySelector('.chats').innerHTML = list;
})