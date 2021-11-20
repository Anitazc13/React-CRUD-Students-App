import React, { useEffect, useState } from 'react'
import styled from "@emotion/styled";
import {  useHistory, useLocation } from 'react-router';
import { showStudent, updateStud} from '../services/StudentFetcher';
import { ButtonGreen } from '../components/UI/Buttons';

const ContainerForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 150px;
    width: 314px;
    height: 312px;
    background-color:white;
    background: #FFFFFF;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
    border-radius: 20px;
    .infoPersonal{
      display: flex;
      flex-direction: row;
      gap: 25px;
    }
`

const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap:8px;
    width: 214px;
    height: 300px;
    background-color:white;
    padding-top:12px;
    border-radius: 20px;
    margin-right: 11px;
`

const StyledDiv = styled.div`
    width: 414px;
    height: 736px;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 22px;
    .container{
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 38px;
    }
    margin-top: 50px;
    
`

export function UpdateProfile(){
    const [infouser, SetInfouser] = useState([]);
    const location = useLocation();
    const history = useHistory();
  useEffect(() => {
    showStudent(location.pathname.split("/")[2]).then(datauser => SetInfouser(datauser));
  },[])

  async function handleSubmit(e) {
    e.preventDefault();
    let newname = e.target.elements.name.value;
    let newsalary = e.target.elements.salary.value;
    let newjobName = e.target.elements.job_name.value;
    let forminfo= {"NAME": newname, "SALARY": newsalary,"JOB_NAME": newjobName};
    history.push("/")
    await updateStud((location.pathname.split("/")[2]),forminfo);
    
    }

  return (
    <StyledDiv>
      <div className="container">
        <label>Update personal Information for Student</label>
        <ContainerForm onSubmit={handleSubmit}>
        <div className="infoPersonal">
          <ContainerInfo>
            <input
              name="name"
              type="text"
              placeholder= {infouser.NAME}
            ></input>
            <input
              name="salary"
              type="number"
              placeholder={infouser.SALARY}
            ></input>
            <input
              name="job_name"
              type="text"
              placeholder={infouser.JOB_NAME}
              ></input>
          </ContainerInfo>
        </div>
        <div>
          <ButtonGreen>Update</ButtonGreen>
        </div>
      </ContainerForm>
      </div>
    </StyledDiv>
  );
}