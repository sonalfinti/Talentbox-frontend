import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Col, Row, Form } from "react-bootstrap";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React from "react";



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

const schema = yup.object().shape({
  username: yup.string().required('Username is required').trim(),
  email: yup.string()
    .required('Email is required')
    .email('Email is invalid')

});



function PersonalDetails() {
  const { handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = (data: unknown) => {
    console.log({ data });
    reset();
  };
  //select field
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmitHandler)}>
        <Row className="mb-3">
          <Col sm={4} className="mb-3 mb-lg-0">

            <Form.Group className="mb-3" controlId="userId">
              <Form.Label>Application No.</Form.Label>
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
              <Form.Label>FirstName</Form.Label>
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
              <Form.Label>MiddleName</Form.Label>
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
              <Form.Label>LastName</Form.Label>
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

        <Row className="mb-3">
          <Col sm={4} className="mb-3 mb-lg-0">
            <FormControl sx={{ m: 1, width: 200 }}>
              {/* <InputLabel id="demo-multiple-name-label">Name</InputLabel> */}
              <Form.Label>Country</Form.Label>
              <Select
                // labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default PersonalDetails

