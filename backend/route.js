module.exports = function (app) {
    var myjson = require("./userapi/usercontroller");
    
    app.route("/user/:id")
        .get(myjson.getUserProfile)

    app.route("/user/update/")
        .put(myjson.editUserProfile)

    app.route("/user/delete/")
        .delete(myjson.deleteUserbyId)

    app.route("/")
        .get(myjson.index)    


}