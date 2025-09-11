<<<<<<< HEAD
# Airline
=======
This is a base node js project tempplate, which any one can use as it has been prepared , by keeping some of the most important code principles nad project management recommendations. Feel free to change anything.

`src` -> Insode the src all the actual source code regarding the project will resie , this will not include any kind of tests. (You might want to make separate tests folder)

Lets take a look insie the `src1 folder

-`config` -> In this folder any thing and everything regarding any confioguration or setup or library or module will be done. For example: setting up `dotenv` so that we can use the enviorment variables anywhere in a cleaner fashion, this is done in the `server-config.js` file. One more example can be setup your loggoing library that can help you to setup meaningfull logs, so configuration for this library should also be done here.

- `routes` -> In the routes folder, we register a route and the corresponding middleware nad controllers to it.

-`middlewares` -> They are just going to intercept the incoming request where we can right our validators, authentications etc.

-`controllers` -> They are kind of the last middleware as post them you call you business layer to execute the business logic. In controllers we just recive the incoming request and data and then pass it to the busniess layer, and once business layer return an ouput we structure the API responce in controllers and send the ouptput.

- ` repositories` -> this folder contains all the logic using which we interact DB while wrighting queries, all the raw queries or ORM queries will go here.

- `services` - contain the bussiness logic and interacts with repositories for the data from the database.
- `utils` -> contains helper methods, error classes etc.

  ````
   ### Setup the Project
   - Download this tempplate from github and open it in your favourite text editor.
   - Go inside the folder path and execute the following comand:

     npm install

     ```

   - In the root directory create a `.env` file  and add the following ebv varibles
  ````

  PORT=<port number of your choice>

  ```
  exe:
  ```

      PORT=3000

  ```
  -- go inside the `src` folder and execute the following command:
  ```

  mpx sequelize init

  ```

  By executing the above commands you will get migrations and seeders folder along with a `config.json`  inside the config folder.

  ```

- If you are setting up your development enviorment then write the username of your DB password of your DB and in dialect mention whateverDB you are usinf for ex: mysql, mariadb etc.

- If you are setting up test or prod envirment make sure you also replace the hoat with the hosted db url.
  - To run the server execute

```
 npm run dev
```
>>>>>>> 717ddcf (structure)
