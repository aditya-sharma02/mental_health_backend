const mongoose = require("mongoose")


mongoose.connect(process.env.MONGODB_URL, {
}).then(() => {
    console.log("coonection eshtablished")
}).catch((e) => {
    console.log(e)
})