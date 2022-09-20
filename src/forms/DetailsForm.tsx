import { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const DetailsForm = () => {
    const [details, setDetails] = useState({
        client: 'mmbu', name: '', contact: '', email: '', address: '', commu: false
    })
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    const onChangeForm = (e: any) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setDetails({ ...details, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col md={8}></Col>
                    <Col md={4}>
                        <div style={details.client == 'mass' ? {} : details.client == 'mmbu' ? { backgroundColor: '#a0a0db' } : { backgroundColor: '#637330' }}>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Client</Form.Label>
                                    <Form.Select required name='client' value={details.client} onChange={onChangeForm} aria-label="Default select example">
                                        <option value="mass">MassMutual</option>
                                        <option value="mmbu">MMBU</option>
                                        <option value="jebit">Jebit</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>name</Form.Label>
                                    <Form.Control required name='name' onChange={onChangeForm} value={details.name} placeholder="Enter Name" />
                                </Form.Group>
                                {details.client == 'jebit' ? '' :
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Contact number</Form.Label>
                                        <Form.Control name='contact' onChange={onChangeForm} required={details.client == 'mmbu' ? false : true} value={details.contact} type="number" placeholder="Enter email" />
                                    </Form.Group>
                                }
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Email adress</Form.Label>
                                    <Form.Control required name='email' onChange={onChangeForm} value={details.email} type="email" placeholder="Email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>adress</Form.Label>
                                    <Form.Control required name='address' onChange={onChangeForm} value={details.address} placeholder="adress" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Label>Preffered Mode of Communication</Form.Label>
                                    <Form.Check name='commu' type="checkbox" label="SMS" />
                                    <Form.Check name='commu' onChange={onChangeForm} type="checkbox" label="Email" />
                                    <Form.Check name='commu' onChange={onChangeForm} type="checkbox" label="Push" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DetailsForm
