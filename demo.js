const b = require("better.db");

const db = new b("./db/welcome.db");

db.set("welcome_670259021428555807","760574830478360577").then(console.log);
