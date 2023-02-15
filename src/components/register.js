import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { NavLink } from "react-router-dom";


const Userlist = () => {

  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata)

  const [inpval, setVal] = useState({
    name: "",
    email: "",
    address: "",
    contact: ""
  })


  const Setdata = (e) => {
    console.log(e.target.value)
    const { name, value } = e.target;
    setVal((preval) => {
      return {
        ...preval,
        [name]: value
      }
    })
  }



  const addinpdata = async (e) => {
    e.preventDefault();

    const { name, email, address, contact } = inpval;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON"
      },
      body: JSON.stringify({
        name, email, address, contact
      })
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      alert("error");
      console.log("error");
    }
    else {
      alert("data added");
      console.log("data added")
    }
  }


  //get userdata

  const getdata = async (e) => {

    const res = await fetch("/getdata", {
      method: "GET",
      headers: {
        "Content-Type": "application/JSON"
      }
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      alert("error");
      console.log("error");
    }
    else {
      setUserdata(data)
      console.log("get data ")
    }
  }

  useEffect(() => {
    getdata();
  }, [])


  // delete user////////////////
  const deleteuser = async(id) =>{
      const res2 = await fetch(`/deleteuser/${id}`,{
        method: "DELETE",
      headers: {
        "Content-Type": "application/JSON"
      }
      });

      const deletedata = await res2.json();
      console.log(deletedata);
      if(res2.status === 422 || !deletedata){
        console.log("error")
      }else{
        console.log("user deleted");
        getdata();
      }
  }

  return (
    <>
      <Form className="forms">
        <h3 style={{ 'textAlign': 'center' }}>Registration form</h3>
        <FormGroup>
          <label>Name:</label>
          <input type='text' value={inpval.name} onChange={Setdata} name='name'></input>
        </FormGroup>
        <FormGroup>
          <label>email:</label>
          <input type='email' value={inpval.email} onChange={Setdata} name='email'></input>
        </FormGroup>
        {/* <FormGroup>
            <label>dob:</label>
            <input type='date' value={inpval.dob}  onChange={Setdata} name='dob'></input>   
            </FormGroup> */}
        <FormGroup>
          <label>Address:</label>
          <input type='text' value={inpval.address} onChange={Setdata} name='address'></input>
        </FormGroup>
        {/* <FormGroup>
            <label>Gender:</label>
            <input type='radio' name='gender'></input>  Male 
            <input type='radio' name='gender'></input>  Female 
            <input type='radio' name='gender'></input>  Others 
            </FormGroup> */}
        <FormGroup>
          <label>Contact No:</label>
          <input type='tel' value={inpval.contact} onChange={Setdata} name='contact'></input>
        </FormGroup>
        <Button variant="primary" onClick={addinpdata} type="submit">Save</Button>

      </Form>





      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.No</th>
            <th>First Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Contact no</th>

          </tr>
        </thead>
        <tbody>

          {
            getuserdata.map((element, id) => {
              return (
                <>
                  <tr>
                    <td>{id + 1}</td>
                    <td>{element.name}</td>
                    <td>{element.email}</td>
                    <td>{element.address}</td>
                    <td>{element.contact}</td>

                    <td className="d-flex justify-content-around">
                      <NavLink to={`/edit/${element._id}`}> <button className="btn btn-primary">Update</button></NavLink>
                      <button className="btn btn-danger" onClick={()=>deleteuser(element._id)}>Delete</button>

                    </td>
                  </tr>
                </>
              )


            })
          }

        </tbody>
      </Table>
    </>

  )
}

export default Userlist;