import Home from "pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StandardPage from "pages/StandardPage";
import CrudHub from "pages/CrudHub";
import Professionals from "pages/Professionals";
import Clients from "pages/Clients";
import Animals from "pages/Animals";
import Services from "pages/Services";
import ProfessionalForm from "pages/Professionals/ProfessionalForm";
import ClientForm from "pages/Clients/ClientForm";
import AnimalForm from "pages/Animals/AnimalForm";
import ServiceForm from "pages/Services/ServiceForm";

export default function AppRouter() {
	return (
		<main className="container">
			<Router>
				<Routes>
					<Route path="/" element={<StandardPage />}>
						<Route path="/home" element={<Home />} />
						<Route path="/crud" element={<CrudHub />} />
						<Route path="/crud/professionals" element={<Professionals />} />
						<Route path="/crud/clients" element={<Clients />} />
						<Route path="/crud/animals" element={<Animals />} />
						<Route path="/crud/services" element={<Services />} />
						<Route path="/crud/professionals/form" element={<ProfessionalForm />} />
						<Route path="/crud/clients/form" element={<ClientForm />} />
						<Route path="/crud/animals/form" element={<AnimalForm />} />
						<Route path="/crud/services/form" element={<ServiceForm />} />
					</Route>	
				</Routes>
			</Router>
		</main>
	);
}