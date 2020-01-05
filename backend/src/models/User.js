const mongoose = require ('mongoose');

// Estrutura do usúario, quais campos ele conterá //
const UserSchema = new mongoose.Schema ({
   email: String,
});

module.exports = mongoose.model ('User', UserSchema);
