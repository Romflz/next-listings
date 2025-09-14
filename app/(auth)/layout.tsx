import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const sessionCookie = cookieStore.get('__session')

  // If session cookie present, dont allow login page
  // if(sessionCookie) {
  //   redirect('/')
  // }

  
  return <>{children}</>
}