import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function  middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret:"78zFZvyspgAIBXPKdA0AhFqcNWXX16/CEmxFOHU3i9g="
  });
  if(!token){
    return NextResponse.redirect(new URL('/', req.url))
  }
  
  
}

export const config = {
  matcher: '/welcome/:path*',
}