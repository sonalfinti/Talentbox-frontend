// // import node module libraries
// import { Fragment } from "react";
// // import { Link } from "react-router-dom";
// import { Container} from "react-bootstrap";

// // import sub components
// // import { ActiveProjects,  } from "sub-components";
// import ApplicantData from "./ApplicantData"; 


// const Dashboard = () => {
//   return (
//     <Fragment>
//       <div className="bg-primary pt-10 pb-21"></div>
//       <Container fluid className="mt-n22 px-6">
      

//         <ApplicantData />

        
//       </Container>
//     </Fragment>
//   );
// };
// export default Dashboard;

// Import required libraries
import React, { useState } from "react";
import { Table, Button, Form, Container, Row, Col, Card } from "react-bootstrap";

interface Applicant {
  id: number;
  applicantsName: string;
  technology: string;
  priority: string;
  priorityBadgeBg: string;
  operation: {
    edit: string;
    view: string;
    delete: string;
  };
  comments: {
    email: string;
    feedback: string;
  };
  status: string;
}

const ApplicantTable = () => {
  // Initial dummy data for the table
  const [applicants, setApplicants] = useState<Applicant[]>([
    {
      id: 1,
      applicantsName: "John Doe",
      technology: "React.js",
      priority: "Medium",
      priorityBadgeBg: "warning",
      operation: {
        edit: "Edit",
        view: "View",
        delete: "Delete",
      },
      comments: {
        email: "johndoe@example.com",
        feedback: "Great candidate, good understanding of front-end technologies.",
      },
      status: "Pending",
    },
    {
      id: 2,
      applicantsName: "Jane Smith",
      technology: "Node.js",
      priority: "High",
      priorityBadgeBg: "danger",
      operation: {
        edit: "Edit",
        view: "View",
        delete: "Delete",
      },
      comments: {
        email: "janesmith@example.com",
        feedback:
          "Strong back-end experience, needs improvement in database management.",
      },
      status: "Interview Scheduled",
    },
    {
      id: 3,
      applicantsName: "Alice Johnson",
      technology: "Angular",
      priority: "Low",
      priorityBadgeBg: "secondary",
      operation: {
        edit: "Edit",
        view: "View",
        delete: "Delete",
      },
      comments: {
        email: "alicej@example.com",
        feedback:
          "Good understanding of Angular, but lacks experience in building complex applications.",
      },
      status: "Reviewed",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState<keyof Applicant | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  // Function to handle search
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Function to handle sorting
  const handleSort = (column: keyof Applicant) => {
    const order = sortColumn === column && sortOrder === "asc" ? "desc" : "asc";
    setSortColumn(column);
    setSortOrder(order);

    const sortedApplicants = [...applicants].sort((a, b) => {
      if (a[column] < b[column]) return order === "asc" ? -1 : 1;
      if (a[column] > b[column]) return order === "asc" ? 1 : -1;
      return 0;
    });
    setApplicants(sortedApplicants);
  };

  // Filter applicants based on the search term
  const filteredApplicants = applicants.filter((applicant) =>
    applicant.applicantsName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container fluid>
      <Row className="mt-4 mb-3">
        <Col md={8}>
          <h4 className="mb-0">Applicants</h4>
        </Col>
        <Col md={4} className="text-end">
          <Button variant="primary" onClick={() => alert("Add New Applicant")}>
            Add New Applicant
          </Button>
        </Col>
      </Row>
      <Card>
        <Card.Header className="bg-white py-4">
          <Row>
            <Col md={8} xs={12}>
              <Form.Control
                type="search"
                placeholder="Search by Applicant Name"
                value={searchTerm}
                onChange={handleSearch}
              />
            </Col>
          </Row>
        </Card.Header>
        <Table responsive className="text-nowrap mb-0">
          <thead className="table-light">
            <tr>
              <th onClick={() => handleSort("id")} style={{ cursor: "pointer" }}>
                Sno.
              </th>
              <th
                onClick={() => handleSort("applicantsName")}
                style={{ cursor: "pointer" }}
              >
                Applicant Name
              </th>
              <th
                onClick={() => handleSort("technology")}
                style={{ cursor: "pointer" }}
              >
                Technology
              </th>
              <th>Operation</th>
              <th>Comments</th>
              <th
                onClick={() => handleSort("status")}
                style={{ cursor: "pointer" }}
              >
                Status
              </th>
              <th
                onClick={() => handleSort("priority")}
                style={{ cursor: "pointer" }}
              >
                Priority
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredApplicants.map((applicant) => (
              <tr key={applicant.id}>
                <td>{applicant.id}</td>
                <td>{applicant.applicantsName}</td>
                <td>{applicant.technology}</td>
                <td>
                  <Button variant="link" size="sm">
                    {applicant.operation.edit}
                  </Button>
                  <Button variant="link" size="sm">
                    {applicant.operation.view}
                  </Button>
                  <Button variant="link" size="sm">
                    {applicant.operation.delete}
                  </Button>
                </td>
                <td>
                  <strong>Email:</strong> {applicant.comments.email}
                  <br />
                  <strong>Feedback:</strong> {applicant.comments.feedback}
                </td>
                <td>{applicant.status}</td>
                <td>
                  <span
                    className={`badge bg-${applicant.priorityBadgeBg}`}
                  >
                    {applicant.priority}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Card.Footer className="bg-white text-center">
          <Button variant="link">View All Applicants</Button>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default ApplicantTable;

