import BandExplorer from "@/components/BandExplorer";
import { bands } from "@/data/band";

export default function BandPage() {
  return (
    <main>
      <h1 className="band-title">Favorite Bands</h1>

      <BandExplorer bands={bands} />
    </main>
  );
}
