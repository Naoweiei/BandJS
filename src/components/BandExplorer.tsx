"use client";

import { useState, type ChangeEvent } from "react";
import type { Band } from "@/type/band";
import BandCard from "@/components/BandCard";

type Props = {
  bands: Band[];
};

export default function BandExplorer({ bands }: Props) {
  const [keyword, setKeyword] = useState("");
  const [followIds, setFollowIds] = useState<number[]>([]);
  const [likes, setLikes] = useState<Record<number, number>>({});

  function handleKeywordChange(event: ChangeEvent<HTMLInputElement>) {
    setKeyword(event.target.value);
  }

  const searchText = keyword.trim().toLowerCase();

  const visibleBands = bands.filter((band) =>
    band.name.toLowerCase().includes(searchText)
  );

  function handleToggleFollow(id: number) {
    setFollowIds((prevIds) =>
      prevIds.includes(id)
        ? prevIds.filter((followId) => followId !== id)
        : [...prevIds, id]
    );
  }

  function handleLike(id: number) {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [id]: (prevLikes[id] ?? 0) + 1,
    }));
  }

  return (
    <div>
      <input
        type="search"
        aria-label="ค้นหาวงดนตรี"
        value={keyword}
        onChange={handleKeywordChange}
        placeholder="ค้นหาชื่อวงดนตรี"
        className="ml-110 mt-2 w-80 rounded-xl border border-gray-300 bg-white px-4 py-2.5
          text-sm text-gray-700 shadow-sm outline-none
          transition
          placeholder:text-gray-400
          focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      />

      <p className="mt-2 ml-112 text-sm">กำลังติดตามอยู่ {followIds.length} วง</p>

      {visibleBands.length === 0 ? (
        <p className="band-title2">ไม่พบวงดนตรีที่ตรงกับเงื่อนไข</p>
      ) : (
        <section>
          {visibleBands.map((band) => (
            <BandCard
              key={band.id}
              band={band}
              isFollowing={followIds.includes(band.id)}
              likecount={likes[band.id] ?? 0}
              onToggleFollow={() => handleToggleFollow(band.id)}
              onLike={() => handleLike(band.id)}
            />
          ))}
        </section>
      )}
    </div>
  );
}

