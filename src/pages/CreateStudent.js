import React, { useEffect, useState } from 'react'
import styled from "@emotion/styled";
import { useHistory, useLocation } from 'react-router';
import { createStudent } from '../services/StudentFetcher';
import { ButtonGreen } from '../components/UI/Buttons';
import { FontTitle } from '../components/UI/Typography';

export const ContainerForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 150px;
    width: 314px;
    height: 312px;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
    border-radius: 20px;

`

export const StyledDiv = styled.div`
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    align-items: center;
  label {
    margin-bottom:10px;
  }
  input{
    width:100%;
    margin-bottom:15px;
  }
  .button{
    display: flex;
    justify-content: center;
  }
`

export function CreateProfile(){
    const history = useHistory();
    const location = useLocation();

  async function handleSubmit(e) {
        e.preventDefault();
        let newname = e.target.elements.name.value;
        let newsalary = e.target.elements.salary.value;
        let newjobName = e.target.elements.job_name.value;
        let forminfo= {"NAME": newname, "SALARY": newsalary,"JOB_NAME": newjobName};
        await createStudent(forminfo);
        history.push("/")
    }

  return (
    <StyledDiv>
      <div className="container">
        <FontTitle>New Student</FontTitle>
        <ContainerForm onSubmit={handleSubmit}>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="name">Name</label>
            <input id="name"
              name="name"
              type="text"
              placeholder="Ana Maria"
            ></input>
          </div>
          
          <div class="form-group col-md-6">
            <label for="salary">Salary</label>
            <input id="salary"
              name="salary"
              type="salary"
              placeholder="1500"
            ></input>
          </div>

          <div class="form-group  col-md-6">
            <label for="job_name">Job Name</label>
            <input id="job_name"
              name="job_name"
              type="job_name"
              placeholder="Full stack developer"
            ></input>
          </div>
        </div>
        <div className="button">
          <button className="btn btn-success">Create</button>
        </div>
      </ContainerForm>
      </div>
    </StyledDiv>
  );
}
