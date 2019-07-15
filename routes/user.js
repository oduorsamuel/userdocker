const express = require('express')
const router = express.Router();
const bodyparser = require('body-parser')
router.use(bodyparser.urlencoded({ extended: false }))
router.use(bodyparser.json());
const userController=require('../controllers/userController');

router.post('/',userController.post_user)
router.get('/', userController.get_all_users)
// router.get('/:id',lessonController.get_by_id)
// router.delete('/:id',lessonController.delete_by_id)
// router.patch('/:id',lessonController.update);
module.exports = router