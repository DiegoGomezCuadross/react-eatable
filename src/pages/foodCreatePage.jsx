import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { showProduct } from "../services/products-service";
import { useEffect, useState } from "react";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import Input from "../components/input";

const Container = styled.div`
  max-width: 414px;
  max-height: 896px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 45px;
  background: #d1d5db;
  border-radius: 20px;
`;

const ContainerDescription = styled.div`
  display: flex;
  width: 297px;
  flex-direction: column;
  color: var(--black, #333);
  font-size: 16px;
  font-weight: 400;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 91px;
  margin-top: 27px;
`;
const Price = styled.p`
  color: var(--orange, #fa4a0c);
  text-align: center;
  font-size: 28px;
  font-weight: 600;
`;

const NameFood = styled.p`
  color: var(--black, #333);
  text-align: center;
  font-size: 28px;
  font-weight: 600;
`;

const ContainerNamePrice = styled.div`
  margin: auto;
`;

const ImageFood = styled.img`
  width: 241px;
  height: 241px;
  flex-shrink: 0;
  border-radius: 241px;
  margin: auto;
  margin-bottom: 91px;
  fill: #fff;
  filter: drop-shadow(0px 20px 20px rgba(0, 0, 0, 0.2));
`;

const Form = styled.form`
  display: flex;
  width: 414px;
  padding: 32px 32px 203px 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

function FoodCreatePage() {
  const { id } = useParams();

  const [products, setProducts] = useState(null);

  useEffect(() => {
    showProduct(id).then(setProducts).catch(console.log);
  }, []);

  if (!products) {
    return <div>Loading...</div>; // Muestra un mensaje de carga mientras se obtienen los datos
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
        Create Product
      </h1>
      <Form>
        <Input
          id="name"
          name="name"
          label={"Name"}
          type="text"
          placeholder=""
        ></Input>
        <Input
          id="price"
          name="price"
          label={"Price"}
          type="number"
          placeholder=""
        ></Input>
        <Input
          id="description"
          name="description"
          label={"Description"}
          type="text"
          placeholder=""
        ></Input>
        <Input
          id="category"
          name="category"
          label={"Category"}
          type="text"
          placeholder=""
        ></Input>
        <Input
          id="picture_url"
          name="picture"
          label={"Picture URL"}
          type="text"
          placeholder=""
        ></Input>
      </Form>
      <Link to={`/products`}>
        <Footer props={"Create"} />
      </Link>
    </Container>
  );
}

export default FoodCreatePage;
