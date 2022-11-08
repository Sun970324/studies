import type { NextPage } from "next";
import Item from "@components/item";
import Layout from "@components/layout";
import ProductList from "@components/productList";

const Bought: NextPage = () => {
  return (
    <Layout title="구매내역" canGoBack>
      <ProductList kind="purchases" />
    </Layout>
  );
};

export default Bought;
