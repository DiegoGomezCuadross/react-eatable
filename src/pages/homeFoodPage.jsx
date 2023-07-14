import styled from "@emotion/styled";
import Food from "../components/food";
import Footer from "../components/footer";
import { getProducts } from "../services/products-service";
import { useEffect, useState } from "react";

const Container = styled.div`
  max-width: 414px;
  max-height: 896px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 1px;
  background: #d1d5db;
  border-radius: 20px;
`;
const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-right: 30px;
  margin-left: 30px;
  max-height: 535px;
  overflow-y: auto;
  padding-top: 64px;
`;
function HomeFoodPage() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getProducts().then(setProducts).catch(console.log);
  }, []);
  console.log(products);

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
        {products?.map((product) => {
          return <Food key={product.id} {...product}></Food>;
        })}
      </ContainerCard>
      <Footer props={"Create Product"} />
    </Container>
  );
}

export default HomeFoodPage;
