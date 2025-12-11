# Portfolio Admin Dashboard Guide

## Accessing the Admin Dashboard

Navigate to: **`http://localhost:3000/admin`** (or your deployed URL + `/admin`)

## Features

The admin dashboard allows you to edit all portfolio content without touching code:

### 1. **Personal Info Tab**
- Edit your name, title, bio
- Update contact information (email, phone, location)
- Update social media links (GitHub, LinkedIn)

### 2. **Experience Tab**
- Add new work experiences
- Edit existing experiences
- Delete experiences
- Update company, position, period, type, and description

### 3. **Education Tab**
- Add new education entries
- Edit existing education
- Delete education entries
- Update degree, institution, and type

### 4. **Skills Tab**
- Add new skills
- Edit skill names and proficiency levels (0-100%)
- Set icon names (html, java, react, etc.)
- Delete skills

### 5. **Projects Tab**
- Add new projects
- Edit project details (title, company, description)
- Set project emoji/image
- Add/remove tags (comma-separated)
- Mark projects as featured
- Delete projects

## How to Use

1. **Navigate to `/admin`** in your browser
2. **Select a tab** (Personal Info, Experience, Education, Skills, or Projects)
3. **Make your changes** - all edits are live in the form
4. **Click "Save All Changes"** when done
5. **Refresh the main portfolio page** to see your changes

## Important Notes

- **Always click "Save All Changes"** before leaving the admin page
- Changes are saved to `data/portfolio-data.json`
- The portfolio automatically reads from this file
- You can add/remove items using the "+" buttons
- Delete items using the red "Delete" button

## Skill Icon Names

When adding skills, use these icon names:
- `html` - HTML
- `css` - CSS
- `javascript` - JavaScript
- `typescript` - TypeScript
- `react` - React
- `angular` - Angular
- `nodejs` - Node.js
- `java` - Java
- `php` - PHP
- `dotnet` - .NET/C#
- `ionic` - Ionic
- `git` - Git
- `flutter` - Flutter
- `kotlin` - Kotlin

## Example: Adding a New Skill

1. Go to Skills tab
2. Click "Add Skill"
3. Enter skill name (e.g., "Python")
4. Set level (0-100)
5. Enter icon name (e.g., "python" - you may need to add it to the iconMap in Skills.tsx)
6. Click "Save All Changes"

## Example: Updating Experience

1. Go to Experience tab
2. Find the experience you want to edit
3. Update any fields (company, position, period, etc.)
4. Click "Save All Changes"
5. Refresh the main page to see changes

## Data Storage

All data is stored in `data/portfolio-data.json`. This file is:
- ✅ Easy to edit
- ✅ Version controllable (Git)
- ✅ Backed up automatically if you use Git
- ✅ Can be edited manually if needed

## Troubleshooting

- **Changes not showing?** - Make sure you clicked "Save All Changes" and refreshed the main page
- **Admin page not loading?** - Check that the API route is working (`/api/portfolio`)
- **Skills not displaying?** - Make sure the icon name matches one in the iconMap

