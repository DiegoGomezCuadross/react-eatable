import styled from "@emotion/styled";

const ContainerFooter = styled.footer`
  bottom: 0;
  background: #f4f4f7;
  height: 100px;
  display: flex;
  align-items: center;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  margin: auto;
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

const Button = styled.button`
  display: flex;
  width: 310px;
  height: 70px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 30px;
  margin: auto;
  border: none;
  cursor: pointer;
  text-decoration: none;
  color: white;
`;
function Footer({ props, color = "#fa4a0c" }) {
  return (
    <ContainerFooter>
      <Button style={{ background: color }}>{props}</Button>
    </ContainerFooter>
  );
}

export default Footer;
