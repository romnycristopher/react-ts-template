import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/solid';
export const JournalSinglePage = () => {
	const navigate = useNavigate();
	return (
		<div className='px-6 py-16'>
			<div className='relative w-full md:max-w-3xl md:mx-auto lg:max-w-4xl pb-6'>
				<button
					onClick={() => navigate(-1)}
					type='button'
					className='inline-flex gap-2 items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
				>
					<ArrowLeftIcon className='w-5 h-5' />
					Return to journal
				</button>
			</div>
			<div className='relative rounded-lg  w-full px-6 py-12 bg-white shadow-lg  md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pt-16 lg:pb-28'>
				<div className='relative px-4 sm:px-6 lg:px-8'>
					<div className='text-lg max-w-prose mx-auto'>
						<h1>
							<span className='mt-2 block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
								JavaScript for Beginners
							</span>
						</h1>
						<p className='mt-8 text-xl text-gray-500 leading-8'>
							Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.
							At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at
							vitae feugiat egestas ac. Diam nulla orci at in viverra
							scelerisque eget. Eleifend egestas fringilla sapien.
						</p>
					</div>
					<div className='mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto'>
						<p>
							Faucibus commodo massa rhoncus, volutpat.{' '}
							<strong>Dignissim</strong> sed <strong>eget risus enim</strong>.
							Mattis mauris semper sed amet vitae sed turpis id. Id dolor
							praesent donec est. Odio penatibus risus viverra tellus varius sit
							neque erat velit. Faucibus commodo massa rhoncus, volutpat.
							Dignissim sed eget risus enim.{' '}
							<a href='#'>Mattis mauris semper</a> sed amet vitae sed turpis id.
						</p>
						<ul role='list'>
							<li>Quis elit egestas venenatis mattis dignissim.</li>
							<li>
								Cras cras lobortis vitae vivamus ultricies facilisis tempus.
							</li>
							<li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
						</ul>
						<p>
							Quis semper vulputate aliquam venenatis egestas sagittis quisque
							orci. Donec commodo sit viverra aliquam porttitor ultrices gravida
							eu. Tincidunt leo, elementum mattis elementum ut nisl, justo,
							amet, mattis. Nunc purus, diam commodo tincidunt turpis. Amet,
							duis sed elit interdum dignissim.
						</p>
						<h2>From beginner to expert in 30 days</h2>
						<p>
							Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
							consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod
							vitae interdum mauris enim, consequat vulputate nibh. Maecenas
							pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim
							cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis
							ipsum eu a sed convallis diam.
						</p>
						<blockquote>
							<p>
								Sagittis scelerisque nulla cursus in enim consectetur quam.
								Dictum urna sed consectetur neque tristique pellentesque.
								Blandit amet, sed aenean erat arcu morbi.
							</p>
						</blockquote>
						<p>
							Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
							enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
							praesent donec est. Odio penatibus risus viverra tellus varius sit
							neque erat velit.
						</p>

						<h2>Everything you need to get up and running</h2>
						<p>
							Purus morbi dignissim senectus mattis <a href='#'>adipiscing</a>.
							Amet, massa quam varius orci dapibus volutpat cras. In amet eu
							ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut
							viverra ridiculus non molestie. Gravida quis fringilla amet eget
							dui tempor dignissim. Facilisis auctor venenatis varius nunc,
							congue erat ac. Cras fermentum convallis quam.
						</p>
						<p>
							Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
							enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
							praesent donec est. Odio penatibus risus viverra tellus varius sit
							neque erat velit.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
