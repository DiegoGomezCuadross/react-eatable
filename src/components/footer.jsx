import styled from "@emotion/styled";
import { LiaHomeSolid } from "react-icons/lia";
import { CiUser } from "react-icons/ci";

const ContainerFooter = styled.footer`
  bottom: 0;
  background: white;
  height: 80px;
  display: flex;
  align-items: center;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const ContainerIcon = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-left: 120px;
  margin-right: 120px;
`;
const Icon = styled.div`
  width: 30px;
  height: 30px;
  size: 30;
  cursor: pointer;
  transition: box-shadow 0.3s;

  &:hover {
    background: rgba(215, 100, 0, 0.4);
    box-shadow: 0px 0px 5px 5px rgba(215, 56, 0, 0.4);
    border-radius: 50%;
  }
`;
function Footer() {
  return (
    <ContainerFooter>
      <ContainerIcon>
        <Icon>
          <LiaHomeSolid style={{ width: "30px", height: "30px" }} />
        </Icon>
        <Icon>
          <CiUser style={{ width: "30px", height: "30px" }} />
        </Icon>
      </ContainerIcon>
    </ContainerFooter>
  );
}

export default Footer;
