// Hook for User Authentication
import { hash } from 'bcryptjs'
import { NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: Request) {
    const { email, password } = await req.json()
    const hashed = await hash(password, 12)

    const user = await prisma.user.create({
        data: {
            email,
            password: hashed
        }
    })

    return NextResponse.json({
        user: {
            email: user.email,
        }
    })
}