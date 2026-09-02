import Branding from "@/src/components/ui/branding";
import Stats from "@/src/components/ui/stats";
import searchform from "@/src/components/ui/search-form";
import ContentBlock from "@/src/components/ui/contentblock";
import PetList from "@/src/components/ui/pet-list";
import PetDetails from "@/src/components/ui/petdetails";

export default function Page() {
	return (
		<main>
			<div className="flex justify-between items-center text-white py-9">
				<Stats />
			</div>
			<div className="flex justify-between items-center text-white py-9">
				<Branding />
			</div>
			<div className="grid md:grid-cols-3 md:grid-rows-[45px_1fr] grid-rows-[45px_300px_500px] gap-5 md:h-150">
				<div className="md:row-start-1 md:row-span-1 md:col-start-1 md:col-span-1">
				<searchform/>
				</div>
            
			<div className="md:row-start-2 md:row-span-full md:col-start-1 md:col-span-1">
            <ContentBlock>
                <PetList/>
            </ContentBlock>
			</div>

			<div className="md:row-start-1 md:row-span-full md:col-start-2 md:col-span-full">
			<ContentBlock>
				<PetDetails/>
			</ContentBlock>
			</div>
            
                
            </div>
		</main>
	)
;
}
