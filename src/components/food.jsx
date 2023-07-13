import styled from "@emotion/styled";
import foodImage from "../images/food.svg";

const ContainerCard = styled.div`
  width: 156px;
  height: 212px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0px 30px 60px 0px rgba(100, 57, 57, 0.1);
`;
const ContainerText = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 0 13px 0 13px;
`;

const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--black, #333);
  text-align: center;
  position: relative;
  font-size: 22px;
  font-weight: 600;
  top: -46px;
`;
const ContainerPrice = styled.div`
  color: var(--orange, #fa4a0c);
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  position: relative;
  top: -56px;
`;

const Image = styled.img`
  width: 130px;
  height: 130px;
  flex-shrink: 0;
  position: relative;
  top: -40px;
  object-fit: cover;
  margin: 0 13px 13px;
  border-radius: 130px;
  filter: drop-shadow(0px 20px 20px rgba(0, 0, 0, 0.2));
`;
function Food() {
  return (
    <div style={{ height: "250px" }}>
      <ContainerCard>
        <Image src={foodImage} alt="Food image" />
        <ContainerText>
          <ContainerTitle>Nueva comida</ContainerTitle>
          <ContainerPrice>$123</ContainerPrice>
        </ContainerText>
      </ContainerCard>
    </div>
  );
}
export default Food;
