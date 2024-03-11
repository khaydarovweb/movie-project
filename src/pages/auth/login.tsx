import Logo from '../../assets/imgs/logo.png';

interface LoginProps {}

const Login = (props: LoginProps) => {
	const handleSubmit = () => {
		console.log('submit');
	};

	return (
		<section className="h-screen flex">
			<div className="w-2/4 flex  bg-yellow-500 rounded-3xl m-3 p-5">
				<img className="w-[130px] h-[50px]" src={Logo} alt="" />
				<h1 className="text-white self-baseline light italic">
					Welcome. <br /> Begin your cinematic <br /> adventure now with <br /> our ticketing <br />{' '}
					platform!
				</h1>
			</div>
			<div className="w-2/4">
				<form onSubmit={handleSubmit}>
					<input type="email" />
					<input type="password" />
					<button type="submit">Log In</button>
				</form>
			</div>
		</section>
	);
};

export default Login;
