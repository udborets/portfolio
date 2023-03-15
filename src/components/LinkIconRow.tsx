interface LinkIconRowProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

const LinkIconRow = ({ children, className }: LinkIconRowProps) => {
  return (
    <div className={`flex gap-8 items-center mt-5 ${className ?? ""}`}>
      {children}
    </div>
  )
}

export default LinkIconRow