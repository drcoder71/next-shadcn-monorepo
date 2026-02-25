import { Button } from "../ui/button"
import { Card } from "../ui/card"

export const CourseCard = () => {
    return (
        <Card className="w-120 border bg-primary-foreground rounded-xl p-5">
            <h2 className="text-2xl mb-4 font-bold">Course Title</h2>
            <p className="text-gray-600 mb-4">This is a brief description of the course. It provides an overview of what the course is about and what students can expect to learn.</p>
            <Button className="bg-primary text-white">Click me</Button>
        </Card>
    )
}
