import { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { DetailsFormType } from '../types/DetailsForm';

const DetailsForm = () => {
    const [details, setDetails] = useState<DetailsFormType >({
        client: 'mass', name: '', contact: '' , email: '', address: '', commu: ''
    })
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    const onChangeForm = (e: React.ChangeEvent<any>) => {
        if(e.target.name === 'sms' || e.target.name === 'mail' || e.target.name === 'push') {
            setDetails({ ...details, ['commu']: e.target.name })
        } else {
            setDetails({ ...details, [e.target.name]: e.target.value })
        }
    }
    const normalizeInput = (value:string, previousValue:string) => {
        // return nothing if no value
        if (!value) return value; 
      
        // only allows 0-9 inputs
        const currentValue = value.replace(/[^\d]/g, '');
        const cvLength = currentValue.length; 
      
        if (!previousValue || value.length > previousValue.length) {
      
          // returns: "x", "xx", "xxx"
          if (cvLength < 4) return currentValue; 
      
          // returns: "(xxx)", "(xxx) x", "(xxx) xx", "(xxx) xxx",
          if (cvLength < 7) return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`; 
      
          // returns: "(xxx) xxx-", (xxx) xxx-x", "(xxx) xxx-xx", "(xxx) xxx-xxx", "(xxx) xxx-xxxx"
          return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3, 6)}-${currentValue.slice(6, 10)}`; 
        }
      };

      const onChangeContactNumber = (e:React.ChangeEvent<HTMLInputElement>) => {
      let formatNumber =  normalizeInput(e.target.value , details.contact);
      setDetails({...details , ['contact']: formatNumber})
      };
    return (
        <div>
            <Container>
                <Row>
                   
                 
                        <div style={details.client === 'mass' ? {} : details.client === 'mmbu' ? { backgroundColor: '#a0a0db' } : { backgroundColor: '#637330' }}>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className="mandatory">Client</Form.Label>
                                    <Form.Select required name='client' value={details.client} onChange={onChangeForm} aria-label="Default select example">
                                        <option value="mass">MassMutual</option>
                                        <option value="mmbu">MMBU</option>
                                        <option value="jebit">Jebit</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className="mandatory">name</Form.Label>
                                    <Form.Control required name='name' onChange={onChangeForm} value={details.name} placeholder="Enter Name" />
                                </Form.Group>
                                {details.client === 'jebit' ? '' :
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className={details.client === 'mmbu' ? "" : 'mandatory'}>Contact number</Form.Label>
                                        <Form.Control name='contact' onChange={onChangeContactNumber} required={details.client === 'mmbu' ? false : true} value={details.contact}  placeholder="Enter email"
                                            pattern="/^(1|)?(\d{3})(\d{3})(\d{4})$/" />
                                        <Form.Control.Feedback type="invalid">Please provide a valid contact number.</Form.Control.Feedback>
                                    </Form.Group>
                                }
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className="mandatory">Email adress</Form.Label>
                                    <Form.Control required name='email' onChange={onChangeForm} value={details.email} type="email" placeholder="Email" pattern="/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/" />
                                    <Form.Control.Feedback type="invalid">Please provide a valid gmail.</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className="mandatory">adress</Form.Label>
                                    <Form.Control required name='address' onChange={onChangeForm} value={details.address} placeholder="adress" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Label>Preffered Mode of Communication</Form.Label>
                                    <div key={`inline-checkbox`} className="mb-3">
                                        <Form.Check inline name='sms' onChange={onChangeForm} checked = { details.commu === 'sms' ? true : false} type="checkbox" label="SMS" />
                                        <Form.Check inline name='mail' onChange={onChangeForm} checked = { details.commu === 'mail' ? true : false} type="checkbox" label="Email" />
                                        <Form.Check inline name='push' onChange={onChangeForm} checked = { details.commu === 'push' ? true : false} type="checkbox" label="Push" />
                                    </div>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                  
                </Row>
            </Container>
        </div>
    )
}

export default DetailsForm
