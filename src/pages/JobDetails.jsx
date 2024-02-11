import { useParams } from "react-router-dom";

const JobDetails = ({ match }) => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h3>Job title: { id }</h3>
      <p>
        Details: Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Labore ratione saepe velit vitae quo ut, incidunt porro culpa excepturi
        natus dignissimos atque laborum explicabo expedita?
      </p>
      <p>Required Qualifications:</p>
      <ul>
        <li>Graduate</li>
        <li>Technical Skills</li>
        <li>Communications skills</li>
      </ul>
    </div>
  );
};

export default JobDetails;
