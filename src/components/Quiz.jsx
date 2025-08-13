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
  },
  {
    text: "Someone posts: 'Thrilled to share my journey from intern to SDE!' You...",
    options: [
      { text: "Comment 'Inspire kar diya yaar!'", points: 3 },
      { text: "Heart react and move on", points: 2 },
      { text: "Screenshot for your mom", points: 1 }
    ]
  },
  {
    text: "Your LinkedIn shows 'John viewed your profile.' You...",
    options: [
      { text: "Immediately check John's profile", points: 2 },
      { text: "Send connection request to John", points: 3 },
      { text: "Wonder who John is", points: 1 }
    ]
  },
  {
    text: "You see a post: 'Life at Google is amazing! #blessed' You...",
    options: [
      { text: "Comment 'Referral milega?'", points: 3 },
      { text: "Double tap and dream", points: 2 },
      { text: "Report for spam (just kidding)", points: 1 }
    ]
  },
  {
    text: "Your startup founder posts: 'We're disrupting the space!' You...",
    options: [
      { text: "Comment 'What space exactly?'", points: 1 },
      { text: "Like for moral support", points: 2 },
      { text: "Share with laughing emoji", points: 3 }
    ]
  },
  {
    text: "You get invited to 'Connect with fellow entrepreneurs!' event. You...",
    options: [
      { text: "RSVP immediately for networking", points: 2 },
      { text: "Check if there's free food first", points: 3 },
      { text: "Mark 'Maybe' and forget", points: 1 }
    ]
  },
  {
    text: "Someone messages you: 'Are you interested in a career opportunity?' You...",
    options: [
      { text: "Reply 'Current CTC vs your offer?'", points: 3 },
      { text: "Ask for job description", points: 2 },
      { text: "Leave on read", points: 1 }
    ]
  },
  {
    text: "You see '10 coding tips that changed my life' post. You...",
    options: [
      { text: "Save for later (never read)", points: 2 },
      { text: "Comment 'Great insights!'", points: 1 },
      { text: "Share with your own hot take", points: 3 }
    ]
  },
  {
    text: "Your connection posts about their coding bootcamp graduation. You...",
    options: [
      { text: "Comment 'Welcome to the club!'", points: 2 },
      { text: "DM them for referral opportunities", points: 3 },
      { text: "React with 'clapping hands' emoji", points: 1 }
    ]
  },
  {
    text: "You see: 'Day 100 of learning JavaScript!' You...",
    options: [
      { text: "Comment 'Consistency is key!'", points: 2 },
      { text: "Think 'Show off' and scroll", points: 1 },
      { text: "Post your own 'Day 1 of learning Python'", points: 3 }
    ]
  },
  {
    text: "Your manager posts about 'work-life balance.' You...",
    options: [
      { text: "Like while working at 11 PM", points: 3 },
      { text: "Comment 'So true!'", points: 2 },
      { text: "Screenshot and share in team group", points: 1 }
    ]
  }
]

export default function Quiz() {
  const navigate = useNavigate()
  const [questions] = useState(() => shuffle([...allQuestions]).slice(0, 8)) // 8 random questions
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

  function goBackToDashboard() {
    navigate('/')
  }

  return (
    <div className="flex items-center justify-center w-screen min-h-screen linkedin-blue">
      <div className="w-full max-w-md p-8 text-center bg-gray-800 rounded-xl">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={goBackToDashboard}
            className="text-gray-400 hover:text-white transition-colors"
          >
            ← Back
          </button>
          <div className="text-sm text-gray-400">
            {currentQuestion + 1} / {questions.length}
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-700 rounded-full h-2 mb-8">
          <div 
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>

        <h1 className="mb-8 text-3xl font-bold">LinkedIn Vibe Check</h1>
        <h2 className="mb-6 text-xl">{questions[currentQuestion].text}</h2>
        {questions[currentQuestion].options.map((option, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(option.points)}
            className="block w-full p-4 mb-3 transition bg-gray-700 rounded-lg hover:bg-gray-600 text-left"
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  )
}