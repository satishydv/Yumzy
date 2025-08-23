"use client"
import { ThemeProvider } from 'next-themes'
import React, { ReactNode } from 'react'

const Provider = ({children}: {children: ReactNode}) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
    //   suppressHydrationWarning={true}
    >
      {children}
    </ThemeProvider>
  )
}

export default Provider