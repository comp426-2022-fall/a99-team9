
import minimist from 'minimist'; 
import express from 'express';
import Database from 'better-sqlite3';
import {fileURLToPath} from 'url';
import path from 'path';

//Initialize database
const db = new Database('userinfo.db');
db.pragma('journal_mode = WAL'); 


const UserTable = `CREATE TABLE userinfo (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(50), username VARCHAR(50), password VARCHAR(50), watergoal INTEGER, WaterDrank INTEGER);`
try{
    db.exec(UserTable);
}catch (error){
}
//Create logs db
const logs = `CREATE TABLE Logs (id INTEGER PRIMARY KEY AUTOINCREMENT, username VARCHAR(50), message VARCHAR(50), time VARCHAR);`
try{
    db.exec(logs);
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

// User Login
app.post('/loginpage', function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    const time = Date.now();
    const now = new Date(time); 

    const check = db.prepare(`SELECT * FROM userinfo WHERE username =' ${username}' and password='${password}';`);
    let x = check.get();
    if(x === undefined){
        req.app.set('username', username);
        req.app.set('password', pasword); 
        const unsuccessful = `INSERT INTO Logs (username, message, time ) VALUES ('${username}', 'unsuccessful login', '${now.toISOString()}');`;
        db.exec(unsuccessful);
        res.render('invalid_login');
    }
    else{ 
        req.app.set('username', username); 
        req.app.set('password', password); 
        const success = `INSERT INTO Logs (username, message, time) VALUES ('${username}', 'success!', ${now.toISOString()}');`; 
        db.exec(success)
        res.render('home');  	
    }
});

//Route to homepage
app.get('/home', function(req, res){
    const datastmt = db.prepare(`SELECT * FROM userinfo WHERE username = '${req.app.get('username')}';`);
    let wgoal = datastmt.all();
    res.render('home', {'userinfo' : wgoal});
});

//Route to invalid login
app.get('/invalid_login', function(req, res){
    res.render('invalid_login')
}); 
 
// Delete an account
app.post('/delete_acc', function(req, res){
    const time = Date.now();
    const now = new Date(time); 
    let user1 = req.body.username
    
    const stmt3= `INSERT INTO Logs (username, message, time) VALUES ('${user1}', ' deleted account', '$now.ISOString()}');`;
    db.exec(stmt3)

    const username = req.body.username;
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
    const username = req.body.username;
    const time = Date.now();
    const now = new Date(time);
    const stmt6 =`INSERT INTO Logs (username, message, time ) VALUES ('${username}', ' creating a new account ', '${now.toISOString()}');`;
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



    const stmt2 =  `INSERT INTO Logs (username, message, time) VALUES ('${user1}', ' submitted new entry ', '$now.ISOString()}');`;
    db.exec(stmt2);  

    const username = req.app.get('username');
    const watergoal = req.app.watergoal;
    const amount = req.body.WaterDrank; //might need to create a global variable to add to or create one that when clicked we add to but dont know how to do this yet
    const date = req.body.date;

    const stmt5 = `INSERT INTO userinfo (name, username, password, watergoal, WaterDrank) VALUES ('${username}', '${amount}', '${date}', '${watergoal}', '${amount}');`;
    db.exec(stmt5);  

	res.render('home');
	
});

// Will return '404 NOT FOUND' for undefined endpoints
app.use((req, res) => {
    res.status(404).send('404 NOT FOUND');
  });
app.get('/watergoal', function(req, res){
    const stmt7 = db.prepare(`SELECT * FROM userinfo (watergoal) VALUES '${watergoal}';`);
    let watergoal = stmt7.all();
    if(all === undefined) {
	res.send("no data found");
    } 
    else {
        res.send(watergoal);
    } 
});

app.listen(port) 

