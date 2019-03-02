# Introduction
This is a project mean to be used for learning basic CRUD operations and Pagination using
- NodeJs
- Express Js
- Sequelize Crud with Pagination

I have many other implementations of this server:
- [Spring Boot + Spring Data + Jersey]()
- [Spring Boot + Spring Data]()
- [Go with Gin Gonic]()
- [Laravel]()
- [Rails + JBuilder]()
- [Rails]()
- [NodeJs Express + Sequelize]()
- [NodeJs Express + Bookshelf]()
- [NodeJs Express + Mongoose]()
- [Python Django]()
- [Python Django + Rest Framework]()
- [Python Flask]()
- [Jersey]()

The next come are:
- NodeJs Express + Knex
- Flask + Flask-Restful
- Laravel + Fractal
- Laravel + ApiResources
- Go with Mux
- AspNet Core
- AspNet Web Api 2
# Steps used to create this project
```bash
npm install sequelize --save
npm install sequelize-cli --save
npm install --save sqlite3
.\node_modules\.bin\sequelize model:generate --name Todo --attributes title:string,description:text,completed:boolean
# only if database other than sqlite3
.\node_modules\.bin\sequelize db:create

.\node_modules\.bin\sequelize db:migrate
.\node_modules\.bin\sequelize seed:generate --name todos
.\node_modules\.bin\sequelize db:seed:all
```



# Follow me
- [Youtube Channel](https://youtube.com/melardev) I publish videos mainly on programming
- [Blog](http://melardev.com) Sometimes I publish the source code there before Github
- [Twitter](https://twitter.com/@melardev) I share tips on programming

