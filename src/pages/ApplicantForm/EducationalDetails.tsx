



// import { useForm, Controller } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup';
// import { Box, TextField, Select, MenuItem, FormControl, InputLabel, FormHelperText, Button, Checkbox } from '@mui/material';
// import { useEffect, useState } from 'react';

// // Define FormData interface
// interface FormData {
//   degree: string;
//   passingYear: string;
//   appliedSkills: string[];
//   totalExperience: number;
//   relevantSkillExperience: number;
//   resume: FileList | null;
//   rating: number;
// }

// // Validation schema using Yup
// const validationSchema = Yup.object({
//   degree: Yup.string().required('Degree Name is required'),
//   passingYear: Yup.string().required('Passing Year is required'),
//   appliedSkills: Yup.array().min(1, 'At least one skill must be selected'),
//   totalExperience: Yup.number().positive('Total Experience must be a positive number').required('Total Experience is required'),
//   relevantSkillExperience: Yup.number().min(0, 'Relevant Skill Experience cannot be negative').required('Relevant Skill Experience is required'),
//   resume: Yup.mixed()
//   .required('Resume is required')
//   .test('fileType', 'Only PDF files are allowed', (value) => {
//     const files = value as FileList;  // Cast value to FileList
//     return files && files[0]?.type === 'application/pdf';
//   }),
//   rating: Yup.number().required('Rating is required').min(1, 'Rating must be between 1 and 10').max(10, 'Rating must be between 1 and 10'),
// });

// function EducationalDetails() {
//   const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
//     resolver: yupResolver(validationSchema),
//     defaultValues: {
//       passingYear: '',
//       rating: '',
//       appliedSkills: [],
//       totalExperience: 0,
//       relevantSkillExperience: 0,
//       resume: null,
//     },
//   });

//   const [skills, setSkills] = useState<string[]>([]);
//   const [years, setYears] = useState<number[]>([]);

//   useEffect(() => {
//     const fetchedSkills = ['JavaScript', 'React', 'Node.js', 'CSS'];
//     const fetchedYears = [2020, 2021, 2022, 2023];

//     setSkills(fetchedSkills);
//     setYears(fetchedYears);
//   }, []);

//   const onSubmit = (data: FormData) => {
//     console.log('Form Data:', data);
//     // Handle form submission logic
//   };

//   const handlePrevious = () => {
//     console.log('Previous clicked');
//     // Handle previous logic
//   };

//   return (
//     <div>
//       <h1>Education Details</h1>
//       <Box sx={{ padding: 2 }}>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <Box display="flex" flexDirection="row" flexWrap="wrap" gap={3}>
//             <Box sx={{ flex: '1 1 100%' }}>
//               <Controller
//                 name="degree"
//                 control={control}
//                 render={({ field }) => (
//                   <TextField
//                     {...field}
//                     fullWidth
//                     label="Degree Name"
//                     variant="outlined"
//                     error={!!errors.degree}
//                     helperText={errors.degree?.message}
//                   />
//                 )}
//               />
//             </Box>

//             {/* Passing Year Select */}
//             <Box sx={{ flex: '1 1 48%' }}>
//               <Controller
//                 name="passingYear"
//                 control={control}
//                 render={({ field }) => (
//                   <FormControl fullWidth error={!!errors.passingYear}>
//                     <InputLabel>Passing Year</InputLabel>
//                     <Select
//                       {...field}
//                       label="Passing Year"
//                       value={field.value || ''}
//                       onChange={(e) => field.onChange(e.target.value as string)}
//                     >
//                       <MenuItem value="">
//                         <em>None</em>
//                       </MenuItem>
//                       {years.map((year) => (
//                         <MenuItem key={year} value={year}>
//                           {year}
//                         </MenuItem>
//                       ))}
//                     </Select>
//                     {errors.passingYear && <FormHelperText>{errors.passingYear.message}</FormHelperText>}
//                   </FormControl>
//                 )}
//               />
//             </Box>


//             {/* Applied Skills Select */}
//             <Box sx={{ flex: '1 1 48%' }}>
//               <Controller
//                 name="appliedSkills"
//                 control={control}
//                 render={({ field }) => (
//                   <FormControl fullWidth error={!!errors.appliedSkills}>
//                     <InputLabel>Applied Skills</InputLabel>
//                     <Select
//                       {...field}
//                       multiple
//                       label="Applied Skills"
//                     >
//                       {skills.map((skill) => (
//                         <MenuItem key={skill} value={skill}>
//                           <Checkbox checked={field.value?.indexOf(skill) > -1} />
//                           {skill}
//                         </MenuItem>
//                       ))}
//                     </Select>
//                     {errors.appliedSkills && <FormHelperText>{errors.appliedSkills.message}</FormHelperText>}
//                   </FormControl>
//                 )}
//               />
//             </Box>

//             {/* Resume Upload */}
//             <Box sx={{ flex: '1 1 100%' }}>
//               <Controller
//                 name="resume"
//                 control={control}
//                 render={({ field }) => (
//                   <>
//                     <input
//                       {...field}
//                       type="file"
//                       accept=".pdf"
//                       onChange={(e) => field.onChange(e.target.files)}
//                       style={{ display: 'none' }}
//                       id="fileInput"
//                     />
//                     <Button onClick={() => document.getElementById('fileInput')?.click()}>
//                       Upload Resume
//                     </Button>
//                     {errors.resume && <FormHelperText>{errors.resume.message}</FormHelperText>}
//                   </>
//                 )}
//               />
//             </Box>

//             {/* Total Experience */}
//             <Box sx={{ flex: '1 1 48%' }}>
//               <Controller
//                 name="totalExperience"
//                 control={control}
//                 render={({ field }) => (
//                   <TextField
//                     {...field}
//                     fullWidth
//                     label="Total Experience (Years)"
//                     type="number"
//                     error={!!errors.totalExperience}
//                     helperText={errors.totalExperience?.message}
//                   />
//                 )}
//               />
//             </Box>

//             {/* Relevant Skill Experience */}
//             <Box sx={{ flex: '1 1 48%' }}>
//               <Controller
//                 name="relevantSkillExperience"
//                 control={control}
//                 render={({ field }) => (
//                   <TextField
//                     {...field}
//                     fullWidth
//                     label="Relevant Skill Experience (Years)"
//                     type="number"
//                     error={!!errors.relevantSkillExperience}
//                     helperText={errors.relevantSkillExperience?.message}
//                   />
//                 )}
//               />
//             </Box>

//             {/* Rating Dropdown */}
//             <Box sx={{ flex: '1 1 48%' }}>
//               <Controller
//                 name="rating"
//                 control={control}
//                 render={({ field }) => (
//                   <FormControl fullWidth error={!!errors.rating}>
//                     <InputLabel>Rating (out of 10)</InputLabel>
//                     <Select
//                       {...field}
//                       label="Rating (out of 10)"
//                       value={field.value || ''}
//                       onChange={(e) => field.onChange(Number(e.target.value))}
//                     >
//                       <MenuItem value="">
//                         <em>None</em>
//                       </MenuItem>
//                       {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
//                         <MenuItem key={value} value={value}>
//                           {value}
//                         </MenuItem>
//                       ))}
//                     </Select>
//                     {errors.rating && <FormHelperText>{errors.rating.message}</FormHelperText>}
//                   </FormControl>
//                 )}
//               />
//             </Box>


//             {/* Buttons */}
//             <Box sx={{ flex: '1 1 48%', textAlign: 'left' }}>
//               <Button variant="outlined" onClick={handlePrevious}>Previous</Button>
//             </Box>
//             <Box sx={{ flex: '1 1 48%', textAlign: 'right' }}>
//               <Button variant="contained" type="submit">Next</Button>
//             </Box>
//           </Box>
//         </form>
//       </Box>
//     </div>
//   );
// }

// export default EducationalDetails;


// import { useForm, Controller } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup';
// import { Box, TextField, Select, MenuItem, FormControl, InputLabel, FormHelperText, Button, Checkbox } from '@mui/material';
// import { useEffect, useState } from 'react';

// // Define FormData interface
// interface FormData {
//   degree: string;
//   passingYear: number; // Change to number
//   appliedSkills: string[];
//   totalExperience: number;
//   relevantSkillExperience: number;
//   resume: FileList | undefined; // Change to undefined
//   rating: number;
// }

// // Validation schema using Yup
// const validationSchema = Yup.object({
//   degree: Yup.string().required('Degree Name is required'),
//   passingYear: Yup.number().required('Passing Year is required'),
//   appliedSkills: Yup.array().min(1, 'At least one skill must be selected'),
//   totalExperience: Yup.number().positive('Total Experience must be a positive number').required('Total Experience is required'),
//   relevantSkillExperience: Yup.number().min(0, 'Relevant Skill Experience cannot be negative').required('Relevant Skill Experience is required'),
//   resume: Yup.mixed()
//     .required('Resume is required')
//     .test('fileType', 'Only PDF files are allowed', (value) => {
//       const files = value as FileList;  // Cast value to FileList
//       return files && files[0]?.type === 'application/pdf';
//     }),
//   rating: Yup.number().required('Rating is required').min(1, 'Rating must be between 1 and 10').max(10, 'Rating must be between 1 and 10'),
// });

// function EducationalDetails() {
//   const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
//     resolver: yupResolver(validationSchema),
//     defaultValues: {
//       passingYear: 0,
//       rating: 0,
//       appliedSkills: [],
//       totalExperience: 0,
//       relevantSkillExperience: 0,
//       resume: undefined,
//     },
//   });

//   const [skills, setSkills] = useState<string[]>([]);
//   const [years, setYears] = useState<number[]>([]);

//   useEffect(() => {
//     const fetchedSkills = ['JavaScript', 'React', 'Node.js', 'CSS'];
//     const fetchedYears = [2020, 2021, 2022, 2023];

//     setSkills(fetchedSkills);
//     setYears(fetchedYears);
//   }, []);

//   const onSubmit = (data: FormData) => {
//     console.log('Form Data:', data);
//     // Handle form submission logic
//   };

//   const handlePrevious = () => {
//     console.log('Previous clicked');
//     // Handle previous logic
//   };

//   return (
//     <div>
//       <h1>Education Details</h1>
//       <Box sx={{ padding: 2 }}>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <Box display="flex" flexDirection="row" flexWrap="wrap" gap={3}>
//             <Box sx={{ flex: '1 1 100%' }}>
//               <Controller
//                 name="degree"
//                 control={control}
//                 render={({ field }) => (
//                   <TextField
//                     {...field}
//                     fullWidth
//                     label="Degree Name"
//                     variant="outlined"
//                     error={!!errors.degree}
//                     helperText={errors.degree?.message}
//                   />
//                 )}
//               />
//             </Box>

//             {/* Passing Year Select */}
//             <Box sx={{ flex: '1 1 48%' }}>
//               <Controller
//                 name="passingYear"
//                 control={control}
//                 render={({ field }) => (
//                   <FormControl fullWidth error={!!errors.passingYear}>
//                     <InputLabel>Passing Year</InputLabel>
//                     <Select
//                       {...field}
//                       label="Passing Year"
//                       value={field.value || ''}
//                       onChange={(e) => field.onChange(Number(e.target.value))} // Convert to number
//                     >
//                       <MenuItem value="">
//                         <em>None</em>
//                       </MenuItem>
//                       {years.map((year) => (
//                         <MenuItem key={year} value={year}>
//                           {year}
//                         </MenuItem>
//                       ))}
//                     </Select>
//                     {errors.passingYear && <FormHelperText>{errors.passingYear.message}</FormHelperText>}
//                   </FormControl>
//                 )}
//               />
//             </Box>


//             {/* Applied Skills Select */}
//             <Box sx={{ flex: '1 1 48%' }}>
//               <Controller
//                 name="appliedSkills"
//                 control={control}
//                 render={({ field }) => (
//                   <FormControl fullWidth error={!!errors.appliedSkills}>
//                     <InputLabel>Applied Skills</InputLabel>
//                     <Select
//                       {...field}
//                       multiple
//                       label="Applied Skills"
//                     >
//                       {skills.map((skill) => (
//                         <MenuItem key={skill} value={skill}>
//                           <Checkbox checked={field.value?.indexOf(skill) > -1} />
//                           {skill}
//                         </MenuItem>
//                       ))}
//                     </Select>
//                     {errors.appliedSkills && <FormHelperText>{errors.appliedSkills.message}</FormHelperText>}
//                   </FormControl>
//                 )}
//               />
//             </Box>

//             {/* Resume Upload */}
//             <Box sx={{ flex: '1 1 100%' }}>
//               <Controller
//                 name="resume"
//                 control={control}
//                 render={({ field }) => (
//                   <>
//                     <input
//                       type="file"
//                       accept=".pdf"
//                       onChange={(e) => field.onChange(e.target.files)}
//                       style={{ display: 'none' }}
//                       id="fileInput"
//                     />
//                     <Button onClick={() => document.getElementById('fileInput')?.click()}>
//                       Upload Resume
//                     </Button>
//                     {errors.resume && <FormHelperText>{errors.resume.message}</FormHelperText>}
//                   </>
//                 )}
//               />
//             </Box>

//             {/* Total Experience */}
//             <Box sx={{ flex: '1 1 48%' }}>
//               <Controller
//                 name="totalExperience"
//                 control={control}
//                 render={({ field }) => (
//                   <TextField
//                     {...field}
//                     fullWidth
//                     label="Total Experience (Years)"
//                     type="number"
//                     error={!!errors.totalExperience}
//                     helperText={errors.totalExperience?.message}
//                   />
//                 )}
//               />
//             </Box>

//             {/* Relevant Skill Experience */}
//             <Box sx={{ flex: '1 1 48%' }}>
//               <Controller
//                 name="relevantSkillExperience"
//                 control={control}
//                 render={({ field }) => (
//                   <TextField
//                     {...field}
//                     fullWidth
//                     label="Relevant Skill Experience (Years)"
//                     type="number"
//                     error={!!errors.relevantSkillExperience}
//                     helperText={errors.relevantSkillExperience?.message}
//                   />
//                 )}
//               />
//             </Box>

//             {/* Rating Dropdown */}
//             <Box sx={{ flex: '1 1 48%' }}>
//               <Controller
//                 name="rating"
//                 control={control}
//                 render={({ field }) => (
//                   <FormControl fullWidth error={!!errors.rating}>
//                     <InputLabel>Rating (out of 10)</InputLabel>
//                     <Select
//                       {...field}
//                       label="Rating (out of 10)"
//                       value={field.value || ''}
//                       onChange={(e) => field.onChange(Number(e.target.value))} // Convert to number
//                     >
//                       <MenuItem value="">
//                         <em>None</em>
//                       </MenuItem>
//                       {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
//                         <MenuItem key={value} value={value}>
//                           {value}
//                         </MenuItem>
//                       ))}
//                     </Select>
//                     {errors.rating && <FormHelperText>{errors.rating.message}</FormHelperText>}
//                   </FormControl>
//                 )}
//               />
//             </Box>

//             <Box sx={{ flex: '1 1 48%', textAlign: 'left' }}>
//               <Button variant="outlined" onClick={handlePrevious}>Previous</Button>
//             </Box>
//             <Box sx={{ flex: '1 1 48%', textAlign: 'right' }}>
//               <Button variant="contained" type="submit">Next</Button>
//             </Box>
//           </Box>
//         </form>
//       </Box>
//     </div>
//   );
// }

// export default EducationalDetails;


// import { useForm, Controller } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup';
// import { Box, TextField, Select, MenuItem, FormControl, InputLabel, FormHelperText, Button, Checkbox } from '@mui/material';
// import { useEffect, useState } from 'react';

// // Define FormData interface
// interface FormData {
//   degree: string;
//   passingYear: number;
//   appliedSkills: string[];
//   totalExperience: number;
//   relevantSkillExperience: number;
//   resume: FileList | null; // Change to FileList | null
//   rating: number;
// }

// // Validation schema using Yup
// const validationSchema = Yup.object({
//   degree: Yup.string().required('Degree Name is required'),
//   passingYear: Yup.number().required('Passing Year is required'),
//   appliedSkills: Yup.array().min(1, 'At least one skill must be selected'),
//   totalExperience: Yup.number().positive('Total Experience must be a positive number').required('Total Experience is required'),
//   relevantSkillExperience: Yup.number().min(0, 'Relevant Skill Experience cannot be negative').required('Relevant Skill Experience is required'),
//   resume: Yup.mixed()
//     .required('Resume is required')
//     .test('fileType', 'Only PDF files are allowed', (value) => {
//       const files = value as FileList;  // Cast value to FileList
//       return files && files[0]?.type === 'application/pdf';
//     }),
//   rating: Yup.number().required('Rating is required').min(1, 'Rating must be between 1 and 10').max(10, 'Rating must be between 1 and 10'),
// });

// function EducationalDetails() {
//   const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
//     resolver: yupResolver(validationSchema),
//     defaultValues: {
//       passingYear: 0,
//       rating: 0,
//       appliedSkills: [],
//       totalExperience: 0,
//       relevantSkillExperience: 0,
//       resume: null, // Change to null
//     },
//   });

//   const [skills, setSkills] = useState<string[]>([]);
//   const [years, setYears] = useState<number[]>([]);

//   useEffect(() => {
//     const fetchedSkills = ['JavaScript', 'React', 'Node.js', 'CSS'];
//     const fetchedYears = [2020, 2021, 2022, 2023];

//     setSkills(fetchedSkills);
//     setYears(fetchedYears);
//   }, []);

//   const onSubmit = (data: FormData) => {
//     console.log('Form Data:', data);
//     // Handle form submission logic
//   };

//   const handlePrevious = () => {
//     console.log('Previous clicked');
//     // Handle previous logic
//   };

//   return (
//     <div>
//       <h1>Education Details</h1>
//       <Box sx={{ padding: 2 }}>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <Box display="flex" flexDirection="row" flexWrap="wrap" gap={3}>
//             <Box sx={{ flex: '1 1 100%' }}>
//               <Controller
//                 name="degree"
//                 control={control}
//                 render={({ field }) => (
//                   <TextField
//                     {...field}
//                     fullWidth
//                     label="Degree Name"
//                     variant="outlined"
//                     error={!!errors.degree}
//                     helperText={errors.degree?.message}
//                   />
//                 )}
//               />
//             </Box>

//             {/* Passing Year Select */}
//             <Box sx={{ flex: '1 1 48%' }}>
//               <Controller
//                 name="passingYear"
//                 control={control}
//                 render={({ field }) => (
//                   <FormControl fullWidth error={!!errors.passingYear}>
//                     <InputLabel>Passing Year</InputLabel>
//                     <Select
//                       {...field}
//                       label="Passing Year"
//                       value={field.value || ''}
//                       onChange={(e) => field.onChange(Number(e.target.value))} // Convert to number
//                     >
//                       <MenuItem value="">
//                         <em>None</em>
//                       </MenuItem>
//                       {years.map((year) => (
//                         <MenuItem key={year} value={year}>
//                           {year}
//                         </MenuItem>
//                       ))}
//                     </Select>
//                     {errors.passingYear && <FormHelperText>{errors.passingYear.message}</FormHelperText>}
//                   </FormControl>
//                 )}
//               />
//             </Box>

//             {/* Applied Skills Select */}
//             <Box sx={{ flex: '1 1 48%' }}>
//               <Controller
//                 name="appliedSkills"
//                 control={control}
//                 render={({ field }) => (
//                   <FormControl fullWidth error={!!errors.appliedSkills}>
//                     <InputLabel>Applied Skills</InputLabel>
//                     <Select
//                       {...field}
//                       multiple
//                       label="Applied Skills"
//                     >
//                       {skills.map((skill) => (
//                         <MenuItem key={skill} value={skill}>
//                           <Checkbox checked={field.value?.indexOf(skill) > -1} />
//                           {skill}
//                         </MenuItem>
//                       ))}
//                     </Select>
//                     {errors.appliedSkills && <FormHelperText>{errors.appliedSkills.message}</FormHelperText>}
//                   </FormControl>
//                 )}
//               />
//             </Box>

//             {/* Resume Upload */}
//             <Box sx={{ flex: '1 1 100%' }}>
//               <Controller
//                 name="resume"
//                 control={control}
//                 render={({ field }) => (
//                   <>
//                     <input
//                       type="file"
//                       accept=".pdf"
//                       onChange={(e) => field.onChange(e.target.files)}
//                       style={{ display: 'none' }}
//                       id="fileInput"
//                     />
//                     <Button onClick={() => document.getElementById('fileInput')?.click()}>
//                       Upload Resume
//                     </Button>
//                     {errors.resume && <FormHelperText>{errors.resume.message}</FormHelperText>}
//                   </>
//                 )}
//               />
//             </Box>

//             {/* Total Experience */}
//             <Box sx={{ flex: '1 1 48%' }}>
//               <Controller
//                 name="totalExperience"
//                 control={control}
//                 render={({ field }) => (
//                   <TextField
//                     {...field}
//                     fullWidth
//                     label="Total Experience (Years)"
//                     type="number"
//                     error={!!errors.totalExperience}
//                     helperText={errors.totalExperience?.message}
//                   />
//                 )}
//               />
//             </Box>

//             {/* Relevant Skill Experience */}
//             <Box sx={{ flex: '1 1 48%' }}>
//               <Controller
//                 name="relevantSkillExperience"
//                 control={control}
//                 render={({ field }) => (
//                   <TextField
//                     {...field}
//                     fullWidth
//                     label="Relevant Skill Experience (Years)"
//                     type="number"
//                     error={!!errors.relevantSkillExperience}
//                     helperText={errors.relevantSkillExperience?.message}
//                   />
//                 )}
//               />
//             </Box>

//             {/* Rating Dropdown */}
//             <Box sx={{ flex: '1 1 48%' }}>
//               <Controller
//                 name="rating"
//                 control={control}
//                 render={({ field }) => (
//                   <FormControl fullWidth error={!!errors.rating}>
//                     <InputLabel>Rating (out of 10)</InputLabel>
//                     <Select
//                       {...field}
//                       label="Rating (out of 10)"
//                       value={field.value || ''}
//                       onChange={(e) => field.onChange(Number(e.target.value))} // Convert to number
//                     >
//                       <MenuItem value="">
//                         <em>None</em>
//                       </MenuItem>
//                       {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
//                         <MenuItem key={value} value={value}>
//                           {value}
//                         </MenuItem>
//                       ))}
//                     </Select>
//                     {errors.rating && <FormHelperText>{errors.rating.message}</FormHelperText>}
//                   </FormControl>
//                 )}
//               />
//             </Box>

//             <Box sx={{ flex: '1 1 48%', textAlign: 'left' }}>
//               <Button variant="outlined" onClick={handlePrevious}>Previous</Button>
//             </Box>
//             <Box sx={{ flex: '1 1 48%', textAlign: 'right' }}>
//               <Button variant="contained" type="submit">Next</Button>
//             </Box>
//           </Box>
//         </form>
//       </Box>
//     </div>
//   );
// }

// export default EducationalDetails;


import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Box, TextField, Select, MenuItem, FormControl, InputLabel, FormHelperText, Button, Checkbox } from '@mui/material';
import { useEffect, useState } from 'react';

// Define FormData interface
interface FormData {
  degree: string;
  passingYear: number;
  appliedSkills: string[];
  totalExperience: number;
  relevantSkillExperience: number;
  resume: FileList | null; // Change to FileList | null
  rating: number;
}

// Validation schema using Yup
const validationSchema = Yup.object({
  degree: Yup.string().required('Degree Name is required'),
  passingYear: Yup.number().required('Passing Year is required'),
  appliedSkills: Yup.array().min(1, 'At least one skill must be selected'),
  totalExperience: Yup.number().positive('Total Experience must be a positive number').required('Total Experience is required'),
  relevantSkillExperience: Yup.number().min(0, 'Relevant Skill Experience cannot be negative').required('Relevant Skill Experience is required'),
  resume: Yup.mixed()
    .required('Resume is required')
    .test('fileType', 'Only PDF files are allowed', (value) => {
      const files = value as FileList;  // Cast value to FileList
      return files && files[0]?.type === 'application/pdf';
    }),
  rating: Yup.number().required('Rating is required').min(1, 'Rating must be between 1 and 10').max(10, 'Rating must be between 1 and 10'),
});

function EducationalDetails() {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      passingYear: 0,
      rating: 0,
      appliedSkills: [],
      totalExperience: 0,
      relevantSkillExperience: 0,
      resume: null, // Change to null
    },
  });

  const [skills, setSkills] = useState<string[]>([]);
  const [years, setYears] = useState<number[]>([]);

  useEffect(() => {
    const fetchedSkills = ['JavaScript', 'React', 'Node.js', 'CSS'];
    const fetchedYears = [2020, 2021, 2022, 2023];

    setSkills(fetchedSkills);
    setYears(fetchedYears);
  }, []);

  const onSubmit = (data: FormData) => {
    console.log('Form Data:', data);
    // Handle form submission logic
  };

  const handlePrevious = () => {
    console.log('Previous clicked');
    // Handle previous logic
  };

  return (
    <div>
      <h1>Education Details</h1>
      <Box sx={{ padding: 2 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box display="flex" flexDirection="row" flexWrap="wrap" gap={3}>
            <Box sx={{ flex: '1 1 100%' }}>
              <Controller
                name="degree"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Degree Name"
                    variant="outlined"
                    error={!!errors.degree}
                    helperText={errors.degree?.message}
                  />
                )}
              />
            </Box>

            {/* Passing Year Select */}
            <Box sx={{ flex: '1 1 48%' }}>
              <Controller
                name="passingYear"
                control={control}
                render={({ field }) => (
                  <FormControl fullWidth error={!!errors.passingYear}>
                    <InputLabel>Passing Year</InputLabel>
                    <Select
                      {...field}
                      label="Passing Year"
                      value={field.value || ''}
                      onChange={(e) => field.onChange(Number(e.target.value))} // Convert to number
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {years.map((year) => (
                        <MenuItem key={year} value={year}>
                          {year}
                        </MenuItem>
                      ))}
                    </Select>
                    {errors.passingYear && <FormHelperText>{errors.passingYear.message}</FormHelperText>}
                  </FormControl>
                )}
              />
            </Box>

            {/* Applied Skills Select */}
            <Box sx={{ flex: '1 1 48%' }}>
              <Controller
                name="appliedSkills"
                control={control}
                render={({ field }) => (
                  <FormControl fullWidth error={!!errors.appliedSkills}>
                    <InputLabel>Applied Skills</InputLabel>
                    <Select
                      {...field}
                      multiple
                      label="Applied Skills"
                    >
                      {skills.map((skill) => (
                        <MenuItem key={skill} value={skill}>
                          <Checkbox checked={field.value?.indexOf(skill) > -1} />
                          {skill}
                        </MenuItem>
                      ))}
                    </Select>
                    {errors.appliedSkills && <FormHelperText>{errors.appliedSkills.message}</FormHelperText>}
                  </FormControl>
                )}
              />
            </Box>

            {/* Resume Upload */}
            <Box sx={{ flex: '1 1 100%' }}>
              <Controller
                name="resume"
                control={control}
                render={({ field }) => (
                  <>
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={(e) => field.onChange(e.target.files)}
                      style={{ display: 'none' }}
                      id="fileInput"
                    />
                    <Button onClick={() => document.getElementById('fileInput')?.click()}>
                      Upload Resume
                    </Button>
                    {errors.resume && <FormHelperText>{errors.resume.message}</FormHelperText>}
                  </>
                )}
              />
            </Box>

            {/* Total Experience */}
            <Box sx={{ flex: '1 1 48%' }}>
              <Controller
                name="totalExperience"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Total Experience (Years)"
                    type="number"
                    error={!!errors.totalExperience}
                    helperText={errors.totalExperience?.message}
                  />
                )}
              />
            </Box>

            {/* Relevant Skill Experience */}
            <Box sx={{ flex: '1 1 48%' }}>
              <Controller
                name="relevantSkillExperience"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Relevant Skill Experience (Years)"
                    type="number"
                    error={!!errors.relevantSkillExperience}
                    helperText={errors.relevantSkillExperience?.message}
                  />
                )}
              />
            </Box>

            {/* Rating Dropdown */}
            <Box sx={{ flex: '1 1 48%' }}>
              <Controller
                name="rating"
                control={control}
                render={({ field }) => (
                  <FormControl fullWidth error={!!errors.rating}>
                    <InputLabel>Rating (out of 10)</InputLabel>
                    <Select
                      {...field}
                      label="Rating (out of 10)"
                      value={field.value || ''}
                      onChange={(e) => field.onChange(Number(e.target.value))} // Convert to number
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                        <MenuItem key={value} value={value}>
                          {value}
                        </MenuItem>
                      ))}
                    </Select>
                    {errors.rating && <FormHelperText>{errors.rating.message}</FormHelperText>}
                  </FormControl>
                )}
              />
            </Box>

            {/* <Box sx={{ flex: '1 1 48%', textAlign: 'left' }}>
              <Button variant="outlined" onClick={handlePrevious}>Previous</Button>
            </Box>
            <Box sx={{ flex: '1 1 48%', textAlign: 'right' }}>
              <Button variant="contained" type="submit">Next</Button> */}
            {/* </Box> */}
          </Box>
        </form>
      </Box>
    </div>
  );
}

export default EducationalDetails;