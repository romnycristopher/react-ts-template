import { ListComponent } from '../../components/ListComponent';

const todosList = [
	{
		id: 1,
		title: 'Learn React',
		completed: false,
		date: '2020-01-01',
	},
	{
		id: 2,
		title: 'Learn TypeScript',
		completed: false,
		date: '2020-01-01',
	},
	{
		id: 3,
		title: 'Learn GraphQL',
		completed: false,
		date: '2020-01-01',
	},
];

export const TodosPage = () => {
	return (
		<div className='py-16 grow flex justify-center items-center'>
			<div className='w-5/6 md:w-3/6 bg-white shadow-lg rounded-lg '>
				<div className='border-b'>
					<form action='#'>
						<input
							type='text'
							name='todo'
							placeholder='What do you wanna do?'
							className='w-full p-5 rounded-t-lg border-transparent focus:ring-0 outline-none border-none  font-medium'
						/>
					</form>
				</div>
				<ListComponent options={todosList} />
			</div>
		</div>
	);
};
