import styled from "@emotion/styled";
import Food from "../components/food";
import Footer from "../components/footer";
import { getProducts, deleteProduct } from "../services/products-service";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DeleteProduct from "../components/delete";

const Container = styled.div`
  max-width: 414px;
  max-height: 896px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 1px;
  background: #d1d5db;
  border-radius: 20px;
`;

const Modal = styled.div`
  position: absolute;
  position: absolute;
  top: 0px;
  background-color: rgb(23 23 23 / 75%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 414px;
  height: 747px;
  border-radius: 20px;
`;

const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-right: 30px;
  margin-left: 30px;
  max-height: 535px;
  padding-top: 64px;
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 10px; /* width of the entire scrollbar */
    height: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: none; /* color of the scroll thumb */
    border-radius: 10px; /* roundness of the scroll thumb */
    /* border: 3px solid orange; creates padding around scroll thumb */
  }
`;
function HomeFoodPage() {
  const [products, setProducts] = useState(null);
  const [isOpenDelModel, setIsOpenDelModel] = useState(false);
  const [productIdDelete, setProductIdDelete] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts().then(setProducts).catch(console.log);
  }, []);

  function handleDeleteClick(id) {
    setIsOpenDelModel(true);
    setProductIdDelete(id);
  }

  function handleCloseModal(event) {
    event.preventDefault();
    setIsOpenDelModel(false);
  }

  async function handleDeleteProduct() {
    try {
      await deleteProduct(productIdDelete);
    } catch (error) {
      console.log(error);
    }
    setIsOpenDelModel(false);
    navigate("/products");
  }

  return (
    <Container>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "48px",
          marginBottom: "32px",
          fontSize: "22px",
          fontWeight: "600",
          lineHeight: "normal",
        }}
      >
        Products Dashboard
      </h1>
      <ContainerCard>
        {products?.map((food, index) => {
          return (
            <Food
              onDeleteClick={() => handleDeleteClick(food.id)}
              food={food}
              key={`pro${index}`}
            />
          );
        })}
      </ContainerCard>
      <div></div>
      <Link to={`/create`}>
        <Footer props={"Create Product"} />
      </Link>
      {isOpenDelModel ? (
        <Modal>
          <DeleteProduct
            onYesClick={handleDeleteProduct}
            onNoClick={handleCloseModal}
          ></DeleteProduct>
        </Modal>
      ) : null}
    </Container>
  );
}

export default HomeFoodPage;
