import { Route, Routes as Switch } from 'react-router-dom';
import Home from '../pages/home';
import Register from '../pages/auth/register';
import Login from '../pages/auth/login';
import LikedMovies from '../pages/liked/likedMovies';
import Ticket from '../pages/tickets/ticket';
// import Protected from "./protected";

interface RoutesProps {}

const Routes = (props: RoutesProps) => {
	return (
		<div>
			<Switch>
				<Route index element={<Home />} />
				<Route path="auth">
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
				</Route>
				<Route path="favorites" element={<LikedMovies />} />
				<Route path="tickets" element={<Ticket />} />
			</Switch>
		</div>
	);
};

export default Routes;
