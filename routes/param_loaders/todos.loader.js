const Todo = require('../../config/sequelize.config').Todo;
const GenericResponseDto = require('./../../dtos/responses/shared/generic.dto');


function init(router) {
    router.param('todo', async function (req, res, next, id) {
        await Todo.findOne({
            where: {id},
        })
            .then(todo => {
                if (todo) {
                    req.todo = todo;
                    return next();
                } else {
                    return res.json(GenericResponseDto.buildWithErrorMessages('Todo does not exist'), 404);
                }
            }).catch(err => {
                return res.json(GenericResponseDto.buildWithErrorMessages(err.message));
            });
    });

    router.param('todo_load_id', async function (req, res, next, id) {
        await Todo.findOne({
            where: {id: id},
            attributes: ['id', 'createdAt']
        })
            .then(todo => {
                if (todo) {
                    req.todo = todo;
                    return next();
                } else {
                    return res.json(GenericResponseDto.buildWithErrorMessages('Todo does not exist'), 404);
                }
            }).catch(err => {
                return res.json(GenericResponseDto.buildWithErrorMessages(err.message));
            });
    });

}

module.exports = {
    init
};