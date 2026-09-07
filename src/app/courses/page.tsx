//"use client";
import CourseCard from "@/components/CourseCard"
import { courses } from "@/data/coursesdata"
import CourseExplorer from "@/components/CourseExplorer";

export default function CoursesPage() {
  return (
    <>
      <CourseExplorer courses={courses} />

    </>
  )
}
