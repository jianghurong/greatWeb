// const db = require("../scripts/db");

module.exports =  (router) => {
  router.get('/user', async function (ctx, next) {
    ctx.state = {
      title: 'Answer'
    };
    await ctx.render('welcome', {title: ctx.state});
  })
}
