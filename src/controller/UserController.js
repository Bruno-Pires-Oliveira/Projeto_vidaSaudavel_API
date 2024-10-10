const {pool} = require("../database/index.js")

class UserController{
    async  createUser(req,res) {
        const {nome,email,bairro,telefone} = req.body
        try{
        const [user] = await pool.query(`SELECT * FROM contatos WHERE email = "${email}"`)
        if(user.find(user =>user.email == email)){
            res.status(400).json("Usuario com este email já existe")
        }else{

       
          await pool.query(`INSERT INTO contatos (nome,email,bairro,telefone) VALUES (?,?,?,?)` , [nome,email,bairro,telefone])
          res.status(200).json("Informações cadastradas com sucesso")
        }
          }catch (error){
            res.status(400).json(error.message)
        }
    
}

 async listUsers(req,res){
    const [user] = await pool.query("SELECT * FROM contatos")
    res.status(200).json(user)
}
async deleteUser(req,res){
   const {user_id} = req.params
   const [user] = await pool.query(`SELECT * FROM contatos WHERE id = ${user_id}`)
   if(user.find(user => user.id == user_id) == null){
       res.status(404).json("Usuario não encontrado")
   }else{


   await pool.query(`DELETE FROM contatos WHERE id = ${user_id}` )
   res.status(200).json("Usuario deletado com sucesso")
   }
}
}
module.exports= UserController