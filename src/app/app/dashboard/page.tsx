import Stats from "@/src/components/ui/stats";
import Branding from "@/src/components/ui/branding";

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