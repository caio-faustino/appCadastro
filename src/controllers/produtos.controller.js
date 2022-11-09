const Produto = require('../models/produto.model');


module.exports = {
  async index(req,res) {
    const product = await Produto.find();
    res.json(product)
  }, 

  async create(req,res){
    const {nome_produto, descricao_produto, preco_produto, qtd_produto, PN_produto, gpo_produto, modelo_01_produto, ano_ini_produto_m1, ano_fim_produto_m1, modelo_02_produto, ano_ini_produto_m2, ano_fim_produto_m2, modelo_03_produto, ano_ini_produto_m3, ano_fim_produto_m3} = req.body;
    let data = {};
    let product = await Produto.findOne({nome_produto});

    if(!product){
        data = {nome_produto, descricao_produto, preco_produto, qtd_produto, PN_produto};
        product = await Produto.create(data);
        return res.status(200).json(product);
    }else{
        return res.status(500).json(product);
    }
  }, 

  async details(req,res) {
    const {_id} = req.params;
    const product = await Produto.findOne({_id});
    res.json(product);
  }, 

  async delete(req,res) {
    const {_id} = req.params;
    const product = await Produto.findByIdAndDelete({_id});
    return res.json(product);
  }, 

  async update(req,res) {
    const {_id, nome_produto, descricao_produto, preco_produto, qtd_produto, PN_produto, gpo_produto, modelo_01_produto, ano_ini_produto_m1, ano_fim_produto_m1, modelo_02_produto, ano_ini_produto_m2, ano_fim_produto_m2, modelo_03_produto, ano_ini_produto_m3, ano_fim_produto_m3} = req.body;
    const data = {nome_produto, descricao_produto, preco_produto, qtd_produto, PN_produto, gpo_produto, modelo_01_produto, ano_ini_produto_m1, ano_fim_produto_m1, modelo_02_produto, ano_ini_produto_m2, ano_fim_produto_m2, modelo_03_produto, ano_ini_produto_m3, ano_fim_produto_m3};
    const product = await Produto.findOneAndUpdate({_id}, data, {new: true});
    res.json(product);
  }, 
}