import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import Styled from "styled-components";

const ErrorMessage = Styled.div`
  color: red;
`;

export default function NewCustomer() {
  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
    },
    validateOnChange: true,
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      age: Yup.number()
        .min(18, "Age must be greater than 18")
        .max(40, "Age must be less than 40")
        .required("Age is required"),
    }),
    onSubmit: (values) => {
      axios
        .post("/customers", values)
        .then((res) => {
          console.log(res.data, "Customer Created Successfully!");
        })
        .catch((error) => {
          console.error(error);
        });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      {formik.errors.name ? <ErrorMessage>{formik.errors.name}</ErrorMessage> : null}
      <label htmlFor="age">Age:</label>
      <input
        id="age"
        name="age"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.age}
      />
      {formik.errors.age ? <ErrorMessage>{formik.errors.age}</ErrorMessage> : null}
      <button type="submit">Submit</button>
    </form>
  );
}
