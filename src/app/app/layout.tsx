import AppFooter from "@/src/components/ui/AppFooter";
import AppHeader from "@/src/components/ui/AppHeader";
import BackgroundHeader from "@/src/components/ui/background-pattern";

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<BackgroundHeader />

			<div className="flex flex-col max-w-[1050px] mx-auto px-4 ">
				<AppHeader />
				{children}
				<AppFooter />
			</div>
		</>
	);
}
