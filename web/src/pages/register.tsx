import { useFormik } from "formik";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import Wrapper from "../components/Wrapper";
import React from "react";
import { useMutation } from "urql";

const REGISTER_MUT = `
mutation register($username: String!, $password: String!) {
  register(options: { username : $username, password: $password}) {
    errors {
      field
      message
    }
    user {
      id
      username
      createdAt
      updatedAt
    }
  }
}
`;

const register = () => {
  const [, register] = useMutation(REGISTER_MUT);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      return register(values);
    },
  });

  return (
    <Wrapper variant="small">
      <form onSubmit={formik.handleSubmit}>
        <FormControl id="username">
          <FormLabel>Username</FormLabel>
          <Input
            value={formik.values.username}
            onChange={formik.handleChange}
            placeholder="Username"
          />
        </FormControl>
        <FormControl id="password" mt={4}>
          <FormLabel>Password</FormLabel>
          <Input
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Password"
            type="password"
          />
        </FormControl>
        <Button
          mt={4}
          isLoading={formik.isSubmitting}
          colorScheme="teal"
          type="submit"
        >
          Register
        </Button>
      </form>
    </Wrapper>
  );
};

export default register;
