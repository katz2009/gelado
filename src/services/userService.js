const UserModel = require('../models/userModel');
const EventModel = require('../models/eventModel');
const RegistrationModel = require('../models/regisModel');

class UserService {
  static async createUser(name, email) {
    return await UserModel.create(name, email);
  }

  static async deleteUser (id) {
    /* remove inscrições do usuário */
    await RegistrationModel.deleteByUser(id);
    /* remove eventos criados + inscrições ligadas a esses eventos */
    await RegistrationModel.deleteByEventsOfCreator(id);
    await EventModel.deleteByCreator(id);

    /* por fim, remove o usuário */
    return await UserModel.delete(id);           // true ou false
  }
}

module.exports = UserService;
