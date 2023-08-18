const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/mernproject").then(() => {
    console.log("coonection eshtablished")
}).catch((e) => {
    console.log(e)
})