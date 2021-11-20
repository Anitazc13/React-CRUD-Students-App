import React, { useEffect } from 'react'
import styled from "@emotion/styled";
import { StudentItem } from '../components/StudentItem';
import { deleteStudent, showStudent } from '../services/StudentFetcher';
import { useLocation } from 'react-router';

const StyledDiv = styled.div`
    width: 100vw;
    height: 84vh;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-between;
    .container{
    flex: 2;
    display: flex;
    flex-direction: column;
    .optionChange{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 10px;
        a {
          text-decoration: none;
          font-family: Source Sans Pro;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 20px;
          cursor: pointer;
          color: green;
        }
      }
    }
    margin-top: 20px;
`

export function Student(){
    const location = useLocation();
  const [infouser, SetInfouser] = React.useState([]);

  useEffect(() => {
    async function GetData() {
      const data = await showStudent(location.pathname.split("/")[2]);
      SetInfouser(await data);
    }
    GetData();
  },[]);

  async function destroyStudent(e){
    await deleteStudent(location.pathname.split("/")[2]);
  }

  return (
    <StyledDiv>
      <div className="container">
        <div className="optionChange">
          <a href={`/students/${location.pathname.split("/")[2]}/updatestudent`}>change</a>
          <a href="/" onClick={destroyStudent}>delete</a>
        </div>
        <StudentItem
          name={infouser["NAME"]}
          salary={infouser["SALARY"]}
          job_name={infouser["JOB_NAME"]}
        />
      </div>
    </StyledDiv>
  );
}