import styled from "@emotion/styled";

export const Name = styled.h3`
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #333333;
  margin: 0;
`
export const Price = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: gray;
  margin: 0;
  `

export const Description  = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: gray;
  margin: 0;
  `

const Card = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
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
        <Price>{props.salary}</Price>
        <Description>{props.job_name}</Description>
    </Card>
  );
}