# Artemis

Artemis is a modern pet care SaaS that helps pet owners manage their pets' health, appointments, and day-to-day care from a single, easy-to-use platform.

Built with Next.js and TypeScript, Artemis combines a polished product landing page with a functional dashboard experience for viewing and managing pet information.

## Overview

Artemis is designed around a simple idea: pet care should be organized, accessible, and stress-free. The product includes:

- A premium marketing landing page
- Pet dashboard views
- Search and browsing for pet records
- Login and signup flows
- Account navigation and app layout
- A responsive, modern UI

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- App Router
- shadcn-style component patterns

## Project Structure

```text
Artemis/
├── src/
│   ├── app/
│   │   ├── (marketing)
│   │   ├── (auth)
│   │   └── app/
│   ├── components/
│   ├── contexts/
│   └── styles/
├── lib/
├── public/
├── components.json
├── package.json
├── next.config.ts
├── tsconfig.json
├── README.md
└── .gitignore
```

## Features

- Pet management dashboard interface
- Clean marketing homepage for product positioning
- Authentication routes for sign in and sign up
- Shared app shell with header, footer, and themed background
- Centralized pet state via React context

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run biome
```

## Why Artemis?

Artemis brings together the essentials of pet management in one place so owners can spend less time juggling information and more time caring for their pets.

## Notes

This project is built as a SaaS-style application demo with a polished front-end experience and a dashboard-focused workflow for pet data management.
