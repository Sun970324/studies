import type { NextPage } from "next";
import Item from "@components/item";
import Layout from "@components/layout";
import ProductList from "@components/productList";

const Loved: NextPage = () => {
  return (
    <Layout title="관심목록" canGoBack>
      <ProductList kind="favs" />
    </Layout>
  );
};

export default Loved;
