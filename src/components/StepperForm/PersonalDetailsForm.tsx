// src/components/StepperForm/PersonalDetailsForm.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { personalDetailsSchema } from '../../validation/validationSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Col, Row, Form } from 'react-bootstrap';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
// import FormLabel from '@mui/material/FormLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';


// interface Country {
//   label: string;
//   value: string;
// }

// interface City {
//   label: string;
//   value: string;
// }

// // Define a union type for country keys
// type CountryKey = 'usa' | 'india' | 'canada';

interface PersonalDetailsFormProps {
  onNext: (data: any) => void;
  onCancel: () => void;
  initialValues: any;
}

const PersonalDetailsForm: React.FC<PersonalDetailsFormProps> = ({ onNext, onCancel, initialValues }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(personalDetailsSchema),
    defaultValues: initialValues,
  });

  const onSubmit = (data: any) => {
    console.log("Personal Details Submitted:", data);
    onNext(data);
  };


  // const [country, setCountry] = React.useState<CountryKey | null>(null); // Use the CountryKey type
  // const [city, setCity] = React.useState<string>('');

  // const handleCountryChange = (event: SelectChangeEvent) => {
  //   const selectedCountry = event.target.value as CountryKey; // Cast to CountryKey
  //   setCountry(selectedCountry);
  //   setCity(''); // Reset city selection when country changes
  // };

  // const handleCityChange = (event: SelectChangeEvent) => {
  //   setCity(event.target.value as string);
  // };

  // const countries: Country[] = [
  //   { label: 'USA', value: 'usa' },
  //   { label: 'India', value: 'india' },
  //   { label: 'Canada', value: 'canada' },
  // ];

  // const citiesByCountry: Record<CountryKey, City[]> = {
  //   usa: [
  //     { label: 'New York', value: 'new-york' },
  //     { label: 'Los Angeles', value: 'los-angeles' },
  //   ],
  //   india: [
  //     { label: 'Delhi', value: 'delhi' },
  //     { label: 'Mumbai', value: 'mumbai' },
  //   ],
  //   canada: [
  //     { label: 'Toronto', value: 'toronto' },
  //     { label: 'Vancouver', value: 'vancouver' },
  //   ],
  // };

  // const cities: City[] = country ? citiesByCountry[country] : [];

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="p-3">
      <Row className="mb-3">
        <Col sm={2} className="mb-3 mb-lg-0">
          <Form.Group className="mb-3" controlId="applicationNo">
            <Form.Label>Application No.</Form.Label>
            <Form.Control
              type="text"
              value={'ERT2024'}
              disabled
              placeholder=""
            />
          </Form.Group>
        </Col>
        <Col sm={4}>
          <Form.Group controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              {...register("firstName")}
              isInvalid={!!errors.firstName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.firstName?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col sm={3}>
          <Form.Group className="mb-3" controlId="middleName">
            <Form.Label>Middle Name</Form.Label>
            <Form.Control
              type="text"
              {...register("middleName")}
              placeholder="Middle Name"
            />
          </Form.Group>
        </Col>
        <Col sm={3}>
          <Form.Group controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              {...register("lastName")}
              isInvalid={!!errors.lastName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.lastName?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col sm={2}>
          <Form.Group controlId="dateOfBirth">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              {...register("dateOfBirth")}
              isInvalid={!!errors.dateOfBirth}
            />
            <Form.Control.Feedback type="invalid">
              {errors.dateOfBirth?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col sm={4}>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              {...register("email")}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col sm={3}>
          <Form.Group controlId="phoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              {...register("phoneNumber")}
              isInvalid={!!errors.phoneNumber}
            />
            <Form.Control.Feedback type="invalid">
              {errors.phoneNumber?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col sm={3}>
          <Form.Group className="mb-3" controlId="whatsappNumber">
            <Form.Label>WhatsApp Number</Form.Label>
            <Form.Control
              type="text"
              {...register("whatsappNumber")}
              placeholder="WhatsApp Number"
            />
            <p className='p-1 text-red-500'>{errors.whatsappNumber?.message}</p>
          </Form.Group>
        </Col>

      </Row>
      <Row className="mb-3">
        {/* <Col sm={6}>
          <Form.Group controlId="dateOfBirth">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              {...register("dateOfBirth")}
              isInvalid={!!errors.dateOfBirth}
            />
            <Form.Control.Feedback type="invalid">
              {errors.dateOfBirth?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Col> */}
        {/* <Col sm={3}>
          <FormControl fullWidth>
            <FormLabel>Country</FormLabel>
            <Select value={country} onChange={handleCountryChange} label="Country">
              {countries.map((country) => (
                <MenuItem key={country.value} value={country.value}>
                  {country.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Col>
        <Col sm={3}>
          <FormControl fullWidth>
            <FormLabel>City</FormLabel>
            <Select value={city} onChange={handleCityChange} label="City">
              {cities.map((city) => (
                <MenuItem key={city.value} value={city.value}>
                  {city.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Col> */}
        <Col sm={3}>
          <Form.Group controlId="pincode">
            <Form.Label>Pincode</Form.Label>
            <Form.Control
              type="text"
              {...register("pincode")}
              isInvalid={!!errors.pincode}
            />
            <Form.Control.Feedback type="invalid">
              {errors.pincode?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col sm={12}>
          <Form.Group controlId="fullAddress">
            <Form.Label>Full Address</Form.Label>
            <Form.Control
              type="text"
              {...register("fullAddress")}
              isInvalid={!!errors.fullAddress}
            />
            <Form.Control.Feedback type="invalid">
              {errors.fullAddress?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Button type="button" onClick={onCancel}>Cancel</Button>
      <Button type="submit">Next</Button>
    </Form>
  );
};

export default PersonalDetailsForm;