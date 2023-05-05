import '@/styles/global.scss';

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <html lang="en">
        <body>{children}</body>
      </html>
    </>
  )
}

export default RootLayout;