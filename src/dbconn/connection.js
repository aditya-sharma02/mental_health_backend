const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://adyashma786:sh2rP3obT6URFdA7@cluster0.yj50dct.mongodb.net/mernproject?retryWrites=true&w=majority").then(() => {
    console.log("coonection eshtablished")
}).catch((e) => {
    console.log(e)
})