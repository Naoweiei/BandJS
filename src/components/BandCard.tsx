import Image from "next/image";
import { Band } from "@/type/band";

type Props = {
  band: Band;
};

export default function BandCard({ band }: Props) {
  return (
    <div>
      <Image
        src={band.image}
        alt={band.name}
        width={500}
        height={300}
        className="w-[300] h-[200] object-cover"
      />

      <h2 className="font-bold">{band.name}</h2>
      <p>แนวเพลง : {band.genre}</p>
      <p>{band.description}</p>

      <h3>สมาชิก</h3>

      <ul>
        {band.members.map((member) => (
          <li key={member.id}>
            {member.name} - {member.role}
          </li>
        ))}
      </ul>
    </div>
  );
}
