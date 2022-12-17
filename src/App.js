import React,{useState} from 'react'

const App = () => {
  const[data,setData] = useState({name:'',age:'',gender:'',occupation:"none",iscool:false});
  const {name,age} = data;
  const [isChecked] = useState(true)
  const changeHandler = e =>{
    setData({...data,[e.target.name]:e.target.value})
  }
  return (
    <div>
      <center>
        
        <p>{JSON.stringify(data)}</p>
      <label>Name</label> <br/>
      <input type='text' name='name' value={name} onChange={changeHandler}/> <br/>
      <label>Age</label> <br/>
      <input type='text' name='age' value={age} onChange={changeHandler}/> <br/>  
      <div onChange={changeHandler}>
      <label>Gender:</label> <br/>
       <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other <br/>
        </div> 
        <label>Occupation:</label> <br/>
        <select onChange={changeHandler} name='occupation'>
          <option value='none'>--SELECT--</option>
          <option  value='Fronend'>Frontend</option>
          <option  value='Backend'>Backend</option>
          <option  value='Full stack'>Full stack</option>
        </select> <br/>
        <label>Are you cool?</label> <br/>
        <input type='checkbox' name='iscool'value={isChecked} onChange={changeHandler}/> Of course i'm cool!
  
      </center>
    </div>
  )
}

export default App
