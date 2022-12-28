import React, { useEffect } from "react";
import { getData } from "../Redux/Products/action";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "@chakra-ui/react";
import Filter from "../Components/Filter";
import Product from "../Components/Product";
import { Grid, GridItem } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const loading = useSelector((state) => state.length);
  const products = useSelector((state) => state.products);
  const error = useSelector((state) => state.error);

  const {id} = useParams();
//   console.log(id);

  const dispatch = useDispatch();

  useEffect(() => {
    if (products?.length === 0) {
      dispatch(getData());
    }
  }, [dispatch, products.length]);

  return (
    <div>
      <Text>ProductDetails Page{id}</Text>
    </div>
  );
};

export default ProductDetails;
