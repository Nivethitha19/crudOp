import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function BasicExample() {
  const[name,setName]=useState("");
  const[password,setPassword]= useState("");
  const[errors,seterrors] = useState(
    {
      name:'',
      password:''
    }
  )

  const handlesubmit=(e)=>{
    e.preventDefault();

    const newErrors = {...errors}
    let haserror = false;
    let pwdregex = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})'
  
    if(!name){
      newErrors.name='Username is required'
      haserror=true
    }
    else{
      newErrors.name=''
      haserror=false
    }
    if(password.match(pwdregex)){
      newErrors.password=''
      haserror=false
    }
    else{
      newErrors.password='Password should contain 1 special character,Capital and numbers'
    }
    if(!password){
      newErrors.password='password is required'
      haserror=true
    }
    else{
      newErrors.password=''
      haserror=false
    }
   
    
    //set the new errors

    seterrors(newErrors)
    if(!haserror) {
      console.log('submitted')
    }
    console.log(name,password);
  }
  return (
    <Form className='forms'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}/>
        
      </Form.Group>
      {errors.name && <p className='errormsg'>{errors.name}</p>}

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group>
      {errors.password && <p className='errormsg'>{errors.password}</p>}
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handlesubmit}>
        Login
      </Button>
    </Form>
  );
}

export default BasicExample; 
 