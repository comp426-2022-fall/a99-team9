import minimist from 'minimist';
import express from 'express';
import Database from 'better-sqlite3';
import {fileURLToPath} from 'url';
import path from 'path';

//Initialize database
const db = new Database('userinfo.db');
db.pragma('journal_mode = WAL'); 

const UserTable = `CREATE TABLE userinfo (id INTEGER PRIMARY KEY AUTOINCREMENT, Name VARCGHAR(50), Username VARCHAR(50), Password VARCHAR(50), WaterGoal INTEGER, WaterDrank INTEGER);`
try{
    db.exec(UserTable);
}catch (error){
}
//Create logs db
 
//Initialize app
const app = express();
const args = minimist(process.argv.slice(2));
const bcrypt = require('bcrypt')
const saltRounds = 12;
 
const port = args.port || 2000  
//app.use
app.use(express.static("frontend"))
app.set("view engine", "ejs") 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Route to homepage
app.get('/', (req, res) => {
    res.redirect('/home')
});

// Route to login
app.get ('/', (req, res) => {
    res.redirect('/login');
});


// User Login
app.post("/login", function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    const time = Date.now();
    const now = new Date(time); 
    const check = dp.prepare(`SELECT * FROM userinfo WHERE Username =' ${username}' and password='${pass}';`);
    let x = check.get();
    if(x === undefined){
	const unsuccessful = `INSERT INTO Logs (user, message, time ) VALUES ('${usernmae}', 'unsuccessful login', '${now.toISOString()}');`;
	db.exec(unsucessful);
        res.render('invalid-login');
    }else{
        const success = `INSERT INTO Logs (user, message, time) VALUES ('${username}', 'success!', ${now.toISOString()}');`; 
        db.exec(success)
        res.render('home');  	

    }
});

// Delete an account
app.post('/delete_acc', function(req, res){
    const time = Date.now();
    const now = new Date(time); 
    let user1 = req.body.username
    
    const stmt3= `INSERT INTO Logs (user, message, time) VALUES ('${username}', ' deleted account', '$now.ISOString()}');`;
    db.exec(stmt3)

    const usernam = req.body.username;
    const pass = req.body.password;
    const stmt4 = `DELETE FROM userinfo WHERE Username =' ${usernam}';`
    db.exec(stmt4)
    res.render('account_delted');
});
 

// Creating a new account
app.post('/new', (req, res, next) => {
    let userdata = {
	name: req.body.name,
	username: req.body.username,
	password: req.body.password,
	watergoal: req.body.watergoal
    }
    const time = Date.now();
    const now = new Date(time);
    const stmt1 = db.prepare(`SELECT * FROM userinfo WHERE Username =' ${username}';`);
    let y = stmt1.get();
    if(y == undefined){
	const newup = `INSERT INTO userinfo (name, username, password, watergoal) VALUES ('${userdata.name}', '${userdata.username}', '${userdata.password}', '${userdata.watergoal}');`;
        const new_update = `INSERT INTO Logs (user, message, time) VALUES ('${username}', ' created new account', '$now.ISOString()}');`;
        db.exec(new_update);  
        db.exec(newup)
        res.render('new_user_acc');
    }
    else{
	res.render('account_exists');
    } 
	
}) 

// Creating a new entry
app.post('/new', (req, res) => {
    const time = Date.now();
    const now = new Date(time);
    let user1 = req.app.get('Username');


    const stmt2 =  `INSERT INTO Logs (user, message, time) VALUES ('${username}', ' submitted new entry ', '$now.ISOString()}');`;
    db.exec(stmt2);  

    const username = req.app.get('Username');
    const amount = req.body.WaterDrank; //might need to create a global bariable to add to or create one that when clicked we add to but dont know how to do this yet
    const date = req.body.date;

    const stmt5 = `INSERT INTO userinfo (name, username, password, watergoal) VALUES ('${username}', '${amount}', '${date}'');`;
    db.exec(stmt5);  

	res.render('entry_created');
	
}) 
