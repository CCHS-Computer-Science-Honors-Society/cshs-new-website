"use client";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { FooterCTA } from "./last-section";
import { BookOpen, Ear, GraduationCap, School, ShieldX } from "lucide-react";

export function Apply() {
	return (
		<section id="apply" className="py-12 sm:py-16 md:py-20 w-full bg-background">
			<div className="container px-4 mx-auto max-w-6xl">
				<div className="mb-8 md:mb-12">
					<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
						Apply
					</h2>
					<div className="mt-3 md:mt-4 h-1 w-16 md:w-20 bg-primary rounded-full" />
				</div>

				<div className="rounded-2xl border border-border bg-white p-8 dark:bg-[#121212] md:p-10">
					<div className="flex flex-col md:flex-row md:space-x-16">
						<div className="md:basis-1/2">
							<Accordion
								type="single"
								collapsible
								className="w-full"
								defaultValue="item-1"
							>
								<AccordionItem value="item-1">
									<AccordionTrigger className="flex items-center justify-start space-x-2">
										<School size={32} className="!rotate-0" />
										<span className="w-full text-left text-lg">
											Class Requirement
										</span>
									</AccordionTrigger>
									<AccordionContent className="text-[#707070]">
										<div className="flex-col">
											<p>
												To be be enrolled in AP Computer Science class or
												higher.
											</p>
										</div>
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value="item-2">
									<AccordionTrigger className="flex items-center justify-start space-x-2">
										<GraduationCap size={32} className="!rotate-0" />
										<span className="w-full text-left text-lg">
											Grade Requirements
										</span>
									</AccordionTrigger>
									<AccordionContent className="text-[#707070]">
										<div className="flex-col">
											<p>
												To have received a grade of B or higher in all Computer
												Science classes.
											</p>
										</div>
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value="item-3">
									<AccordionTrigger className="flex items-center justify-start space-x-2">
										<BookOpen size={32} className="!rotate-0" />
										<span className="w-full text-left text-lg">
											I don&apos;t meet the requirements?
										</span>
									</AccordionTrigger>
									<AccordionContent className="text-[#707070]">
										<div className="flex-col">
											<p>
												We offer a waiver for students who are passionate about
												Computer Science but do not meet the requirements.
											</p>
										</div>
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value="item-4">
									<AccordionTrigger className="flex items-center justify-start space-x-2">
										<Ear size={32} className="!rotate-0" />
										<span className="w-full text-left text-lg">
											When do I apply and hear back?
										</span>
									</AccordionTrigger>
									<AccordionContent className="text-[#707070]">
										We take applications on a rolling basis and will get back to
										you within a month. Apply whenever you are ready!
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="item-5">
									<AccordionTrigger className="flex items-center justify-start space-x-2">
										<ShieldX size={32} className="!rotate-0" />
										<span className="w-full text-left text-lg">
											I can&apos;t access the form?
										</span>
									</AccordionTrigger>
									<AccordionContent className="text-[#707070]">
										You must be logged in with your school google email to be
										able to access the form.
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						</div>
						<div className="h-min-[300px] md:basis-1/2 ">
							<FooterCTA />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
