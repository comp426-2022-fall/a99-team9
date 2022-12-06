import minimist from 'minimist';
import express from 'express';\

//set up
const app = express(); 
const args = minimist(process.argv.slice(2));

//app.use
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Creat user endpoint
app.post('/app/user/new/', (req, res, next) => {
    let userdata = {
	name: req.body.name,
	username: req.body.username,
	password: req.body.password,
	watergoal: req.body.watergoal
     }
     const stmt = dp.prepare('INSERT INTO userinfo (name, username, password, watergoal) VALUES (?, ?, ?)');
     consgt info = stmt.run(userdata.name, userdata.username, userdata.password, userdata.watergoal);
     res.status(200).json({'message": "user " + userdata.username " + " " created"})
     console.log(userdata)
     console.log(info)
}) 

//Read user info enpoint
app.get('/app/user/info/:username/', req, res, next) => {
    const stmt = dp.prepare('SELECT * FROM userinfo WHERE username = ?' )
    const info = stmt.get(req.params.username)
    res.status(200).json(info)
    console.log(info)
})

//Modify user info endpoint
app.patch

