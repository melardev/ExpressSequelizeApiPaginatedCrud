# Introduction
This is a project mean to be used for learning basic CRUD operations and Pagination using
- NodeJs
- Express Js
- Sequelize Crud with Pagination

I have many other implementations of this server:
- [Spring Boot + Spring Data + Jersey](https://github.com/melardev/SpringBootJerseyApiPaginatedCrud)
- [Spring Boot + Spring Data](https://github.com/melardev/SpringBootApiJpaPaginatedCrud)
- [Go with Gin Gonic](https://github.com/melardev/GoGinGonicApiPaginatedCrud)
- [Laravel](https://github.com/melardev/LaravelApiPaginatedCrud)
- [Rails + JBuilder](https://github.com/melardev/RailsJBuilderApiPaginatedCrud)
- [Rails](https://github.com/melardev/RailsApiPaginatedCrud)
- [NodeJs Express + Sequelize](https://github.com/melardev/ExpressSequelizeApiPaginatedCrud)
- [NodeJs Express + Bookshelf](https://github.com/melardev/ExpressBookshelfApiPaginatedCrud)
- [NodeJs Express + Mongoose](https://github.com/melardev/ExpressApiMongoosePaginatedCrud)
- [Python Django](https://github.com/melardev/DjangoApiCrudPaginated)
- [Python Django + Rest Framework](https://github.com/melardev/DjangoRestFrameworkPaginatedCrud)
- [Python Flask](https://github.com/melardev/FlaskApiPaginatedCrud)

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

