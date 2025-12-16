# Hey Logos

A Next.js marketing site for Hey Logos, a voice-first AI coding assistant.

## Features

- **Landing Page**: Explains the value proposition, use cases, and functionality.
- **Waitlist System**: Allows users to sign up with email and optional usage details.
    - Submissions are logged to `data/waitlist.json` (MVP).
- **Legal Pages**: Simple Privacy Policy and Terms of Use.

## Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

3. **Build for production:**

   ```bash
   npm run build
   npm start
   ```

## Waitlist Data

Waitlist submissions are stored in `data/waitlist.json` relative to the project root. Ensure this directory is writable.

## Project Structure

- `src/app`: Page routes and API handlers.
- `src/components`: Reusable UI components.
- `src/app/globals.css`: Tailwind and global styles.

## License

Private.
