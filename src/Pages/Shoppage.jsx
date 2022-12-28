import React, { useEffect } from "react";
import { getData } from "../Redux/Products/action";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "@chakra-ui/react";
import Filter from "../Components/Filter";
import Product from "../Components/Product";
import { Grid, GridItem } from '@chakra-ui/react'

const Shoppage = () => {
  const loading = useSelector((state) => state.length);
  const products = useSelector((state) => state.products);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products?.length === 0) {
      dispatch(getData());
    }
  }, [dispatch, products.length]);
  return (
    <div>
      <Text>Shop All</Text>
      <Filter />

      {loading ? (
        <h1>Entities Loading...</h1>
      ) : error ? (
        <h2>Something went wrong, please try again later</h2>
      ) : (
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
          {products.length > 0 &&
            products.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
        </Grid>
      )}
    </div>
  );
};

export default Shoppage;
