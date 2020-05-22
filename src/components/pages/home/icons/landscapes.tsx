import React from "react";

function LandscapesIcon({ s = 140 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={s} height={s} viewBox="0 0 140 140" fill="none">
      <rect width="140" height="140" fill="#EBF4FF" rx="18"></rect>
      <path
        fill="#667EEA"
        fillRule="evenodd"
        d="M72.708 42l-2.118 3.919c-4.661 9.144-9.745 18.288-14.83 27.432l-4.236-4.355-1.271 2.613c-4.66 7.402-8.898 14.805-13.558 22.642L35 97.735h70.332l-1.271-3.484c-2.119-5.225-4.237-10.886-6.78-16.11l-1.27-3.049-4.66 4.79L74.825 45.92 72.708 42zm0 10.015c2.118 4.354 4.237 9.144 6.779 13.934l-1.695 1.306-5.084-4.354-5.508 4.354-2.118-1.742c2.542-4.354 5.084-9.144 7.626-13.498zm0 16.981l5.084 4.355 3.813-3.048c2.542 4.79 4.66 9.58 7.203 14.369l1.271 3.048 4.237-4.79c1.695 3.483 2.966 6.967 4.237 10.015H42.626c3.39-5.66 6.78-10.886 9.745-16.546l4.66 4.79 1.272-3.049a81.462 81.462 0 004.66-8.273l4.237 3.484 5.508-4.355z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default LandscapesIcon;