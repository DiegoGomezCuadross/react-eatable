import styled from "@emotion/styled";
import { showProduct, updateProduct } from "../services/products-service";
import { useEffect, useState } from "react";
import Footer from "../components/footer";
import { Link, useParams, useNavigate } from "react-router-dom";

const Container = styled.div`
  max-width: 414px;
  max-height: 747px;
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
  max-width: 414px;
  max-height: 747px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 45px;
  background: #d1d5db;
  border-radius: 20px;
  padding: 32px 32px 120px 32px;
`;
export const Input = styled.input`
  width: 100%;
  background: none;
  border: none;
  border-bottom: 2px solid gray;
  outline: none;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #b8b8bb;
`;
function FoodEditPage() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "food",
    picture_url: "",
    description: "",
  });

  const { name, price, picture_url, description } = formData;

  useEffect(() => {
    showProduct(id).then(setFormData).catch(console.log);
  }, []);

  console.log(id);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await updateProduct(id, formData);
      navigate("/products");
    } catch (error) {
      console.log(error);
    }
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
        Edit Product
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
        <Input type="text" name="price" value={price} onChange={handleChange} />
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
        <Footer props={"Save"} />
      </Form>
    </Container>
  );
}

export default FoodEditPage;
