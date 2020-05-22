import React from "react";

function OTPIcon({ s = 90 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={s} height={s} fill="none" viewBox="0 0 200 200">
      <circle cx="100" cy="100" r="100" fill="#CEEDFF"></circle>
      <path
        fill="#4299E1"
        d="M126.061 75.013h24.242a9.233 9.233 0 019.697 8.62v34.478a9.233 9.233 0 01-9.697 8.619H49.697A9.233 9.233 0 0140 118.111V83.632a9.233 9.233 0 019.697-8.62h76.364z"
      ></path>
      <path
        fill="#1E4E8C"
        d="M65.635 114.041a4.308 4.308 0 01-4.31-4.31v-1.645l-2.381 1.191a4.309 4.309 0 11-3.855-7.711l.909-.454-.91-.455a4.31 4.31 0 113.856-7.71l2.381 1.19v-1.645a4.31 4.31 0 018.62 0v1.646l2.383-1.191a4.31 4.31 0 013.855 7.71l-.91.455.91.454a4.31 4.31 0 11-3.856 7.711l-2.382-1.191v1.645a4.307 4.307 0 01-4.31 4.31zM100.114 114.041a4.309 4.309 0 01-4.31-4.31v-1.645l-2.382 1.191a4.309 4.309 0 11-3.856-7.711l.91-.454-.91-.455a4.31 4.31 0 113.856-7.71l2.382 1.19v-1.645a4.31 4.31 0 018.62 0v1.646l2.382-1.191a4.31 4.31 0 013.855 7.71l-.909.455.909.454a4.31 4.31 0 11-3.856 7.711l-2.381-1.191v1.645a4.307 4.307 0 01-4.31 4.31zM131.544 112.779a4.307 4.307 0 003.048 1.262 4.307 4.307 0 004.31-4.31v-1.645l2.382 1.191a4.308 4.308 0 006.122-2.863 4.31 4.31 0 00-2.267-4.848l-.909-.454.909-.455a4.31 4.31 0 00-3.855-7.71l-2.382 1.19v-1.645a4.31 4.31 0 10-8.62 0v1.646l-2.382-1.191a4.31 4.31 0 10-3.855 7.71l.909.455-.909.454a4.31 4.31 0 103.855 7.711l2.382-1.191v1.645c0 1.143.453 2.24 1.262 3.048z"
      ></path>
    </svg>
  );
}

export default OTPIcon;