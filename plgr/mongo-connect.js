const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/todoApp',(err,db)=>{
  if (err){
    return console.log('Cannot connect to the database')
  }
  console.log('Connected to the server');

  /*db.collection('Todos').insertOne({
    text:'Any random text',
    completed: false
  },(err,result)=> {
    if (err){
      return console.log('Cannot insert', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });*/

  db.collection('Users').insertOne({
    Name: 'Skand Pandey',
    Age: '21',
    Country: 'India',
    Occupation: 'Software Engineer'
  },(err, result) => {
    if (err){
      return console.log('Something went wrong!!!!!');
    }

    console.log(JSON.stringify(result.ops));
  });
  db.close();
});  //can be aws or heroku
