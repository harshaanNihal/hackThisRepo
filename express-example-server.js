const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
app.get('/', function(req, res){
 res.send('Express!')
})
app.get('/about', function(req, res){
    res.send('Created with express')
   })
app.listen(PORT, () => console.log(`Server is working on a port: ${PORT}`))
