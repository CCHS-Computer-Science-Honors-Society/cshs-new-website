"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

function NavHeader() {
	const [position, setPosition] = useState({
		left: 0,
		width: 0,
		opacity: 0,
	});

	return (
		<ul
			className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1"
			onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
		>
			<Tab href="#home" setPosition={setPosition}>Home</Tab>
			<Tab href="#about" setPosition={setPosition}>About</Tab>
			<Tab href="#projects" setPosition={setPosition}>Projects</Tab>
			<Tab href="#board" setPosition={setPosition}>Board</Tab>
			<Tab href="#apply" setPosition={setPosition}>Contact</Tab>

			<Cursor position={position} />
		</ul>
	);
}

const Tab = ({
	children,
	href,
	setPosition,
}: {
	children: React.ReactNode;
	href: string;
	setPosition: any;
}) => {
	const ref = useRef<HTMLLIElement>(null);
	return (
		<li
			ref={ref}
			onMouseEnter={() => {
				if (!ref.current) return;

				const { width } = ref.current.getBoundingClientRect();
				setPosition({
					width,
					opacity: 1,
					left: ref.current.offsetLeft,
				});
			}}
			className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
		>
			<a href={href} className="block h-full w-full">
				{children}
			</a>
		</li>
	);
};

const Cursor = ({ position }: { position: any }) => {
	return (
		<motion.li
			animate={position}
			className="absolute z-0 h-7 rounded-full bg-black md:h-12"
		/>
	);
};

export default NavHeader;
