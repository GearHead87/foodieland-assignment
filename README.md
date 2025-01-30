# Foodieland - Recipe Sharing Platform

A modern recipe sharing platform built with Next.js, TypeScript, and Tailwind CSS. Foodieland allows users to discover, share, and explore various recipes while enjoying a seamless user experience.

## 🚀 Features

- Responsive design optimized for all devices
- Recipe discovery with categorized browsing
- Featured chefs section
- Instagram feed integration
- Newsletter subscription
- Detailed recipe pages with instructions
- About page with team information
- Category-based recipe filtering

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production
- [TypeScript](https://www.typescriptlang.org/) - Static type checking
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI component library

## 📁 Project Structure

```
gearhead87-foodieland-assignment/
├── app/                  # Next.js app directory
├── components/          
│   ├── custom/          # Custom project components
│   ├── layout/          # Layout components
│   ├── shared/          # Reusable shared components
│   └── ui/              # UI component library
├── data/                # Static data files
├── lib/                 # Utility functions
└── public/              # Static assets
```

## 🚦 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/gearhead87-foodieland-assignment.git
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Environment Variables

Create a `.env.local` file in the root directory and add any required environment variables.

## 🧱 Component Structure

- `components/custom/` - Contains all custom components specific to Foodieland
- `components/layout/` - Houses layout-related components like headers
- `components/shared/` - Includes reusable components across the application
- `components/ui/` - Contains shadcn/ui components

## 📄 Data Structure

The project uses TypeScript for type safety. Data models can be found in:
- `data/categories.ts` - Recipe categories
- `data/recipes.ts` - Recipe information

## 🎨 Styling

This project uses:
- Tailwind CSS for styling
- Custom components built on top of shadcn/ui
- Responsive design principles

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler

## 📱 Features Breakdown

### Recipe Section
- Grid layout for recipe cards
- Filtering by categories
- Detailed recipe views

### About Section
- Team member profiles
- Company features
- Mission statement

### Chef Section
- Featured chefs
- Chef profiles
- Specialties

### Social Integration
- Instagram feed
- Newsletter subscription
- Social sharing capabilities

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details

## 👥 Author

- Hosan Ul Islam (@gearhead87)
