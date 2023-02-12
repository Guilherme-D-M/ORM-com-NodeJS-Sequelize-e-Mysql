'use strict';
module.exports = (sequelize, DataTypes) => {
  const Matriculas = sequelize.define('Matriculas', {
    status: DataTypes.STRING
  }, {});
  Matriculas.associate = function(models) {
    Matriculas.belongsTo(models.Turmas,{
      foreignKey: 'turma_id'
    })
    Matriculas.belongsTo(models.Pessoas,{
      foreignKey: 'estudante_id'
    })
  };
  return Matriculas;
};