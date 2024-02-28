
import React, {useState} from 'react'

const Homework = () => {
    const [name, setName] = useState('');
const [email,setEmail] = useState('');
const [password, setPassword] = useState('');


const handleName =(e) =>{
   // console.log(typeof (e))
    console.log(e.target.value)
    //console.log(e)
    setTitle(e.target.value)

}
const handleEmail=(e) =>{

    console.log(e.target.value)
    setYear(e.target.value)
}
const handlePassword= (e) =>{
    console.log(e.target.value)
    setViews(e.target.value)
}

  const createData = (e) => {
    e.preventDefault();
    console.log(e)}




return (
    <div>
  <form onSubmit={createData}>
    <div>
      <label htmlFor="name">First Name:</label>
      <input type="text" name="name" id="#"  onChange={handleName}/>
      </div>  
      <div>
      <label htmlFor="name">Last Name:</label>
      <input type="text" name="name" id="#"  onChange={handleName}/>
     </div>
     
      <div>
          <label htmlFor="email">Email:</label>
           <input type="number" name="email" id="#" onChange={handleEmail}/> 
         {/*<input type="submit" value="" />*/}
      
      </div>
      <div>
      <label htmlFor="password">Password:</label>
           <input type="number" name="password" id="#" onChange={handlePassword}/> 
      </div>
      <div>
      <label htmlFor="password">Confirm Password:</label>
           <input type="number" name="password" id="#" onChange={handlePassword}/>

      </div>
      <button type='submit'>You Form Data</button>
  </form>
  <div>
      <h2>First Name:{Name}</h2>
      <h2>Last Name:{Year}</h2>
      <h2>Email:{email}</h2>
      <h2>PasswordL:{password}</h2>
      <h2>Confirm Password:{password}</h2>
  </div>
</div>
   
  )
}

export default Homework