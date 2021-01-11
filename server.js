const express = require("express");
const faker = require("faker");
const app = express();

class Company {
  constructor(){
    this.name = faker.company.companyName();
    this.phrase = `$${faker.company.catchPhrase()}`
    this.suffix = faker.company.companySuffix();
  }
}
console.log(new Company());

class User {
  constructor(){
    this.fname = faker.name.firstName();
    this.lname = `$${faker.name.lastName()}`
    this.job = faker.name.jobTitle();
  }
}
console.log(new User());


const user1 = new User();
const comp1 = new Company();

app.get("/api/company", (req, res) => {
res.json(new Company());

});



app.get("/api/user", (req, res) => {
  res.json( new User() );
});



app.get("/api/companyuser", (req, res) => {
  res.json( user1 + comp1 );


});

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("Ouhe browser");
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
