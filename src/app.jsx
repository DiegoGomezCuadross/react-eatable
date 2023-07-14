import { Route, Routes, Navigate } from "react-router-dom";
import styled from "@emotion/styled";
import HomeFoodPage from "./pages/homeFoodPage";
import DetailFood from "./pages/foodDetailPage";
import CreateFood from "./pages/foodCreatePage";
import EditFood from "./pages/foodEditPage";

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
      <Routes>
        <Route path="/">
          <Route index element={<Navigate to="/products" replace={true} />} />
          <Route path="products" element={<HomeFoodPage />} />
          <Route path="products/:id" element={<DetailFood />} />
          <Route path="create" element={<CreateFood />} />
          <Route path="products/edit/:id" element={<EditFood />} />
          <Route
            path="*"
            element={<Navigate to="/products" replace={true} />}
          />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
