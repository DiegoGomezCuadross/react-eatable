import styled from "@emotion/styled";
import Trash from "../images/delete-bin-fill.svg";
import Edit from "../images/edit-box-fill.svg";
import { Link } from "react-router-dom";

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
  position: relative;
  top: -101px;
  gap: 8px;
  margin-bottom: 18px;
  width: 156px;
  height: 158px;
  justify-content: flex-end;
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
  line-height: normal;
`;
const ContainerPrice = styled.div`
  color: var(--orange, #fa4a0c);
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  position: relative;
`;

const Image = styled.img`
  width: 130px;
  height: 130px;
  flex-shrink: 0;
  position: relative;
  top: -55px;
  object-fit: cover;
  margin: 0 13px 13px;
  border-radius: 130px;
  filter: drop-shadow(0px 20px 20px rgba(0, 0, 0, 0.2));
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

const ContainerIcon = styled.div`
  display: flex;
  padding: 0px 16px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;
function Food({ food, onDeleteClick }) {
  return (
    <div style={{ height: "250px" }}>
      <ContainerCard>
        <Link to={`/products/${food.id}`}>
          <Image src={food.picture_url} alt="Food image" />
        </Link>
        <ContainerText>
          <div style={{ width: "130px", height: "auto" }}>
            <ContainerTitle>{food.name}</ContainerTitle>
          </div>
          <div style={{ width: "auto", height: "auto" }}>
            <ContainerPrice>${(food.price / 100).toFixed(2)}</ContainerPrice>
          </div>
          <ContainerIcon>
            <div onClick={onDeleteClick}>
              <Icon
                src={Trash}
                alt="Trash image"
                style={{ width: "16px", height: "16px", cursor: "pointer" }}
              />
            </div>
            <Link to={`/products/edit/${food.id}`}>
              <Icon
                src={Edit}
                alt="Edit image"
                style={{ width: "16px", height: "16px" }}
              />
            </Link>
          </ContainerIcon>
        </ContainerText>
      </ContainerCard>
    </div>
  );
}
export default Food;
