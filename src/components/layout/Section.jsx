import { useState } from 'react';
import { Link } from 'react-router-dom';

const Section = ({ title, children, link = '#' }) => {
	const [showLink, setshowLink] = useState(false);
	const url = `/categories?genreID=${link.id}&genreName=${link.name}&page=1`;
	return (
		<section className='mt-10'>
			<Link to={url}>
				<header
					className=' ml-10 flex gap-5 items-baseline bg-slate-800'
					onMouseEnter={() => setshowLink(true)}
					onMouseLeave={() => setshowLink(false)}>
					<h2 className='font-bold text-slate-50 text-2xl bg-slate-800'>
						{title}
					</h2>
					<div
						className={
							showLink
								? 'opacity-100 translate-x-0 transition-all duration-300'
								: 'opacity-0 -translate-x-full transition-all duration-300'
						}>
						<p className='italic text-orange-400'>
							Ver todo <span className='font-bold'>{'>'}</span>
						</p>
					</div>
				</header>
			</Link>
			<div>{children}</div>
		</section>
	);
};

export default Section;
