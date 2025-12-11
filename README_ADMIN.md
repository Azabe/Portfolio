# Dynamic Portfolio Admin System

Your portfolio is now fully dynamic! You can edit all content through a user-friendly admin dashboard without touching any code.

## 🚀 Quick Start

1. **Access Admin Dashboard**: Navigate to `http://localhost:3000/admin`
2. **Make Changes**: Edit any section using the tabs
3. **Save**: Click "Save All Changes" button
4. **View**: Refresh your main portfolio page to see updates

## 📋 What You Can Edit

### Personal Information
- Name, title, bio
- Contact details (email, phone, location)
- Social media links

### Experience
- Add/Edit/Delete work experiences
- Update company, position, dates
- Edit descriptions and responsibilities

### Education
- Add/Edit/Delete education entries
- Update degrees and institutions

### Skills
- Add/Edit/Delete skills
- Update proficiency levels (0-100%)
- Change skill names

### Projects
- Add/Edit/Delete projects
- Update descriptions, tags, and featured status
- Change project emojis/images

## 📁 File Structure

```
Portfolio/
├── data/
│   └── portfolio-data.json    # All portfolio data (editable)
├── app/
│   ├── api/
│   │   └── portfolio/
│   │       └── route.ts       # API to read/write data
│   └── admin/
│       └── page.tsx           # Admin dashboard UI
├── hooks/
│   └── usePortfolioData.ts    # Hook to fetch data
└── components/                # All components read from API
```

## 🔧 How It Works

1. **Data Storage**: All content is stored in `data/portfolio-data.json`
2. **API Route**: `/api/portfolio` handles reading and writing data
3. **Admin Dashboard**: `/admin` provides a UI to edit the JSON file
4. **Components**: All portfolio components fetch data from the API

## 💡 Example Use Cases

### Adding a New Skill
1. Go to `/admin`
2. Click "Skills" tab
3. Click "Add Skill"
4. Fill in: Name (e.g., "Python"), Level (e.g., 80), Icon (e.g., "python")
5. Click "Save All Changes"

### Updating Job Experience
1. Go to `/admin`
2. Click "Experience" tab
3. Find the experience to edit
4. Update any fields
5. Click "Save All Changes"

### Adding a New Project
1. Go to `/admin`
2. Click "Projects" tab
3. Click "Add Project"
4. Fill in all details
5. Click "Save All Changes"

## 🔒 Security Note

The admin page is currently open to anyone. For production, you should:
- Add authentication (password protection)
- Restrict access to `/admin` route
- Consider using environment variables for sensitive data

## 📝 Data Format

The `portfolio-data.json` file uses a simple JSON structure. You can also edit it manually if preferred, but the admin dashboard is easier!

## 🎯 Benefits

✅ **No Code Changes** - Edit everything through the UI
✅ **Instant Updates** - Changes reflect immediately after saving
✅ **Easy Management** - Add/remove items with buttons
✅ **Version Control** - JSON file can be tracked in Git
✅ **Backup Friendly** - Simple JSON structure is easy to backup

Enjoy your dynamic portfolio! 🎉

