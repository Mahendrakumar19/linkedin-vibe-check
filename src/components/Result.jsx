import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";

const bios = [
  "Product Manager | Making meetings longer since 2015",
  "Software Engineer | Debugging my own life, one bug at a time",
  "Marketing Specialist | Turning coffee into campaigns",
  "HR Enthusiast | Professional birthday cake organizer",
  "Data Analyst | Excel wizard & chart whisperer",
  "UX Designer | Making things pretty and sometimes useful",
  "Sales Lead | Can sell sand in a desert",
  "Customer Success | Translator of angry emails",
  "Operations Guru | If it works, I probably fixed it",
  "Content Creator | Storytelling with too many emojis",
];

export default function Result() {
  const navigate = useNavigate();
  useSearchParams();
  const randomIdx = Math.floor(Math.random() * bios.length);
  const shareText = `My LinkedIn Vibe: "${bios[randomIdx]}"\n\nFind yours at: ${window.location.origin}`;

  function takeQuizAgain() {
    navigate('/');
  }

  function shareOnTwitter() {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`,
      "_blank"
    );
  }

  function shareOnLinkedIn() {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        window.location.origin
      )}&summary=${encodeURIComponent(shareText)}`,
      "_blank"
    );
  }

  function shareOnWhatsApp() {
    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`,
      "_blank"
    );
  }

  function shareOnFacebook() {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        window.location.origin
      )}`,
      "_blank"
    );
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(shareText).then(() => {
      alert("Copied to clipboard!");
    });
  }

  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
    });
  }, []);

  return (
    <div className="flex items-center justify-center w-screen min-h-screen linkedin-blue">
      <div className="w-full max-w-md p-8 text-center text-black bg-white rounded-lg shadow-xl">
        <h1 className="mb-6 text-4xl font-bold">Your LinkedIn Vibe:</h1>
        <p className="mb-6 text-2xl font-medium">{bios[randomIdx]}</p>

        <div className="flex flex-col gap-3">
          <button
            onClick={shareOnTwitter}
            className="p-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Share on Twitter
          </button>
          <button
            onClick={shareOnLinkedIn}
            className="p-3 text-white bg-blue-700 rounded-lg hover:bg-blue-800"
          >
            Share on LinkedIn
          </button>
          <button
            onClick={shareOnWhatsApp}
            className="p-3 text-white bg-green-500 rounded-lg hover:bg-green-600"
          >
            Share on WhatsApp
          </button>
          <button
            onClick={shareOnFacebook}
            className="p-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
          >
            Share on Facebook
          </button>
          <button
            onClick={copyToClipboard}
            className="p-3 text-gray-800 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            Copy to Clipboard
          </button>
          <button
            onClick={takeQuizAgain}
            className="p-3 text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600"
          >
            🎯 Take Quiz Again
          </button>
        </div>
      </div>
    </div>
  );
}
