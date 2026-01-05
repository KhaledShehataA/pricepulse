import { TrendingUp, Bell, Search } from 'lucide-react';

const Navbar = () => {
	return (
		<nav className='flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100 shadow-sm'>
			{/* 1. اللوجو (Logo) */}
			<div className='flex items-center gap-2'>
				<div className='bg-blue-600 p-2 rounded-lg text-white'>
					<TrendingUp size={24} />
				</div>
				<span className='text-xl font-bold text-gray-800 tracking-tight italic'>
					PricePulse
				</span>
			</div>

			{/* 2. شريط البحث (Search Bar) - بيختفي في الموبايل */}
			<div className='hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-full w-1/3 border border-transparent focus-within:border-blue-400 focus-within:bg-white transition-all'>
				<Search size={18} className='text-gray-400' />
				<input
					type='text'
					placeholder='ابحث عن منتج...'
					className='bg-transparent border-none focus:outline-none px-3 w-full text-sm text-gray-700'
				/>
			</div>

			{/* 3. الأيقونات والبروفايل */}
			<div className='flex items-center gap-5'>
				<button className='relative p-2 text-gray-500 hover:bg-gray-50 rounded-full transition-colors'>
					<Bell size={22} />
					{/* نقطة التنبيه الحمراء */}
					<span className='absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white'></span>
				</button>

				<div className='flex items-center gap-3 pl-4 border-l border-gray-100'>
					<div className='text-right hidden sm:block'>
						<p className='text-sm font-bold text-gray-800 leading-none'>
							محمد أحمد
						</p>
						<p className='text-xs text-gray-400 mt-1'>عضو ذهبي</p>
					</div>
					<div className='bg-gradient-to-tr from-blue-600 to-blue-400 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold shadow-blue-200 shadow-lg'>
						M
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
