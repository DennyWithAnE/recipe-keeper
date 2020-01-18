var React = require('react');

class Home extends React.Component {
  render(){ 
      
    return (
      <html>
        <body>
          <div>
              <form method="POST" action="/recipes">
                 <h1>Input your new recipe</h1>
                <input type="text" value="Title" name="title"/>
                <br></br><br></br>
                <input type="text" value="Ingredients" name="ingredients"/>
                <br></br><br></br>
                <input type="text" value="Instructions" name="instructions"/>
                <br></br><br></br>
                <input type="submit" value="Submit"/>

              </form>
             
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;