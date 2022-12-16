import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { TransactionsForm } from "../../Components/TransactionsForm";
import { transactionSchema } from "../../Components/YupValidator/schemas";
import useCreateTransaction from "../../hooks/useTransaction";
import userGetUsers from "../../hooks/useUsers";
import useGetCategory from "../../hooks/useCategory";

function CreateTransaction() {

  const { data: users } = userGetUsers();
  const { data: categories } = useGetCategory();

  const { mutate: transferTo, isLoading } = useCreateTransaction()

return (
    <Formik
      validationSchema={transactionSchema}
      initialValues={{
        description: "",
        amount: 0,
        categoryId: 1,
        date: "",
        userId: ""
      }
      }
      onSubmit={(values) => {
        transferTo({ ...values, destinationId: values.user })
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
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          errors={errors}
          handleBlur={handleBlur}
          touched={touched}
          values={values}
          isLoading={isLoading}
          categories={categories}
          users={users}
        />
      )}
    </Formik>
);
}

export default CreateTransaction;
