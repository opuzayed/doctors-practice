import React from "react";

const Loading = () => {
  return (
    <div class="flex items-center justify-center">
      <div
        class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-green-500"
        role="status"
      >
        <span class="visually-hidden">...</span>
      </div>
    </div>
  );
};

export default Loading;
