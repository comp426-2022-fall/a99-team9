# Dam Journal 


## Summary:
Dam Journal is a water tracker that allow users to keep track of how much water they drank throughout the day so that they can achieve their water consumption goals. Users will create an account where they can add how many fluid ounces they just drank. They can also see how much water they drank throughout the day and their water consumption progess. We hope to promote drinking water because it is refreshing, delicious, and has health benefits. 


## Demo:
Take a look at our demo video here: https://youtu.be/qjkcnZ-hUoc


## Stepup Instructions:
      
      1.    Clone the repository.
      
      2.    Run npm install: this will install all the dependencies needed for this project.
      
      3.    Run npm start .
      
      4.    On your browser, navigate to the webpage localhost:2000/.
      
      5.    CONTROL+C will close the server when you are finished
      

## Team Management:
The roles assigned in our team to manage this journal were made collectively. Although there are leads assigned to each role, everyone had a part in the project. In addition to the following roles and assignments, the team had strong communication both in-person and in virtual meetings. The use of branches and pull requests were also used to aid in productive collaboration. The roles within the project are as follows:

      Review Manager : Megan Ortel | megortel
	      A review manager reviews pull requests from group members and will merge or reject them from 
	      the project. They will also manage the discussion of the project. 

      Plan Manager: Everyone
	      The plan manager is oversee the plan for the project and ensure that the project is 
	      up-to-date and on schedule. Plan manager is a role given to everyone so that 
	      everyone can be responsible for ensuring that their part of the project is complete 
	      and in an orderly manner. Everyone has agreed upon tasks to do based on the initial
	      meeting and strong communication is expected amongst member to ensure that we are all
	      aware of where we each are in the project. 
            
      Project Manager: Everyone
      		A project manager is aware of the current status of the project and ensures that 
		each part of the project is accounted for in a sufficient manner. Since every
		component of the project relies on equal contribution of all group members, all 
		members of the group will act as a project manager.

      Documentation Manager: Bao-Nhi Vu | baonhivu
	      Then documentation manager ensures that all documentation and write-ups are made in 
	      a manner that is well accounted for and each component of the project has a 
	      description. They will also maintain the readme file for the project. 

      Release Manager: Megan Ortel | megortel
	      The release manager will oversee the packaging and release process for the project 
	      package. 

      Front-End Lead: Katie Cornette | Katie-Cornette
	      The front-end lead will design and put together the face of the website to make sure 
	      that it works well for the user and looks nice. 

      Back-End Lead: Megan Ortel | megortel
	      The back-end lead is responsible for ensuring the API works together with the 
	      functionality of the site. 

      Database Lead: Bao-Nhi Vu | baonhivu
	      The databse lead is responsible for working with the back-end lead to ensure the 
	      database of account information works with the actual functionality of the site. 
            
      Design Lead: Katie Cornette | Katie-Cornette
            The design lead is responsible for designing the overall look of the site. This role 
	    involves working collaboratively with the front-end lead to ensure the final product 
	    looks like functions the way it is meant to.
            
            
## Planning

      Pre-Meeting
            Before meeting as a group, we all read the rubric of the assignment and watched the 
	    lecture on 11/22/22 so that weall understood how the project's repository was being 
	    made and handled. 
            
      Meeting #1: 11/29/22
            This meeting was held over zoom and the goal of the meeting was to choose the idea 
	    of the final project, come up with a project name, assign roles and tasks for the 
	    project, and plan what the next steps were going to be. In this meeting, we completed 
	    the decision of what the project would be and it's name, and came up with a proejct 
	    summary. The roles and tasks were also assigned. All members were present during the 
	    meeting. We decided that we wanted to create a water tracker appthat will track someone's 
	    water consumption throughout the day. We need to create a login page that will be able 
	    to add new users and log existing users into the correct profile. When new users join, 
	    they are able to set a water goal or if they choose not to, a generic one will be 
	    assigned to them. The main page will have a calendar for the month and picture buttons 
	    of a water cup or bottle to click on when you complete a drink. The days that you
	    have completed your water goal will turn blue on the calendar. Users should be given 
	    the ability to register an account, update their information, see their information 
	    somewhere, and delete their account. A README.md file should be created with basic 
	    descriptions, installation requirements/instructions, dependency list, and run 
	    instructions. Some potential site names are Dam Journal, Hydrate or Diedrate, Drip or 
	    Drown, and Fo' Drizzle.
            
      Comunication
            The fastest and easiest platform that we decided to communicate through was iMessages 
	    for updates, suggestions on meetings, and general communication. All members of the 
	    group have the role of project manager. As a result, we all made sure to inform each 
	    other whenever a certain task was complete or if antoher task needed to be complete. 
	    This ensured that everyone was on the same page with the project and that we were all 
	    aware of each other's progress. Early on in the project, we found that it was difficult 
	    to meet each other when all of our class schedules were conflicting. Additionally, the 
	    onset of finals and other final projects made it difficult for us to have consistent 
	    meetings. So, the use of effective communication was vital toward the success of this 
	    project. 
	    
	Start Date: 11/30/22
		A repository for the project was created and the documentation has started. Directories 
		were created to place documentation and styling. We are looking into different uses for 
		APIs that would better suit our project. A package.json file was created but we need to 
		begin building out the server.js file and think about the design elements on the front
		end. 
      

## Dependencies

      1. bcrypt (5.1.0)
      
      2. better-sqlite3 (8.0.1)
      
      3. ejs (3.1.8)
      
      4. express (4.18.2)
      
      5. minimist (1.2.7)
      
      6. node (19.2.0)
      
      7. nodemon (2.0.20)
      
      8. npm (9.1.2)
      
      9. path (0.12.7)
      
      10. url (0.11.0)


## Components: 

      1. Username
      
      2. Password


## User Interactions

The purpose of a water tracker requires users to interact with the web app to track their water consumption throughout the day. These are the following interactions that the user can have with the web app:

	1. Creating a new account
		Users are able to create a new account when they first open the water tracker. They 
		can then use that information to log into their account to set up a water goal and 
		updating how much water they drank so that they can see their water accumulate for 
		the day. 
		
	2. Logging into their account
		When users first open the water tracker, they are able to log into their account in 
		the first screen. They also have the option to create a new account if they do not 
		have one already. If they do not have an account and water to create a new one, they 
		will be redirected to that page. Once an account is created, their name, username, 
		password, and water goal information is saved onto a database and they can use the 
		username and password information to log into their account. When an account is 
		logged into, they will be taken to the home page where they can update their water 
		consumption and see how much water has been consumed. 
		
	3. Invalid login
		Whe a user enters an invalid username and password, they will be redirected to a 
		page that indicates that the username and password that they entered was invalid 
		and a login was unsuccessful. 
		
	4. Delete account
		When a user no longer wants their account and wants to delete it, they can choose 
		to have it removed. The site will automatically take the username of the account 
		and delete it, along with the account information, from the database. 
		
	5. Home
		The home page is displayed when the user logs into their account. On this page, 
		the user will see an option to update their water consumed for the day. 
		
	6. Setting a water goal
		A user can set their water goal that they wish to consume. This can be done when 
		the user first creates their account. When this goal is set, the water tracker 
		will compare each update to the water consumed for the day with the water goal 
		for the day.
		
	7. Updating water
		On the homepage, there is an option to update your water consumed for the day. 
		With each new entry, the water tracker will accumulate these values and display 
		them. This value will be compared to the amount of water that was set as your goal. 
      
      
## API

This water tracker involves the use of an API. The API endpoints contribute information into the tracker's database when the endpoints are reached. The following list are the details about the API endpoints:

	1. app.get('/')
		Routes to the login page.
		
	2. app.get('/app')
		Routes to the login page.
		
	3. app.get('/loginpage')
		Routes to the login page.
		
	4. app.get('/new_user')
		Routes to the new account page.
		
	5. app.post('/loginpage')
		Takes in a username and password and checks to make sure that account exists. If
		that account does not exist, then the user will be redirected to the invalid_login 
		page. If that account does exist, then that username and password will be inserted 
		into a databse with the time that they logged in and redirected to the homepage. 
		
	6. app.get('/home')
		Routes to the homepage.
		
	7. app.get('/invalid_login')
		Routes to the invalid login page.
		
	8. app.post('delete_acc')
		Gathers the time and username of the account and inserts it into a database. With
		that information, the usernamae is used to get the password from the userinfo 
		database and is deleted. Once the account is deleted, then the message 
		'account_deleted' will be rendered. 
		
	9. app.post('/new_user')
		Takes in a name, username, password, and water goal and puts that into a database.
		That infomation is taken and is checked to see is that account exists yet. If that 
		account has not been made yet, then 'new_user' will be rendered. If that account 
		already exists, 'account_exists' will be rendered. 
		
	10. app.post('/new_entry')
		Takes in the messages from the entry and stores that information, in addition to 
		the account's username and the time of the entry, in a database of logs. Then, 
		that information is used to store it into the userinfo database to keep track of 
		the water consumed with teh name, username, password, watergoal, and WaterDrank for 
		the day. When a new entry is created, 'entry_created' is rendered. 


## Future Extensions

Given the current state of the web app, the future extensions of the project involves better catering the web app to a better user experience. More details on how they project can be made better are below:

	1. Calender View
		The purpose of the water tracker was to allow users to set a water goal for 
		themselves and track how much water thry drink throughout the day. To make the 
		tracker more useful, adding in a calendar view where users can see each day 
		presented as a calendar would help. Then, in the view, if they were click on
		each day, the water goal and amount of water consumed should be displayed. 
		This way, users can view their own statistics, draw conclusions from them, 
		and track their trends. 
		
	2. Water goal recommendation
		Every person is built different and has their own needs. Althought they made 
		know how much water they personally need to consume per day, it would be helpful 
		to add in a feature that allows them to receive a recommendation on how much 
		water they should consume. This information would be based on their own 
		characteristics like their weight, height, and amount of physical activity they 
		do per day. 
		
	3. Water reminders
		An issue that many people face is remembering to drink water. While tracking 
		their water consumption aids in knowing how much water they consumed, having 
		reminders to help users know when to drink water and how much to drink water 
		to reach their goals would be helpful. 
		
	4. Trend analysis
		Given all the data that is collected, a weekly trends chart would be a helpful 
		tool to see which days were the water goals met, how often are the water goals 
		met, and which days were the most amount of water consumed. 
		
	5. Water icon to add water count
		Instead of entering an amount of water each day, a user can add a standard size 
		with a button that is a water icon. When you click on the icon (which may be a 
		water droplet, cup, or bottle) it will add 8-16 oz of water to your daily total.
		
	6. Adding friends
		A fun feature can be added where users can find other users or add their friends. 
		With this feature users can send motivating messages to their friends to 
		encourage them to meet their water goal.
		
	7. Encrypting passwords
		We want to establish a more secure way to store the user account informaton 
		and hopefully encrypt it with a feature such as bcrypt. 
