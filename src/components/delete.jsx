import styled from "@emotion/styled";

const ButtonDelete = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  gap: 10px;
  height: 70px;
  width: 100%;
  padding: 12px 16px;
  color: white;
  background-color: #efb60e;
  border-radius: 30px;
  cursor: pointer;
`;
const ContainerDelete = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 301px;
  height: 218px;
  padding: 32px;
  background-color: white;
  border-radius: 20px;
`;
const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
function DeleteProduct({ onYesClick, onNoClick }) {
  return (
    <CenterContainer>
      <ContainerDelete>
        <h1
          style={{
            color: "#333",
            textAlign: "center",
            fontSize: "22px",
            fontWeight: "600",
          }}
        >
          Are you sure?
        </h1>
        <ButtonDelete onClick={onYesClick} style={{ background: "#FA4A0C" }}>
          Yes delete it
        </ButtonDelete>
        <ButtonDelete onClick={onNoClick}>No, cancel it</ButtonDelete>
      </ContainerDelete>
    </CenterContainer>
  );
}
export default DeleteProduct;

// style={{
//             display: "flex",
//             width: "262px",
//             padding: "12px 16px",
//             justifyContent: "center",
//             alignItems: "center",
//             gap: "10px",
//             borderRadius: "30px",
//             background: "#FA4A0C",
//             border: "none",
//           }}
