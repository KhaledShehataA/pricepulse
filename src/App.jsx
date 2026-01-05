import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';

function App() {
	// دي بيانات تجريبية عشان نشوف الشكل
	const products = [
		{
			id: 1,
			name: 'iPhone 15 Pro',
			price: 999,
			oldPrice: 1200,
			category: 'Mobiles',
			image:
				'https://images.unsplash.com/photo-1695048133142-1a20484d256e?q=80&w=500',
		},
		{
			id: 2,
			name: 'Sony Headphones',
			price: 350,
			oldPrice: 300,
			category: 'Audio',
			image:
				'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500',
		},
		{
			id: 3,
			name: 'Apple Watch S9',
			price: 399,
			oldPrice: 450,
			category: 'Watches',
			image:
				'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=500',
		},
	];

	return (
		<div className='min-h-screen bg-gray-50'>
			<Navbar />

			<main className='max-w-7xl mx-auto p-8'>
				<div className='flex justify-between items-center mb-10'>
					<div>
						<h1 className='text-3xl font-black text-gray-900'>
							لوحة المراقبة 📊
						</h1>
						<p className='text-gray-500'>تابع تحركات الأسعار لحظة بلحظة</p>
					</div>
					<button className='bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-blue-200 hover:scale-105 transition-transform'>
						+ إضافة منتج
					</button>
				</div>

				{/* شبكة الكروت (Grid) */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{products.map((p) => (
						<ProductCard key={p.id} {...p} />
					))}
				</div>
			</main>
		</div>
	);
}

export default App;
