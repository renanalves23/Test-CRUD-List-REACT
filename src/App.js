import React, {useState} from "react";
import uuid from 'react-uuid'
import "./styles.css";

export default function App() {
  const [array, setArray] = useState([])
  const [word, setWord] = useState()
  // const [counter, setCounter] = useState(0)

  const [editing, setEditing] = useState(false)
  const [sliced, setSliced] = useState(false)

  

  function handleSubmit(w){  
    console.log('w',w);
    // setCounter(counter+1)
    setArray([...array, {name: w, id: uuid() }])
    console.log(array);
    
    setWord('')
  }

  handleDelete = item => {
    //implementar um "are u sure?, salvando no localstorage e dando a opção de resgatar o valor apagado"
    const filteredItems = array.filter(itemId => item.id !== itemId.id)
    setArray(filteredItems)

  }
  
  handleEdit = (item) => {
    setEditing(true)
    console.log('id',item.id);
    console.log('name',item.name);
    const filteredItems = array.filter(itemId => item.id !== itemId.id)
    const selectedItem = array.find(itemId => item.id === itemId.id)
    setArray(filteredItems)
    setWord(selectedItem.name, item.id)
    console.log("word", word);
    
    // console.log('item.id',item.id);
  }

  function handleSplice(){
    console.log('before', array);
    
    setArray(arraySpliced)
    console.log('after', array);
    setSliced(true)
    
  }
  
  sendEdition = () => {
    // console.log('nameeee', list);
    // const itemId = array.findIndex(elName => elName === name)
    // console.log('itemid',itemId);
    
    const arraySpliced = array.splice(1,0,"white")
    setArray(arraySpliced)
  }

  return (
    <div className="App">
      <h1>Map do Array</h1>
      {/* <p>{counter}</p> */}
    <ul>
      {(array || sliced ) && array.map((item, id) =>{
        return <li key={id}>{item.name}
        <button onClick={() => handleEdit(item)}>
          <span>Edit</span>
        </button>
        <button onClick={() => handleDelete(item)}>
          <span>Delete</span>
        </button>
        </li>
      })}
    </ul>
    
    <div style={{marginTop: "50px"}}> 
      {/* <input type="hidden" value={item.name, item.id} /> */}
     <input type="text" value={word || ''} onChange={e => setWord(e.target.value)}/>
     <input type="submit" value="ADD" onClick={() => handleSubmit(word)}/>
      {editing &&
      <input type="submit" value="Alteração" onClick={sendEdition} /> 
    }
      
      {/* <input type="submit" value="OK, Splice" onClick={handleSplice} /> */}
      <p>{word}</p>
    </div>

    
    </div>
  );
}
