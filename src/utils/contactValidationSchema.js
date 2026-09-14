import * as Yup from "yup"
export const contactValidationSchema = Yup.object().shape({
    fullname:Yup.string().required("وارد کردن نام الزامی است."),
    email:Yup.string().email("ایمیل وارد شده صحیح نمی باشد").required("وارد کردن ایمیل الزامی است."),
    subject:Yup.string().required("وارد کردن موضوع الزامی است."),
    message:Yup.string().required("وارد کردن متن الزامی است."),
})