export default function Loading() {
  return (
    <div className="flex h-[50vh] w-full items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Simple spinning circle */}
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-primary-500"></div>
        <p className="text-sm font-medium text-gray-500">Loading...</p>
      </div>
    </div>
  );
}
