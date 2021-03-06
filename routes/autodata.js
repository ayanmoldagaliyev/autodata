const {Router} = require('express')
const router = Router()
const Embrace = require('../models/Embraces')

router.get('/', async (req, res) => {
    const embraces = await Embrace.find({})
    res.render('index', {
        title: 'Embraces lists',
        isIndex: true,
        embraces
    })
})

router.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create an embrace',
        isCreate: true
    })
})

router.get('/search', (req, res) => {
    res.render('search', {
        title: 'Search an Embrace',
        isSearch: true
    })
})

router.post('/create', async (req, res) => {
    const embrace = new Embrace({
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        price: req.body.price
    })

    await embrace.save()
    res.redirect('/')
})

router.post('/embrace', async (req, res) => {
    const embrace = await Embrace.findById(req.body.id)
    res.render('embrace', {
        title: 'Current Embrace',
        isSearch: true,
        embrace
    })
})

module.exports = router