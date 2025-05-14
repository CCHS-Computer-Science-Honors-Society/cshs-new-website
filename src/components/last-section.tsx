import { Button } from "./ui/button";

export function FooterCTA() {
	return (
		<div className="flex h-full flex-col items-start justify-start rounded-2xl  border border-border bg-[#121212] p-4 text-start md:container md:mx-auto">
			<div className="py-10 px-10">
				<span className="text-4xl	font-medium text-white md:text-5xl ">
					Apply Now!
				</span>
				<p className="mt-6 text-[#878787]">
					Join a community of like-minded individuals who are passionate about
					<br />
					Computer Science and Technology.
				</p>

				<div className="mt-10 md:mb-8">
					<div className="flex items-center space-x-4">
						<a href="https://forms.gle/KEfALp6WmnfMfnso6">
							<Button>Apply Now</Button>
						</a>

						<Button
							className="h-12 bg-white px-5 text-black hover:bg-white/80"
							variant={"outline"}
							asChild
						>
							<a href="mailto:cherrycreekcshs@gmail.com">Contact Us</a>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
