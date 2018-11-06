const db = require("../scripts/db");

module.exports =  (router) => {
  //upload file
  router.post('/upload', async function (ctx, next) {
    // ctx.response.set("Access-Control-Allow-Origin", '*');
    ctx.body = ctx.request.body;
    console.log(ctx.request.body);
  })

  // retrieve user
  router.get('/retrieve/user', async function (ctx, next) {
    let list = await db.retrieveUsers();
    ctx.body = list;
    // ctx.state = {
    //   title: list
    // };
    // await ctx.render('welcome', {title: ctx.state});
  })

  // insert user
  router.get('/insert/user', async function (ctx, next) {
    let query = ctx.request.query;
    let name = query.name || "answer";
    let icon = query.icon || "ok";
    let age = query.age || 23;
    let content = query.content || "some text";
    let description = query.description || "i would like request a sing";
    let res = await db.insertUser(name, icon, age, content, description);
    ctx.body = res;
  })
}
