

const express = require('express')
// bring express

const PORT = 4001
const app = express()
// connect express to the var app

app.set('view engine', 'jsx')

app.engine ('jsx', require('express-react-views').createEngine())
// middleware.............

// create routes based on path/rest

app.get('/',(req,res)=>{
    res.send('<h1> welcome to home user</h1>')
})
 




app.get('/LastPage',(req,res)=>{
    res.render("<h1>yes</h1>")

})



// app.get(''
app.get('/home', (req,res)=>{
    res.send ('<h1> Home Page <h1>')
})


app.listen(PORT, (req, res) =>{
    console.log(PORT)

})


const items = ["pants","shorts","jeans", "jacket", "hat" , "socks","rings", "sneakers" ,"sweater", "hoodie"]

app.get('/:indexofItemsArray', (req,res)=>{
    res.send (items[req.params.indexofItemsArray])
})
//  creates server based on PORT value