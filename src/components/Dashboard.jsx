import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const navigate = useNavigate()

  function startQuiz() {
    navigate('/quiz')
  }

  return (
    <div className="flex items-center justify-center w-screen min-h-screen linkedin-blue">
      <div className="w-full max-w-lg p-8 text-center bg-gray-800 rounded-xl">
        <div className="mb-8">
          <h1 className="mb-4 text-5xl font-bold text-white">LinkedIn Vibe Check</h1>
          <p className="text-xl text-gray-300">
            Discover your authentic LinkedIn personality! 🚀
          </p>
        </div>
        
        <div className="mb-8 space-y-4 text-left text-gray-300">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">🎯</span>
            <span>Take a fun quiz about your LinkedIn habits</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-2xl">😄</span>
            <span>Get a personalized LinkedIn bio based on your answers</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-2xl">📱</span>
            <span>Share your vibe with friends on social media</span>
          </div>
        </div>

        <button
          onClick={startQuiz}
          className="w-full px-8 py-4 text-xl font-bold text-white transition-all duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-105 active:scale-95"
        >
          Start Vibe Check ✨
        </button>

        <p className="mt-4 text-sm text-gray-400">
          Takes less than 2 minutes • 100% fun guaranteed
        </p>
      </div>
    </div>
  )
}
