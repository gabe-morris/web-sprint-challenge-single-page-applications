import * as yup from 'yup'

const formSchema = yup.object().shape({
name: yup
.string()
.trim()
.required('Order Name is required')
.min(2,"Order Name must be at least 2 characters long"),
size: yup
.string()
.required('Pizza size is required'),
sauce: yup
.string()
.notRequired(),
special: yup
.string()
.notRequired(),
topping1:yup.boolean(),
topping2:yup.boolean(),
topping3:yup.boolean(),
topping4:yup.boolean(),
gluten: yup.boolean(),
})
export default formSchema