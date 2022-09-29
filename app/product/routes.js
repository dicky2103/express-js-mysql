const router = require('express').Router();
const multer = require('multer');
const upload = multer({dest: '/uploads'});
const fs = require ('fs');
const path =require('path');
const connection = require('../../config/mysql');
const productController = require ('./controller');


router.get('/product', productController.index );


router.get('/product/:id', (req, res) => {
    res.json({
        id: req.params.id
    });
});

router.post('/product/', upload.single('image'), (req, res) =>{
    const (Name, price, stock, Status ) = req.body;
    const image = req.file;
    if(image){
        const target = path.join(__dirname, 'public', image.originalname);
        Fs.renameSync(image.path, target);
    }
            // req.json({
            //     name,
            //     price,
            //     stock,
            //     status,
            //     image
        
        res.sendFile(target);
});

router.get('/:category/:tag', (req, res) =>{
    const{category, tag} = req.params;
    res.json({category,tag});
})

app.post('/profile', upload.single('avatar'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
  })
s  
module.exports = router;