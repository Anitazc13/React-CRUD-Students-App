import styled from "@emotion/styled";
import { useEffect, useState } from 'react';
import { StudentItem } from "../components/StudentItem";
import { getAllStudents } from '../services/StudentFetcher';
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const List = styled.div`
  margin-top: 134px;
  display: flex;
  width: 100%;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 160px;
  a {
    text-decoration: none;
    color: #333333;
  }
`;

export function Home() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await getAllStudents();
      console.log(response);
      setStudents(response);
    }
    getData();
  }, [

  ]);

  return (
    <Page>
      <List>
        {students.map((student) => (
            <Link to={`/students/${student["ID"]}/description`} key={student["ID"]}>
                <StudentItem
                key={student["ID"]}
                name={student["NAME"]}
                salary={student["SALARY"]}
                job_name={student["JOB_NAME"]} 
                />
            </Link>
        ))}
      </List>
    </Page>
  );
}