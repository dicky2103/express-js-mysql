const exprees = require('express');
const path = require('path');
const app = exprees();
const productrouter = require('./app/product/routes');
const logger = require('morgan');

app.use(logger('dev'));
app.use(exprees.urlencoded ({extended: true}));
app.use(exprees.json());
app.use(express.static(path.join(__dirname, 'uploads')))
app.use('/apl/v1', productrouter);
app.use((req, res ,next) =>{
    res.send({
        status:'failed',
        message:'Resource' + req.originalUr + 'not found'
    });
});
app.listen(3000, () => console.log ('Server: http://localhost:3000'))

