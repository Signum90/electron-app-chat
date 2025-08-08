/** ===============================================
* @Name: SIMULACIÓN DE DATOS
================================================= */

//# >>>
const contacts = [
  {
    name: "Elizabeth Fuller",
    image: "https://randomuser.me/api/portraits/women/85.jpg",
    last_chat: [{
      date: '9:45 AM',
      message: 'Hola amigo'
    }]
  },
  {
    name: "Ethan Carroll",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
    last_chat: [{
      date: '3:00 PM',
      message: 'Como estas, como te ha ido'
    }]
  },
  {
    name: "Alyssa Presscott",
    image: "https://randomuser.me/api/portraits/women/82.jpg",
    last_chat: [{
      date: '6:00 AM',
      message: 'Se deben cargar todos los trabajos para el día de hoy'
    }]
  }
];
const chats = [
  {
    name: "Elizabeth Fuller",
    image: "https://randomuser.me/api/portraits/women/85.jpg",
    last_chat:{
      date: '9:45 AM',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem praesentium saepe magnam cum quod dolorem dolor minus quo, accusamus tempora ducimus exercitationem nulla iste voluptatum fuga ipsa amet iusto neque.1'
    }
  },
  {
    name: "Alexis Cominolo",
    image: "https://randomuser.me/api/portraits/women/51.jpg",
    last_chat: {
      date: '3:00 PM',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem praesentium saepe magnam cum quod dolorem dolor minus quo, accusamus tempora ducimus exercitationem nulla iste voluptatum fuga ipsa amet iusto neque.1'
    }
  }
];
const chats_user = [
  [
    {
    name: "Elizabeth Fuller",
    image: "https://randomuser.me/api/portraits/women/85.jpg",
    chat:{
      date: '9:45 AM',
      message: 'la kk peluza'
      }
    },
    {
      name: "Alexis Cominolo",
      image: "https://randomuser.me/api/portraits/women/51.jpg",
      chat: {
        date: '3:00 PM',
        message: 'el coco peluso'
      }
    }
  ],
  [

  ],
  [
    {
    name: "Alyssa Presscott",
    image: "https://randomuser.me/api/portraits/women/82.jpg",
    chat:{
      date: '8:16 AM',
      message: 'Rompolano'
      }
    },
    {
      name: "Alexis Cominolo",
      image: "https://randomuser.me/api/portraits/women/51.jpg",
      chat: {
        date: '9:00 AM',
        message: 'Rompoculo'
      }
    }
  ]
]
//# >>>
module.exports = {
  contacts,
  chats,
  chats_user
};