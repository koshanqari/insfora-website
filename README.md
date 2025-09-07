# INSFORA - Inspire. Support. Empower.

A youth-led nonprofit organization committed to inspiring, supporting, and empowering underprivileged children through education, awareness, and research.

## 🌟 About INSFORA

INSFORA is a movement that brings together young minds who act with empathy and purpose — turning intention into impact, and compassion into change. We believe that education should never be a luxury and work to create a better tomorrow through our three core pillars:

- **Inspire** - We spark curiosity and confidence through teaching and expression
- **Support** - We show up for children emotionally and academically — like a peer, not a superior  
- **Empower** - We help them think, speak, and dream on their own terms

## 🚀 Features

- **Modern Web Interface** - Built with React, TypeScript, and Tailwind CSS
- **Interactive Components** - Scroll-reveal animations and engaging user experience
- **Responsive Design** - Optimized for all devices and screen sizes
- **Form Integration** - Supabase-powered form submissions for volunteer applications
- **Campus Ambassador Program** - Dedicated section for campus ambassador applications
- **Multi-page Navigation** - Clean routing with React Router

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, PostCSS
- **Icons**: Lucide React
- **Backend**: Supabase (Database & Authentication)
- **Deployment**: Express.js server
- **Development**: ESLint, TypeScript ESLint

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Insfora
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Serve production build**
   ```bash
   npm run serve
   ```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run serve` - Serve production build
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Hero.tsx        # Landing page hero section
│   ├── WhoWeAre.tsx    # About section
│   ├── WhatWeStandFor.tsx # Mission pillars
│   ├── HowWeWork.tsx   # Process explanation
│   ├── OurAlignment.tsx # Values alignment
│   ├── Partnerships.tsx # Partner organizations
│   ├── AboutUs.tsx     # Detailed about section
│   ├── BeAVolunteer.tsx # Volunteer application
│   ├── CollaborateWithUs.tsx # Collaboration form
│   ├── BeACatalyst.tsx # Catalyst program
│   ├── CampusAmbassador.tsx # Campus ambassador program
│   ├── LegalStatement.tsx # Legal information
│   ├── Footer.tsx      # Site footer
│   ├── SurveyPopup.tsx # User feedback popup
│   └── ScrollReveal.tsx # Animation wrapper
├── routes/             # Routing configuration
├── utils/              # Utility functions
│   ├── formSubmission.ts # Form handling logic
│   ├── supabaseClient.ts # Supabase configuration
│   └── testSupabase.ts  # Connection testing
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## 🌐 Pages & Routes

- `/` - Main landing page with all sections
- `/campus_ambassador` - Campus Ambassador Program application

## 🎨 Design Features

- **Interactive Animations** - Scroll-triggered reveals and smooth transitions
- **Gradient Backgrounds** - Modern gradient designs throughout
- **Responsive Layout** - Mobile-first design approach
- **Accessibility** - Semantic HTML and keyboard navigation
- **Performance** - Optimized images and lazy loading

## 🤝 Contributing

We welcome contributions from the community! If you'd like to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact & Support

For questions, suggestions, or to get involved with INSFORA:

- Visit our website: [insfora.org](https://insfora.org)
- Email: [contact@insfora.org](mailto:contact@insfora.org)
- Follow us on social media

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- All volunteers and supporters who make INSFORA possible
- The open-source community for the amazing tools and libraries
- The children and communities we serve

---

**Together for Change. Together for Direction.** 🌟
