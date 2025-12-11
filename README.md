# Software Developer Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. This portfolio showcases your skills, projects, and provides a way for potential clients or employers to contact you.

## 🚀 Features

- **Modern Design**: Beautiful, clean, and professional UI with smooth animations
- **Dark Mode**: Toggle between light and dark themes
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Fast Performance**: Built with Next.js for optimal performance and SEO
- **TypeScript**: Type-safe code for better development experience

## 🛠️ Technologies Used

- **Next.js 14** - React framework for production
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **React Icons** - Icon library
- **React Intersection Observer** - For scroll animations

## 📦 Installation

1. Clone the repository or navigate to the project directory:
```bash
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`components/Hero.tsx`):
   - Update the greeting and introduction text
   - Modify social media links
   - Update resume download link

2. **About Section** (`components/About.tsx`):
   - Edit the about me text
   - Update interests and values

3. **Skills Section** (`components/Skills.tsx`):
   - Add or remove skills
   - Adjust skill levels (percentages)
   - Add new technology icons from [React Icons](https://react-icons.github.io/react-icons/)

4. **Projects Section** (`components/Projects.tsx`):
   - Replace with your actual projects
   - Update project descriptions, tags, and links
   - Add project images (replace emojis with actual images if desired)

5. **Contact Section** (`components/Contact.tsx`):
   - Update contact information (email, phone, location)
   - Connect the contact form to your backend/email service

6. **Footer** (`components/Footer.tsx`):
   - Update social media links
   - Modify copyright text

### Styling

- **Colors**: Edit `tailwind.config.ts` to customize the color scheme
- **Fonts**: Change fonts in `app/layout.tsx`
- **Animations**: Adjust animation timings in component files

## 📝 Project Structure

```
Portfolio/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── components/
│   ├── Navbar.tsx           # Navigation bar
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Skills.tsx           # Skills section
│   ├── Projects.tsx         # Projects section
│   ├── Contact.tsx          # Contact section
│   └── Footer.tsx           # Footer
├── public/                  # Static assets
└── ...config files
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Deploy to Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Or any Node.js hosting service

Build the project:
```bash
npm run build
npm start
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

For questions or suggestions, feel free to reach out!

---

Made with ❤️ using Next.js and TypeScript

