import styled from "@emotion/styled";
import { useEffect, useState } from 'react';
import { StudentItem } from "../components/StudentItem";
import { getAllStudents } from '../services/StudentFetcher';
import { NavLink, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { ButtonGreen } from "../components/UI/Buttons";
import { useHistory } from 'react-router';
import { FontTitle } from "../components/UI/Typography";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DivTable = styled.div`
  height: 70%;
  width:100%;
  padding:0px;
  overflow-y: auto;
  margin-bottom:25px;
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

  function ShowStudent(id){
    history.push(`/students/${id}/description`)
  }

  return (
    <Page>
      <FontTitle>CRUD Students</FontTitle>
        <DivTable>
          <table className="table table-hover">
            <thead className="table-active">
                      <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Action</th>
                      </tr>
                  </thead>
            <tbody>
              {students.map((student) => (
                    <tr key={student["ID"]}>
                              <td>{student["ID"]}</td>
                              <td>{student["NAME"]}</td>
                              <td>
                                  <div className="mb-3">
                                      <button className="btn btn-success" onClick={() => ShowStudent(student["ID"])}>Show</button>
                                  </div>
                              </td>
                    </tr>
              ))}    
            </tbody>
          </table>
          </DivTable>
        <button className="btn btn-success"  onClick = {createOneMore}>Create one more</button>
    </Page>
  );
}