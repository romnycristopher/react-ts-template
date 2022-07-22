import { Outlet } from 'react-router-dom';
import { HeaderComponent } from '../../components/HeaderComponent';

export const DashboadWrapperPage = () => {
	return (
		<>
			<div className='min-h-full'>
				<HeaderComponent />
				<Outlet />
			</div>
		</>
	);
};
