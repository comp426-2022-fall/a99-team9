import minimist from 'minimist';
import express from 'express';
import Database from 'better-sqlite3';


//Initialize database
const db = new Database('userinfo.db');
db.pragma('journal_mode = WAL'); 

const UserTable = `CREATE TABLE userinfo (id INTEGER PRIMARY KEY AUTOINCREMENT, Name VARCGHAR(50), Username VARCHAR(50), Password VARCHAR(50), WaterGoal INTEGER);'
try{
    db.exec(UserTable);
}catch (error){
}

 
//Initialize app
const app = express();
const args = minimist(process.argv.slice(2));
const bcrypt = require('bcrypt')
const saltRounds = 12;
 
const port = args.port || 2000  
//app.use
app.use(express.static("front"))
app.set("view engine", "ejs") 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Route to homepage
app.get('/', (req, res) => {
    res.redirect('/home')
}

// Route to login
app.get ('/', (req, res) => {
    res.redirect('/login');
}


// User Login
app.post("/login", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    const check = dp.prepare(`SELECT * FROM userinfo WHERE Username =' ${username}' and password='${pass}';`);
    let x = check.get();
    if(row === undefined){
	console.log("USER DOES NOT EXIST")
    }else{
	req. 
} 

// Creating a new account
app.post('/new', (req, res, next) => {
    let userdata = {
	name: req.body.name,
	username: req.body.username,
	password: req.body.password,
	watergoal: req.body.watergoal
     }
     const stmt = dp.prepare('INSERT INTO userinfo (name, username, password, watergoal) VALUES (?, ?, ?, ?)');
   // FIGURE OUT HOW TO USE BCRYPT  
     const info = stmt.run(userdata.name, userdata.username, userdata.password, userdata.watergoal);
     res.status(200).json({'message": "user " + userdata.username " + " " created"})
     console.log(userdata)
     console.log(info) 
}) 


app.get('/app/user/info/:username/', req, res, next) => {
    const stmt = dp.prepare('SELECT * FROM userinfo WHERE username = ?' )
    const info = stmt.get(req.params.username)
    res.status(200).json(info)
    console.log(info)

//Modify user info endpoint
app.patch('/app/user/info/update/:username/', (req, res,next) => {
    let userdata = {
	name: req.body.name,
	username: req.params.username,
	password: req.body.password ? bcrypt(req.body.password): NULL
	watergoal: req.body.watergoal
    }
    const stmt = dp.prepare('UPDATE userinfo SET name = COALESCE(?,name), username = COALESCE(?,username), password = COALESCE(?,pasword), watergoal = COALESCE(?, watergoal);')

    const info = stmt.run(userdata.name, userdata.username, username.password, username.watergoal);
    res.status(202).json({"message" : info.changes + " record updated: ID " + info.lastInsertRowid+"username: userdata.username"})
    console.log(userdata)
    console.log(info) 
})
 
