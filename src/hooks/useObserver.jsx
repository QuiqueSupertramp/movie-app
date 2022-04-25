import { useEffect, useRef, useState } from 'react';

function useObserver(rootMargin = '0px 0px 100px 0px') {
	const ref = useRef();
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (!ref) return () => {};
		const observer = new IntersectionObserver(
			([entry], observer) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.unobserve(ref.current);
				}
			},
			{
				rootMargin,
			}
		);
		observer.observe(ref.current);
		return () => {
			if (ref.current) observer.unobserve(ref.current);
		};
	}, [ref.current]);

	return { ref, isVisible };
}

export default useObserver;
