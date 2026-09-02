import Stats from "@/components/ui/stats";
import Branding from "@/components/ui/branding";

export default function Page() {
  return (
    <main>
      <div className="flex justify-between items-center text-white py-9">
        <Stats />
      </div>
      <div className="flex justify-between items-center text-white py-9">
        <Branding />
      </div>
    </main>
  );
}