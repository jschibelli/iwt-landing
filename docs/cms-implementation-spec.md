**IntraWeb Technologies — Custom CMS & Admin Dashboard Requirements**

_Last updated: 2025-05-31_

---

## 📋 Overview

This file defines the complete requirements and implementation specifications for building a custom Content Management System (CMS) and admin dashboard for IntraWeb Technologies. Any developer (AI or human) should use this document as the **source of truth** for features, data modeling, authentication, and implementation strategy.

---

## 1. Goals & Project Summary

- **Replace all JSON- or Contentful-based content management with a custom database-backed solution.**
- **Provide a modern, secure, role-based admin dashboard at `/admin`.**
- **Support full CRUD, versioning, multilingual content, audit logging, and real-time preview for all major website sections.**
- **Seamless authentication and extensible UI for both present and future needs.**

---

## 2. Stack & Integration

- **Database:** Vercel Postgres (PostgreSQL)
- **ORM:** Prisma (see finalized schema in the codebase or by request)
- **Backend/Frontend:** Next.js 14+, TypeScript, TailwindCSS, shadcn/ui
- **Authentication:** NextAuth.js (Google OAuth and email/password)
- **Caching:** SWR/in-memory (Phase 1); Redis (Phase 2+ as needed)

---

## 3. Database Setup & Prisma Schema

- **Use the exact Prisma schema provided in `/prisma/schema.prisma`.**
    - Do not infer, modify, or generate your own models—use the provided schema as the only source of truth for all migrations and ORM queries.
- Set your `DATABASE_URL` in your `.env` file (from Neon, Vercel, or local Postgres).
- Initialize the database with:
    ```bash
    npx prisma migrate dev --name init
    ```
- Generate the Prisma client:
    ```bash
    npx prisma generate
    ```

---

## 4. Seed Script for Admin User

- **Create a seed script at `/prisma/seed.ts`** that:
    - Checks if an `ADMIN` user already exists.
    - If not, creates a user with:
        - `email: admin@intrawebtech.com`
        - `name: John Schibelli`
        - `role: ADMIN`
        - `isActive: true`
    - Logs a message indicating whether the admin was created or already present.

---

## 5. Core Functional Requirements

### 5.1 Data Model & Backend

- **Implement all content as relational tables:** hero, services, projects, testimonials, process steps, team members, FAQ, company info, site settings.
- **Support singleton (single-record) and repeatable content types.**
- **Enable draft/published workflow, author tracking, and full content versioning.**
- **All tables support i18n/multilingual content via separate translation tables (e.g., `ServiceTranslation`).**
- **Role-based user management:** ADMIN, EDITOR, VIEWER.
- **Flexible ContentBlock model for custom/AI/A-B/seasonal sections.**
- **AnimationConfig, AIMetadata, and Tagging for AI-driven/animation features.**

### 5.2 Authentication

- **Use NextAuth.js** for all admin logins.
    - Google OAuth and email/password providers
    - Seed at least one ADMIN user
    - All `/admin` routes and sensitive actions protected by role-based access middleware

### 5.3 Data Migration

- **Write scripts** to migrate all `/data/*.json` content to Postgres, preserving all fields, metadata, and ordering.
- **Create audit log entries** for every migration operation.

### 5.4 Admin Dashboard UI

**Build a fully custom, mobile-friendly admin dashboard under `/admin` with these features:**

- **Dashboard Home**
    - Key site metrics (content stats, recent changes, published vs. draft counts)
    - Recent activity log (from `AuditLog` table)
- **CRUD Management** for:
    - Hero
    - Services
    - Projects
    - Testimonials
    - Process steps
    - Team members
    - FAQ
    - Company info/site settings
    - Content blocks (flexible sections)
- **Draft/Published/Version Management**
    - Toggle between draft and published
    - View/restore previous versions
    - Manual publish/unpublish
- **User & Role Management**
    - View/invite/edit users, assign roles
    - Basic profile management
- **Audit Log Viewer**
    - Search/filter by user, action, type, date, IP
- **Settings**
    - Edit site-level configs (company info, logo, analytics IDs)
- **Locale Switcher**
    - View and edit all content in all available locales
- **Logout/account management**
    - Profile menu, logout, password change
- **Notifications/toasts** for all CRUD actions

### 5.5 Preview Mode (Required)

- **Provide a Preview Mode for all content edits:**
    - Every create/edit view must include a "Preview" button
    - Opens a live SSR-powered preview of the content as it will appear on the public site
    - Support locale switching in preview
    - Preview only accessible to authorized users
    - Recommended preview route: `/admin/preview/[type]/[id]` (flexible for any content type)

---

## 6. UI/Component Inventory

- DashboardHome (metrics, overview)
- ContentList, ContentForm (CRUD, modular by type)
- VersionHistoryModal
- UserManagement
- AuditLogViewer
- SettingsPage
- LocaleSwitcher
- ContentPreviewModal or preview route
- Navbar/sidebar (with section navigation)
- AuthProvider/context
- Toast/notification system

---

## 7. Implementation/Process

1. **Scaffold Prisma schema and run initial migrations on Vercel Postgres**
2. **Write migration/seed scripts to move all `/data/*.json` into the DB**
3. **Integrate NextAuth.js and seed at least one admin user**
4. **Create `/admin` route group with full role-based protection**
5. **Build custom UI using Next.js server components, shadcn/ui, and TailwindCSS**
6. **Implement Preview Mode for all major content types**
7. **Replace all JSON content imports in public-facing pages with Prisma queries**
8. **Document blockers, missing data, and migration/CRUD edge cases for team review**

---

## 8. Developer Guidelines

- **Prioritize accessibility and mobile-responsiveness**
- **All UI must use shadcn/ui + Tailwind for consistency**
- **Preview mode is required for every content type**
- **If any requirement cannot be met exactly as specified, pause and raise the issue for review**
- **Write clear, concise documentation for all code, migration scripts, and dashboard workflows**

---

## 9. Prompt for Automated Development

If used in an AI-powered dev environment (like Cursor or Claude), launch with:

> "Refer to `ADMIN_DASHBOARD_REQUIREMENTS.md`. Implement a custom admin dashboard and CMS for IntraWeb Technologies per the full requirements, starting with database setup, data migration, and admin UI scaffolding. If any blocker or ambiguity arises, pause and ask for clarification."

---

## 10. Contact & Updates

- This file is the **single source of truth**.  
- Update this file with any changes to requirements, new features, or clarification of project scope.

---

**End of file.**
