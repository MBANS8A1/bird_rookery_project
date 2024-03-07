# FLAPPY'S ENORMOUS ROOKERY


![Here is flappy](./assets/birdpic.jpeg)

---
## Description

<p>This database concerns the creation of a bird rookery that birdwatchers can book tours to come visit. As such there are tables with referential integrity
established between them. The bird-related tables(relations) reflect th taxonomic classification of various orders and families of birds. Feel free to adapt the database I made to your own personal requirements by adding more fields and relations as needed. The express library is used here with Node JS and the relational database used here is PostgreSQL but this same format can be used for MySQL too. </p>

---

## How to use the database

<p> Please read the setup.txt file in the root directory of the project repository which details the installation of postgres and the key connection properties that needs to be setup depending on your own personal needs.</p>

<p> If you want to run the database for development and testing purposes then use the main Git branch which will allow for seeding of the PostgreSQL test database
or development database. To run start the server using nodemon and make CRUD (Create|Read|Update|Delete) API calls using Postman or Insomnia (or any other API testing application platform) execute these commands:

> - npm install (necessary to create the relevant dependencies on your local machine)
> - npm run setup-dbs (drops and creates the relevant database(s))
> - npm run seed
> - npm run dev
> - Ctrl+C (to stop the nodemon server)


If you wish to run the application locally instead of via a server you can user curl commands after entering the command in the terminal:

> - node listen.js

After doing the above commands the console should show yout that the server is running then you can make the relevant API calls according to URI queries in the model files and according to the routes for the database tables(relations) that are in the routes directory. You can also send malformed fields/request bodies when making use of express.json() middleware in order to see the error handling in function.</p>

---

## Using multer

<p>If you look at the manage-relations.js file you'll see that order_image in the bird_orders table is of type bytea. To ease the process of inserting bird order images into the bird_orders tble when doing post requests you can grab images you have downloaded from internet and save them to any directory. Next, run this command in the terminal:

> - node multer_listen.js

This should start the server on port 3001. Type this URI <http://localhost:3001> into your web browser and then insert the images into bird_order_pics directory that way instead of having to labour using mv and cp commands in the terminal(to bulk copy files)</p>

---

## About the hosting_branch

<p>I used various git branches in the development of this repository. The hosting_branch I have not merged with the main branch as you may want to using  different online database server and API hosting service. The code in the hosting_branch is adapted for use with ElephantSQL and Render but you may have your own  cloud service for RDS instances and in that case the code wil be different. Fork both the main branch and the hosting_branch and adapt to your requirements. using the .env.production file.</p>
---

## Contents Table

### Important Directories

- [\_\_tests\_\_](#tests-folder)

- [controllers](#controllers-folder)

- [db](#db-folder)

- [models](#models-folder) 

- [routes](#routes-folder)

- [public](#public-folder)

---


### [__tests__ folder](#tests-folder)

<p>This folder has all the jest tests for the database and for the utility functions that are used to to format the data into the nested array format the pg-format requires before the data can be seeded(inserted) into the tables.</p>

- Files
  - app.test.js
  - utility_func.test.js
---

### [controllers folder](#controllers-folder)

<p>This folder contains the necessary controllers files that invoke the models files and handle the client request with the information provided in the request body in order to send the correct data (query information) back to the client. There is also here general 404 Not Found controller file that has an extra middle ware that is used for testing purposes.</p>

- Files
  - birds.controllers.js
  - family.controller.js
  - order.controller.js
  - bwatchers.controller.js
  - rtour.controller.js
  - watchertours.controller.js
  - wingshape.controller.js

---

### [db folder](#db-folder)

<p>This folder contains the test data and development related data that you can add to if you wish to add more species and classifications of birds in the future.Also it has the files to create the Pool connection object, create and insert into the tables and main seed file using promise-chains. Also is the SQL file to actually create the databases involved.</p>

1. dev-data
  1. birds.js
  2. bird_families.js
  3. bird_orders.js
  4. rookery_tour.js
  5. index.js
  6. watchers_tours.js
  7. wing_shape.js
2. test-data
  1. birds.js
  2. bird_families.js
  3. bird_orders.js
  4. rookery_tour.js
  5. index.js
  6. watchers_tours.js
  7. wing_shape.js
3. index.js
4. manage-relations.js
5. run-seed.js
6. seed.js
7. setup.sql

---

### [models folder](#models-folder)

<p>This folder contains the files that deal with the CRUD operations and pass the data on to the controller files in the format the controller wants it in.</p>

- Files
  - birds.models.js
  - b_families.models.js
  - b_orders.models.js
  - b_watchers.models.js
  - r_tour.models.js
  - w_shape.models.js
  - watchertours.models.js

---

### [routes folder](#routes-folder)

<p>This folder has the request endpoints attached to a root api router and these endpoints are sub-divided into smaller sub-routers. This offers better
organization and helps to de-clutter the app.js file</p>

- Files
  - api-router.js
  - birds-router.js
  - birdwatchers-router.js
  - families-router.js
  - orders-router.js
  - shapes-router.js
  - tours-router.js
  - watchertour-router.js

---

### [public folder](#public-folder)

<p>This folder simply has the html and css files for the bird order images uploads that occur with multer and its associated functionality..</p>

- Files
  - index.html
  - styles.css