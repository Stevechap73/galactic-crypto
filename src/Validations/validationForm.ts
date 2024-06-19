import * as yup from "yup";

// Création de crypto
export const schemaInsertCrypto = yup.object({
  name: yup
    .string()
    .required("Ce champs est obligatoire")
    .min(3, "mini : 3 caractères")
    .max(20, "max : 20 caractères"),
  value: yup
    .number()
    .required("Ce champs est obligatoire")
    .min(1, "minimum 1 $"),
  quantity: yup
    .number()
    .required("Ce champs est obligatoire")
    .min(1, "minimum 1")
    .max(999, "maximum 999"),
  image: yup.string().required("Ce champs est obligatoire"),
});

// Login
export const schemaLogin = yup.object({
  email: yup
    .string()
    .email("email valide")
    .required("Ce champs est obligatoire"),
  password: yup
    .string()
    .matches(/[a-z]/, "Il faut au moins une miniscule")
    .matches(/[A-Z]/, "Il faut au moins une majuscule")
    .matches(/[1-9]/, "Il faut aumoins un chiffre")
    .matches(/[@!?%&]/, "Il faut au moins des caractères spéciaux :  @ ! ? % &")
    .min(8, "Au minimum 8 caractères")
    .required("ce champs est obligatoire"),
});

// Création de promoCode
export const schemaInsertPromoCode = yup.object({
  name: yup
    .string()
    .required("Ce champs est obligatoire")
    .min(3, "mini : 3 caractères")
    .max(20, "max : 20 caractères"),
  value: yup
    .number()
    .required("Ce champs est obligatoire")
    .min(1, "minimum 1 $"),
});

// Création de register
export const schemaRegister = yup.object({
  firstName: yup
    .string()
    .required("Ce champs est obligatoire")
    .min(3, "mini : 3 caractères")
    .max(20, "max : 20 caractères"),
  lastName: yup
    .string()
    .required("Ce champs est obligatoire")
    .min(3, "mini : 3 caractères")
    .max(20, "max : 20 caractères"),
  pseudo: yup
    .string()
    .required("Ce champs est obligatoire")
    .min(3, "mini : 3 caractères")
    .max(20, "max : 20 caractères"),
  age: yup
    .number()
    .required("Ce champs est obligatoire")
    .min(20, "minimum 20 ans"),
  city: yup
    .string()
    .required("Ce champs est obligatoire")
    .min(3, "mini : 3 caractères")
    .max(20, "max : 20 caractères"),
  email: yup
    .string()
    .email("email valide")
    .required("Ce champs est obligatoire"),
  password: yup
    .string()
    .matches(/[a-z]/, "Il faut au moins une miniscule")
    .matches(/[A-Z]/, "Il faut au moins une majuscule")
    .matches(/[1-9]/, "Il faut aumoins un chiffre")
    .matches(/[@!?%&]/, "Il faut au moins des caractères spéciaux :  @ ! ? % &")
    .min(8, "Au minimum 8 caractères")
    .required("ce champs est obligatoire"),
  confirmPassword: yup
    .string()
    .matches(/[a-z]/, "Il faut au moins une miniscule")
    .matches(/[A-Z]/, "Il faut au moins une majuscule")
    .matches(/[1-9]/, "Il faut aumoins un chiffre")
    .matches(/[@!?%&]/, "Il faut au moins des caractères spéciaux :  @ ! ? % &")
    .min(8, "Au minimum 8 caractères")
    .required("ce champs est obligatoire"),
  promoCode: yup
    .string()
    .min(3, "mini : 3 caractères")
    .max(20, "max : 20 caractères"),
});
