const express = require('express')
const mongoose  = require('mongoose')
require("../models/Produto")
const Produto = mongoose.model("produtos")
const router = express.Router()

router.get('/',(req, res) => {
    res.render("admin/index")
})
router.get("/produtos",(req,res) => {
    res.render("admin/produtos")
})

router.post("/produtos/novo",(req,res) => {
    const novoProduto = {
        nome:req.body.nome,
        descrição:req.body.descrição,
        preço:req.body.preço
    }
    new Produto(novoProduto).save().then(() => {
     console.log("Produto salvo com sucesso")
    }).catch((err) => {
        console.log("Erro ao salvar Produto")
    })
})
module.exports = router