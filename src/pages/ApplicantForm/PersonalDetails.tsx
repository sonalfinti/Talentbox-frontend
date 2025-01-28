


// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { Col, Row, Form, Button } from "react-bootstrap";
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormLabel from '@mui/material/FormLabel';
// // import Box from '@mui/material/Box';
// import React from "react";
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';

// const schema = yup.object().shape({
//   username: yup.string().required('Username is required').trim(),
//   email: yup.string()
//     .required('Email is required')
//     .email('Email is invalid')
// });

// function PersonalDetails() {
//   const { handleSubmit, formState: { errors }, reset } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onSubmitHandler = (data: unknown) => {
//     console.log({ data });
//     reset();
//   };


//   const [country, setCountry] = React.useState('');
//   const [city, setCity] = React.useState('');



//   const handleCountryChange = (event: SelectChangeEvent) => {
//     const selectedCountry = event.target.value as string;
//     setCountry(selectedCountry);
//     setCity(''); // Reset city selection when country changes
//   };
//   const handleCityChange = (event: SelectChangeEvent) => {
//     setCity(event.target.value as string);
//   };

//   const countries = [
//     { label: 'USA', value: 'usa' },
//     { label: 'India', value: 'india' },
//     { label: 'Canada', value: 'canada' },
//   ];

//   const citiesByCountry = {
//     usa: [
//       { label: 'New York', value: 'new-york' },
//       { label: 'Los Angeles', value: 'los-angeles' },
//     ],
//     india: [
//       { label: 'Delhi', value: 'delhi' },
//       { label: 'Mumbai', value: 'mumbai' },
//     ],
//     canada: [
//       { label: 'Toronto', value: 'toronto' },
//       { label: 'Vancouver', value: 'vancouver' },
//     ],
//   };

//   const cities = country ? citiesByCountry[country] : [];

//   return (
//     <div>
//       <Form onSubmit={handleSubmit(onSubmitHandler)}>
//         <Row className="mb-3">
//           <Col sm={4} className="mb-3 mb-lg-0">
//             <Form.Group className="mb-3" controlId="userId">
//               <Form.Label>Application No.</Form.Label>
//               <Form.Control
//                 type="text"
//                 name=""
//                 value={0}
//                 disabled
//                 placeholder=""
//               />
//               <p className='p-1'> {errors?.username && <span className='m-1 p-1 text-red-500' >This field is required</span>} </p>
//             </Form.Group>
//           </Col>
//           <Col sm={4}>
//             <Form.Group className="mb-3" controlId="firstName">
//               <Form.Label>First Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="firstName"
//                 placeholder="First Name"
//               />
//               <p className='p-1'> {errors?.username && <span className='m-1 p-1 text-red-500' >This field is required</span>} </p>
//             </Form.Group>
//           </Col>
//           <Col sm={4}>
//             <Form.Group className="mb-3" controlId="middleName">
//               <Form.Label>Middle Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="middleName"
//                 placeholder="Middle Name"
//               />
//               <p className='p-1'> {errors?.username && <span className='m-1 p-1 text-red-500' >This field is required</span>} </p>
//             </Form.Group>
//           </Col>
//         </Row>
//         <Row className="mb-3">
//           <Col sm={4} className="mb-3 mb-lg-0">
//             <Form.Group className="mb-3" controlId="lastname">
//               <Form.Label>LastName</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="lastname"
//                 placeholder="Last Name"
//               />
//               <p className='p-1'> {errors?.username && <span className='m-1 p-1 text-red-500' >This field is required</span>} </p>
//             </Form.Group>
//           </Col>
//           <Col sm={4}>
//             <Form.Group className="mb-3" controlId="phoneNumber">
//               <Form.Label>Phone Number</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="phoneNumber"
//                 placeholder="Phone Number"
//               />
//               <p className='p-1'> {errors?.username && <span className='m-1 p-1 text-red-500' >This field is required</span>} </p>
//             </Form.Group>
//           </Col>
//           <Col sm={4}>
//             <Form.Group className="mb-3" controlId="whatsappNumber">
//               <Form.Label>WhatsApp Number</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="whatsappNumber"
//                 placeholder="Whatsapp Number"
//               />
//               <p className='p-1'> {errors?.username && <span className='m-1 p-1 text-red-500' >This field is required</span>} </p>
//             </Form.Group>
//           </Col>
//         </Row>
//         <Row className="mb-3">
//           <Col sm={4} className="mb-3 mb-lg-0">
//             <Form.Group className="mb-3" >
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 name="email"
//                 className={`${errors.email ? 'is-invalid' : ''}`}
//                 placeholder="Enter address here"
//               />
//               <p className="p-1 text-red-500">{errors.email?.message}</p>
//             </Form.Group>
//           </Col>
//           <Col sm={4}>
//             <FormControl>
//               <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
//               <RadioGroup
//                 row
//                 aria-labelledby="demo-row-radio-buttons-group-label"
//                 name="row-radio-buttons-group"
//               >
//                 <FormControlLabel value="female" control={<Radio />} label="Female" />
//                 <FormControlLabel value="male" control={<Radio />} label="Male" />
//                 <FormControlLabel value="other" control={<Radio />} label="Other" />
//               </RadioGroup>
//             </FormControl>
//           </Col>
//           <Col sm={4}>
//             <Form.Group className="mb-3 text-center justify-center content-center">
//               <Form.Label>Date Of Birth</Form.Label>
//               <Form.Control
//                 type="date"
//                 name="dateOfBirth"
//                 placeholder="Date of Birth"
//               />
//               <p className='p-1'> {errors?.username && <span className='m-1 p-1 text-red-500' >This field is required</span>} </p>
//             </Form.Group>
//           </Col>
//         </Row>
//         {/* Country, City, Gender, Pincode, Full Address */}
//         <Row className="mb-3">
//           <Col sm={3}>
//           <FormControl fullWidth>
//         <FormLabel>Country</FormLabel>
//         <Select value={country} onChange={handleCountryChange} label="Country">
//           {countries.map((country) => (
//             <MenuItem key={country.value} value={country.value}>
//               {country.label}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//           </Col>
//           <Col sm={3}>
//             <FormControl fullWidth>
//               <FormLabel>City</FormLabel>
//               <Select value={city} onChange={handleCityChange} label="City">
//                 {cities.map((city) => (
//                   <MenuItem key={city.value} value={city.value}>
//                     {city.label}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           </Col>
//           <Col sm={3}>

//           </Col>
//           <Col sm={3}>
//           <Form.Group className="mb-3" controlId="pincode">
//           <Form.Label>Pincode</Form.Label>
//           <Form.Control
//             type="text"
//             name="pincode"
//             placeholder="Enter Pincode"
//           />
//         </Form.Group>
//           </Col>
//         </Row>

//         <Row className="mb-3">
//           <Col sm={12}>
//           <Form.Group className="mb-3" controlId="fullAddress">
//           <Form.Label>Full Address</Form.Label>
//           <Form.Control
//             as="textarea"
//             name="fullAddress"
//             rows={3}
//             placeholder="Enter your full address"
//           />
//         </Form.Group>
//           </Col>
//         </Row>

//         <Button type="submit" variant="primary">Submit</Button>
//       </Form>
//     </div>
//   );
// }

// export default PersonalDetails;


// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { Col, Row, Form, Button } from "react-bootstrap";
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormLabel from '@mui/material/FormLabel';
// import React from "react";
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';

// // Validation schema
// const schema = yup.object().shape({
//   firstName: yup.string().required('First Name is required').trim(),
//   lastName: yup.string().required('Last Name is required').trim(),
//   middleName: yup.string(),
//   email: yup.string().required('Email is required').email('Email is invalid'),
//   phoneNumber: yup.string().required('Phone Number is required'),
//   whatsappNumber: yup.string().required('WhatsApp Number is required'),
//   dateOfBirth: yup.date().required('Date of Birth is required'),
//   pincode: yup.string().required('Pincode is required'),
//   fullAddress: yup.string().required('Full Address is required'),
//   gender: yup.string().required('Gender is required'),
// });

// // Main component
// function PersonalDetails() {
//   const { handleSubmit, formState: { errors }, reset, register } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onSubmitHandler = (data: unknown) => {
//     console.log({ data });
//     reset();
//   };

//   const [country, setCountry] = React.useState('');
//   const [city, setCity] = React.useState('');

//   const handleCountryChange = (event: SelectChangeEvent) => {
//     const selectedCountry = event.target.value as string;
//     setCountry(selectedCountry);
//     setCity(''); // Reset city selection when country changes
//   };

//   const handleCityChange = (event: SelectChangeEvent) => {
//     setCity(event.target.value as string);
//   };

//   const countries = [
//     { label: 'USA', value: 'usa' },
//     { label: 'India', value: 'india' },
//     { label: 'Canada', value: 'canada' },
//   ];

//   const citiesByCountry = {
//     usa: [
//       { label: 'New York', value: 'new-york' },
//       { label: 'Los Angeles', value: 'los-angeles' },
//     ],
//     india: [
//       { label: 'Delhi', value: 'delhi' },
//       { label: 'Mumbai', value: 'mumbai' },
//     ],
//     canada: [
//       { label: 'Toronto', value: 'toronto' },
//       { label: 'Vancouver', value: 'vancouver' },
//     ],
//   };

//   const cities = country ? citiesByCountry[country] : [];

//   return (
//     <div>
//       <Form onSubmit={handleSubmit(onSubmitHandler)}>
//         <Row className="mb-3">
//           <Col sm={4} className="mb-3 mb-lg-0">
//             <Form.Group className="mb-3" controlId="applicationNo">
//               <Form.Label>Application No.</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="applicationNo"
//                 value={0} // Replace with actual application number logic
//                 disabled
//                 placeholder=""
//               />
//             </Form.Group>
//           </Col>
//           <Col sm={4}>
//             <Form.Group className="mb-3" controlId="firstName">
//               <Form.Label>First Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 {...register("firstName")}
//                 placeholder="First Name"
//               />
//               <p className='p-1 text-red-500'>{errors.firstName?.message}</p>
//             </Form.Group>
//           </Col>
//           <Col sm={4}>
//             <Form.Group className="mb-3" controlId="middleName">
//               <Form.Label>Middle Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 {...register("middleName")}
//                 placeholder="Middle Name"
//               />
//             </Form.Group>
//           </Col>
//         </Row>
//         <Row className="mb-3">
//           <Col sm={4} className="mb-3 mb-lg-0">
//             <Form.Group className="mb-3" controlId="lastName">
//               <Form.Label>Last Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 {...register("lastName")}
//                 placeholder="Last Name"
//               />
//               <p className='p-1 text-red-500'>{errors.lastName?.message}</p>
//             </Form.Group>
//           </Col>
//           <Col sm={4}>
//             <Form.Group className="mb-3" controlId="phoneNumber">
//               <Form.Label>Phone Number</Form.Label>
//               <Form.Control
//                 type="text"
//                 {...register("phoneNumber")}
//                 placeholder="Phone Number"
//               />
//               <p className='p-1 text-red-500'>{errors.phoneNumber?.message}</p>
//             </Form.Group>
//           </Col>
//           <Col sm={4}>
//             <Form.Group className="mb-3" controlId="whatsappNumber">
//               <Form.Label>WhatsApp Number</Form.Label>
//               <Form.Control
//                 type="text"
//                 {...register("whatsappNumber")}
//                 placeholder="WhatsApp Number"
//               />
//               <p className='p-1 text-red-500'>{errors.whatsappNumber?.message}</p>
//             </Form.Group>
//           </Col>
//         </Row>
//         <Row className="mb-3">
//           <Col sm={4} className="mb-3 mb-lg-0">
//             <Form.Group className="mb-3">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 {...register("email")}
//                 className={`${errors.email ? 'is-invalid' : ''}`}
//                 placeholder="Enter address here"
//               />
//               <p className="p-1 text-red-500">{errors.email?.message}</p>
//             </Form.Group>
//           </Col>
//           <Col sm={4}>
//             <FormControl>
//               <FormLabel id="gender-label">Gender</FormLabel>
//               <RadioGroup
//                 row
//                 aria-labelledby="gender-label"
//                 name="gender"
//                 {...register("gender")}
//               >
//                 <FormControlLabel value="female" control={<Radio />} label="Female" />
//                 <FormControlLabel value="male" control={<Radio />} label="Male" />
//                 <FormControlLabel value="other" control={<Radio />} label="Other" />
//               </RadioGroup>
//             </FormControl>
//           </Col>
//           <Col sm={4}>
//             <Form.Group className="mb-3 text-center justify-center content-center">
//               <Form.Label>Date Of Birth</Form.Label>
//               <Form.Control
//                 type="date"
//                 {...register("dateOfBirth")}
//                 placeholder="Date of Birth"
//               />
//               <p className='p-1 text-red-500'>{errors.dateOfBirth?.message}</p>
//             </Form.Group>
//           </Col>
//         </Row>
//         <Row className="mb-3">
//           <Col sm={3}>
//             <FormControl fullWidth>
//               <FormLabel>Country</FormLabel>
//               <Select value={country} onChange={handleCountryChange} label="Country">
//                 {countries.map((country) => (
//                   <MenuItem key={country.value} value={country.value}>
//                     {country.label}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           </Col>
//           <Col sm={3}>
//             <FormControl fullWidth>
//               <FormLabel>City</FormLabel>
//               <Select value={city} onChange={handleCityChange} label="City">
//                 {cities.map((city) => (
//                   <MenuItem key={city.value} value={city.value}>
//                     {city.label}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           </Col>
//           <Col sm={3}>
//             <Form.Group className="mb-3" controlId="pincode">
//               <Form.Label>Pincode</Form.Label>
//               <Form.Control
//                 type="text"
//                 {...register("pincode")}
//                 placeholder="Enter Pincode"
//               />
//               <p className='p-1 text-red-500'>{errors.pincode?.message}</p>
//             </Form.Group>
//           </Col>
//         </Row>
//         <Row className="mb-3">
//           <Col sm={12}>
//             <Form.Group className="mb-3" controlId="fullAddress">
//               <Form.Label>Full Address</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 {...register("fullAddress")}
//                 rows={3}
//                 placeholder="Enter your full address"
//               />
//               <p className='p-1 text-red-500'>{errors.fullAddress?.message}</p>
//             </Form.Group>
//           </Col>
//         </Row>
//         <Button type="submit" variant="primary">Submit</Button>
//       </Form>
//     </div>
//   );
// }

// export default PersonalDetails;


import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Col, Row, Form, Button,Card } from "react-bootstrap";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import React from "react";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// Define types for countries and cities
interface Country {
  label: string;
  value: string;
}

interface City {
  label: string;
  value: string;
}

// Define a union type for country keys
type CountryKey = 'usa' | 'india' | 'canada';

// Validation schema
const schema = yup.object().shape({
  firstName: yup.string().required('First Name is required').trim(),
  lastName: yup.string().required('Last Name is required').trim(),
  middleName: yup.string(),
  email: yup.string().required('Email is required').email('Email is invalid'),
  phoneNumber: yup.string().required('Phone Number is required'),
  whatsappNumber: yup.string().required('WhatsApp Number is required'),
  dateOfBirth: yup.date().required('Date of Birth is required'),
  pincode: yup.string().required('Pincode is required'),
  fullAddress: yup.string().required('Full Address is required'),
  country: yup.string().required('Country is required'),
  city: yup.string().required('City is required'),
  gender: yup.string().required('Gender is required'),

});

// Main component
function PersonalDetails() {
  const { handleSubmit, formState: { errors }, reset, register } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data: unknown) => {
    console.log({ data });
    reset();
  };

  const [country, setCountry] = React.useState<CountryKey| null>(null); // Use the CountryKey type
  const [city, setCity] = React.useState<string>('');

  const handleCountryChange = (event: SelectChangeEvent) => {
    const selectedCountry = event.target.value as CountryKey; // Cast to CountryKey
    setCountry(selectedCountry);
    setCity(''); // Reset city selection when country changes
  };

  const handleCityChange = (event: SelectChangeEvent) => {
    setCity(event.target.value as string);
  };

  const countries: Country[] = [
    { label: 'USA', value: 'usa' },
    { label: 'India', value: 'india' },
    { label: 'Canada', value: 'canada' },
  ];

  const citiesByCountry: Record<CountryKey, City[]> = {
    usa: [
      { label: 'New York', value: 'new-york' },
      { label: 'Los Angeles', value: 'los-angeles' },
    ],
    india: [
      { label: 'Delhi', value: 'delhi' },
      { label: 'Mumbai', value: 'mumbai' },
    ],
    canada: [
      { label: 'Toronto', value: 'toronto' },
      { label: 'Vancouver', value: 'vancouver' },
    ],
  };

  const cities: City[] = country ? citiesByCountry[country] : [];

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmitHandler)}>
        <Row className="mb-3">
          <Col sm={4} className="mb-3 mb-lg-0">
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
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                {...register("firstName")}
                placeholder="First Name"
              />
              <p className='p-1 text-red-500'>{errors.firstName?.message}</p>
            </Form.Group>
          </Col>
          <Col sm={4}>
            <Form.Group className="mb-3" controlId="middleName">
              <Form.Label>Middle Name</Form.Label>
              <Form.Control
                type="text"
                {...register("middleName")}
                placeholder="Middle Name"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col sm={4} className="mb-3 mb-lg-0">
            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                {...register("lastName")}
                placeholder="Last Name"
              />
              <p className='p-1 text-red-500'>{errors.lastName?.message}</p>
            </Form.Group>
          </Col>
          <Col sm={4}>
            <Form.Group className="mb-3" controlId="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                {...register("phoneNumber")}
                placeholder="Phone Number"
              />
              <p className='p-1 text-red-500'>{errors.phoneNumber?.message}</p>
            </Form.Group>
          </Col>
          <Col sm={4}>
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
          <Col sm={4} className="mb-3 mb-lg-0">
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                {...register("email")}
                className={`${errors.email ? 'is-invalid' : ''}`}
                placeholder="Enter address here"
              />
              <p className="p-1 text-red-500">{errors.email?.message}</p>
            </Form.Group>
          </Col>
          <Col sm={4}>
            <FormControl>
              <FormLabel id="gender-label">Gender</FormLabel>
              <RadioGroup
                row
                aria-labelledby="gender-label"
                // name="gender"
                {...register("gender")}
              >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>
          </Col>
          <Col sm={4}>
            <Form.Group className="mb-3 text-center justify-center content-center">
              <Form.Label>Date Of Birth</Form.Label>
              <Form.Control
                type="date"
                {...register("dateOfBirth")}
                placeholder="Date of Birth"
              />
              <p className='p-1 text-red-500'>{errors.dateOfBirth?.message}</p>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col sm={3}>
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
          </Col>
          <Col sm={3}>
            <Form.Group className="mb-3" controlId="pincode">
              <Form.Label>Pincode</Form.Label>
              <Form.Control
                type="text"
                {...register("pincode")}
                placeholder="Enter Pincode"
              />
              <p className='p-1 text-red-500'>{errors.pincode?.message}</p>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col sm={12}>
            <Form.Group className="mb-3" controlId="fullAddress">
              <Form.Label>Full Address</Form.Label>
              <Form.Control
                as="textarea"
                {...register("fullAddress")}
                rows={3}
                placeholder="Enter your full address"
              />
              <p className='p-1 text-red-500'>{errors.fullAddress?.message}</p>
            </Form.Group>
          </Col>
        </Row>
        {/* <Button type="submit" variant="primary">Submit</Button> */}
      </Form>
    </div>
  );
}

export default PersonalDetails;