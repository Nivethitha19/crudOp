import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup } from 'react-bootstrap';
import { useParams , useNavigate } from 'react-router-dom'


const Edit = () => {

    // const [getuserdata, setUserdata] = useState([]);
    // console.log(getuserdata);

    const navigate = useNavigate();

    const [inpval, setVal] = useState({
        name: "",
        email: "",
        address: "",
        contact: ""
    })


    const Setdata = (e) => {
        const { name, value } = e.target;
        setVal((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }

    const { id } = useParams("");
    console.log(id);

    const getdata = async () => {
        const res = await fetch(`/getuser/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");
        }
        else {
            setVal(data)
            console.log("get data")
        }
    }


    useEffect(() => {
        getdata();
    }, [])

    const Updateuser =async(e) =>{
        e.preventDefault();
        
        const {name,email,address,contact} = inpval;

        const res2 = await fetch(`/updateuser/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                name,email,address,contact
            })

        });

        const data2 = await res2.json();
        console.log(data2);
        if(res2.status === 422 || !data2){
            alert('fill the data')
        }
        else{
            alert('data updated')
            navigate("/register");
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
                    <input type='date' value={inpval.dob} onChange={Setdata} name='dob'></input>
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
                <Button variant="primary" onClick={Updateuser}  type="submit">Update</Button>

            </Form>
        </>

    )
}

export default Edit;