import * as yup from 'yup'

const loginchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "First Name must be at least 3 characters")
    .required("Username is Required"),
  password: yup
    .string()
    .min(3, "Last Name must be at least 3 characters")
    .required("Password is Required"),
})

export default loginchema
