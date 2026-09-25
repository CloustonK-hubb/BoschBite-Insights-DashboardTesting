import { Refine } from "@refinedev/core";
import dataProvider from "@refinedev/simple-rest";
import { MuiListInferencer } from "@refinedev/inferencer/mui";

const API_URL = "https://api.fake-rest.refine.dev";

function App() {
  return (
    <Refine
      dataProvider={dataProvider(API_URL)}
      resources={[
        { name: "products", list: "/products" },
        { name: "categories", list: "/categories" },
      ]}
    >
      <MuiListInferencer resource="products" />
    </Refine>
  );
}

export default App;