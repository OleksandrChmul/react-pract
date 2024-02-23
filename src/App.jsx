import { useState } from 'react'
import './App.css'
import { LangSwitcher } from './LangSwitcher'
import { LoginForm } from './LoginForm'
import { SearchBar } from './SearchBar'
import { RadioBtn } from './RadioBtn'
import { Checkbox } from './Checkbox'
import { FeedbackForm } from './FeedbackForm'

function App() {
	const [lang, setLang] = useState('uk')
	// Колбек-функція для обробки сабміту форми
	const handleLogin = userData => {
		// Виконуємо необхідні операції з даними
		console.log(userData)
	}
	return (
		<div>
			<h1>Please login to your account!</h1>
			{/* Передаємо колбек як пропс форми */}
			<LoginForm onSubmit={handleLogin} />
			<hr />
			<SearchBar />
			<hr />
			<p>Selected language: {lang} </p>
			<LangSwitcher value={lang} onSelect={setLang} />
			<hr />
			<RadioBtn />
			<hr />
			<Checkbox />
			<hr />
			<FeedbackForm />
		</div>
	)
}

export default App
