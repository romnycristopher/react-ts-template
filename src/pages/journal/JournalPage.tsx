import { motion } from 'framer-motion';
import { useState, FocusEvent, FormEvent } from 'react';
import { ListComponent } from '../../components/ListComponent';

const jounalList = [
	{
		id: 1,
		title: 'Journal 1',
		content: 'Journal 1 content',
		date: '2020-01-01',
	},
	{
		id: 2,
		title: 'Journal 2',
		content: 'Journal 2 content',
		date: '2020-01-01',
	},
	{
		id: 3,
		title: 'Journal 3',
		content: 'Journal 3 content',
		date: '2020-01-01',
	},
];

const variants = {
	open: { opacity: 1, height: 'auto' },
	closed: { opacity: 0, height: 0 },
};

export const JournalPage = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleAnimation = (e: FocusEvent<HTMLFormElement>) => {
		console.log(e);
		e.type === 'focus' ? setIsOpen(true) : setIsOpen(false);
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<div className='py-16 grow flex justify-center items-center'>
			<div className='w-5/6 md:w-3/6 bg-white shadow-lg rounded-lg '>
				<div className='border-b'>
					<form
						onFocus={handleAnimation}
						onBlur={handleAnimation}
						onSubmit={handleSubmit}
						className='p-5 flex flex-col focus:right-1 overflow-hidden'
					>
						<input
							type='text'
							name='jounarl-title'
							placeholder='Create a new journal'
							className='w-full outline-none rounded-t-lg border-none focus:ring-0 p-0 font-medium'
						/>
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={isOpen ? 'open' : 'closed'}
							variants={variants}
							className='flex flex-col'
						>
							<textarea
								name='journal-description'
								id='journal-description'
								placeholder='Journal description'
								className='w-full outline-none border-none focus:ring-0 placeholder:text-gray-300 p-0 pb-10 mt-1 text-gray-400'
							></textarea>
							<motion.button
								whileHover={{ rotate: 90 }}
								type='submit'
								className='self-end mt-3 -mr-1'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-10 w-10 text-indigo-500'
									viewBox='0 0 20 20'
									fill='currentColor'
								>
									<path
										fillRule='evenodd'
										d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z'
										clipRule='evenodd'
									/>
								</svg>
							</motion.button>
						</motion.div>
					</form>
				</div>
				<ListComponent options={jounalList} />
			</div>
		</div>
	);
};
