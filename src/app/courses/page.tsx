import CourseCard from "@/components/CourseCard"
import { courses } from "@/data/coursesdata"

export default function CoursesPage() {
  return (
    <div className="p-4">
      {courses.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  )
}
