import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function shuffle(array) {
  let currentIndex = array.length, randomIndex
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }
  return array
}

const allQuestions = [
  {
    text: "Your manager says 'Let's do chai pe charcha.' You...",
    options: [
      { text: "Bring samosas for extra points", points: 3 },
      { text: "Nod and hope for free chai", points: 2 },
      { text: "Ask if it's on Teams or at the tapri", points: 1 }
    ]
  },
  {
    text: "You get a LinkedIn message: 'Let's connect, bhai!' You...",
    options: [
      { text: "Accept and send a 'Jai Ho!' emoji", points: 3 },
      { text: "Ignore, too many connections already", points: 1 },
      { text: "Reply with 'Kitna package?'", points: 2 }
    ]
  },
  {
    text: "Your team schedules a meeting at 9:00 AM IST. You...",
    options: [
      { text: "Join with bedhead and chai in hand", points: 2 },
      { text: "Say 'Network issue' and join late", points: 3 },
      { text: "Actually show up on time (legend)", points: 1 }
    ]
  },
  {
    text: "You see a post: 'Proud to announce my promotion at Infosys.' You...",
    options: [
      { text: "Comment 'Party kab hai?'", points: 3 },
      { text: "Like and move on", points: 2 },
      { text: "Send a 'Shubhkamnayein' GIF", points: 1 }
    ]
  },
  {
    text: "Your boss says 'Let's do jugaad.' You...",
    options: [
      { text: "Find a hacky solution that just works", points: 3 },
      { text: "Ask ChatGPT for a shortcut", points: 2 },
      { text: "Google 'jugaad meaning'", points: 1 }
    ]
  },
  {
    text: "You get a calendar invite for a meeting at 7:30 PM. You...",
    options: [
      { text: "Join from the dinner table, mute ON", points: 2 },
      { text: "Say 'power cut' and skip", points: 3 },
      { text: "Actually attend and take notes", points: 1 }
    ]
  },
  {
    text: "Your colleague says 'Let's do a quick call after lunch.' You...",
    options: [
      { text: "Ask 'Before chai or after?'", points: 2 },
      { text: "Say 'Lunch break is sacred, boss'", points: 3 },
      { text: "Agree and forget to join", points: 1 }
    ]
  },
  {
    text: "You see a post: 'Feeling blessed to start at TCS.' You...",
    options: [
      { text: "Comment 'Welcome to the family!'", points: 2 },
      { text: "Tag a friend: 'Your turn next?'", points: 3 },
      { text: "Scroll past silently", points: 1 }
    ]
  },
  {
    text: "You get tagged in a 'Happy Diwali from our team!' post. You...",
    options: [
      { text: "Reply with 5 firecracker emojis", points: 3 },
      { text: "Like and move on", points: 2 },
      { text: "Ignore, too many tags already", points: 1 }
    ]
  },
  {
    text: "Your boss says 'Let's circle back after the long weekend.' You...",
    options: [
      { text: "Forget about it until next quarter", points: 2 },
      { text: "Send a reminder on Monday morning", points: 1 },
      { text: "Reply 'Sure, will ping after chai!'", points: 3 }
    ]
  }
]

export default function Quiz() {
  const navigate = useNavigate()
  const [questions] = useState(() => shuffle([...allQuestions]).slice(0, 5)) // 5 random questions
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)

  function handleAnswer(points) {
    const newScore = score + points
    setScore(newScore)
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      navigate(`/result?score=${newScore}`)
    }
  }

  return (
    <div className="flex items-center justify-center w-screen min-h-screen linkedin-blue">
      <div className="w-full max-w-md p-8 text-center bg-gray-800 rounded-xl">
        <h1 className="mb-12 text-4xl font-bold">LinkedIn Vibe Check</h1>
        <h2 className="mb-4 text-xl">{questions[currentQuestion].text}</h2>
        {questions[currentQuestion].options.map((option, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(option.points)}
            className="block w-full p-4 mb-2 transition bg-gray-700 rounded-lg hover:bg-gray-600"
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  )
}