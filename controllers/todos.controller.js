const Todo = require('./../config/sequelize.config').Todo;
const sequelize = require('./../config/sequelize.config').sequelize;
const TodoResponseDto = require('./../dtos/responses/todos/todo.dto');
const GenericResponseDto = require("../dtos/responses/shared/generic.dto");

// Melardev ! Melardev! your video tutorials are overcomplicated!
// Sure, they have to be, this is not a hello-word copy paste thing from the official docs ....
// if you still want the dead simple and useless example take a look at getAllSimple functions at the end of this file

exports.getAll = (req, res, next) => {
    return Todo.findAndCountAll({
        limit: req.limit,
        offset: req.offset,
        attributes: ['id', 'title', 'completed', 'createdAt', 'updatedAt']
    })
        .then(result => {
            const totalTodosCount = result.count;
            return res.json(TodoResponseDto.buildPagedList(result.rows, req.page, req.pageSize, totalTodosCount, req.baseUrl));
        }).catch(err => {
            throw err;
        });
};


exports.getCompleted = (req, res, next) => {
    return Todo.findAndCountAll({
        where: {completed: true},
        limit: req.limit,
        offset: req.offset,
        attributes: ['id', 'title', 'completed', 'createdAt', 'updatedAt']
    })
        .then(result => {
            const totalTodosCount = result.count;
            return res.json(TodoResponseDto.buildPagedList(result.rows, req.page, req.pageSize, totalTodosCount, req.baseUrl));
        }).catch(err => {
            throw err;
        });
};

exports.getPending = (req, res, next) => {
    return Todo.findAndCountAll({
        where: {completed: false},
        limit: req.limit,
        offset: req.offset,
        attributes: ['id', 'title', 'completed', 'createdAt', 'updatedAt']
    })
        .then(result => {
            const totalTodosCount = result.count;
            return res.json(TodoResponseDto.buildPagedList(result.rows, req.page, req.pageSize, totalTodosCount, req.baseUrl));
        }).catch(err => {
            throw err;
        });
};

exports.getById = (req, res, next) => {
    return res.json(TodoResponseDto.buildDetails(req.todo));
};

exports.create = function (req, res, next) {
    const {title, description, completed} = req.body;
    Todo.create({title, description, completed}).then(todo => {
        return res.json(GenericResponseDto.buildSuccessWithDtoAndMessages(TodoResponseDto.buildDetails(todo), 'Todo created successfully'));
    }).catch(err => {
        return res.json(GenericResponseDto.buildWithErrorMessages(err.message));
    });
};

exports.update = function (req, res, next) {
    const {title, description, completed} = req.body;
    req.todo.title = title;
    req.todo.description = description;
    req.todo.completed = completed;

    req.todo.save().then(todo => {
        return res.json(GenericResponseDto.buildSuccessWithDtoAndMessages(TodoResponseDto.buildDetails(todo), 'Todo updated successfully'));
    }).catch(err => {
        return res.json(GenericResponseDto.buildWithErrorMessages(err.message));
    });
};

exports.delete = function (req, res, next) {
    req.todo.destroy().then(result => {
        return res.json(GenericResponseDto.buildSuccessWithMessages('Todo deleted successfully'));
    }).catch(err => {
        return res.json(GenericResponseDto.buildWithErrorMessages(err.message));
    });
};

exports.deleteAll = function (req, res, next) {
    Todo.destroy({
        where: {
            id: {
                [sequelize.Op.ne]: null
            }
        }
    }).then(todosDeleted => {
        return res.json(GenericResponseDto.buildSuccessWithMessages('Todos deleted successfully'));
    }).catch(err => {
        return res.json(GenericResponseDto.buildWithErrorMessages(err.message));
    });
};


// Simple
exports.getAllSimple = (req, res, next) => {
    return Todo.findAll({
        limit: req.limit,
        offset: req.offset,
        attributes: ['id', 'title', 'completed', 'createdAt', 'updatedAt']
    })
        .then(todos => {
            return res.json(todos);
        }).catch(err => {
            throw err;
        });
};


exports.getCompletedSimple = (req, res, next) => {
    return Todo.findAll({
        where: {completed: true},
        limit: req.limit,
        offset: req.offset,
        attributes: ['id', 'title', 'completed', 'createdAt', 'updatedAt']
    })
        .then(todos => {
            return res.json(todos);
        }).catch(err => {
            throw err;
        });
};

exports.getPendingSimple = (req, res, next) => {
    return Todo.findAll({
        where: {completed: false},
        limit: req.limit,
        offset: req.offset,
        attributes: ['id', 'title', 'completed', 'createdAt', 'updatedAt']
    })
        .then(todos => {
            return res.json(todos);
        }).catch(err => {
            throw err;
        });
};