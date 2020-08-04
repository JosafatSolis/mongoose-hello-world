const mongoose = require("mongoose");
// Para que esté disponible en todos lados:
module.exports = mongoose.model("Foo", { name: String });
