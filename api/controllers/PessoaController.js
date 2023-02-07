const database = require('../models')

class PessoaController {
    static async pegaTodasAsPessoas(req, res){
        const todasAsPessoas = await database.Pessoas.findAll()
        
        }
}