const multer =  require('koa-multer');
const Router = require('koa-router');
const router = new Router();

// file upload config
let storage = multer.diskStorage({
    // file path
    destination: function (request, file, cb) {
        cb(null, 'public/uploads/images/')
    },
    // alter file name
    filename: function (request, file, cb) {
        let fileFormat = (file.originalname).split('.');
        cb(null, 'www.loveus.top_' + Date.now() + '.' + fileFormat[fileFormat.length - 1]);
    }
})
let upload = multer({ storage: storage })

module.exports = 
    // 上传图片路由
    router.post('/images', upload.single('image'), async(ctx, next) => {
        ctx.body = ctx;
    })


