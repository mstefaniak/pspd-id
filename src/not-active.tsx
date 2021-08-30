export const NotActive = (): JSX.Element => {
  return (
    <div className="sm:min-h-screen sm:flex sm:items-start sm:justify-center sm:bg-gray-50 sm:py-12">
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">    
        Legitymacja nieaktywna
      </div>
    </div>
  )
}