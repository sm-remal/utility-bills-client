# 💡 UtilityPay – Utility Bill Management System

UtilityPay is a full-featured **MERN Stack web application** that allows users to easily manage, pay, and track their monthly utility bills — including **Electricity, Gas, Water, and Internet** — all from one smart dashboard.

 
🧱 **Stack:** MongoDB • Express.js • React.js • Node.js • Firebase Auth  

---

## 🚀 Live Links  
🔗 **Live Website (Using Firebase):** [https://utility-bills-client.web.app](https://utility-bills-client.web.app)  
🔗 **Live Website (Using Netlify):** [https://utilitypay.netlify.app](https://utilitypay.netlify.app)  
🔗 **Client Repository:** [https://github.com/sm-remal/utility-bills-client](https://github.com/sm-remal/utility-bills-client)  
🔗 **Server Repository:** [https://github.com/sm-remal/utility-bills-server](https://github.com/sm-remal/utility-bills-server)

---

## ✨ Key Features  

**💳 Pay Current Month Bills Only** – Secure payment feature where previous months are locked automatically.  
**📄 Download PDF Report** – Generate beautiful PDF reports using *jsPDF + AutoTable*.  
**🔒 Firebase Authentication** – Email/password and Google Sign-in supported.  
**⚙️ CRUD Functionalities** – Add, view, update, and delete user-specific bills from MongoDB.  
**📱 Responsive UI** – Fully optimized for all devices with TailwindCSS + DaisyUI.  
**🎨 Animated & Interactive** – Integrated *Framer Motion* and *AOS* for smooth transitions.  
**🧭 Extra Pages** – About, Contact, and Help/FAQ pages for enhanced user experience.  
**🌈 Pink–Red Gradient Theme** – Elegant color combination for a professional modern look.  

---

## 🧠 About the Project  

UtilityPay simplifies the way users handle multiple bills.  
From viewing all utility categories to paying the current month’s bill, tracking history, and downloading reports — everything is done in a clean, modern UI.

> 💬 *"Simple. Secure. Smart – Manage your utility bills the modern way."*

---

## 🖥️ Pages & Routes  

| Page | Type | Description |
|------|------|-------------|
| **Home** | Public | Banner with animation, Category, Latest Bills, How It Works, and Why Choose Us sections, Trusted Payment Partners |
| **Bills** | Public | Displays all bills fetched from MongoDB with category filters |
| **Bill Details** | Private | Detailed bill information and pay button for current month |
| **My Pay Bills** | Private | View all user-specific payments, update/delete, and download PDF report |
| **Login / Register** | Public | Firebase-based authentication pages |
| **About** | Public | Project overview and key features |
| **Help / FAQ** | Public | User questions and support info |
| **404 Page** | Public | Custom error page with back navigation |
| **(Optional)** Profile Page | Private | Displays logged-in user info (name, email, photo) |

---

## 🎨 Frontend Technologies  

| Category | Technologies Used |
|-----------|------------------|
| **Framework** | React.js (Vite) |
| **Styling** | Tailwind CSS, DaisyUI |
| **Animations** | Framer Motion, AOS (Animate On Scroll) etc |
| **UI Elements** | Lucide React Icons, React Icons |
| **Text Effects** | React Simple Typewriter, React Fast Marquee |
| **Notifications** | React Hot Toast, SweetAlert2, React Toastify |
| **Data Handling** | Axios, File Saver |
| **Utilities** | jsPDF, jsPDF-AutoTable |
| **Routing** | React Router v7 |
| **Authentication** | Firebase Authentication |
| **Loader/Spinner** | React Spinners |

---

## ⚙️ Backend Technologies  

| Category | Technologies Used |
|-----------|------------------|
| **Runtime** | Node.js |
| **Framework** | Express.js |
| **Database** | MongoDB Atlas |
| **Authentication** | Firebase Admin SDK |
| **Environment Variables** | dotenv |
| **Security & Middleware** | CORS |
| **Deployment** | Vercel |

---

## 🗄️ Database Structure  

### 📘 `bills` Collection Example  
```json
{
  "title": "Electricity Bill - Dhanmondi",
  "category": "Electricity",
  "email": "creator@gmail.com",
  "location": "Dhanmondi, Dhaka",
  "description": "Monthly electricity bill for November.",
  "image": "https://example.com/electricity.jpg",
  "date": "2025-11-01",
  "amount": 1200
}
```

### 📗 `myBills` Collection Example  
```json
{
  "billId": "abc123",
  "username": "Mr. X",
  "phone": "017XXXXXXXX",
  "address": "Dhaka",
  "email": "mrx@gmail.com",
  "amount": 1200,
  "date": "2025-11-01"
}
```

---

```bash
src/
 ┣ assets/                         # All static assets (images, animations, icons)
 ┣ components/                     # Reusable UI components
 ┃ ┣ Banner/                       # Homepage banner section
 ┃ ┣ BillCards/                    # Bill cards display component
 ┃ ┣ CategoryCard/                 # Category grid component
 ┃ ┣ Contact/                      # Contact section component
 ┃ ┣ ErrorPage/                    # Custom 404 page
 ┃ ┣ Footer/                       # Footer with links & newsletter
 ┃ ┣ HowItWorks/                   # “How It Works” section on Home page
 ┃ ┣ Loading/                      # Loading spinner component
 ┃ ┣ Navbar/                       # Navigation bar with dynamic routes
 ┃ ┣ PaymentMethods/               # Payment icons / section
 ┃ ┗ WhyChooseUs/                  # “Why Choose Us” section on Home page
 ┣ contexts/                       # Global context (Auth, Theme etc.)
 ┃ ┣ AuthContext.jsx
 ┃ ┗ AuthProvider.jsx
 ┣ firebase/                       # Firebase initialization and config
 ┃ ┗ firebase.init.js
 ┣ hooks/                          # Custom React hooks
 ┃ ┣ useAuth.jsx                   # Custom authentication hook
 ┃ ┗ useAxiosSecure.jsx            # Secure Axios instance with token
 ┣ layout/                         # Main layout wrapper
 ┃ ┗ MainLayout.jsx
 ┣ pages/                          # All application pages
 ┃ ┣ About/                        # About page
 ┃ ┣ BillDetails/                  # Single bill details + payment
 ┃ ┣ Bills/                        # All bills listing
 ┃ ┣ FAQ/                          # Help / FAQ page
 ┃ ┣ Home/                         # Homepage content
 ┃ ┣ Login/                        # Login page
 ┃ ┣ MyPayBills/                   # Paid bills dashboard (CRUD + PDF)
 ┃ ┣ MyProfile/                    # User profile page (optional)
 ┃ ┗ Registration/                 # Register new user
 ┣ Routes/                         # All route management
 ┃ ┣ PrivateRoutes.jsx             # Protected routes
 ┃ ┗ Routes.jsx                    # Main route configuration
 ┣ utility/                        # Helper functions / utilities
 ┃ ┗ errorMessage.js               # Error handling utility
 ┗ main.jsx                        # App entry file (React DOM rendering)
```

---

## 🧭 Footer Overview  

The footer section of UtilityHub provides quick access to key pages and user support:

| Section | Description |
|----------|-------------|
| **About** | Learn more about the project’s mission and core features |
| **Contact** | Get in touch with the development team |
| **Help / FAQ** | User guide and frequently asked questions |
| **Newsletter** | Subscribe for updates and offers |
| **Legal** | Terms of Use, Privacy Policy, Cookie Policy |

Each section includes modern icons and hover animations for a smooth user experience.

---

## 🌐 Deployment  

| Part | Platform |
|------|-----------|
| **Frontend** | Netlify / Firebase Hosting |
| **Backend** | Vercel |
| **Database** | MongoDB Atlas |

---

## 🪄 Acknowledgments  

- [Tailwind CSS](https://tailwindcss.com)  
- [DaisyUI](https://daisyui.com)  
- [Framer Motion](https://www.framer.com/motion/)   
- [AOS Animations](https://michalsnik.github.io/aos/)  
- [Lucide Icons](https://lucide.dev)  
- [jsPDF + AutoTable](https://github.com/simonbengtsson/jsPDF-AutoTable)

---

> 💖 *UtilityPay – Smart, Secure & Seamless Utility Bill Management System.*