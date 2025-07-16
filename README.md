# Aplikasi Uji Kompetensi - Dental Competency Quiz App

A web-based quiz application for dental competency testing with AI-powered question generation.

## Features

- Interactive multiple-choice questions
- Progress tracking and scoring
- Question filtering by category and difficulty
- AI-powered question generation (mock implementation)
- Review mode for completed quizzes
- Responsive design with Tailwind CSS

## Setup and Development

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone or download the project
2. Install dependencies:
```bash
npm install
```

### Development

1. **Build CSS once:**
```bash
npm run build
```

2. **Development with auto-rebuild:**
```bash
npm run build-css
```
This will watch for changes and automatically rebuild the CSS.

3. **Alternative: Use the batch file (Windows):**
```bash
dev.bat
```

### File Structure

```
├── src/
│   └── input.css          # Source CSS with Tailwind directives
├── dist/
│   └── output.css         # Compiled CSS (auto-generated)
├── ukom.html              # Main HTML file
├── package.json           # Node.js dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
└── dev.bat                # Development helper script (Windows)
```

### Usage

1. Open `ukom.html` in your web browser
2. The app will load with sample questions
3. Navigate through different quiz sections using the tabs
4. Use the AI question generation feature (currently returns mock data)

### Customization

- Edit `src/input.css` to modify styles
- Update `tailwind.config.js` to customize the Tailwind configuration
- Modify `ukom.html` to change the app structure or add new features

### Notes

- The AI question generation feature uses a mock implementation
- To use a real AI service, replace the mock function with actual API calls
- The app is designed to work offline with sample data
