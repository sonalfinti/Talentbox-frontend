
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Col, Row, Form } from "react-bootstrap";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import * as yup from "yup";



const schema = yup.object().shape({
  username: yup.string().required('Username is required').trim(),
  email: yup.string()
    .required('Email is required')
    .email('Email is invalid')

});


function JobSkillsDetails() {
  const { handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = (data: unknown) => {
    console.log({ data });
    reset();
  };
  //select field
  
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmitHandler)}>
        <Row className="mb-3">
          <Col sm={4} className="mb-3 mb-lg-0">

            <Form.Group className="mb-3" controlId="userId">
              <Form.Label>Current Package(LPA)</Form.Label>
              <Form.Control
                type="text"
                // {...register('username', { required: true, minLength: 2, maxLength: 30 })}
                name="userId"
                value={'#PT2025'}
                disabled
                placeholder="User Id"

              />
              <p className='p-1'> {errors?.username && <span className='m-1 p-1 text-red-500' >This field is required</span>} </p>
            </Form.Group>
          </Col>
          <Col sm={4}>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>Expected Package(LPA)</Form.Label>
              <Form.Control
                type="text"
                // {...register('firstName', { required: true, minLength: 2, maxLength: 30 })}
                name="firstName"
                placeholder="firstName"

              />
              <p className='p-1'> {errors?.username && <span className='m-1 p-1 text-red-500' >This field is required</span>} </p>
            </Form.Group>
          </Col>
          <Col sm={4}>
            <Form.Group className="mb-3" controlId="middleName">
              <Form.Label>Negotiable</Form.Label>
              <Form.Control
                type="text"
                // {...register('username', { required: true, minLength: 2, maxLength: 30 })}
                name="middleName"
                placeholder="MiddleName"

              />
              <p className='p-1'> {errors?.username && <span className='m-1 p-1 text-red-500' >This field is required</span>} </p>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col sm={4} className="mb-3 mb-lg-0">

            <Form.Group className="mb-3" controlId="lastname">
              <Form.Label>Notice Period</Form.Label>
              <Form.Control
                type="text"
                // {...register('username', { required: true, minLength: 2, maxLength: 30 })}
                name="lastname"
                placeholder="Last Name"

              />
              <p className='p-1'> {errors?.username && <span className='m-1 p-1 text-red-500' >This field is required</span>} </p>
            </Form.Group>
          </Col>
          <Col sm={4}>
            <Form.Group className="mb-3" controlId="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                // {...register('username', { required: true, minLength: 2, maxLength: 30 })}
                name="phoneNumber"
                placeholder="Phone Number"

              />
              <p className='p-1'> {errors?.username && <span className='m-1 p-1 text-red-500' >This field is required</span>} </p>
            </Form.Group>
          </Col>
          <Col sm={4}>
            <Form.Group className="mb-3" controlId="whatsappNumber">
              <Form.Label>WhatsApp Number</Form.Label>
              <Form.Control
                type="text"
                // {...register('username', { required: true, minLength: 2, maxLength: 30 })}
                name="whatsappNumber"
                placeholder="Whatsapp Number"

              />
              <p className='p-1'> {errors?.username && <span className='m-1 p-1 text-red-500' >This field is required</span>} </p>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col sm={4} className="mb-3 mb-lg-0">

            <Form.Group className="mb-3" >
              <Form.Label>Email</Form.Label>
              <Form.Control

                name="email"
                className={`${errors.email ? 'is-invalid' : ''}`}
                placeholder="Enter address here"

              /><p className="p-1 text-red-500">{errors.email?.message}</p>
            </Form.Group>
          </Col>
          <Col sm={4}>

            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />

              </RadioGroup>
            </FormControl>
          </Col>
          <Col sm={4}>
            <Form.Group className="mb-3 text-center justify-center content-center" >
              <Form.Label  >Date Of Birth</Form.Label>
              <Form.Control
                type="date"
                // {...register('username', { required: true, minLength: 2, maxLength: 30 })}
                name="dateOfBirth"
                placeholder="Date of Birth"

              />
              <p className='p-1'> {errors?.username && <span className='m-1 p-1 text-red-500' >This field is required</span>} </p>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </div>
  )
}


export default JobSkillsDetails
