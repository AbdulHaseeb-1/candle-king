import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const questions = [
  { key: "What", value: "What you will get at the end?" },
  { key: "When", value: "When you will achieve your goals" },
  { key: "How", value: "How goals are achieved" },
  { key: "Where", value: "Where should i go for this" },
]

export default function QuestionList() {
  return (
    <div className="flex flex-col justify-center items-center  ">
     <h1 className="text-4xl text-white md:text-5xl lg:text-6xl font-bold text-center mb-12 lg:mb-16">
       Questions?
      </h1>
      <Card className="w-full max-w-md bg-neutral-950 border-none">
        <CardHeader>
          <CardTitle className="text-center text-white">These sections will tell why you should follow candle king</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 ">
            {questions.map((question) => (
              <li key={question.key} className="flex justify-between items-center">
                <span className="font-semibold text-sky-500">{question.key}:</span>
                <span className="text-gray-100">{question.value}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

