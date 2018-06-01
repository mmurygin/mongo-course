const path = require('path');
const views = require('koa-views');
const Koa = require('koa');
const app = new Koa();

app.use(views(path.join(__dirname, '/views'), { extension: 'pug' }));

app.use(async ctx => {
    await ctx.render('index', {
        name: 'Max',
    });
});

module.exports = app;
