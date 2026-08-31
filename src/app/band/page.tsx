import BandCard from "@/components/BandCard";
import { bands } from "@/data/band";

export default function BandPage() {
  return (
    <main>
      <h1>วงดนตรีที่ชื่นชอบ</h1>

      {bands.map((band) => (
        <BandCard key={band.id} band={band} />
      ))}
    </main>
  );
}
