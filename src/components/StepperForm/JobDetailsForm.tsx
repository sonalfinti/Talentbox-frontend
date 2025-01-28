// src/components/StepperForm/JobDetailsForm.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { jobDetailsSchema } from '../../validation/validationSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Col, Row, Form } from 'react-bootstrap';

interface JobDetailsFormProps {
  onNext: (data: any) => void;
  onBack: () => void;
  initialValues: any;
}

const JobDetailsForm: React.FC<JobDetailsFormProps> = ({ onNext, onBack, initialValues }) => {
  const { register, handleSubmit, formState: { errors }, trigger } = useForm({
    resolver: yupResolver(jobDetailsSchema),
    defaultValues: initialValues,
  });

  const onSubmit = (data: any) => {
    console.log("Job Details Submitted:", data); // Ensure this is logged
    onNext(data); // Make sure onNext is passed and invoked correctly
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
            <Form.Label>Negotiation Email</Form.Label>
            <Form.Control
              type="email"
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
        <Col sm={6}>
          <Form.Group controlId="workpreference">
            <Form.Label>Work Preference</Form.Label>
            <Form.Control
              type="text"
              {...register("workpreference")}
              isInvalid={!!errors.workpreference}
            />
            <Form.Control.Feedback type="invalid">
              {errors.workpreference?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col sm={6}>
          <Form.Group controlId="aboutus">
            <Form.Label>About Us</Form.Label>
            <Form.Control
              type="text"
              {...register("aboutus")}
              isInvalid={!!errors.aboutus}
            />
            <Form.Control.Feedback type="invalid">
              {errors.aboutus?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Button type="button" onClick={onBack}>Back</Button>
      <Button type="submit">Next</Button>
    </Form>
  );
};

export default JobDetailsForm;