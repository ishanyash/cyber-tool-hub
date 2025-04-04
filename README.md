# Cyber Tool Hub

A Blade Runner-inspired platform for discovering and discussing AI tools, featuring a community forum, webinars, and sponsorship opportunities.

## Features

- **User Authentication**: Sign up and sign in functionality using Supabase
- **Community Forum**: Discuss AI tools in a Reddit-style forum
- **Webinars**: Watch expert-led webinars on AI tools and technologies
- **Sponsorship**: Promote your AI tools to our community
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Supabase (Authentication, Database)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/cyber-tool-hub.git
   cd cyber-tool-hub
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
cyber-tool-hub/
├── public/              # Static assets
├── src/                 # Source code
│   ├── components/      # React components
│   │   ├── auth/        # Authentication components
│   │   └── ...          # Other components
│   ├── contexts/        # React contexts
│   ├── lib/             # Utility functions and libraries
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Entry point
├── .env                 # Environment variables
├── package.json         # Dependencies and scripts
└── README.md            # Project documentation
```

## Deployment

This project is configured for deployment on Vercel. Simply connect your GitHub repository to Vercel and it will automatically deploy your application.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
