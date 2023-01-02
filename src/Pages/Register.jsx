import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Text,
  Link,
  VStack,
  Container,
  Input,
  Button,
} from "@chakra-ui/react";

const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    user:"",
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    alert("Register Successfully")
    navigate("/Login");
  };

  return (
    <Container>
      <Box  borderRadius="lg" borderWidth="1px" p={4}>
        <Text fontSize="2xl" align="center">
          Create Account
        </Text>
        <Text fontSize="md" align="center" pb={4}>
          Already have an account?{" "}
          <Link color="teal.500" href="Login">
            Log in
          </Link>
        </Text>
        <VStack spacing={2} align="stretch" pb={4}>
          <Input
            name="user"
            value={input.user}
            onChange={(e) =>
              setInput({
                ...input,
                [e.target.name]: e.target.value,    
              })
            }
            placeholder="Username"
          />
          <Input
            name="name"
            value={input.name}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            placeholder="Name"
          />
          <Input
            name="email"
            value={input.email}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            placeholder="Email"
          />
          <Input
            name="password"
            value={input.password}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            placeholder="Password"
          />
        </VStack>
        <Button
        onClick={handleSubmit}
        colorScheme="teal" variant="solid">
          Create Account
        </Button>

        <VStack />
      </Box>
    </Container>
  );
};

export default Register;
