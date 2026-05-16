'use client';

import { motion } from 'framer-motion';
import {
	ArrowUpRight,
	BrainCircuit,
	BriefcaseBusiness,
	Cloud,
	Code2,
	Globe2,
	Mail,
	MapPin,
	Phone,
	Rocket,
	ShieldCheck,
	Sparkles,
} from 'lucide-react';

const projects = [
	{
		title: 'Art Change Lives',
		url: 'https://artchangelives.org',
		tag: 'Featured Project',
		color: 'from-sky-400 to-fuchsia-400',
		description:
			'A purpose-driven art marketplace and impact platform connecting creativity with social transformation across Africa and beyond.',
	},
	{
		title: 'MeatShare',
		url: 'https://meatshare.com.au/',
		tag: 'Marketplace',
		color: 'from-rose-400 to-orange-300',
		description:
			'A modern commerce platform supporting digital ordering, food distribution, and community-driven meat sharing.',
	},
	{
		title: 'Maine Auto Parts',
		url: 'https://maineautoparts.com/',
		tag: 'eCommerce',
		color: 'from-blue-300 to-cyan-200',
		description:
			'An automotive parts platform designed for smooth product discovery, ordering, and customer conversion.',
	},
	{
		title: 'Cassava',
		url: 'https://casava.co',
		tag: 'Fintech/Insurance',
		color: 'from-emerald-300 to-lime-300',
		description:
			'A scalable digital product experience designed around modern business enablement and innovation.',
	},
	{
		title: 'OfficeSteroid',
		url: 'https://officesteroid.com/',
		tag: 'SaaS Productivity',
		color: 'from-pink-300 to-purple-300',
		description:
			'A workspace and productivity platform built to improve business operations and digital collaboration.',
	},
	{
		title: 'SanuCoin',
		url: 'https://sanucoin.com/',
		tag: 'Blockchain',
		color: 'from-amber-300 to-yellow-200',
		description:
			'A blockchain-focused ecosystem for digital finance, decentralized access, and emerging market innovation.',
	},

	{
		title: 'Rahee AI',
		url: 'https://rahee.ai',
		tag: 'AI Product',
		color: 'from-violet-300 to-indigo-300',
		description:
			'An AI-powered product focused on intelligent automation, productivity, and smarter digital workflows.',
	},
	{
		title: 'CloudSteroid',
		url: 'https://www.cloudsteroid.com/',
		tag: 'Cloud Solutions',
		color: 'from-cyan-300 to-blue-400',
		description:
			'Cloud-focused technology solutions for scalable systems, infrastructure, and performance enablement.',
	},

	{
		title: 'NASK Dashboard',
		url: 'https://app.nask.ng/dashboard/',
		tag: 'Dashboard',
		color: 'from-teal-300 to-sky-300',
		description:
			'A modern dashboard experience for operational visibility, analytics, and business management.',
	},
];

const strengths = [
	{ title: 'Full-Stack Engineering', icon: Code2 },
	{ title: 'AI & Automation', icon: BrainCircuit },
	{ title: 'Cloud Platforms', icon: Cloud },
	{ title: 'Product Strategy', icon: Rocket },
	{ title: 'Program Leadership', icon: BriefcaseBusiness },
	{ title: 'Secure Delivery', icon: ShieldCheck },
];

export default function Home() {
	return (
		<main className='mesh-bg min-h-screen overflow-hidden font-sans text-white'>
			<nav className='fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/50 backdrop-blur-2xl'>
				<div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8'>
					<a
						href='#top'
						className='font-display text-lg font-bold tracking-tight'>
						Femi<span className='text-sky-300'>.</span>
					</a>
					<div className='hidden items-center gap-8 text-sm text-white/70 md:flex'>
						<a className='hover:text-white' href='#work'>
							Work
						</a>
						<a className='hover:text-white' href='#expertise'>
							Expertise
						</a>
						<a className='hover:text-white' href='#contact'>
							Contact
						</a>
					</div>
					<a
						href='mailto:femoxmed@gmail.com'
						className='rounded-full bg-white px-5 py-2 text-sm font-bold text-slate-950 transition hover:scale-105'>
						Hire / Collaborate
					</a>
				</div>
			</nav>

			<section
				id='top'
				className='relative mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-36 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pt-44'>
				<div className='absolute right-10 top-28 h-48 w-48 animate-pulseGlow rounded-full bg-sky-400/30 blur-3xl' />
				<div className='absolute bottom-10 left-1/3 h-56 w-56 animate-pulseGlow rounded-full bg-fuchsia-400/20 blur-3xl' />

				<motion.div
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}>
					<div className='mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-sky-100 shadow-2xl backdrop-blur-xl'>
						{/* <Sparkles className='h-4 w-4 text-amber-200' /> */}
						Senior Software Engineer • Product & Project Leader
					</div>

					<h1 className='font-display text-5xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-8xl'>
						I build bold digital products with{' '}
						<span className='text-gradient'>real impact.</span>
					</h1>

					<p className='mt-8 max-w-2xl text-lg leading-8 text-white/72 md:text-xl'>
						I’m Femi Meduoye, a Senior Software Engineer and technology leader
						focused on scalable websites, marketplaces, AI platforms, cloud
						solutions, dashboards, and business transformation.
					</p>

					<div className='mt-10 flex flex-wrap gap-4'>
						<a
							href='#work'
							className='rounded-2xl bg-sky-300 px-7 py-4 font-bold text-slate-950 shadow-[0_0_45px_rgba(56,189,248,.35)] transition hover:-translate-y-1 hover:bg-white'>
							View My Works
						</a>
						<a
							href='https://www.linkedin.com/in/oluwafemi-meduoye-9903a718b/'
							target='_blank'
							className='rounded-2xl border border-white/15 bg-white/10 px-7 py-4 font-bold backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/15'>
							Linkedin
						</a>
					</div>

					<div className='mt-10 grid gap-3 text-sm text-white/70 sm:grid-cols-3'>
						<a
							className='glass rounded-2xl p-4 transition hover:-translate-y-1'
							href='mailto:femoxmed@gmail.com'>
							<Mail className='mb-3 h-5 w-5 text-sky-300' />
							femoxmed@gmail.com
						</a>
						<a
							className='glass rounded-2xl p-4 transition hover:-translate-y-1'
							href='tel:+2348099858115'>
							<Phone className='mb-3 h-5 w-5 text-emerald-300' />
							+234 809 985 8115
						</a>
						<div className='glass rounded-2xl p-4'>
							<MapPin className='mb-3 h-5 w-5 text-fuchsia-300' />
							Lagos, Nigeria
						</div>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, scale: 0.92 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, delay: 0.1 }}
					className='relative'>
					<div className='absolute -inset-8 rounded-[3rem] bg-gradient-to-r from-sky-500/30 via-fuchsia-500/20 to-amber-300/20 blur-3xl' />
					<div className='glass relative animate-float rounded-[2.5rem] p-6'>
						<div className='rounded-[2rem] border border-white/10 bg-slate-950/70 p-6'>
							<div className='mb-6 flex items-center justify-between'>
								<div>
									<p className='text-sm text-white/45'>Portfolio Snapshot</p>
									<h2 className='font-display text-2xl font-bold'>
										Selected Builds
									</h2>
								</div>
								<div className='rounded-2xl bg-gradient-to-br from-sky-300 via-fuchsia-300 to-amber-200 p-4 text-slate-950'>
									<Globe2 className='h-8 w-8' />
								</div>
							</div>
							<div className='space-y-4'>
								{projects.slice(0, 5).map((project) => (
									<a
										key={project.title}
										href={project.url}
										target='_blank'
										className='group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-sky-300/40 hover:bg-white/[0.08]'>
										<div>
											<p className='font-bold'>{project.title}</p>
											<p className='text-sm text-white/45'>{project.tag}</p>
										</div>
										<ArrowUpRight className='h-5 w-5 text-white/45 transition group-hover:text-sky-300' />
									</a>
								))}
							</div>
						</div>
					</div>
				</motion.div>
			</section>

			<div className='border-y border-white/10 bg-white/[0.04] py-4'>
				<div className='animate-marquee whitespace-nowrap text-sm font-bold uppercase tracking-[0.35em] text-white/45'>
					<span className='mx-8'>AI Products</span>
					<span className='mx-8'>Marketplaces</span>
					<span className='mx-8'>Cloud Platforms</span>
					<span className='mx-8'>Dashboards</span>
					<span className='mx-8'>Startup Innovation</span>
					<span className='mx-8'>Digital Transformation</span>
					<span className='mx-8'>AI Products</span>
					<span className='mx-8'>Marketplaces</span>
					<span className='mx-8'>Cloud Platforms</span>
					<span className='mx-8'>Dashboards</span>
					<span className='mx-8'>Startup Innovation</span>
					<span className='mx-8'>Digital Transformation</span>
				</div>
			</div>

			<section id='expertise' className='mx-auto max-w-7xl px-6 py-24 lg:px-8'>
				<div className='mb-12 max-w-3xl'>
					<p className='mb-4 text-sm font-bold uppercase tracking-[0.35em] text-sky-300'>
						Expertise
					</p>
					<h2 className='font-display text-4xl font-black md:text-6xl'>
						Strategy, engineering, and execution in one profile.
					</h2>
				</div>
				<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
					{strengths.map(({ title, icon: Icon }) => (
						<motion.div
							whileHover={{ y: -8 }}
							key={title}
							className='glass rounded-[2rem] p-7'>
							<div className='mb-6 inline-flex rounded-2xl bg-gradient-to-br from-sky-300/20 to-fuchsia-300/20 p-4'>
								<Icon className='h-7 w-7 text-sky-200' />
							</div>
							<h3 className='font-display text-xl font-bold'>{title}</h3>
							<p className='mt-3 leading-7 text-white/60'>
								Building reliable, polished, scalable solutions that support
								business goals and create a strong user experience.
							</p>
						</motion.div>
					))}
				</div>
			</section>

			<section id='work' className='mx-auto max-w-7xl px-6 py-24 lg:px-8'>
				<div className='mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end'>
					<div>
						<p className='mb-4 text-sm font-bold uppercase tracking-[0.35em] text-fuchsia-300'>
							Selected Work
						</p>
						<h2 className='font-display text-4xl font-black md:text-6xl'>
							Portfolio Projects
						</h2>
					</div>
					<p className='max-w-xl leading-7 text-white/65'>
						A polished collection of platforms across art, commerce, AI,
						blockchain, cloud, productivity, automotive, and analytics.
					</p>
				</div>

				<div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
					{projects.map((project, index) => (
						<motion.a
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.45, delay: index * 0.04 }}
							whileHover={{ y: -10 }}
							key={project.title}
							href={project.url}
							target='_blank'
							className='group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-7 shadow-2xl backdrop-blur-xl'>
							<div
								className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${project.color} opacity-30 blur-2xl transition group-hover:opacity-60`}
							/>
							<div
								className={`mb-8 h-3 w-24 rounded-full bg-gradient-to-r ${project.color}`}
							/>
							<div className='relative flex items-start justify-between gap-4'>
								<div>
									<span className='rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/60'>
										{project.tag}
									</span>
									<h3 className='mt-5 font-display text-2xl font-black'>
										{project.title}
									</h3>
								</div>
								<ArrowUpRight className='h-6 w-6 text-white/45 transition group-hover:rotate-45 group-hover:text-white' />
							</div>
							<p className='relative mt-5 leading-7 text-white/62'>
								{project.description}
							</p>
						</motion.a>
					))}
				</div>
			</section>

			<section id='contact' className='mx-auto max-w-7xl px-6 pb-24 lg:px-8'>
				<div className='glass overflow-hidden rounded-[2.5rem] p-8 text-center md:p-14'>
					<p className='mb-5 text-sm font-bold uppercase tracking-[0.35em] text-amber-200'>
						Let’s Connect
					</p>
					<h2 className='mx-auto max-w-4xl font-display text-4xl font-black md:text-6xl'>
						Need a beautiful product, platform, or digital experience?
					</h2>
					<p className='mx-auto mt-6 max-w-2xl leading-8 text-white/65'>
						Reach out for collaborations, product builds, consulting, or
						technology leadership opportunities.
					</p>
					<div className='mt-10 flex flex-wrap justify-center gap-4'>
						<a
							href='mailto:femoxmed@gmail.com'
							className='rounded-2xl bg-white px-8 py-4 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-sky-200'>
							Email Me
						</a>
						<a
							href='tel:+2348099858115'
							className='rounded-2xl border border-white/15 bg-white/10 px-8 py-4 font-bold transition hover:-translate-y-1 hover:bg-white/15'>
							Call +234 809 985 8115
						</a>
					</div>
				</div>
			</section>
		</main>
	);
}
