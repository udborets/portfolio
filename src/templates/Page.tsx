

interface PageProps {
  className?: string;
  children: JSX.Element | JSX.Element[];
}
export const Page = ({ className, children }: PageProps) => {
  return (
    <main className="page flex flex-col w-full h-full p-5 main-bg">
      <div className='page-container flex h-full flex-col flex-grow'>
        <div className={`content-wrapper flex flex-grow flex-col h-full ${className ?? ""}`} >
          {children}
        </div>
      </div>
    </main>
  )
}
