function index(req,res){
    res.render('index',{
        title: 'Pagína Inicial'
    })
}

module.exports = {
    index
}