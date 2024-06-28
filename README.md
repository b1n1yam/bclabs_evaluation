
# Next.js Project for BC Labs Interview Evaluation

`live-url`](https://bclabs-evaluation.vercel.app)

This is a Next.js project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), designed for BC Labs interview evaluation, prepared by Biniyam Daniel.

## Getting Started

To get started with the project, follow these steps:

### Prerequisites

- Ensure you have Node.js installed on your machine.
- Set up a PostgreSQL database and configure the connection URL (`DATABASE_URL`) in your environment variables.

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

### Environment Setup

Create a `.env` file in the root directory and configure your PostgreSQL database URL:

```
DATABASE_URL=postgres://user:password@localhost:5432/database_name
```

### Database Seeding

To seed the database with initial data, run the following command:

```bash
npm run seed
# or
yarn seed
# or
pnpm seed
# or
bun seed
```

This command will populate your PostgreSQL database using Prisma with predefined data. Make sure your database is properly configured and accessible before running this command.

### Development Server

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

### Recommended Scripts

This project uses TypeScript with ESLint and Prettier for clean code architecture and formatting. To run TypeScript, linting, and start the development server in one command, use:

```bash
npm run dev
```

## Technologies Used

- **Next.js**: The React framework for building server-side rendered and statically generated applications.
- **Prisma**: Modern database toolkit for TypeScript and Node.js, interacting with PostgreSQL.
- **Tailwind CSS**: Utility-first CSS framework used for styling.
- **TypeScript**: Typed superset of JavaScript for robust codebase.
- **Prettier & ESLint**: Code formatting and linting tools to maintain code quality.

## Learn More

To learn more about Next.js, Prisma, and other technologies used in this project, refer to their respective documentation:

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
