import styled from "@emotion/styled";
import Food from "../components/food";
import Footer from "../components/footer";

const Container = styled.div`
  max-width: 414px;
  max-height: 896px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 45px;
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
  overflow: auto;
  padding-top: 40px;
`;
function HomeFoodPage() {
  // const [filters, setFilters] = useState({
  //   category: "italian",
  //   minprice: 0,
  //   maxprice: 1000000000,
  // });
  // const italian = [];
  // const [products, setProducts] = useState(null);

  // function FilterFoods(category) {
  //   let foods = products?.filter((product) => product.category === category);

  //   console.log(foods);
  // }
  // useEffect(() => {
  //   getProducts().then(setProducts).catch(console.log);
  // }, []);
  // console.log(products);

  // function toggleFilter(newValue, prop) {
  //   let newValues;

  //   if (filters[prop].includes(newValue)) {
  //     newValues = filters[prop].filter((value) => value !== newValue);
  //   } else {
  //     newValues = [...filters[prop], newValue];
  //   }
  //   newValues = { ...filters, prop };
  //   setFilters(newValues);
  // }

  return (
    <Container>
      <h1>Products Dashboard</h1>
      <ContainerCard>
        <Food />
        {/* <{products?.map((product) => {
          return <Food key={product.id} {...product}></Food>;
        })}> */}
      </ContainerCard>
      <Footer />
    </Container>
  );
}

export default HomeFoodPage;
