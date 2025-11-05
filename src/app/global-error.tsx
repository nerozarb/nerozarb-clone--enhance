"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="max-w-md w-full p-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Something went wrong
            </h1>
            <p className="text-muted-foreground mb-8">
              An unexpected error occurred. Please try again.
            </p>
            <button
              onClick={reset}
              className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition-all duration-300"
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
