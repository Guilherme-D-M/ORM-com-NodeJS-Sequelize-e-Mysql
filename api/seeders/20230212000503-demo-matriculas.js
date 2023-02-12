module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Matriculas', [
			{
			status: "confirmado",
			estudante_id: 1,
			turma_id: 26,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			status: "confirmado",
			estudante_id: 2,
			turma_id: 27,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			status: "confirmado",
			estudante_id: 3,
			turma_id: 28,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			status: "confirmado",
			estudante_id: 4,
			turma_id: 29,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			status: "cancelado",
			estudante_id: 1,
			turma_id: 30,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			status: "cancelado",
			estudante_id: 2,
			turma_id: 31,
			createdAt: new Date(),
			updatedAt: new Date()
		}
		], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Matriculas', null, {})
  }
}
