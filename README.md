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

This project uses `pnpm`. If you don't have `pnpm` installed, you should install it. Make sure you have Node.js
installed on your computer. Then, type:

```bash
npm install --global corepack@latest
corepack enable pnpm
corepack use pnpm@latest-10
```

You can find full installation instructions [here.](https://pnpm.io/installation#using-corepack)

Once you have `pnpm` installed, you can run this command to install the dependencies:

```bash
pnpm install
```

### 4. Start the Development Server

This will start a local development server where you can view your changes in real time. No need to refresh or rerun
this command, changes are live.

```bash
pnpm run dev
```

Visit `http://localhost:4321` in your browser.

---

## 🧩 Components Overview

### `Layout.astro`

This is the main layout wrapper used across all pages. It handles:

- The site-wide layout (navbar, footer, spacing)
- Page metadata (title, description, Open Graph, etc.)
- Smooth page transitions using Astro's built-in router

It passes metadata to `<BaseHead />` to help social media platforms display rich previews when your site is shared.

**Props:**

- `title` – Page title (required)
- `description` – Meta description for search engines/social previews (required)
- `image` – Optional Open Graph image URL (defaults to your headshot)
- `type` – Open Graph type (defaults to `"website"`)

**Usage:**

```astro
<Layout
  title="My Portfolio - Home"
  description="A student-friendly portfolio template built with Astro."
  image="https://example.com/og-image.png"
  type="website"
>
  <!-- Page content goes here -->
</Layout>
```

> 🧠 Heads up: You don’t need to touch the `<BaseHead />` directly — it’s handled internally by the layout.

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

### `Job.astro`

Reusable card for listing professional experience or internships.

**Props:**

- `title` – Job title or role
- `company` – Name of the company
- `dates` – Start and end dates (or just year)
- `location` – City, remote, etc.

**Usage:**

```astro
<Job 
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
- Change the `Project.astro` component to use [daisyUI Cards](https://daisyui.com/components/card/#card)
- 

---

## 📦 Deployment

This site works great with [Cloudflare Pages](https://cloudflare.com/), [Netlify](https://www.netlify.com/), or any
other static hosting provider.

Just connect your repo and let it auto deploy!

### 📦 Updating Dependencies

Keeping your dependencies up to date ensures your project stays secure, compatible with modern tooling, and benefits
from bug fixes and performance improvements.

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

This updates the `pnpm-lock.yaml` and ensures your project uses the most recent versions available. After updating, make
sure everything still works by running:

```bash
pnpm run dev
```

> 🛠 Tip: Consider running updates once a month or before deploying to production to catch any breaking changes early.

---

## 🙌 Credits & License

This project is licensed under the [MIT License](LICENSE.md).

### Attribution

This portfolio template is open source and licensed under the MIT License — feel free to use, modify, and build on it
however you like.

If you find it helpful, a small credit in the footer like:

> © [Your Name]. Built with a template by [Sam Packer](https://sampacker.com)

…is very much appreciated. It helps support open source and lets others discover the template too. But of course, this
is optional, and you can remove it if you wish.

---

Made with ❤️ by Sam Packer using Astro + Tailwind + DaisyUI