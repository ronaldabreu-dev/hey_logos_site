import mongoose, { Schema, Model } from 'mongoose';

export interface IWaitlist {
    email: string;
    usage?: string;
    timestamp: Date;
}

const WaitlistSchema = new Schema<IWaitlist>({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true, // rudimentary check, might want to allow duplicates or handle gracefullly
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please provide a valid email address'],
    },
    usage: {
        type: String,
        required: false,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

// Prevent Mongoose "OverwriteModelError" during development hot reloading
const Waitlist: Model<IWaitlist> = mongoose.models.Waitlist || mongoose.model<IWaitlist>('Waitlist', WaitlistSchema);

export default Waitlist;
