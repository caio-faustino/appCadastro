const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  nome_produto: String,
  descricao_produto: String,
  preco_produto: {type:Number, default:0},
  qtd_produto: {type:Number, default:0},
  PN_produto: String,
  gpo_produto: String,
  modelo_01_produto: String,
    ano_ini_produto_m1: Date,
    ano_fim_produto_m1: Date,
  modelo_02_produto: String,
    ano_ini_produto_m2: Date,
    ano_fim_produto_m2: Date,
  modelo_03_produto: String,
    ano_ini_produto_m3: Date,
    ano_fim_produto_m3: Date,

},{
    timestamps:true
});

const produtos = mongoose.model('Produtos',DataSchema);
module.exports = produtos;