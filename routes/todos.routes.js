const todosController = require('../controllers/todos.controller');
const router = require('express').Router();
const initPage = require('../middlewares/paging.middleware').initPage;

require('./param_loaders/todos.loader').init(router);

router.get('', initPage, todosController.getAll);
router.get('/completed', initPage, todosController.getCompleted);
router.get('/pending', initPage, todosController.getPending);

router.get('/simple', initPage, todosController.getAllSimple);
router.get('/completed/simple', initPage, todosController.getCompletedSimple);
router.get('/pending/simple', initPage, todosController.getPendingSimple);

router.get('/:todo', initPage, todosController.getById);
router.post('', todosController.create);
router.put('/:todo_load_id', todosController.update);
router.delete('/:todo_load_id', todosController.delete);
router.delete('', todosController.deleteAll);

module.exports = router;
