import { Formik } from "formik";
import { TransactionsForm } from "../../Components/TransactionsForm";
import { transactionSchema } from "../../Components/YupValidator/schemas";
import useCreateTransaction from "../../hooks/useTransaction";
import userGetUsers from "../../hooks/useUsers";
import useGetCategory from "../../hooks/useCategory";
import { useSelector } from "react-redux";

function CreateTransaction() {
  // Deberia estar en la carpeta Components
  const { data: users } = userGetUsers();
  const { data: categories } = useGetCategory();

  const {user} = useSelector(state => state.auth);

  const { mutate: transferTo, isLoading } = useCreateTransaction()

  return (
    <Formik
      validationSchema={transactionSchema}
      initialValues={{
        description: "",
        amount: "",
        categoryId: "",
        destinationId: "",
        userId: user.id
      }}
      onSubmit={values => transferTo(values)}
    // onSubmit={values => console.log(values)}
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
