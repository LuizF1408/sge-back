const express = require('express');
const sellerRouter = express.Router()
const allSchemas = require('../schemas/allSchemas');


sellerRouter.get('/', async (req, res) => {
    var sellers = await allSchemas.Seller.find()
    if (sellers.length > 0) {
        res.status(200).json(sellers)

    }
    else {
        res.status(404).json({ message: 'Nenhum dado encontrado' })
    }

})
sellerRouter.get('/:username', async (req, res) => {
    var username = req.params.username
    var seller = await allSchemas.Seller.find({ "user.username": username })
    if (seller.length > 0) {
        res.status(200).json(seller)
    }
    else {
        res.status(404).json({ message: 'Nenhum dado encontrado' })

    }
})

sellerRouter.post('/', (req, res) => {
    const sellerBody = req.body;
    const checkSeller = Object.keys(sellerBody)

    if (checkSeller.length > 0) {
        const seller = new allSchemas.Seller(sellerBody);
        seller.save()
            .then(() => {
                res.status(200).json(seller);
            })
            .catch(error => {
                res.status(500).json({ message: error.message })

            })
    }
    else {

        res.status(400).json({ message: 'Requisição incompleta' })
    }
})

sellerRouter.put('/:id', async(req, res) => {
    const sellerBody = req.body;
    const id = req.params.id;

    if( sellerBody && Object.keys(sellerBody).length > 0  ) {

        const documentUpdated = await  allSchemas.Seller.updateOne({_id: id}, sellerBody);

        if(documentUpdated.nModified > 0) {
            res.status(200).json({message: "o documento foi atualizado com sucesso"})
        }else {
            res.status(500).json({message: "Não foi possível atualizar"})
        }
    } else {
        res.status(400).json({message: "Faltou o body"})
    }
})

sellerRouter.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const sellerDelete = await allSchemas.Seller.deleteOne({ _id: id })
    if (sellerDelete.deletedCount > 0) {
        res.status(200).json({ message: 'Deletado com sucesso !' })
    }
    else {
        res.status(404).json({ message: 'ID não encontrado' })
    }
})


module.exports = sellerRouter;