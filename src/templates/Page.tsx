export const Page = ({ className, children }:
  { className?: string, children: JSX.Element }) => {
  return (
    <div className="page">
      <div className='page__container'>
        <div className={`flex w-full h-full ${className ?? ""}`} >
          {children}
        </div>
      </div>
    </div>
  )
}
