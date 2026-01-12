# OnlyBees Ticket Booking Clone

A 1:1 clone of the OnlyBees event ticket booking platform, built with React and Vite. This project demonstrates modern React patterns, API integration, and responsive UI design.

## 🎯 Live Demo

[Add your deployed Vercel link here]

## 🚀 Features

### Core Features
- ✅ **Event Landing Page** - Hero section with event details and poster
- ✅ **API Integration** - Fetches real-time ticket availability from OnlyBees API
- ✅ **Ticket Selection** - Interactive ticket cards with add/remove functionality
- ✅ **State Management** - Controlled components with proper state lifting
- ✅ **Checkout Summary** - Fixed bottom bar showing quantity and total price
- ✅ **Console Logging** - Final checkout data logged to browser console
- ✅ **Venue Layout** - Visual representation of the venue staging
- ✅ **Loading States** - Smooth loader animation during API fetch
- ✅ **Responsive Design** - Mobile-first approach with breakpoints

### Additional Features
- 🎨 **Pixel-Perfect UI** - Matches OnlyBees design with exact color codes
- 🔄 **Dynamic Pricing** - Real-time price calculation based on selections
- 🏷️ **Fast Filling Tags** - Highlights sections with limited availability
- 🚫 **Sold Out States** - Proper handling of unavailable sections
- ✨ **Smooth Animations** - Hover effects and transitions throughout

## 🛠️ Tech Stack

- **React** 19.2.0 - UI library
- **Vite** 7.2.4 - Build tool and dev server
- **React Router DOM** 7.12.0 - Client-side routing
- **CSS3** - Custom styling (no UI libraries)

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd onlybees-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

5. **Build for production**
   ```bash
   npm run build
   npm run preview
   ```

## 🏗️ Project Structure

```
onlybees-clone/
├── src/
│   ├── components/
│   │   ├── EventHero.jsx      # Event poster and info
│   │   ├── SectionCard.jsx    # Ticket card component
│   │   └── Header.jsx         # Navigation header
│   ├── pages/
│   │   ├── Event.jsx          # Landing page
│   │   ├── Tickets.jsx        # Ticket selection page
│   │   └── Checkout.jsx       # Checkout confirmation
│   ├── App.jsx                # Route configuration
│   ├── main.jsx               # App entry point
│   └── index.css              # Global styles
├── vite.config.js             # Vite + API proxy config
└── package.json
```

## 🔌 API Integration

### Endpoint Used
```
https://concertsapi.onlybees.in/api/sections/availability
```

### API Proxy Configuration
The Vite dev server is configured with a proxy to handle API requests:

```javascript
// vite.config.js
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://concertsapi.onlybees.in",
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
```

### Data Flow
1. `Tickets.jsx` fetches section data on component mount
2. Data is stored in component state (`sections`)
3. Ticket counts tracked separately (`ticketCounts`)
4. Derived state calculates total quantity and price
5. On checkout, selected tickets logged to console

## 🎨 Design Decisions

### Component Architecture
- **Presentational vs Container**: `SectionCard` is presentational, `Tickets` is container
- **State Lifting**: Ticket counts managed in parent, passed down as props
- **Controlled Components**: All form inputs and counters are controlled
- **Derived State**: Total price/quantity computed on render, not stored

### Styling Approach
- **No CSS Frameworks**: Pure CSS for learning and control
- **BEM-inspired Naming**: Clear, semantic class names
- **CSS Variables**: Could be added for theming (future enhancement)
- **Mobile-First**: Base styles for mobile, media queries for desktop

### State Management
- **Local State Only**: No Redux/Context needed for this scope
- **Object for Counts**: `{sectionId: count}` for O(1) lookups
- **Immutable Updates**: Spread operators for state changes
- **Conditional Rendering**: Show checkout bar only when items selected

## 🤖 How AI Was Used

### 1. **Component Structure Planning**
- Prompt: "Design a React component hierarchy for a ticket booking system"
- Result: Suggested separating concerns (pages vs components)

### 2. **API Integration Strategy**
- Prompt: "How to fetch and manage ticket availability data in React"
- Result: useEffect hook pattern with proper error handling

### 3. **State Management Pattern**
- Prompt: "Best way to track multiple ticket quantities in React"
- Result: Object-based state with section IDs as keys

### 4. **CSS Layout Solutions**
- Prompt: "Create a fixed bottom checkout bar that overlays content"
- Result: Position fixed with proper z-index and padding compensation

### 5. **Responsive Design**
- Prompt: "Mobile-responsive ticket card layout"
- Result: Flexbox with direction change in media queries

### 6. **Animation & UX**
- Prompt: "Smooth transitions for interactive elements"
- Result: CSS transitions on hover states and scale animations

### Independent Problem Solving
- Debugged CORS issues by researching Vite proxy configuration
- Styled loader without prompts using CSS animations knowledge
- Implemented number formatting (toLocaleString) from documentation

## 🎯 Core Evaluation Points Addressed

| Requirement | Implementation | Status |
|------------|----------------|--------|
| React State Handling | useState with proper lifting | ✅ |
| Component Design | Separated presentational/container | ✅ |
| API Integration | useEffect + fetch with error handling | ✅ |
| Clean UI | Pixel-perfect match to design | ✅ |
| Responsiveness | Mobile-first with breakpoints | ✅ |
| AI Efficiency | Strategic prompts, manual debugging | ✅ |

## 🔍 Key Learnings

1. **State Management**: Learned when to lift state vs keep local
2. **API Proxy**: Understood Vite proxy for CORS in development
3. **Controlled Components**: Mastered two-way data binding
4. **CSS Layout**: Practiced flexbox and positioning
5. **React Patterns**: Applied composition and prop drilling appropriately

## 📝 Future Enhancements

- [ ] Add tab navigation (About, Venue, T&C, FAQ)
- [ ] Implement "Know more" dropdown for sections
- [ ] Add authentication and real checkout flow
- [ ] Persist cart state in localStorage
- [ ] Add animations with Framer Motion
- [ ] Implement payment gateway integration
- [ ] Add seat selection visual interface

## 🙋 Questions Asked

None - project scope was clear and documentation was sufficient.

## 📄 License

This is a learning project created as part of a technical assessment.

---

**Built with ❤️ using React + Vite**
