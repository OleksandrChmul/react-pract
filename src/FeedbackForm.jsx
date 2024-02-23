import { Formik, Form, Field } from 'formik'
import css from './FeedbackForm.module.css'
import { useId } from 'react'

const initialValues = {
	username: 'jjj',
	email: 'fff',
}

export const FeedbackForm = () => {
	const textareaId = useId()

	const handleSubmit = (values, actions) => {
		console.log(values)
		actions.resetForm()
		console.log(textareaId)
	}
	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit}>
			<Form className={css.form}>
				<Field className={css.field} type='text' name='username' />
				<Field className={css.field} type='email' name='email' />
				<Field
					as='textarea'
					name='textarea'
					id={textareaId}
					cols='20'
					rows='5'
				/>
				<button className={css.btn} type='submit'>
					Submit
				</button>
			</Form>
		</Formik>
	)
}
