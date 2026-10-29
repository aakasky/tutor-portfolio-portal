# Aakash Yadav — Tutor Portfolio

A responsive portfolio for Aakash Yadav, featuring math, coding, and Olympiad tutoring information, professional experience, achievements, and contact options.

## Features

- Responsive layouts with a mobile navigation menu and swipeable subject and about cards
- Light and dark themes, with the selected theme saved in local storage
- Direct WhatsApp, phone, email, and LinkedIn contact links
- Resume link to the PDF in `public/`
- Tailwind CSS v4 styling with Lucide icons

## Requirements

- Node.js compatible with the installed Vite version
- pnpm

## Getting started

```sh
pnpm install
pnpm dev
```

Vite prints the local development URL after the server starts.

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the Vite development server |
| `pnpm build` | Type-check and create a production build in `dist/` |
| `pnpm lint` | Run Oxlint |
| `pnpm preview` | Preview the production build locally |

## Project structure

```text
public/                  Static assets, favicon, profile image, and resume
src/
  components/            Header, hero, portfolio sections, and contact components
  App.tsx                Page composition and theme state
  index.css              Tailwind import and global theme styles
  main.tsx               React application entry point
```

## Static assets

Place public assets in `public/` and reference them from the app with root-relative URLs, for example `/profile-image.png`.
