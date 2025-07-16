@echo off
echo Starting Tailwind CSS build in watch mode...
echo.
echo The CSS will automatically rebuild when you make changes to your files.
echo Press Ctrl+C to stop the build process.
echo.
cd /d "%~dp0"
npm run build-css
