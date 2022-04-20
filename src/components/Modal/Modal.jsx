const Modal = ({ isOpen, toggleModal, children }) => {
	return (
		<div
			className={`fixed top-0 left-0 right-0 bottom-0 z-40 w-full h-full bg-slate-800 bg-opacity-50 backdrop-blur-sm m-auto flex justify-center items-center  `}>
			<div className='relative shadow-[0_0_30px_black] z-50 w-3/4 h-3/4 bg-slate-200 m-auto rounded-md'>
				<button
					onClick={toggleModal}
					className='absolute top-3 right-4 shadow-md shadow-neutral-400 p-2 leading-none bg-neutral-300 font-bold text-slate-800 rounded-sm'>
					X
				</button>
				{children}
			</div>
		</div>
	);
};

export default Modal;
