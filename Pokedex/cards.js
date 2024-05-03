const API_URL = "https://ipinfo.io/";

async function fetchIpData(ip) {
    try {
        const RES = await fetch(API_URL + ip + "/json");
        const DATA = await RES.json();
        //console.log(RES);
        console.log(DATA);
    } catch (err) {
        console.error(err);
    }
}

fetchIpData("189.232.26.29");

const USERS = [
    {
      id: 1,
      username: "booklover123",
      desc: "Avid reader and coffee enthusiast.",
      age: 29,
      fav_books: {
        books: ["To Kill a Mockingbird", "1984", "Pride and Prejudice"]
      }
    },
    {
      id: 2,
      username: "literature_junkie",
      desc: "Poetry lover and amateur writer.",
      age: 35,
      fav_books: {
        books: ["The Great Gatsby", "Invisible Man", "Beloved"]
      }
    }
  ];

function crearTarjeta(user) {
    const card = crearSeccion("div");
    const name_section = crearSeccion("h3", `Nombre: ${user.username}`);
    const desc_section = crearSeccion("p", `Descripción: ${user.desc}`);
    const age_section = crearSeccion("p", `Edad: ${user.age}`);
    //const book_section = createBookList(`Libro: ${user.fav_books.books}`);
    const book_section = crearLista(user.fav_books.books);
    card.append(name_section, desc_section, age_section, book_section);
    return card;
}

function crearSeccion(etiqueta, contenido) {
    const section = document.createElement(etiqueta);
    section.textContent = contenido;
    return section;
}

function crearLista(books) {
    const BOOK_LIST = document.createElement("div");
    books.forEach((e, index) => {
        const item = crearSeccion("p", `Libro ${index + 1}: ${e}`);
        BOOK_LIST.appendChild(item);
    });
    return BOOK_LIST;
}

function agregarTarjeta(users) {
    const CARDS_CONTAINER = document.querySelector("#card-container");

    users.forEach(user => {
        const userCard = crearTarjeta(user);
        CARDS_CONTAINER.appendChild(userCard);
    });
}

agregarTarjeta(USERS);
console.log(USERS);
