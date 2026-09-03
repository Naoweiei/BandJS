import Image from "next/image";
import { Band } from "@/type/band";

type Props = {
  band: Band;
};

export default function BandCard({ band }: Props) {
  return (
    <div className="band">
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

      <h3 className="font-bold mt-4">สมาชิก</h3>

      <div className="flex gap-6 mt-4">
        {band.members.map((member) => (
          <div key={member.id} className="text-center">
            <Image
              src={member.image}
              alt={member.name}
              width={100}
              height={100}
              className="w-[100] h-[100] rounded-full object-cover"
            />

            <p className="mt-2 font-medium">
              {member.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
