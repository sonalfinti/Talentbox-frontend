// src/components/StepperForm/PreviewForm.tsx
import React from 'react';
import { Button, Typography } from '@mui/material';

interface PreviewFormProps {
  data: {
    personal: any;
    education: any;
    job: any;
  };
  onEdit: (step: number) => void; // Function to go back to the specific step
  onSubmit: () => void; // Function to handle final submission
}

const PreviewForm: React.FC<PreviewFormProps> = ({ data, onEdit, onSubmit }) => {
  const formattedDate = new Date(data.personal.dateOfBirth).toLocaleDateString("en-IN"); 
  return (
    
    <div>
      <Typography variant="h6">Preview Your Details</Typography>
      
      <Typography variant="h7">Personal Details:</Typography>
      <Typography>First Name: {data.personal.firstName}</Typography>
      <Typography>Last Name: {data.personal.lastName}</Typography>
      <Typography>Email: {data.personal.email}</Typography>
      <Typography>Phone Number: {data.personal.phoneNumber}</Typography>
      <Typography>Date of Birth: {formattedDate}</Typography>
      <Typography>Pincode: {data.personal.pincode}</Typography>
      <Typography>Full Address: {data.personal.fullAddress}</Typography>

      <Typography variant="h7">Educational Details:</Typography>
      <Typography>Degree: {data.education.degree}</Typography>
      <Typography>Passing Year: {data.education.passingYear}</Typography>
      <Typography>Total Experience: {data.education.totalExperience}</Typography>
      <Typography>Relevant Skill Experience: {data.education.relevantSkillExperience}</Typography>
      <Typography>Rating: {data.education.rating}</Typography>

      <Typography variant="h7">Job Details:</Typography>
      <Typography>Expected Package: {data.job.expectedpkg}</Typography>
      <Typography>Current Package: {data.job.currentpkg}</Typography>
      <Typography>Negotiation Email: {data.job.negotiation}</Typography>
      <Typography>Notice Period: {data.job.noticePeriod}</Typography>
      <Typography>Work Preference: {data.job.workpreference}</Typography>
      <Typography>About Us: {data.job.aboutus}</Typography>

      <Button onClick={() => onEdit(0)}>Edit Personal Details</Button>
      <Button onClick={() => onEdit(1)}>Edit Educational Details</Button>
      <Button onClick={() => onEdit(2)}>Edit Job Details</Button>
      <Button onClick={onSubmit}>Submit</Button>
    </div>
  );
};

export default PreviewForm;

// // src/components/StepperForm/PreviewForm.tsx
// import React from 'react';
// import { Button, Typography } from '@mui/material';

// interface PreviewFormProps {
//   data: {
//     personal: any;
//     education: any;
//     job: any;
//   };
//   onEdit: (step: number) => void; // Function to go back to the specific step
//   onSubmit: () => void; // Function to handle final submission
// }

// const PreviewForm: React.FC<PreviewFormProps> = ({ data, onEdit, onSubmit }) => {
//   return (
//     <div>
//       <Typography variant="h6">Preview Your Details</Typography>
      
//       <Typography variant="h7">Personal Details:</Typography>
//       <Typography>First Name: {data.personal.firstName}</Typography>
//       <Typography>Last Name: {data.personal.lastName}</Typography>
//       <Typography>Email: {data.personal.email}</Typography>
//       <Typography>Phone Number: {data.personal.phoneNumber}</Typography>
//       <Typography>Date of Birth: {new Date(data.personal.dateOfBirth).toLocaleDateString()}</Typography> {/* Format Date */}
//       <Typography>Pincode: {data.personal.pincode}</Typography>
//       <Typography>Full Address: {data.personal.fullAddress}</Typography>

//       <Typography variant="h7">Educational Details:</Typography>
//       <Typography>Degree: {data.education.degree}</Typography>
//       <Typography>Passing Year: {data.education.passingYear}</Typography>
//       <Typography>Total Experience: {data.education.totalExperience}</Typography>
//       <Typography>Relevant Skill Experience: {data.education.relevantSkillExperience}</Typography>
//       <Typography>Rating: {data.education.rating}</Typography>

//       <Typography variant="h7">Job Details:</Typography>
//       <Typography>Expected Package: {data.job.expectedpkg}</Typography>
//       <Typography>Current Package: {data.job.currentpkg}</Typography>
//       <Typography>Negotiation Email: {data.job.negotiation}</Typography>
//       <Typography>Notice Period: {data.job.noticePeriod}</Typography>
//       <Typography>Work Preference: {data.job.workpreference}</Typography>
//       <Typography>About Us: {data.job.aboutus}</Typography>

//       <Button onClick={() => onEdit(0)}>Edit Personal Details</Button>
//       <Button onClick={() => onEdit(1)}>Edit Educational Details</Button>
//       <Button onClick={() => onEdit(2)}>Edit Job Details</Button>
//       <Button onClick={onSubmit}>Submit</Button>
//     </div>
//   );
// };

// export default PreviewForm;