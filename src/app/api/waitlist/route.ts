import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Waitlist from '@/models/Waitlist';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, usage } = body;

        // Basic email validation
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json(
                { success: false, message: 'Invalid email address' },
                { status: 400 }
            );
        }

        // Connect to Database
        await dbConnect();

        // Create new entry
        try {
            await Waitlist.create({
                email,
                usage: usage || '',
            });

            console.log('New Waitlist Submission (MongoDB):', email);
        } catch (error: unknown) {
            // Handle duplicate email error specifically if needed, 
            // or just general errors. 
            if ((error as { code?: number }).code === 11000) {
                // E11000 duplicate key error collection
                // We can treat this as success to not leak info, or return a specific message.
                // For now, let's just return success so the user sees "You're on the list!"
                console.log('Duplicate email submission:', email);
                return NextResponse.json({ success: true });
            }
            throw error;
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Waitlist API error:', error);
        return NextResponse.json(
            { success: false, message: 'Internal server error' },
            { status: 500 }
        );
    }
}
