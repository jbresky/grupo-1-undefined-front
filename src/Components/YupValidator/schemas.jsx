import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
    email: Yup.string()
        .required("Email is a required field")
        .email("Invalid email format"),
    password: Yup.string()
        .required("Password is a required field")
        .min(8, "Password must be at least 8 characters"),
});

export const editSchema =  Yup.object().shape({
    firstName: Yup.string("Name must be a string").required("Required"),
    lastName: Yup.string().required("Required"),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .matches(
            /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{8,50}/,
            'La contraseñade tener un mínimo 8 caracteres, e incluir al menos una letra en mayúscula y un caracter especial'
        ),
})

export const registerSchema = Yup.object({
    firstName: Yup.string("Name must be a string").required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Required')
    .matches(
      /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{8,50}/,
      'La contraseñade tener un mínimo 8 caracteres, e incluir al menos una letra en mayúscula y un caracter especial'
    ),
})