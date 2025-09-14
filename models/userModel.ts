import PrismaClient from "@/shared/lib/prisma/prisma"

export async function upsertUser(data: any) {
  try {
    const user = await PrismaClient.user.upsert({
      // First, find the user
      where: {
        f_user_id: data.uid,
      },
      // Update details if exists
      update: {
        lastSignedIn: new Date(),
        email_verified: data.emailVerified, // In case they decide to login with google, so email will be verified
      },
      // Create if not found
      create: {
        f_user_id: data.uid,
        name: data.name,
        email: data.email,
        email_verified: data.emailVerified,
        picture: data.picture,
        lastSignedIn: new Date(),
      },
    })

    return {
      name: user.name,
      email: user.email,
      picture: user.picture,
      id: user.f_user_id,
    }
  } catch (e) {
    console.log('Error in upsertUser', e)
    throw e // Re-throw so controller can handle it
  }
}

export async function getSingleUser(firebaseUid: string) {
  try {
    const user = await PrismaClient.user.findUnique({
      where: {
        f_user_id: firebaseUid,
      },
      select: {
        name: true,
        email: true,
        picture: true,
        f_user_id: true,
        email_verified: true,
        lastSignedIn: true,
      },
    })

    if (!user) {
      return null
    }

    // Return in consistent format
    return {
      name: user.name,
      email: user.email,
      picture: user.picture,
      id: user.f_user_id,
      emailVerified: user.email_verified,
      lastSignedIn: user.lastSignedIn,
    }
  } catch (e) {
    console.log('Error in getSingleUser', e)
    throw e
  }
}
