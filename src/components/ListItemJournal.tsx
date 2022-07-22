import { JournalType } from './ListComponent';
import { Link } from 'react-router-dom';

export const ListItemJournal = ({ id, title, content, date }: JournalType) => {
	return (
		<div className='flex justify-between items-center w-full py-4'>
			<div className='flex flex-col'>
				<div>
					<Link to={`${id}`} className='font-medium'>
						{title}
					</Link>
					<div className='text-gray-400'>{content}</div>
				</div>
				<div className='flex items-center gap-2 mt-2'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-4 w-4 text-indigo-500'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						strokeWidth={2}
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
						/>
					</svg>
					<p className='text-indigo-500 text-sm'>{date}</p>
				</div>
			</div>

			<button className='group bg-gray-200 hover:bg-red-600 rounded-full p-2'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-5 w-5 group-hover:text-white'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
					strokeWidth={2}
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
					/>
				</svg>
			</button>
		</div>
	);
};
