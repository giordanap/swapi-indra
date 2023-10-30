const { PersonController } = require("../controllers/people.controller");

const personController = new PersonController();

const getPeople = () => personController.getAllPerson();


module.exports = {
  getPeople,
};
