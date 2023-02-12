const database = require('../models')

class NivelController {
    //Busca todos registros
    static async pegaTodosOsNiveis(req, res) {
        try{
            const todosOsNiveis = await database.Niveis.findAll()
            return res.status(200).json(todosOsNiveis)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
    
        //Busca 1 registro
        static async pegaUmNivel (req, res) {
            const {id} = req.params
            try{
            const umNivel = await database.Niveis.findOne( {
                where: { 
                    id: Number(id) 
                } 
            })
            return res.status(200).json(umNivel)
    
            }catch(error){
                res.status(500).json(error.message)
            }
        }
    
        //Cria 1 um novo registro
        static async criaNivel (req, res) {
            const novoNivel = req.body
            try{
            const novoNivelCriado = await database.Niveis.create(novoNivel)
            return res.status(200).json(novoNivelCriado)
    
            }catch(error){
                res.status(500).json(error.message)
            }
        }
    
        //Atualiza um registro
        static async atualizaNivel (req, res) {
            const novasInfos = req.body
            const {id} = req.params
            try{
                await database.Niveis.update(novasInfos, { where: { id: Number(id) }})
                const NivelAtualizado = await database.Niveis.findOne( { where: { id: Number(id) }})
                
                return res.status(200).json(NivelAtualizado)
            }catch(error){
                res.status(500).json(error.message)
            }
        }
    
        //deleta registro
        static async deletaNivel(req, res) {
            const {id} = req.params
            try{
                await database.Niveis.destroy({ where: { id: Number(id) }})
                
                return res.status(200).json({ mensagem:`id ${id} deletado` })
            }catch(error){
                res.status(500).json(error.message)
            }
        }
}
module.exports = NivelController
