import styled from "@emotion/styled";

const Name = styled.h3`
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  color: #333333;
  margin: 0;
`
const Price = styled.p`
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  color: gray;
  margin: 0;
  `

const Description  = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: gray;
  margin: 0;
  `

const Card = styled.div`
    margin-top: 38px;
    padding: 92px 13px 0 13px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 130px;
    height: 212px;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
    border-radius: 30px;
    justify-content: center;
    text-align: center;
`



export function StudentItem(props) {
  return (
    <Card key={props.key}>
        <Name>{props.name}</Name>
        <Price>${props.salary}</Price>
        <Description>{props.job_name}</Description>
    </Card>
  );
}