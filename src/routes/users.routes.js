const {Router} = require("express")
const UserController = require("../controller/UserController")
const userController = new UserController()
const userRoutes = Router()

userRoutes.post("/users",userController.createUser)
userRoutes.get("/users",userController.listUsers)
userRoutes.delete("/users/:user_id", userController.deleteUser)


module.exports = userRoutes