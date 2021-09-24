import {ExclamationCircleIcon} from '@heroicons/react/outline'

export const NotActive = (): JSX.Element => {
  return (
    <div className="h-screen p-4 sm:flex sm:items-start sm:justify-center sm:bg-gray-50 sm:py-12">
      <div className="h-full flex flex-col justify-center items-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">    
        <ExclamationCircleIcon className="h-16 w-16 text-red-800" />
        <span className='font-bold mb-8 mt-4'>Legitymacja nieaktywna</span>
        <p className='text-center text-sm'>
        Twoja legitymacja jest nieaktywna. Może to być spowodowane nieopłaconą składką członkowską lub oczekiwaniem na przyjęcie do stowarzyszenia.
        Składkę członkowską możesz opłacić na stronie: <a className='underline font-medium' href={'https://panel.pspd.org.pl'}>panel.pspd.org.pl</a>
          <p className='mt-8'>W razie problemów prosimy o kontakt pod adresem:&nbsp;
            <a href='mailto:sekretarz@pspd.org.pl' className='underline font-medium'>sekretarz@pspd.org.pl</a></p>
        </p>
      </div>
    </div>
  )
}