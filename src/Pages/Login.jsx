import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Text,
  Link,
  VStack,
  Container,
  Input,
  Button
} from "@chakra-ui/react";

const Login = () => {
    const navigate = useNavigate()

    const [input, setInput] = useState({
        email: "",
        password: "",
      });

        const handleLogin = (e) => {
            e.preventDefault();
            const loggeduser = JSON.parse(localStorage.getItem("user"));
            if(input.email===loggeduser.email && input.password===loggeduser.password){
                localStorage.setItem("loggedin", true);
                alert("Log In Successfully")
                navigate("/")
            }
            else{
                alert("Wrong Email Password")
            }
        };
  return (
    <Container>
      <Box borderRadius="lg" borderWidth="1px" p={4}>
        <Text fontSize="2xl" align="center">Log In Account</Text>
        <Text fontSize="md" align="center" pb={4}>Already have an account?{" "}<Link color="teal.500" href="Register">Create Account</Link>
        </Text>
        <VStack spacing={2} align="stretch" pb={4}>
        <Input
        name="email"
        value={input.email}
        onChange={(e) =>
          setInput({ ...input, [e.target.name]: e.target.value })
        }
        placeholder="Email" />
        <Input
        name="password"
        value={input.password}
        onChange={(e) =>
          setInput({ ...input, [e.target.name]: e.target.value })
        }
        placeholder="Password" />
        </VStack>
        <Button
        onClick={handleLogin}
        colorScheme='teal' variant="solid" isFullWidth="true">
        Log In
       </Button>
    
        <VStack />
      </Box>
    </Container>
  );
};

export default Login;
