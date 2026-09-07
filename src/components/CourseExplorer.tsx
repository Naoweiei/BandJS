"use client"; 
 
import { useState, type ChangeEvent } from "react"; 
import type { Course } from "@/type/course"; 
import CourseCard from "@/components/CourseCard";
 
type CourseExplorerProps = { 
  courses: Course[]; 
}; 
 
export default function CourseExplorer({ courses }: CourseExplorerProps) { 
  const [keyword, setKeyword] = useState(""); 
 
  function handleKeywordChange(event: ChangeEvent<HTMLInputElement>) { 
    setKeyword(event.target.value); 
  } 
  const searchText = keyword.trim().toLowerCase(); 
 
  const visibleCourses = courses.filter( 
    (course) => 
        course.title.toLowerCase().includes(searchText) || 
        course.code.includes(searchText) 
    ); 

    const [favoriteIds, setFavoriteIds] = useState<number[]>([]); 
 
    function handleToggleFavorite(id: number) { 
        setFavoriteIds((prevIds) => 
            prevIds.includes(id) 
             ? prevIds.filter((favoriteId) => favoriteId !== id) 
             : [...prevIds, id] 
        ); 
    }

  return ( 
    <div> 
      <input 
        type="search" 
        aria-label="ค้นหารายวิชา" 
        value={keyword} 
        onChange={handleKeywordChange} 
        placeholder="ค้นหาชื่อวิชาหรือรหัสวิชา"
        className="ml-4 mt-2 w-80 rounded-xl border border-gray-300 bg-white px-4 py-2.5
             text-sm text-gray-700 shadow-sm outline-none
             transition
             placeholder:text-gray-400
             focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      /> 
    {visibleCourses.length === 0 ? ( 
        <p>ไม่พบรายวิชาที่ตรงกับเงื่อนไข</p> 
    ) : ( 
     <section> 
        {visibleCourses.map((course) => ( 
         <CourseCard 
            key={course.id} 
            course={course}
            isFavorite={favoriteIds.includes(course.id)}
            onToggleFavorite={handleToggleFavorite} /> 
    ))} 
  </section> 
)} 
    </div> 
  ); 
}