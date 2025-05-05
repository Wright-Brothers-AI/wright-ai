# Wright Brothers AI

An AI-powered flight education assistant designed to help student pilots learn and study aviation regulations and information.

## Overview

Wright Brothers AI offers advanced AI solutions to help student pilots navigate the complexities of aviation regulations and flight information. The application features two specialized AI assistants:

- **Wilbur AI**: Specializes in interpreting the Code of Federal Regulations (FAR), providing precise and reliable information to ensure compliance with aviation laws.
- **Orville AI**: Focuses on the Aeronautical Information Manual (AIM), offering in-depth guidance and insights to help understand and follow aviation protocols effectively.

## Features

- **AI Chat Interface**: Interact with Wilbur and Orville AI assistants to get answers to aviation-related questions
- **User Authentication**: Secure login and signup functionality
- **Chat History**: Save and review previous conversations
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **UI Components**: Radix UI
- **Authentication**: Supabase Auth
- **Database**: Supabase
- **AI Integration**: OpenAI API
- **Deployment**: Vercel

## Prerequisites

- Node.js (v18 or later)
- npm or bun
- Supabase account
- OpenAI API key

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/wright-ai.git
   cd wright-ai
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   bun install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```
   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   
   # OpenAI
   OPENAI_API_KEY=your_openai_api_key
   ```

4. Initialize Supabase:
   ```bash
   npx supabase init
   ```

5. Run the development server:
   ```bash
   npm run dev
   # or
   bun dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/src/app`: Next.js app router pages
- `/src/components`: React components
- `/src/lib`: Utility functions, hooks, and types
- `/src/lib/chat`: Chat-related functionality
- `/src/lib/supabase-auth`: Supabase authentication utilities
- `/public`: Static assets

## Deployment

This project is configured for deployment on Vercel:

```bash
npm run build
# or
vercel
```

## License

[MIT](LICENSE)

---

## About the Project

Wright Brothers AI was created to assist student pilots in their aviation education journey. The project aims to make complex aviation regulations and information more accessible through conversational AI interfaces personified as Wilbur and Orville, named after the Wright Brothers who pioneered aviation.

The application provides accurate information sourced from primary aviation documentation like FAR and AIM, helping students understand and navigate the extensive knowledge required for successful piloting. 