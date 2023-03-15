export const Page = ({ wrapperClass, children }:
  { wrapperClass: string, children: JSX.Element }) => {
  return (
    <div className="page">
      <div className='page__container'>
        <div className={wrapperClass}>
          {children}
        </div>
      </div>
    </div>
  )
}
