import Home from "pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StandardPage from "pages/StandardPage";
import CrudHub from "pages/CrudHub";
import Employees from "pages/Employees";
import Clients from "pages/Clients";
import Animals from "pages/Animals";
import Services from "pages/Services";
import EmployeeForm from "pages/Employees/EmployeeForm";
import ClientForm from "pages/Clients/ClientForm";
import AnimalForm from "pages/Animals/AnimalForm";
import ServiceForm from "pages/Services/ServiceForm";
import Login from "pages/Login";

export default function AppRouter() {
	return (
		<main className="container">
			<Router>
				<Routes>
					<Route path="/" element={<StandardPage />}>
						<Route path="/home" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/crud" element={<CrudHub />} />
						<Route path="/crud/employees" element={<Employees />} />
						<Route path="/crud/clients" element={<Clients />} />
						<Route path="/crud/animals" element={<Animals />} />
						<Route path="/crud/services" element={<Services />} />
						<Route path="/crud/employees/form" element={<EmployeeForm />} />
						<Route path="/crud/clients/form" element={<ClientForm />} />
						<Route path="/crud/animals/form" element={<AnimalForm />} />
						<Route path="/crud/services/form" element={<ServiceForm />} />
					</Route>	
				</Routes>
			</Router>
		</main>
	);
}