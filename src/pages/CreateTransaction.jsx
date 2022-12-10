import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await axios.get("/categories");
      setCategories(categories.data?.body ?? []);
    };

    fetchCategories();
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
    date: Yup.date().required(),
  });

  const formBackground = useColorModeValue("gray.100", "gray.700");

  const onSubmit = async (values) => {
    const response = await axios.post("/transactions", {...values, userId: 1});
    if (response.payload?.body?.id) {
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

      navigate("/");
    }
    if (response.code !== 200) {
      toast({
        title: "Error",
        status: "error",
        render: () => (
          <Alert status="error">
            <AlertIcon />
            {response.payload.message}
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
            categoryId: 0,
            date: "",
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
