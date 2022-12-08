import minimist from 'minimist'; 
import express from 'express';
import Database from 'better-sqlite3';
import {fileURLToPath} from 'url';
import path from 'path';

//Initialize database
const db = new Database('userinfo.db');
db.pragma('journal_mode = WAL'); 

const UserTable = `CREATE TABLE userinfo (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCGHAR(50), username VARCHAR(50), password VARCHAR(50), watergoal INTEGER, WaterDrank INTEGER);`
try{
    db.exec(UserTable);
}catch (error){
}
//Create logs db
const logs = `CREATE TABLE Logs (id INTEGER PRIMARY KEY AUTOINCREMENT, username VARCHAR(50), message VARCHAR(50), time VARCHAR);`
try{
    db.exec(UserTable);
}catch (error){
} 
//Initialize app
const args = minimist(process.argv.slice(2));

const port = args.port || 2000

const __file = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__file); 
const app = express();
 
//set up 
app.use(express.static("frontend"))
app.set('view engine', 'ejs') 
app.set('views', path.join(__dirname, 'views')); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Route to login
app.get('/', function (req, res) {
    res.redirect('/loginpage')
});

app.get ('/app', function (req, res) {
    res.redirect('/loginpage');
});

app.get ('/loginpage', function (req, res) {
    res.render('loginpage');
});

// Route to new account page
app.get('/new_user', (req, res, next) => {
    res.render('new_user');	
}); 

// Route to home page upon logging in
app.get('/home', (req, res, next) => {
    res.render('home');	
}); 


// User Login
app.post('/loginpage', function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    const time = Date.now();
    const now = new Date(time); 

    const check = db.prepare(`SELECT * FROM userinfo WHERE username =' ${username}' and password='${password}';`);
    let x = check.get();
    if(x === undefined){
        const unsuccessful = `INSERT INTO Logs (username, message, time ) VALUES ('${username}', 'unsuccessful login', '${now.toISOString()}');`;
        db.exec(unsucessful);
        res.render('invalid_login');
    }else{
        const success = `INSERT INTO Logs (username, message, time) VALUES ('${username}', 'success!', ${now.toISOString()}');`; 
        db.exec(success)
        res.render('home');  	

    }
});

// Delete an account
app.post('/delete_acc', function(req, res){
    const time = Date.now();
    const now = new Date(time); 
    let user1 = req.body.username
    
    const stmt3= `INSERT INTO Logs (username, message, time) VALUES ('${username}', ' deleted account', '$now.ISOString()}');`;
    db.exec(stmt3)

    const usernam = req.body.username;
    const pass = req.body.password;
    const stmt4 = `DELETE FROM userinfo WHERE username =' ${username}';`
    db.exec(stmt4)
    res.render('account_deleted');
});
 

// Creating a new account
app.post('/new_user', (req, res) =>{
    let userdata = {
        name: req.body.name, 
        username: req.body.username,
        password: req.body.password,
        watergoal: req.body.watergoal
    }
    const time = Date.now();
    const now = new Date(time);
    const stmt6 = `INSERT INTO Logs (username, message, time) VALUES ('${username}', ' created new account', '$now.ISOString()}');`;
    db.exec(stmt6);  

    const stmt1 = db.prepare(`SELECT * FROM userinfo WHERE username =' ${username}';`);
    let y = stmt1.get();
    if(y == undefined){
        const newup = `INSERT INTO userinfo (name, username, password, watergoal, WaterDrank) VALUES ('${userdata.name}', '${userdata.username}', '${userdata.password}', '${userdata.watergoal}', 0);`;
        db.exec(newup)
        res.render('new_user');
    }
    else{
        res.render('account_exists');
    } 
	
}); 

// Creating a new entry
app.post('/new_entry', (req, res) => {
    const time = Date.now();
    const now = new Date(time);
    let user1 = req.app.get('username');


    const stmt2 =  `INSERT INTO Logs (user, message, time) VALUES ('${username}', ' submitted new entry ', '$now.ISOString()}');`;
    db.exec(stmt2);  

    const username = req.app.get('username');
    const amount = req.body.WaterDrank; //might need to create a global variable to add to or create one that when clicked we add to but dont know how to do this yet
    const date = req.body.date;

    const stmt5 = `INSERT INTO userinfo (name, username, password, watergoal, WaterDrank) VALUES ('${username}', '${amount}', '${date}', '${amount}');`;
    db.exec(stmt5);  

	res.render('entry_created');
	
});

// Will return '404 NOT FOUND' for undefined endpoints
app.use((req, res) => {
    res.status(404).send('404 NOT FOUND');
  });


app.listen(port) 
