import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Calendar, MapPin, Users, Wifi, Tv, Coffee, Car, TreePine, Home, Phone, Mail, Star, Plane, Ship, Clock, ChevronLeft, ChevronRight } from 'lucide-react'
import './App.css'

// Import actual Mission House photos
import homepage2 from './assets/homepage2.png'
import homepageExterior from './assets/homepageexterior1.jpg'
import vallayView from './assets/viewfrombedroom3.JPG'
import vallaysunset from './assets/vallaysunset.jpg'
import sunsetView from './assets/sunsetview.jpg'
import exterior1 from './assets/exterior1.jpg'
import exterior2 from './assets/exterior2.jpg'
import exterior3 from './assets/exterior3.jpg'
import exterior4 from './assets/exterior4.jpg'
import lounge1 from './assets/lounge1.jpg'
import lounge2 from './assets/lounge2.jpg'
import lounge3 from './assets/lounge3.jpg'
import lounge4 from './assets/lounge4.jpg'
import lounge5 from './assets/lounge5.jpg'
import kitchen1 from './assets/kitchen1.jpg'
import kitchen2 from './assets/kitchen2.jpg'
import kitchen3 from './assets/kitchen3.jpg'
import kitchen4 from './assets/kitchen4.jpg'
import kitchenDetail from './assets/kitchendetail.jpg'
import dining1 from './assets/dining1.jpg'
import dining2 from './assets/dining2.jpg'
import bedroom1a from './assets/bedroom1a.jpg'
import bedroom1b from './assets/bedroom1b.jpg'
import bedroom1c from './assets/bedroom1c.jpg'
import bedroom2a from './assets/bedroom2a.jpg'
import bedroom2b from './assets/bedroom2b.jpg'
import bedroom2c from './assets/bedroom2c.jpg'
import mainBathroom from './assets/mainbathroom1.jpg'
import upstairsBathroom from './assets/upstairsbathroom.jpg'
import interiorDetail from './assets/interiordetail.jpg'
import udal1 from './assets/udal1.jpg'
import udal2 from './assets/udal2.jpg'
import griminish from './assets/griminish1.jpg'
import westBeach from './assets/westbeachBerneray1.jpg'
import wildlife1 from './assets/wildlifeeagle1.JPG'
import wildlife2 from './assets/wildlifedolphin1.JPG'
import wildlife3 from './assets/wildlife2.JPG'
import wildlifeEaster from './assets/wildlifeeaster1.jpg'
import calmacFerry from './assets/calmacferry1.jpg'
import oldChurch from './assets/oldmissionhousechurch.jpg'

function App() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null)
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedStartDate, setSelectedStartDate] = useState(null)
  const [selectedEndDate, setSelectedEndDate] = useState(null)
  const [bookingFormData, setBookingFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '1-2 guests',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  // Sample booked dates - in a real app, this would come from a database
  const bookedDates = [
    // October 2024
    { start: new Date(2024, 9, 5), end: new Date(2024, 9, 12) },
    { start: new Date(2024, 9, 20), end: new Date(2024, 9, 27) },
    // November 2024
    { start: new Date(2024, 10, 10), end: new Date(2024, 10, 17) },
    // December 2024
    { start: new Date(2024, 11, 22), end: new Date(2024, 11, 29) },
    // January 2025
    { start: new Date(2025, 0, 4), end: new Date(2025, 0, 11) },
    // February 2025
    { start: new Date(2025, 1, 14), end: new Date(2025, 1, 21) },
    // March 2025
    { start: new Date(2025, 2, 8), end: new Date(2025, 2, 15) },
    { start: new Date(2025, 2, 29), end: new Date(2025, 3, 5) },
  ]

  const isDateBooked = (date) => {
    return bookedDates.some(booking => 
      date >= booking.start && date <= booking.end
    )
  }

  const isDateInPast = (date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return date < today
  }

  const heroImages = [
    { src: exterior1, alt: "Mission House exterior with stunning location" },
    { src: homepage2, alt: "Mission House with spectacular Vallay views" },
    { src: vallayView, alt: "Views across the sands to Vallay Island from bedroom" },
    { src: vallaysunset, alt: "Stunning Vallay sunset views" },
    { src: sunsetView, alt: "Evening sunset over the sands" }
  ]

  const propertyImages = [
    { src: lounge1, alt: "Comfortable living area with wood burner" },
    { src: kitchen1, alt: "Modern kitchen with all amenities" },
    { src: dining1, alt: "Dining area with views" },
    { src: homepageExterior, alt: "Mission House exterior view" }
  ]

  const locationImages = [
    { src: udal1, alt: "Udal Peninsula beaches" },
    { src: udal2, alt: "Coastal walks near Mission House" },
    { src: griminish, alt: "Local North Uist landscape" },
    { src: wildlife1, alt: "Local wildlife - eagles" }
  ]

  const galleryImages = [
    // Exteriors
    { src: exterior1, alt: "Mission House exterior view", category: "Exterior" },
    { src: exterior2, alt: "Property exterior with garden", category: "Exterior" },
    { src: exterior3, alt: "Mission House from different angle", category: "Exterior" },
    { src: exterior4, alt: "Property and surroundings", category: "Exterior" },
    { src: homepageExterior, alt: "Homepage exterior view", category: "Exterior" },
    { src: oldChurch, alt: "Historic Mission House", category: "Exterior" },
    
    // Living Areas
    { src: lounge1, alt: "Main living room with wood burner", category: "Living Areas" },
    { src: lounge2, alt: "Comfortable seating area", category: "Living Areas" },
    { src: lounge3, alt: "Living room with TV area", category: "Living Areas" },
    { src: lounge4, alt: "Cozy living space", category: "Living Areas" },
    { src: lounge5, alt: "Additional living area", category: "Living Areas" },
    { src: interiorDetail, alt: "Interior design details", category: "Living Areas" },
    
    // Kitchen & Dining
    { src: kitchen1, alt: "Modern kitchen facilities", category: "Kitchen & Dining" },
    { src: kitchen2, alt: "Kitchen with all appliances", category: "Kitchen & Dining" },
    { src: kitchen3, alt: "Kitchen workspace", category: "Kitchen & Dining" },
    { src: kitchen4, alt: "Kitchen storage and amenities", category: "Kitchen & Dining" },
    { src: kitchenDetail, alt: "Kitchen detail and equipment", category: "Kitchen & Dining" },
    { src: dining1, alt: "Dining area with views", category: "Kitchen & Dining" },
    { src: dining2, alt: "Dining space", category: "Kitchen & Dining" },
    
    // Bedrooms
    { src: bedroom1a, alt: "Double bedroom", category: "Bedrooms" },
    { src: bedroom1b, alt: "Double bedroom with views", category: "Bedrooms" },
    { src: bedroom1c, alt: "Double bedroom detail", category: "Bedrooms" },
    { src: bedroom2a, alt: "Twin bedroom", category: "Bedrooms" },
    { src: bedroom2b, alt: "Twin bedroom with window", category: "Bedrooms" },
    { src: bedroom2c, alt: "Twin bedroom setup", category: "Bedrooms" },
    
    // Bathrooms
    { src: mainBathroom, alt: "Main bathroom", category: "Bathrooms" },
    { src: upstairsBathroom, alt: "Upstairs bathroom", category: "Bathrooms" },
    
    // Views & Location
    { src: vallayView, alt: "Spectacular Vallay views from bedroom", category: "Views & Location" },
    { src: vallaysunset, alt: "Vallay sunset", category: "Views & Location" },
    { src: sunsetView, alt: "Evening views over the sands", category: "Views & Location" },
    { src: udal1, alt: "Udal Peninsula beach walks", category: "Views & Location" },
    { src: udal2, alt: "Coastal scenery near Mission House", category: "Views & Location" },
    { src: griminish, alt: "North Uist landscape", category: "Views & Location" },
    { src: westBeach, alt: "West Beach Berneray", category: "Views & Location" },
    
    // Wildlife
    { src: wildlife1, alt: "Sea eagles in the area", category: "Wildlife" },
    { src: wildlife2, alt: "Dolphins spotted from the coast", category: "Wildlife" },
    { src: wildlife3, alt: "Local wildlife", category: "Wildlife" },
    { src: wildlifeEaster, alt: "Easter wildlife sightings", category: "Wildlife" }
  ]

  const galleryCategories = ["All", "Exterior", "Living Areas", "Kitchen & Dining", "Bedrooms", "Bathrooms", "Views & Location", "Wildlife"]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredGallery = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  const amenities = [
    { icon: Wifi, label: "Fast WiFi" },
    { icon: Tv, label: "50\" Smart TV" },
    { icon: Coffee, label: "Espresso Maker" },
    { icon: Car, label: "Ample Parking" },
    { icon: TreePine, label: "Enclosed Garden" },
    { icon: Home, label: "Wood Burners" }
  ]

  const bedrooms = [
    { type: "Double Bedroom", description: "Comfortable double bed with stunning Vallay views", image: bedroom1a },
    { type: "Twin Bedroom", description: "Two single beds, perfect for friends or children", image: bedroom2b },
    { type: "Flexible Bedroom", description: "Upstairs single that converts to double or twin", image: bedroom1b }
  ]

  const activities = [
    "Walking the Udal Peninsula beaches",
    "Exploring Vallay Island at low tide",
    "Wildlife watching at RSPB Balranald",
    "Cycling quiet island roads",
    "Boating and water sports",
    "Photography and nature observation"
  ]

  const transportOptions = [
    {
      icon: Ship,
      title: "CalMac Ferry to Lochmaddy",
      route: "Uig (Skye) to Lochmaddy (North Uist)",
      duration: "1 hour 45 minutes",
      frequency: "1-2 sailings daily",
      description: "The most convenient route to North Uist. Lochmaddy is 25 minutes drive from Mission House.",
      bookingInfo: "Book at calmac.co.uk or call 0800 066 5000"
    },
    {
      icon: Ship,
      title: "CalMac Ferry to Lochboisdale",
      route: "Oban to Lochboisdale (South Uist)",
      duration: "5 hours 30 minutes",
      frequency: "Daily sailing",
      description: "Longer but scenic route via South Uist. Drive north through the Uists (1 hour to Mission House).",
      bookingInfo: "Book at calmac.co.uk - connects with Benbecula and North Uist via causeway"
    },
    {
      icon: Plane,
      title: "Benbecula Airport",
      route: "Glasgow to Benbecula",
      duration: "1 hour 20 minutes flight",
      frequency: "2-3 flights daily (Mon-Sat)",
      description: "Fastest option. Benbecula Airport is 20 minutes drive from Mission House.",
      bookingInfo: "Loganair flights - book at loganair.co.uk"
    }
  ]

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const formatDate = (date) => {
    return date.toLocaleDateString('en-GB', { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
  }

  const handleDateClick = (day) => {
    const clickedDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    
    if (isDateInPast(clickedDate) || isDateBooked(clickedDate)) {
      return
    }

    if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
      setSelectedStartDate(clickedDate)
      setSelectedEndDate(null)
    } else if (clickedDate < selectedStartDate) {
      setSelectedStartDate(clickedDate)
      setSelectedEndDate(null)
    } else {
      // Check if there are any booked dates between start and end
      const hasBookedDatesBetween = bookedDates.some(booking => 
        (booking.start > selectedStartDate && booking.start < clickedDate) ||
        (booking.end > selectedStartDate && booking.end < clickedDate)
      )
      
      if (hasBookedDatesBetween) {
        setSelectedStartDate(clickedDate)
        setSelectedEndDate(null)
      } else {
        setSelectedEndDate(clickedDate)
      }
    }
  }

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth)
    const firstDay = getFirstDayOfMonth(currentMonth)
    const days = []
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    // Add day headers
    const dayHeaders = dayNames.map(day => (
      <div key={day} className="text-center text-sm font-medium text-muted-foreground p-2">
        {day}
      </div>
    ))

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>)
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
      const isBooked = isDateBooked(date)
      const isPast = isDateInPast(date)
      const isSelected = (selectedStartDate && date.getTime() === selectedStartDate.getTime()) ||
                        (selectedEndDate && date.getTime() === selectedEndDate.getTime())
      const isInRange = selectedStartDate && selectedEndDate && 
                       date > selectedStartDate && date < selectedEndDate

      let className = "p-2 text-center cursor-pointer rounded-md transition-colors "
      
      if (isPast) {
        className += "text-muted-foreground/50 cursor-not-allowed"
      } else if (isBooked) {
        className += "bg-red-100 text-red-800 cursor-not-allowed"
      } else if (isSelected) {
        className += "bg-primary text-primary-foreground"
      } else if (isInRange) {
        className += "bg-primary/20 text-primary"
      } else {
        className += "hover:bg-muted text-foreground"
      }

      days.push(
        <div
          key={day}
          className={className}
          onClick={() => handleDateClick(day)}
        >
          {day}
        </div>
      )
    }

    return (
      <div className="grid grid-cols-7 gap-1">
        {dayHeaders}
        {days}
      </div>
    )
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  const calculateNights = () => {
    if (selectedStartDate && selectedEndDate) {
      const timeDiff = selectedEndDate.getTime() - selectedStartDate.getTime()
      return Math.ceil(timeDiff / (1000 * 3600 * 24))
    }
    return 0
  }

  const calculateTotal = () => {
    const nights = calculateNights()
    if (nights >= 7) {
      const weeks = Math.floor(nights / 7)
      const extraNights = nights % 7
      return (weeks * 1150) + (extraNights * 164) // £164 per night for partial weeks
    }
    return 0
  }

  const handleFormChange = (e) => {
    setBookingFormData({
      ...bookingFormData,
      [e.target.name]: e.target.value
    })
  }

  const generateMailtoLink = () => {
    const subject = `Booking Request for Mission House - ${formatDate(selectedStartDate)} to ${formatDate(selectedEndDate)}`
    const body = `Dear Mission House Team,

I would like to request a booking for Mission House with the following details:

BOOKING DETAILS:
Check-in: ${formatDate(selectedStartDate)}
Check-out: ${formatDate(selectedEndDate)}
Duration: ${calculateNights()} nights
Total Cost: £${calculateTotal()}

GUEST INFORMATION:
Name: ${bookingFormData.name}
Email: ${bookingFormData.email}
Phone: ${bookingFormData.phone}
Number of Guests: ${bookingFormData.guests}

SPECIAL REQUESTS:
${bookingFormData.message || 'None'}

Please confirm availability and provide booking instructions.

Best regards,
${bookingFormData.name}`

    return `mailto:rental@missionhouse.co.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Prepare form data for Formspree
    const formData = new FormData()
    formData.append('name', bookingFormData.name)
    formData.append('email', bookingFormData.email)
    formData.append('phone', bookingFormData.phone)
    formData.append('guests', bookingFormData.guests)
    formData.append('message', bookingFormData.message)
    formData.append('checkin', formatDate(selectedStartDate))
    formData.append('checkout', formatDate(selectedEndDate))
    formData.append('nights', calculateNights())
    formData.append('total', `£${calculateTotal()}`)
    formData.append('_subject', `Booking Request for Mission House - ${formatDate(selectedStartDate)} to ${formatDate(selectedEndDate)}`)

    try {
      // Try Formspree first (replace YOUR_FORM_ID with actual Formspree form ID)
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setSubmitStatus('success')
        setBookingFormData({ name: '', email: '', phone: '', guests: '1-2 guests', message: '' })
        // Close the form after 2 seconds and show success message
        setTimeout(() => {
          setShowBookingForm(false)
          setSubmitStatus('success-closed')
        }, 2000)
      } else {
        throw new Error('Formspree submission failed')
      }
    } catch (error) {
      // Fallback to mailto if Formspree fails
      console.log('Formspree failed, using mailto fallback')
      window.location.href = generateMailtoLink()
      setSubmitStatus('mailto')
    }

    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Mission House</h1>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#property" className="hover:text-primary transition-colors">Property</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
            <a href="#location" className="hover:text-primary transition-colors">Location</a>
            <a href="#getting-here" className="hover:text-primary transition-colors">Getting Here</a>
            <a href="#booking" className="hover:text-primary transition-colors">Booking</a>
          </div>
          <Button onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })}>Check Availability</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImages[selectedImage].src} 
            alt={heroImages[selectedImage].alt}
            className="w-full h-full object-contain"
            style={{backgroundColor: 'rgba(0,0,0,0.1)'}}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Mission House
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up">
            Spectacular Views Across the Sands to Vallay
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Users className="w-4 h-4 mr-2" />
              Sleeps 6
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Home className="w-4 h-4 mr-2" />
              3 Bedrooms
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <MapPin className="w-4 h-4 mr-2" />
              North Uist
            </Badge>
          </div>
          <Button size="lg" onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })} className="animate-bounce">
            Book Your Stay
          </Button>
        </div>

        {/* Image Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                selectedImage === index ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Property Overview */}
      <section id="property" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Your Outer Hebrides Retreat</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mission House offers the perfect blend of modern comfort and authentic Scottish island living, 
              with unparalleled views across the tidal sands to the mystical island of Vallay.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="grid grid-cols-2 gap-4">
              {propertyImages.map((img, index) => (
                <img 
                  key={index}
                  src={img.src} 
                  alt={img.alt}
                  className="rounded-lg shadow-lg w-full h-64 object-contain bg-gray-50 hover:scale-105 transition-transform cursor-pointer"
                  onClick={() => setSelectedGalleryImage(img)}
                />
              ))}
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">Modern Comfort in Wild Beauty</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Experience the raw beauty of the Outer Hebrides from the comfort of this beautifully 
                appointed holiday home. With panoramic views that change with every tide, Mission House 
                provides a front-row seat to one of Scotland's most dramatic landscapes.
              </p>
              <div className="bg-primary/10 rounded-lg p-4 mb-6">
                <p className="font-medium text-primary mb-2">Everything Provided</p>
                <p className="text-sm text-muted-foreground">
                  All bedding, linen, and towels are provided for your comfort and convenience.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <amenity.icon className="w-5 h-5 text-primary" />
                    <span>{amenity.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bedrooms */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">Accommodation</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {bedrooms.map((bedroom, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="h-64 overflow-hidden bg-gray-50">
                    <img 
                      src={bedroom.image} 
                      alt={bedroom.type}
                      className="w-full h-full object-contain hover:scale-105 transition-transform cursor-pointer"
                      onClick={() => setSelectedGalleryImage(bedroom)}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{bedroom.type}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{bedroom.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <Card className="max-w-2xl mx-auto text-center">
            <CardHeader>
              <CardTitle className="text-3xl">Weekly Stays</CardTitle>
              <CardDescription>Minimum 7 nights booking</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-5xl font-bold text-primary mb-4">£1,150</div>
              <p className="text-muted-foreground mb-6">per week for up to 6 guests</p>
              <Button size="lg" onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })}>
                Check Availability
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Photo Gallery</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore Mission House and its stunning surroundings through our comprehensive photo collection.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {galleryCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredGallery.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                onClick={() => setSelectedGalleryImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end">
                  <div className="p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Activities */}
      <section id="location" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Explore North Uist</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the magic of the Outer Hebrides with endless opportunities for adventure, 
              relaxation, and connection with nature.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="grid grid-cols-2 gap-4">
              {locationImages.map((img, index) => (
                <img 
                  key={index}
                  src={img.src} 
                  alt={img.alt}
                  className="rounded-lg shadow-lg w-full h-64 object-contain bg-gray-50 hover:scale-105 transition-transform cursor-pointer"
                  onClick={() => setSelectedGalleryImage(img)}
                />
              ))}
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">Adventures Await</h3>
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-lg">{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-8 text-center">
            <h4 className="font-bold text-2xl mb-4">The Vallay Experience</h4>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Walk across the tidal sands at low tide to explore the uninhabited island of Vallay, 
              with its pristine beaches, wildlife, and haunting Victorian ruins. The ever-changing 
              views from Mission House create a natural theater that captivates throughout your stay.
            </p>
          </div>
        </div>
      </section>

      {/* Getting Here Section */}
      <section id="getting-here" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Getting Here</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multiple transport options connect you to Mission House and the beautiful Outer Hebrides.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {transportOptions.map((option, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <option.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                  <CardDescription className="font-medium">{option.route}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{option.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{option.frequency}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                  <div className="pt-2 border-t">
                    <p className="text-xs font-medium text-primary">{option.bookingInfo}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-primary/10 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Travel Tips</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Book ferries well in advance, especially in summer</li>
                  <li>• Car hire available at Benbecula Airport</li>
                  <li>• Ferry bookings include your vehicle</li>
                  <li>• Check weather conditions before travel</li>
                  <li>• Mission House is 25 minutes from Lochmaddy, 1 hour from Lochboisdale</li>
                </ul>
              </div>
              <div>
                <img 
                  src={calmacFerry} 
                  alt="CalMac ferry approaching the Outer Hebrides"
                  className="rounded-lg shadow-lg w-full h-64 object-contain bg-gray-50 cursor-pointer"
                  onClick={() => setSelectedGalleryImage({src: calmacFerry, alt: "CalMac ferry approaching the Outer Hebrides"})}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Book Your Stay</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Select your dates and experience the magic of Mission House and the Outer Hebrides.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Availability Calendar</CardTitle>
                <CardDescription className="text-center">
                  Select your arrival and departure dates (minimum 7 nights)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Calendar */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <Button variant="outline" size="sm" onClick={prevMonth}>
                        <ChevronLeft className="w-4 h-4" />
                      </Button>
                      <h3 className="text-lg font-semibold">
                        {currentMonth.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
                      </h3>
                      <Button variant="outline" size="sm" onClick={nextMonth}>
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                    {renderCalendar()}
                    
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-red-100 border border-red-200 rounded"></div>
                        <span>Booked</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-primary rounded"></div>
                        <span>Selected</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-muted border rounded"></div>
                        <span>Available</span>
                      </div>
                    </div>
                  </div>

                  {/* Booking Summary */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-4">Your Selection</h4>
                      {selectedStartDate && (
                        <div className="space-y-2">
                          <p><strong>Check-in:</strong> {formatDate(selectedStartDate)}</p>
                          {selectedEndDate && (
                            <>
                              <p><strong>Check-out:</strong> {formatDate(selectedEndDate)}</p>
                              <p><strong>Duration:</strong> {calculateNights()} nights</p>
                            </>
                          )}
                        </div>
                      )}
                      {!selectedStartDate && (
                        <p className="text-muted-foreground">Select your arrival date to begin</p>
                      )}
                    </div>

                    {selectedStartDate && selectedEndDate && (
                      <div className="border-t pt-4">
                        <h4 className="font-semibold mb-4">Pricing</h4>
                        <div className="space-y-2">
                          {calculateNights() >= 7 && (
                            <>
                              <div className="flex justify-between">
                                <span>{Math.floor(calculateNights() / 7)} week(s) × £1,150</span>
                                <span>£{Math.floor(calculateNights() / 7) * 1150}</span>
                              </div>
                              {calculateNights() % 7 > 0 && (
                                <div className="flex justify-between">
                                  <span>{calculateNights() % 7} extra night(s) × £164</span>
                                  <span>£{(calculateNights() % 7) * 164}</span>
                                </div>
                              )}
                              <div className="border-t pt-2 flex justify-between font-semibold">
                                <span>Total</span>
                                <span>£{calculateTotal()}</span>
                              </div>
                            </>
                          )}
                          {calculateNights() < 7 && (
                            <p className="text-red-600">Minimum stay is 7 nights</p>
                          )}
                        </div>
                      </div>
                    )}

                    {selectedStartDate && selectedEndDate && calculateNights() >= 7 && (
                      <Button className="w-full" size="lg" onClick={() => setShowBookingForm(true)}>
                        Request Booking
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      {selectedGalleryImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedGalleryImage(null)}>
          <div className="max-w-4xl max-h-full relative">
            <img
              src={selectedGalleryImage.src}
              alt={selectedGalleryImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedGalleryImage(null)}
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              ✕
            </button>
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-4 rounded-lg">
              <p className="text-sm">{selectedGalleryImage.alt}</p>
            </div>
          </div>
        </div>
      )}

      {/* Success Message After Form Closes */}
      {submitStatus === 'success-closed' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md text-center">
            <CardContent className="p-8">
              <div className="text-green-600 text-6xl mb-4">✅</div>
              <h3 className="text-2xl font-bold mb-4">Booking Request Sent!</h3>
              <p className="text-muted-foreground mb-6">
                Thank you for your booking request. We'll respond within 24 hours to confirm availability and provide booking instructions.
              </p>
              <Button onClick={() => setSubmitStatus(null)} className="w-full">
                Continue Browsing
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Enhanced Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle>Request Booking</CardTitle>
              <CardDescription>
                {selectedStartDate && selectedEndDate 
                  ? `${formatDate(selectedStartDate)} to ${formatDate(selectedEndDate)}`
                  : 'Please select your dates first'
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                  <p className="text-green-800 font-medium">✅ Booking request sent successfully!</p>
                  <p className="text-green-600 text-sm">We'll respond within 24 hours.</p>
                </div>
              )}
              
              {submitStatus === 'mailto' && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <p className="text-blue-800 font-medium">📧 Email client opened</p>
                  <p className="text-blue-600 text-sm">Please send the pre-filled email to complete your booking request.</p>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4">
                {selectedStartDate && selectedEndDate && (
                  <div className="bg-muted p-4 rounded-lg">
                    <p><strong>Check-in:</strong> {formatDate(selectedStartDate)}</p>
                    <p><strong>Check-out:</strong> {formatDate(selectedEndDate)}</p>
                    <p><strong>Duration:</strong> {calculateNights()} nights</p>
                    <p><strong>Total:</strong> £{calculateTotal()}</p>
                  </div>
                )}
                
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    value={bookingFormData.name}
                    onChange={handleFormChange}
                    className="w-full p-2 border rounded-md" 
                    required 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={bookingFormData.email}
                    onChange={handleFormChange}
                    className="w-full p-2 border rounded-md" 
                    required 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={bookingFormData.phone}
                    onChange={handleFormChange}
                    className="w-full p-2 border rounded-md" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Number of Guests</label>
                  <select 
                    name="guests"
                    value={bookingFormData.guests}
                    onChange={handleFormChange}
                    className="w-full p-2 border rounded-md"
                  >
                    <option>1-2 guests</option>
                    <option>3-4 guests</option>
                    <option>5-6 guests</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Special Requests</label>
                  <textarea 
                    name="message"
                    value={bookingFormData.message}
                    onChange={handleFormChange}
                    className="w-full p-2 border rounded-md h-24" 
                    placeholder="Any special requirements or questions..."
                  />
                </div>
                
                <div className="flex space-x-2">
                  <Button 
                    type="submit" 
                    className="flex-1" 
                    disabled={isSubmitting || !selectedStartDate || !selectedEndDate}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Request'}
                  </Button>
                  <Button 
                    type="button"
                    variant="outline" 
                    onClick={() => {
                      setShowBookingForm(false)
                      setSubmitStatus(null)
                    }}
                  >
                    Cancel
                  </Button>
                </div>
                
                <div className="text-xs text-muted-foreground">
                  <p>* Required fields</p>
                  <p>We'll respond to your booking request within 24 hours.</p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Contact Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-6">Contact Mission House</h3>
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Available on request</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>rental@missionhouse.co.uk</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>North Uist, Outer Hebrides</span>
            </div>
          </div>
          <p className="text-primary-foreground/80">
            Licensed holiday let • Weekly bookings only • Spectacular Vallay views
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
