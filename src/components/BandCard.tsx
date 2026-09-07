import Image from "next/image";
import { Band } from "@/type/band";

type Props = {
  band: Band;
  isFollowing: boolean;
  likecount: number;
  onToggleFollow: (id:number) => void;
  onLike: (id:number) => void;
};

export default function BandCard({ band,isFollowing,likecount,onToggleFollow,onLike, }: Props) {
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
      <div className="flex items-start gap-8 mt-6">
        <button
          type="button"
          aria-pressed={isFollowing}
          onClick={() => onToggleFollow(band.id)}
          className="w-150 justify-center py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 whitespace-nowrap"
        >
          {isFollowing ? "เลิกติดตาม" : "ติดตาม"}
        </button>

        <button
          type="button"
          onClick={() => onLike(band.id)}
          className="px-4 py-2 rounded-lg bg-pink-200 hover:bg-pink- whitespace-nowrap"
        >
          👍 {likecount}
        </button>
      </div>
    </div>
  );
}
