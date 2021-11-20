import React, { useEffect, useState } from 'react'
import styled from "@emotion/styled";
import {  useHistory, useLocation } from 'react-router';
import { showStudent, updateStud} from '../services/StudentFetcher';
import { StyledDiv, ContainerForm } from '../pages/CreateStudent';
import { FontTitle } from '../components/UI/Typography';



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
        <FontTitle>Update  Student</FontTitle>
        <ContainerForm onSubmit={handleSubmit}>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="name">Name</label>
            <input id="name"
              name="name"
              type="text"
              placeholder={infouser.NAME}
            ></input>
          </div>
          
          <div class="form-group col-md-6">
            <label for="salary">Salary</label>
            <input id="salary"
              name="salary"
              type="salary"
              placeholder={infouser.SALARY}
            ></input>
          </div>

          <div class="form-group  col-md-6">
            <label for="job_name">Job Name</label>
            <input id="job_name"
              name="job_name"
              type="job_name"
              placeholder={infouser.JOB_NAME}
            ></input>
          </div>
        </div>
        <div className="button">
          <button className="btn btn-success">Update</button>
        </div>
      </ContainerForm>
      </div>
    </StyledDiv>
  );
}
