import React, { useEffect, useState } from 'react'
import styled from "@emotion/styled";
import { useHistory, useLocation } from 'react-router';
import { showStudent, updateStud} from '../services/StudentFetcher';

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
    const [name, SetName] = useState();
    const [salary,SetSalary] = useState();
    const [job_name,SetJobName] = useState();
    const [infouser, SetInfouser] = useState([]);
    const location = useLocation();
  useEffect(() => {
    showStudent(location.pathname.split("/")[2]).then(datauser => SetInfouser(datauser));
  },[])

  async function handleSubmit(e) {
    e.preventDefault();
    let newname = e.target.elements.name.value;
    let newsalary = e.target.elements.salary.value;
    let newjobName = e.target.elements.job_name.value;
    let forminfo= {"NAME": newname, "SALARY": newsalary,"JOB_NAME": newjobName};
    console.log(forminfo)
    const response= await updateStud((location.pathname.split("/")[2]),forminfo);
    console.log(response);
    }

  return (
    <StyledDiv>
      <div className="container">
        <label>Update personal details</label>
        <ContainerForm onSubmit={handleSubmit}>
        <div className="infoPersonal">
          <ContainerInfo>
            <input
              name="name"
              type="text"
              placeholder="Ana Maria"
            ></input>
            <input
              name="salary"
              type="salary"
              placeholder="1500"
            ></input>
            <input
              name="job_name"
              type="job_name"
              placeholder="Full stack developer"
            ></input>
          </ContainerInfo>
        </div>
        <div>
          <button>Update</button>
        </div>
      </ContainerForm>
      </div>
    </StyledDiv>
  );
}