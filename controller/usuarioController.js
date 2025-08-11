const db = require('../db')

//exibir os dados da tabela usuarios
exports.getAll = (req, res) => {
    const sql = 'select * from usuarios'
    db.query(sql, (erro, resultado) => {
        if(erro) return res.status(500).json({erro: erro})
            res.json(resultado)
    })
}

//criar registros na tabela usuarios
exports.create = (req, res) => {
    const {nome, email} = req.body;
    const sql = 'insert into usuarios (nome, email) values (?, ?)'
    db.query(sql, [nome, email], (erro) => {
        if(erro) return res.status(500).json({erro: erro})
            res.status(201).json({ mensagem: 'Usuário criado com sucesso!!' })
    })
}
 //atualizar registros da tabela usuarios
 exports.update = (req, res) => {
    const {id} = req.params;
    const {nome, email} = req.body;
    const sql = 'update usuarios set nome = ?, email = ? where id = ?'
    db.query(sql, [nome, email, id], (erro) => {
        if(erro) return res.status(500).json({erro: erro})
            res.json({ mensagem: 'Usuário atualizado com sucesso!!' })
    })

 }

 // Excluir registros da tabela usuarios
exports.delete = (req, res) => {
    const {id} = req.params;
    const sql = 'delete from usuarios where id = ?'
    db.query(sql, [id], (erro) => {
        if(erro) return res.status(500).json({erro: erro})
            res.json({ mensagem: 'Usuário excluido com sucesso!!' })
    })
}