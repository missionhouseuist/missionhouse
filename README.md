# Mission House - Holiday Let Website

A professional holiday let website for Mission House in North Uist, Outer Hebrides, featuring:

- **Interactive availability calendar** with booking system
- **Comprehensive photo gallery** with 40+ high-quality images
- **Travel information** for ferries and flights
- **Mobile-responsive design** that works on all devices
- **Professional booking enquiry system**

## Features

- ✅ Availability calendar showing booked/available dates
- ✅ Dynamic pricing calculation (£1000/week + £143/night for extra days)
- ✅ Photo gallery with category filtering
- ✅ Travel information for CalMac ferries and Benbecula Airport
- ✅ Contact form with booking requests
- ✅ All bedding, linen, and towels provided information
- ✅ Professional email: bookings@missionhouse.co.uk

## Deployment to Vercel

### Option 1: Direct Upload to Vercel
1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "New Project"
3. Upload this entire folder
4. Vercel will automatically detect it's a Vite project and deploy

### Option 2: GitHub Integration (Recommended for ongoing management)
1. Create a new repository on GitHub
2. Upload all files from this folder to your GitHub repository
3. Connect your GitHub account to Vercel
4. Import the repository in Vercel
5. Deploy automatically

## Managing Bookings

To update availability:
1. Edit the `bookedDates` array in `src/App.jsx`
2. Add new booking periods in the format:
   ```javascript
   { start: new Date(2024, 10, 15), end: new Date(2024, 10, 22) }
   ```
3. Redeploy to Vercel (automatic if using GitHub integration)

## Technology Stack

- **React** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Custom UI Components** - Professional interface

## Contact

For technical support or modifications, contact the development team.

---

**Mission House** - Your Outer Hebrides Retreat
