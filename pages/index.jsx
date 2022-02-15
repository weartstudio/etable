import Head from 'next/head';
import Footer from '../components/footer';

export default function Home() {
	return (
		<>
			<Head>
				<title>eTable</title>
			</Head>
			<main>
				<div className='container'>home</div>
			</main>
			<Footer />
		</>
	);
}
