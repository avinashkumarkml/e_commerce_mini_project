import React from "react";
import { Flex, Spacer, Image, Text, Icon, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { RiUserLine } from "react-icons/ri";
import { BsBasket3 } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { increaseQty, deceaseQty, removeFromCart } from "../Redux/Cart/action";
const NavBar = () => {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const dispatch = useDispatch();

  const handleDecrease = (id, size, qty) => {
    if (qty > 1) {
      dispatch(deceaseQty({ id, size }));
    } else {
      dispatch(removeFromCart({ id, size }));
    }
  };

  const handleInrease = (id, size) => {
    dispatch(increaseQty({ id, size }));
  };

  const convertToNumber = (str) => {
    if (Number(str)) {
      return Number(str);
    }
    let arr = str.includes(",") ? str.split(",") : [];
    let final_str = arr.reduce((a, c) => a + c, "");
    let result = Number(final_str);
    return result;
  };

  let total_original_price = 0;
  let total_final_price = 0;

  cart.forEach((prod) => {
    total_original_price += convertToNumber(prod.original_price) * prod.qty;
    total_final_price += convertToNumber(prod.final_price) * prod.qty;
  });

  return (
    <Flex
      bg="white"
      borderBottom="0.25px solid #a6adad"
      p={1}
      alignItems="center"
      justify="center"
      wrap="nowrap"
    >
      <Spacer />
      <Link to="/">
        <Image
          src="https://cdn.shopify.com/s/files/1/0258/2485/4100/files/flatheads-logo-new-hotizontal_180x_2x_bf74c8db-79f1-4904-b343-3b0e2681ec07_224x32.png?v=1647508945"
          alt="Flat Heads Icon"
          height="25px"
          m={5}
        />
      </Link>
      <Spacer />
      <Link to="/collections/all">
        <Text px={4} py={2}>
          SHOP
        </Text>
      </Link>

      <Link to="/collections/all">
        <Text px={4} py={2}>
          WOMEN
        </Text>
      </Link>

      <Link to="/collections/all">
        <Text px={4} py={2}>
          MEN
        </Text>
      </Link>

      <Link to="/collections/all">
        <Text px={4} py={2}>
          NEW ARRIVALS
        </Text>
      </Link>

      <Link to="/collections/all">
        <Text px={4} py={2}>
          ABOUT
        </Text>
      </Link>

      <Link to="/collections/all">
        <Text px={4} py={2}>
          HELP
        </Text>
      </Link>

      <Spacer />
      <Icon boxSize="20px" mx={13} as={BsSearch} />
      <Icon boxSize="20px" mx={13} as={RiUserLine} />
      <Flex onClick={onOpen} ref={btnRef} align="center">
        <Icon boxSize="20px" mx={13} as={BsBasket3} />
        <Text>{cart ? cart.length : 0}</Text>
      </Flex>

      <Spacer />

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>YOUR CART ({cart.length})</DrawerHeader>

          <DrawerBody>
            {cart.length > 0 &&
              cart.map((item) => {
                return (
                  <Flex key={item.id} align="center">
                    <Image boxSize="85px" src={item.images[0]} alt="shoe" />
                    <Box>
                      <Text casing="lowercase">{`${item.name} | ${item.color} | ${item.gender}`}</Text>
                      <Text as="sup">{item.size}</Text>
                      <Flex align="center">
                        <Button
                          display={item.qty === 0}
                          onClick={() =>
                            handleDecrease(item.id, item.size, item.qty)
                          }
                        >
                          -
                        </Button>
                        <Text>{item.qty}</Text>
                        <Button
                          onClick={() => handleInrease(item.id, item.size)}
                        >
                          +
                        </Button>
                      </Flex>

                      <Flex justify="flex-end">
                        <Text as="s">Rs. {item.original_price}</Text>
                        <Text>Rs. {item.final_price}</Text>
                      </Flex>
                    </Box>
                  </Flex>
                );
              })}
          </DrawerBody>
          <Flex align="center" justify="space-between" m={4}>
            <Text>SUBTOTAL</Text>
            <Flex p={2}>
              <Text p={2} as="s">
                RS. {total_original_price}
              </Text>
              <Text p={2}>RS. {total_final_price}</Text>
            </Flex>
          </Flex>

          <DrawerFooter>
            <Button colorScheme="yellow">PROCEED TO CHECKOUT</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default NavBar;
