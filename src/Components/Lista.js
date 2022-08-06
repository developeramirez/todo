import React, {useState, useEffect} from 'react';
import  List  from "./List";
import  Alert from "./Alert";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if(list){
    return (list = JSON.parse(localStorage.getItem("list")));
  }else{
    return [];
  }
};

const Lista = () => {
    const [name, setName] = useState("");
    const [list, setList] = useState([]);
    const [isEditing, setIdEditing] = useState(false);
    const [editID, setEditID] = useState(null);
    const [alert, setAlert] = useState({show: false, msg: "", type: ""});
  
    useEffect(() => {
      localStorage.setItem("list", JSON.stringify(list));
    }, [list]);

    const handleSubmit = (e) => {
      e.preventDefault();
      if(!name){
        showAlert(true, "danger","Ingrese un valor válido Por Ej: Llenar la bañera");
      }else if(name && isEditing){
        setList(
          list.map((item) => {
            if(item.id === editID) {
              return {...item, title: name}
            }
            return item;
          })
        );
        setName("");
        setEditID(null);
        setIdEditing(false);
        showAlert(true, "success", "Cambios realizados");
  
      }else {
        showAlert(true, "success", "Se ha agragado exitosamente");
        const newItem = {id: new Date().getTime().toString(), title: name};
        setList([...list, newItem]);
        setName("");
      }
    };
    const showAlert = (show = false, type = "", msg = "") => {
      setAlert({show, type, msg});
    };
    const removeItem = (id) => {
      showAlert(true, 'danger', 'Tarea Eliminada');
      setList(list.filter((item) => item.id !== id));
    } 
    const editItem = (id) => {
      const editItem = list.find((item) =>  item.id === id);
      setIdEditing(true);
      setEditID(id);
      setName(editItem.title);
    };
    const clearList = () => {
      showAlert(true, "danger", "Lista Vacia");
      setList([]);
    }
    return (
      <div>
          <h3>Tareas Pendientes</h3>
          <section>
            <form onSubmit={handleSubmit}>
              {alert.show && 
              <Alert {...alert} removeAlert = {showAlert} list={list}/>}
              <div className='mb-3 form form-group'>
                <input type="text" onChange={(e) => setName(e.target.value)} className='form-control' name="title" placeholder='Ej: Tarea #1' value={name}  />
                <button type="submit" className='btn btn-success'>
                {isEditing ? "Edit" : "Agg Tarea"}
                </button>
              </div>
            </form>
            {list.length > 0 && (
              <div style={{marginTop: "2rem"}}>
                <List items={list} removeItem = {removeItem} editItem={editItem}/>
                <div className='text-center'>
                  <button type="button" className='btn btn-warning' onClick={clearList}>Eliminar Tarea</button>
                </div>
              </div>
            )}
          </section>
      </div>
    );
}

export default Lista