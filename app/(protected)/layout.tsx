'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const sessionCookie = cookieStore.get('__session')

  // If no session cookie present, redirect to login
  if(!sessionCookie) {
    redirect('/login')
  }


  
  return <>{children}</>
}