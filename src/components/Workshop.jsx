import { motion } from "framer-motion";

const workshops = [
	{
		date: "Feb 2025",
		title: "Freedom with AI Masterclass",
		organization: "Freedom with AI",
		description:
			"Hands-on masterclass covering applied AI workflows, automation use cases, and rapid prototyping.",
	},
	{
		date: "Jul 2025",
		title: "GEN-AI Workshop",
		organization: "Gayatri Vidya Parishad College",
		description:
			"Focused on prompt design, model capabilities, and real-world GenAI integrations.",
	},
	{
		date: "Jun 2025",
		title: "GenAI - LLMs & Hugging Face",
		organization: "Cuvette Tech",
		description:
			"Explored LLM fundamentals, model fine-tuning basics, and Hugging Face tooling.",
	},
	{
		date: "Oct 2014",
		title: "Docker & Kubernetes Workshop",
		organization: "Scaler",
		description:
			"Covered container fundamentals, Kubernetes primitives, and deployment workflows.",
	},
];

const Workshops = () => (
	<section className="timeline-section" id="workshops">
		<motion.div
			className="timeline-header"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.5 }}
		>
			<h2 className="timeline-title">Workshops</h2>
			<p className="timeline-subtitle">
				Technical workshops and masterclasses attended.
			</p>
		</motion.div>

		<div className="timeline-list">
			{workshops.map((workshop, index) => (
				<motion.article
					key={`${workshop.title}-${workshop.date}`}
					className="timeline-item"
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.45, delay: index * 0.1 }}
				>
					<div 
						className="timeline-date"
					>
						{workshop.date}
					</div>
					<div className="timeline-content">
						<h3>
							{workshop.title}
						</h3>
						<p 
							className="timeline-org"
						>
							{workshop.organization}
						</p>
						<p 
							className="timeline-desc"
						>
							{workshop.description}
						</p>
						{workshop.tags?.length ? (
							<div className="timeline-tags">
							{workshop.tags.map((tag, idx) => (
								<motion.span
									key={`${workshop.title}-${tag}`}
									className="timeline-tag"
									initial={{ opacity: 0, scale: 0.8 }}
									whileInView={{ opacity: 1, scale: 1 }}
									transition={{ delay: idx * 0.06 }}

								>
									{tag}
								</motion.span>
								))}
							</div>
						) : null}
					</div>
				</motion.article>
			))}
		</div>
	</section>
);

export default Workshops;
