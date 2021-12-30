function getAdmins(map) {
    let listDeAdmin = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            listDeAdmin.push(key);
        }
    }
    return listDeAdmin;
}

const usuarios = new Map();

  usuarios.set('Anderson', 'Admin');
  usuarios.set('Andrew', 'Admin');                     
  usuarios.set('Joao','Operador');
  usuarios.set('Carlos', 'Engenheiro');  

  console.log(getAdmins(usuarios));




