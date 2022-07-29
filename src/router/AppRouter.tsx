import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ResetPasswordPage } from '../pages/access/ResetPasswordPage';
import { SignInPage } from '../pages/access/SignInPage';
import { SignUpPage } from '../pages/access/SignUpPage';
import { BlankPage } from '../pages/blank/BlankPage';
import { DashboadPage } from '../pages/dashboard/DashboadPage';
import { DashboadWrapperPage } from '../pages/dashboard/DashboadWrapperPage';
import { JournalPage } from '../pages/journal/JournalPage';
import { JournalSinglePage } from '../pages/journal/JournalSinglePage';
import { NotFoundPages } from '../pages/NotFoundPages';
import { ProfilePage } from '../pages/profile/ProfilePage';
import { TodosPage } from '../pages/todos/TodosPage';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<SignInPage />} />
				<Route path='/sign-in' element={<SignInPage />} />
				<Route path='/sign-up' element={<SignUpPage />} />
				<Route path='/reset-password' element={<ResetPasswordPage />} />
				<Route path='dashboard' element={<DashboadWrapperPage />}>
					<Route index element={<DashboadPage />} />
					<Route path='your-profile' element={<ProfilePage />} />
					<Route path='journal' element={<JournalPage />}></Route>
					<Route path='journal/:id' element={<JournalSinglePage />} />
					<Route path='todos' element={<TodosPage />} />
				</Route>
				<Route path='blank' element={<BlankPage />} />
				<Route path='*' element={<NotFoundPages />} />
			</Routes>
		</BrowserRouter>
	);
};
