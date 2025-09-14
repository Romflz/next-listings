import { getSingleUser } from "@/models/userModel"
import { checkAuth } from "./checkAuth"

export async function checkSession() {
  const user = await checkAuth()
  
  if (!user) {
    return { error: 'Unauthorized', status: 401 }
  }

  try {
    // Get user from database by Firebase UID
    const userData = await getSingleUser(user.uid)
    
    if (!userData) {
      return { error: 'User not found', status: 404 }
    }

    return { data: userData, status: 200 }
  } catch (error) {
    console.error('Failed to get user:', error)
    return { error: 'Failed to get user', status: 500 }
  }
}