// index, show, store, update, destroy //
// index = listar uma sessão //
// show = listar apenas uma sessão //
// store = criar uma sessão //
// update = atualizar uma sessão //
// destroy = apagar uma sessão //

const User = require ('../models/User');

module.exports = {
   async store(req, res) {
      const { email } = req.body;

      let user = await User.findOne ({ email });

      if (!user) {
         user = await User.create({ email });
      }

      return res.json(user);
   }
};
