const express = require('express');

const app = express();

const reactEngine = require('express-react-views').createEngine();

app.engine('jsx', reactEngine);

app.set('views', __dirname + '/views');

app.set('view engine', 'jsx');

const methodOverride = require('method-override')

app.use(methodOverride('_method'));

app.use(express.static(__dirname+'/public/'));

app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));

const jsonfile = require('jsonfile');

const file = 'recipes.json';


app.get('/recipes/new',(request, response) => {
    response.render("home");
})

app.post('/recipes',(request, response) => {
    jsonfile.readFile(file,(err,obj) =>{
        let recipes = request.body;
        obj.recipes.push(recipes);
        jsonfile.writeFile(file,obj,(err) => {
            response.send("HELLO");
        })
    })
})













app.listen(3000);
