import { ExternalLink } from 'lucide-react';

const ProductCard = ({ name, price, oldPrice, image, category }) => {
	return (
		<div className='bg-white rounded-xl shadow-md p-4 border border-gray-200'>
			<img
				src={image}
				alt={name}
				className='w-full h-40 object-cover rounded-lg mb-4'
			/>
			<span className='text-xs text-blue-600 font-bold uppercase'>
				{category}
			</span>
			<h3 className='text-lg font-bold text-gray-800'>{name}</h3>
			<div className='flex items-center gap-2 mt-2'>
				<span className='text-xl font-black text-gray-900'>${price}</span>
				{oldPrice && (
					<span className='text-sm text-gray-400 line-through'>
						${oldPrice}
					</span>
				)}
			</div>
			<button className='w-full mt-4 bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center gap-2'>
				<ExternalLink size={16} />
				شراء الآن
			</button>
		</div>
	);
};

export default ProductCard;
