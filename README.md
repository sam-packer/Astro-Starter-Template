# 🎓 Student Portfolio Template

This is a simple, modern portfolio template built with [Astro](https://astro.build/)
and [Tailwind CSS](https://tailwindcss.com/), using [DaisyUI](https://daisyui.com/) for accessible and stylish
components. It’s designed specifically for students looking to showcase projects, experience, and skills — whether for
class, internships, or job applications.

## 🚀 Getting Started

### 1. Copy to Your Profile

Click on the "Use this template" at the top right. This will clone the file structure and code to your own GitHub
account so you can make changes and push them to your personal repository.

### 2. Clone to Your Computer

```bash
git clone https://github.com/your-username/student-portfolio.git
cd student-portfolio
```

### 3. Install Dependencies

```bash
pnpm install
```

### 4. Start the Development Server

```bash
pnpm run dev
```

Visit `http://localhost:4321` in your browser.

---

## 🧩 Components Overview

### `Layout.astro`

A basic layout wrapper that provides a page title and consistent styling across pages.

**Usage:**

```astro
<Layout title="Page Title">
  <!-- Your content here -->
</Layout>
```

---

### `Project.astro`

Reusable card for showcasing a project.

**Props:**

- `title` – Name of the project
- `description` – Short summary of what it is
- `href` - A link to the project (optional)

**Usage:**

```astro
<Project 
  title="Cool App" 
  description="A web app built with React and Firebase." 
  href="https://github.com/sam-packer/Portfolio"
/>
```

Projects are styled with a soft background (`bg-base-200`) and spacing to stand out cleanly.

---

### `Experience.astro`

Reusable card for listing professional experience or internships.

**Props:**

- `title` – Job title or role
- `company` – Name of the company
- `dates` – Start and end dates (or just year)
- `location` – City, remote, etc.

**Usage:**

```astro
<Experience 
  title="Frontend Developer" 
  company="Company A" 
  dates="Jan 2022 – Present" 
  location="Remote" 
/>
```

Each card includes a title, a subtle subheader with dates/location, and the company name below.

---

## ✨ Pages

- **Home** – A short intro with buttons to your LinkedIn and GitHub
- **Projects** – Lists your projects using the `Project` component
- **Experience** – Lists your work experience using the `Job` component and a Skills section

---

## 🎨 Icons

The icons for the LinkedIn and GitHub are from [BoxIcons](https://boxicons.com/). You can explore and add more links on
the front page if you desire.

---

## 🛠 Customization Tips

- Replace `[Your Name]` with your actual name
- Update links to your own GitHub and LinkedIn
- Add or remove components as needed — the code is super modular
- Change theme colors using the [DaisyUI Theme Generator](https://daisyui.com/theme-generator/)

---

## 📦 Deployment

This site works great with [Cloudflare Pages](https://cloudflare.com/), [Netlify](https://www.netlify.com/), or any
other static hosting provider.

Just connect your repo and let it auto deploy!

### 📦 Updating Dependencies

Keeping your dependencies up to date ensures your project stays secure, compatible with modern tooling, and benefits from bug fixes and performance improvements.

#### 🔍 Check for outdated packages

To see what packages are out of date, run:

```bash
pnpm outdated
```

This will list all dependencies with available updates.

#### ⬆️ Update everything to the latest version

To upgrade all outdated packages to their latest versions, run:

```bash
pnpm update --latest
```

This updates the `pnpm-lock.yaml` and ensures your project uses the most recent versions available. After updating, make sure everything still works by running:

```bash
pnpm run dev
```

> 🛠 Tip: Consider running updates once a month or before deploying to production to catch any breaking changes early.

---

## 🙌 Credits & License

This project is licensed under the [MIT License](LICENSE.md).

---
Made with ❤️ by Sam Packer using Astro + Tailwind + DaisyUI