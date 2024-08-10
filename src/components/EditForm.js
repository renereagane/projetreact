import { Form, Button } from "react-bootstrap"
import {EmployeeContext} from '../contexts/EmployeeContext';
import {useContext, useState} from 'react';
import Swal from 'sweetalert2';

const EditForm = ({theEmployee}) =>{

    const id = theEmployee.id;

    const [name, setName] = useState(theEmployee.name);
    const [email, setEmail] = useState(theEmployee.email);
    const [address, setAddress] = useState(theEmployee.address);
    const [phone, setPhone] = useState(theEmployee.phone);

    const alert = (name) => {
        Swal.fire({
            title: "Are you sure?",
            text: "want to order  this coffee",
            icon: "success",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm Modifie!",
            showCancelButton: true,
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Succeed!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
    
    }


    const {updateEmployee} = useContext(EmployeeContext);

    const updatedEmployee = {id, name, email, address, phone}

    const handleSubmit = (e) => {
        e.preventDefault();
        updateEmployee(id, updatedEmployee)
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    name="name"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    name="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="Address"
                    rows={3}
                    name="address"
                    value={address}
                    onChange={(e)=> setAddress(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value={phone}
                    onChange={(e)=> setPhone(e.target.value)}
                />
            </Form.Group>
            <Button variant="success" type="submit" block onClick={() => alert(name)}>
                Edit Employee
            </Button>
        </Form>

     )
}

export default EditForm;