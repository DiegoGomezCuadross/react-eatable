import styled from "@emotion/styled";
import HomeFoodPage from "./pages/homeFoodPage";

const Container = styled.div`
  max-width: 414px;
  max-height: 896px;
  margin-left: auto;
  margin-right: auto;
  background-color: #f6f6f9;
`;

function App() {
  // const { user } = useAuth();
  // console.log(user);
  // return (
  //   <Container>{user ? <HomeFoodPage /> : <UnauthenticatedApp />}</Container>
  // );
  return (
    <Container>
      <HomeFoodPage />
    </Container>
  );
}

export default App;
