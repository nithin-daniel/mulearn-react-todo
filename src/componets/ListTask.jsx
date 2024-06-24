import React from 'react'

function ListTask({itemArray, setItemArray}) {
    function deleteItem(index){
        const newArray = [...itemArray];
        newArray.splice(index, 1);
        setItemArray(newArray);
    }
  return (
    <>
        <h1 className='header'>Todo list</h1>
        <ul className='list'>
            {itemArray.length === 0 && "No Todos"}
            {itemArray.map((item, index)=>{
                return( 
                    <li key={index}>
                        <label>
                            <input type="checkbox"/>
                            {item}
                        </label>
                        <button className='btn btn-danger' onClick={()=> deleteItem(index)}>Delete</button>
                    </li>   
                )
            })}
        </ul>
    </>
  )
}

export default ListTask
