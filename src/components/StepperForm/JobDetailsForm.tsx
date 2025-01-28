// src/components/StepperForm/JobDetailsForm.tsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { jobDetailsSchema } from '../../validation/validationSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Col, Row, Form } from 'react-bootstrap';
import { Select, MenuItem, FormControl } from '@mui/material';
import { TextField, FormHelperText } from '@mui/material';



interface JobDetailsFormProps {
  onNext: (data: any) => void;
  onBack: () => void;
  initialValues: any;
}

const workStatusOptions = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
];

const workPreferenceOptions = [
  { value: 'remote', label: 'Remote' },
  { value: 'onsite', label: 'Onsite' },
  { value: 'hybrid', label: 'Hybrid' },
];

const JobDetailsForm: React.FC<JobDetailsFormProps> = ({ onNext, onBack, initialValues }) => {
  const { register, handleSubmit, control, formState: { errors }, trigger } = useForm({
    resolver: yupResolver(jobDetailsSchema),
    defaultValues: initialValues,
  });

  const onSubmit = (data: any) => {
    console.log("Job Details Submitted:", data);
    onNext(data);
  };

  const [readyForWork, setReadyForWork] = useState<string>('no');
  const [workPreference, setWorkPreference] = useState<string>('remote');


  const handleWorkStatusChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setReadyForWork(event.target.value as string);
  };


  const handleWorkPreferenceChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setWorkPreference(event.target.value as string);
  };





  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="p-3">
      <Row className="mb-3">
        <Col sm={6}>
          <Form.Group controlId="expectedpkg">
            <Form.Label>Expected Package</Form.Label>
            <Form.Control
              type="text"
              {...register("expectedpkg")}
              isInvalid={!!errors.expectedpkg}
            />
            <Form.Control.Feedback type="invalid">
              {errors.expectedpkg?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col sm={6}>
          <Form.Group controlId="currentpkg">
            <Form.Label>Current Package</Form.Label>
            <Form.Control
              type="text"
              {...register("currentpkg")}
              isInvalid={!!errors.currentpkg}
            />
            <Form.Control.Feedback type="invalid">
              {errors.currentpkg?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col sm={6}>
          <Form.Group controlId="negotiation">
            <Form.Label>Negotiation</Form.Label>
            <Form.Control
              type="number"
              {...register("negotiation")}
              isInvalid={!!errors.negotiation}
            />
            <Form.Control.Feedback type="invalid">
              {errors.negotiation?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col sm={6}>
          <Form.Group controlId="noticePeriod">
            <Form.Label>Notice Period</Form.Label>
            <Form.Control
              type="number"
              {...register("noticePeriod")}
              isInvalid={!!errors.noticePeriod}
            />
            <Form.Control.Feedback type="invalid">
              {errors.noticePeriod?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col sm={3}>

          <FormControl fullWidth variant="outlined">
            <Form.Label>Ready for work</Form.Label>
            <Select value={readyForWork} onChange={handleWorkStatusChange} className='h-10' >
              {workStatusOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Col>
        <Col sm={3}>

          <FormControl fullWidth variant="outlined">
            <Form.Label>Work preference</Form.Label>
            <Select value={workPreference} onChange={handleWorkPreferenceChange} className='h-10' >
              {workPreferenceOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Col>
        <Col sm={6}>

          <FormControl fullWidth error={!!errors.aboutus}>
            <Form.Label>About Us</Form.Label>
            <TextField

              multiline
              minRows={2}
              variant="outlined"
              color="primary"
              {...register("aboutus", { required: "About us is required" })}
              placeholder="About Us"
              size="medium"
              fullWidth
            />
            {errors.aboutus && (
              <FormHelperText>{errors.aboutus.message}</FormHelperText>
            )}
          </FormControl>
        </Col>
      </Row>
      <div className="flex justify-end space-x-4">
      <Button type="button"  className="!bg-red-500  text-white hover:bg-red-600 focus:ring-2 focus:ring-red-500 px-4 py-2 rounded" onClick={onBack}>Back</Button>
      <Button type="submit"className="!bg-purple-600 font-bold text-white hover:bg-purple-700  focus:ring-2 focus:ring-purple-500 px-4 py-2 rounded" >Next</Button>
      </div>
    </Form>
  );
};

export default JobDetailsForm;