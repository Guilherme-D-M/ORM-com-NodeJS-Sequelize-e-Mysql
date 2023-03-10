
class TurmaController {
    //Busca todos registros
    static async pegaTodasAsTurmas(req, res) {
        try {
            const todasAsTurmas = await database.Turmas.findAll();
            return res.status(200).json(todasAsTurmas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
        //Busca 1 registro
        static async pegaUmaTurma (req, res) {
            const {id} = req.params
            try{
            const umaTurma = await database.Turmas.findOne( {
                where: { 
                    id: Number(id) 
                } 
            })
            return res.status(200).json(umaTurma)
    
            }catch(error){
                res.status(500).json(error.message)
            }
        }
    
        //Cria 1 um novo registro
        static async criaTurma (req, res) {
            const novaTurma = req.body
            try{
            const novaTurmaCriada = await database.Turmas.create(novaTurma)
            return res.status(200).json(novaTurmaCriada)
    
            }catch(error){
                res.status(500).json(error.message)
            }
        }
    
        //Atualiza um registro
        static async atualizaTurma (req, res) {
            const novasInfos = req.body
            const {id} = req.params
            try{
                await database.Turmas.update(novasInfos, { where: { id: Number(id) }})
                const TurmaAtualizada = await database.Turmas.findOne( { where: { id: Number(id) }})
                
                return res.status(200).json(TurmaAtualizada)
            }catch(error){
                res.status(500).json(error.message)
            }
        }
    
        //Deleta registro
        static async deletaTurma(req, res) {
            const {id} = req.params
            try{
                await database.Turmas.destroy({ where: { id: Number(id) }})
                
                return res.status(200).json({ mensagem:`id ${id} deletado` })
            }catch(error){
                res.status(500).json(error.message)
            }
        }
}

module.exports = TurmaController