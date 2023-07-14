import styled from "@emotion/styled";
import { createProduct } from "../services/products-service";
import { useState } from "react";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import { Label, Input } from "./foodEditPage";

const Container = styled.div`
  max-width: 414px;
  max-height: 747px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 45px;
  background: #d1d5db;
  border-radius: 20px;
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
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "food",
    picture_url: "",
    description: "",
  });

  const { name, price, picture_url, description } = formData;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await createProduct(formData);
      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  }

  //   if (!products) {
  //     return <div>Loading...</div>; // Muestra un mensaje de carga mientras se obtienen los datos
  //   }

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
      <Form onSubmit={handleSubmit}>
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          placeholder=""
          value={name}
          onChange={handleChange}
        />
        <Label>Price</Label>
        <Input
          type="number"
          name="price"
          value={price}
          onChange={handleChange}
        />
        <Label>Description</Label>
        <Input
          type="text"
          name="description"
          value={description}
          onChange={handleChange}
        />
        <Label>Picture URl</Label>
        <Input
          type="text"
          name="picture_url"
          value={picture_url}
          onChange={handleChange}
          style={{ marginBottom: "154px" }}
        />
        <Footer props={"Create"} />
      </Form>
    </Container>
  );
}

export default FoodCreatePage;
