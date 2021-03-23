const express =  require('express')
const router =  express.Router()
const Movie = require('../models/movie')

router.get('/', async(req, res)=>{
    try{
        const movies= await Movie.find()
        res.json(movies)
    }catch(err)
    {
        res.send('Error' +err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const movie = await Alien.findById(req.params.id)
           res.json(movie)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req, res)=>{
    const movie = new Movie({
        name: req.body.name,
        img: req.body.img,
        summary:req.body.summary
    })
    try{
       const a1 = await movie.save()
       res.json(a1)
    }catch(err){
        res.send('Error' +err)
    }
})


router.patch('/:id',async(req,res)=> {
    try{
        const movie = await Movie.findById(req.params.id) 
        movie.summary = req.body.summary
        const a1 = await movie.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }
})
module.exports =  router