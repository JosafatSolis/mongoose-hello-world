const mongoose = require("mongoose");
const Foo = require("./models/Foo");
const Cat = require("./models/Cat");

mongoose
  .connect("mongodb://localhost/mongoose-test", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => console.log(`Connected to Database: ${x.connections[0].name}`))
  .catch((err) => console.log("Error ", err));

// const foo1 = new Foo({name: "Foo1"});

function createFoo(name) {
  const foo1 = new Foo({ name }); // Como se llama igual
  foo1
    .save()
    .then((newFoo) => console.log(`Se añadió un Foo: ${newFoo.name}`))
    .catch((err) => console.log(`Error al crear el foo: ${err}`));
}

// function createCat(name, age) {
//   const cat = new Cat({ name, age });
//   cat
//     .save()
//     .then((newCat) =>
//       console.log(`New Cat created: ${newCat.name} (${newCat.age})`)
//     )
//     .catch((error) => console.log(`Error: ${error}`));
// }

function createCat(name, age) {
  Cat.create({ name, age })
    .then((newCat) =>
      console.log(`New Cat created: ${newCat.name} (${newCat.age})`)
    )
    .catch((error) => console.log(`Error: ${error}`));
}

// Foo.find({name: "Foo1"}).then(foos => { console.log(foos) });

function searchFoos(query = {}) {
  Foo.find(query).then((foos) => {
    console.log(foos);
  });
}

// createCat("el pelusa", 6);

function getAnimals() {
  const promise1 = Foo.find(); // Retorna todos, sin filtro
  const promise2 = Cat.find(); // Notar que el objeto que regresa (Query) puede ser tratado cmo una promesa
  Promise.all([promise1, promise2]).then((values) => {
    console.log(values);
  });
}

const p = new Promise((resolve, reject) => {
  resolve(createCat("vilchis", 8));
});

p.then(getAnimals());
