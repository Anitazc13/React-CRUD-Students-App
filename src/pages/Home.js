import styled from "@emotion/styled";
import { useEffect, useState } from 'react';
import { StudentItem } from "../components/StudentItem";
import { getAllStudents } from '../services/StudentFetcher';
import { NavLink, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { ButtonGreen } from "../components/UI/Buttons";
import { useHistory } from 'react-router';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const List = styled.div`
  margin-top: 74px;
  display: flex;
  width: 100%;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  height: 480px;
  margin-bottom: 23px;
  margin-left:20px;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: display;
    width: 20px;
    color:green;
  }
  --ms-overflow-style: none;
  scrollbar-width: none;
  a {
    text-decoration: none;
    color: #333333;
  }
`;

export function Home() {
  const [students, setStudents] = useState([]);
  const history = useHistory();
  useEffect(() => {
    const getData = async () => {
      const response = await getAllStudents();
      console.log(response);
      setStudents(response);
    }
    getData();
  }, [

  ]);

  function createOneMore(e){
    history.push("/students/new")
  }

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
        <ButtonGreen onClick = {createOneMore}>Create one more</ButtonGreen>
    </Page>
  );
}