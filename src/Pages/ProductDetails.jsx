import React, { useEffect, useState } from "react";
import { getCurrentProductData } from "../Redux/Products/action";
import { useDispatch, useSelector } from "react-redux";
// import Filter from "../Components/Filter";
import Product from "../Components/Product";
import { addToCart } from "../Redux/Cart/action";
import { Flex, Text, Box, HStack, Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const loading = useSelector((state) => state.product.loading);
  const currentproduct = useSelector((state) => state.product.currentProduct);
  const error = useSelector((state) => state.product.error);

  const { id } = useParams();
  const dispatch = useDispatch();

  const [size, setSize] = useState(null);

  useEffect(() => {
    if (id) {
      dispatch(getCurrentProductData(id));
    }
  }, [dispatch, id]);

  const handleCart = () => {
    let payload = {
      ...currentproduct,
      size,
    };
    dispatch(addToCart(payload));
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong...</h1>;
  }

  if (Object.keys(currentproduct).length === 0) {
    return <h1>Product {id} not found</h1>;
  }

  return (
    <Flex justify="center" align="center">
      <Product product={currentproduct} />
      <Box>
        <Text as="em">Chose a size</Text>
        <HStack p={4}>
          {currentproduct?.sizes.map((size) => {
            return (
              <Button key={size} onClick={() => setSize(size)}>
                {size}
              </Button>
            );
          })}
        </HStack>
        <Button bg="yellow" m={4} p={5} disabled={!size} onClick={handleCart}>
          {!size ? "PLEASE SELECT A SIZE" : "ADD TO CART"}
        </Button>
      </Box>
    </Flex>
  );
};

export default ProductDetails;
