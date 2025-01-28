// src/components/StepperForm/EducationalDetailsForm.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { educationalDetailsSchema } from '../../validation/validationSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Col, Row, Form } from 'react-bootstrap';

interface EducationalDetailsFormProps {
  onNext: (data: any) => void;
  onBack: () => void;
  initialValues: any;
}

const EducationalDetailsForm: React.FC<EducationalDetailsFormProps> = ({ onNext, onBack, initialValues }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(educationalDetailsSchema),
    defaultValues: initialValues,
  });

  const onSubmit = (data: any) => {
    console.log("Educational Details Submitted:", data);
    onNext(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="p-3">
      <Row className="mb-3">
        <Col sm={6}>
          <Form.Group controlId="degree">
            <Form.Label>Degree</Form.Label>
            <Form.Control
              type="text"
              {...register("degree")}
              isInvalid={!!errors.degree}
            />
            <Form.Control.Feedback type="invalid">
              {errors.degree?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col sm={6}>
          <Form.Group controlId="passingYear">
            <Form.Label>Passing Year</Form.Label>
            <Form.Control
              type="number"
              {...register("passingYear")}
              isInvalid={!!errors.passingYear}
            />
            <Form.Control.Feedback type="invalid">
              {errors.passingYear?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col sm={6}>
          <Form.Group controlId="totalExperience">
            <Form.Label>Total Experience</Form.Label>
            <Form.Control
              type="number"
              {...register("totalExperience")}
              isInvalid={!!errors.totalExperience}
            />
            <Form.Control.Feedback type="invalid">
              {errors.totalExperience?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col sm={6}>
          <Form.Group controlId="relevantSkillExperience">
            <Form.Label>Relevant Skill Experience</Form.Label>
            <Form.Control
              type="number"
              {...register("relevantSkillExperience")}
              isInvalid={!!errors.relevantSkillExperience}
            />
            <Form.Control.Feedback type="invalid">
              {errors.relevantSkillExperience?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col sm={6}>
          <Form.Group controlId="resume">
            <Form.Label>Resume (PDF)</Form.Label>
            <Form.Control
              type="file"
              {...register("resume")}
              isInvalid={!!errors.resume}
            />
            <Form.Control.Feedback type="invalid">
              {errors.resume?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col sm={6}>
          <Form.Group controlId="rating">
            <Form.Label>Rating (1-10)</Form.Label>
            <Form.Control
              type="number"
              {...register("rating")}
              isInvalid={!!errors.rating}
            />
            <Form.Control.Feedback type="invalid">
              {errors.rating?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Button type="button" onClick={onBack}>Back</Button>
      <Button type="submit">Next</Button>
    </Form>
  );
};

export default EducationalDetailsForm;