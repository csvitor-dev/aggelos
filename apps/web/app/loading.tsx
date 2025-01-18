export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid mx-auto"></div>
        <p className="mt-4 text-lg font-medium text-gray-600">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
}
