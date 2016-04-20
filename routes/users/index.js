/**
 * Created by victoryan on 16/4/20.
 */
'use strict';

const router = require("koa-router")();
const controller = require('./userController');

router.get('/getUserList', controller.getUserList);
router.post('/addUser', controller.addUser);

module.exports = router;
