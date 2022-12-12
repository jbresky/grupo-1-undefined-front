import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  useColorModeValue,
  useToast,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import axios from "axios";
import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";
import { TransactionsForm } from "../Components/TransactionsForm";

function CreateTransaction(initialValues) {
  const toast = useToast();
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchCategoriesAndUsers = async () => {
      const categories = await axios.get("/categories");
      const users = await axios.get("/users");
      setCategories(categories.data?.body ?? []);
      setUsers(users.data?.body ?? []);
    };

    fetchCategoriesAndUsers();
  }, []);

  const schema = Yup.object().shape({
    description: Yup.string(),
    amount: Yup.number()
      .required("Amount is a required field")
      .test(
        "Is positive?",
        "ERROR: The amount must be greater than 0!",
        (value) => value > 0
      ),
    categoryId: Yup.number().required(),
    userId: Yup.number().required(),
    date: Yup.date().required(),
  });

  const formBackground = useColorModeValue("gray.100", "gray.700");

  const onSubmit = async (values) => {
    const response = await axios.post("/transactions", {...values, userId: 1});
    if (response.data?.body?.id) {
      toast({
        title: "Create transaction.",
        description: "Transaction created successfully.",
        status: "success",
        duration: 9000,
        isClosable: true,
        render: () => (
          <Alert status="success">
            <AlertIcon />
            Transaction created successfully.
          </Alert>
        ),
        position: "top",
      });
    }
    if (response.data?.code !== 200) {
      toast({
        title: "Error",
        status: "error",
        render: () => (
          <Alert status="error">
            <AlertIcon />
            {response.message}
          </Alert>
        ),
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <div>
      <header>
        <Header />
      </header>
      <Formik
        validationSchema={schema}
        initialValues={
          initialValues || {
            description: "",
            amount: 0,
            categoryId: -1,
            date: "",
            userId: -1,
          }
        }
        onSubmit={(values) => {
          onSubmit(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <TransactionsForm
            formBackground={formBackground}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            errors={errors}
            handleBlur={handleBlur}
            touched={touched}
            values={values}
            categories={categories}
            users={users}
          />
        )}
      </Formik>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default CreateTransaction;
