const express = require('express')
const path = require('path')


const app = express()

//definindo template engine
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

//definindo arquivos publicos
app.use(express.static(path.join(__dirname,'public')))

//habilita server para receber dados via post
app.use(express.urlencoded({extended: true}))

//rotas
app.get('/', (req,res) => {
    res.render('index',{
        title: 'Título Teste'
    })
})

// 404 Error (Not Found)
app.use((req,res) => { //middleware
    res.send('Página não encontrada')
})

//executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))

