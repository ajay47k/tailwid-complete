import React, {ReactNode} from 'react'

const RootLayout = ({children}:{children:ReactNode}) => {
  return (
    <main className='h-100vh'>
        {/* Navbar */}
        {children}
        {/* Footer */}
    </main>
  )
}

export default RootLayout