"use strict";
// Save your local vars in .env for testing. DO NOT VERSION CONTROL `.env`!.
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development')
    require('dotenv').config();
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const chalk = require('chalk');
const routes_1 = require('./routes');
const app = new Koa();
const port = process.env.PORT || 5555;
app.use(bodyParser())
    .use(routes_1.default.routes())
    .use(routes_1.default.allowedMethods());
app.listen(port, () => console.log(chalk.black.bgGreen.bold(`Listening on port ${port}`)));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = app;
//# sourceMappingURL=/Users/nprescod-green/Github/expressDemo/ts-node/3923b2372781f8b0c74f87d858e572073cdf82e3/c404edc0c2a288e616adcca6aa761c8f6f07b808.js.map