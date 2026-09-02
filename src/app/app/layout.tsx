import AppFooter from "@/src/components/ui/AppFooter";
import AppHeader from "@/src/components/ui/AppHeader";
import BackgroundHeader from "@/src/components/ui/background-pattern";
import PetContextProvider from "@/src/contexts/context-provider";
import axios from "axios";

export default async function layout({ children }: { children: React.ReactNode }) {

	const response  = await axios.get('http://bytegrad.com/course-assets/projects/petsoft/api/pets')
	if(!response) throw new Error('Failed to fetch pets')
	return (
		<>
			<BackgroundHeader />

			<div className="flex flex-col max-w-262.5 mx-auto px-4 ">
				<AppHeader />
				<PetContextProvider>
					{children}
				</PetContextProvider>
				{children}
				<AppFooter />
			</div>
		</>
	);
}
