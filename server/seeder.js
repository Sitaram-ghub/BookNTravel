const Destination = require('./models/Destination');
const Package = require('./models/Package');
const Flight = require('./models/Flight');
const Train = require('./models/Train');
const Hotel = require('./models/Hotel');
const User = require('./models/User');

const seedData = async () => {
  try {
    // Check if data already exists to avoid clearing on every restart
    const count = await Destination.countDocuments();
    if (count > 0) {
      return;
    }

    console.log('Database empty. Seeding fresh data...');

    // Default users creation removed per user request

    const destinationsData = [
      // 15 Indian Destinations
      { title: 'Goa', location: 'India', image: '/images/destinations/goa.png', price: 15000, rating: 4.8, latitude: 15.2993, longitude: 74.1240, description: 'Famous for its beaches, vibrant nightlife, and Portuguese heritage.' },
      { title: 'Jaipur', location: 'India', image: '/images/destinations/jaipur.png', price: 12000, rating: 4.6, latitude: 26.9124, longitude: 75.7873, description: 'The Pink City, known for its majestic forts, palaces, and vibrant bazaars.' },
      { title: 'Kerala', location: 'India', image: '/images/destinations/kerala.jpg', price: 18000, rating: 4.9, latitude: 10.8505, longitude: 76.2711, description: 'God\'s Own Country. Serene backwaters, lush tea gardens, and pristine beaches.' },
      { title: 'Manali', location: 'India', image: '/images/destinations/manali.jpg', price: 14000, rating: 4.7, latitude: 32.2396, longitude: 77.1887, description: 'A high-altitude Himalayan resort town known for skiing, trekking, and scenic valleys.' },
      { title: 'Agra', location: 'India', image: '/images/destinations/agra.png', price: 11000, rating: 4.5, latitude: 27.1767, longitude: 78.0081, description: 'Home to the iconic Taj Mahal, a symbol of eternal love and Mughal architecture.' },
      { title: 'Varanasi', location: 'India', image: '/images/destinations/varanasi.jpg', price: 10000, rating: 4.6, latitude: 25.3176, longitude: 82.9739, description: 'The spiritual capital of India, famous for its ghats along the sacred Ganges river.' },
      { title: 'Ladakh', location: 'India', image: '/images/destinations/ladakh.jpg', price: 20000, rating: 4.9, latitude: 34.1526, longitude: 77.5770, description: 'A high-desert region in the Himalayas known for crystal clear lakes and monasteries.' },
      { title: 'Andaman Islands', location: 'India', image: '/images/destinations/andaman_islands.jpg', price: 25000, rating: 4.8, latitude: 11.7401, longitude: 92.6586, description: 'Stunning archipelagos with white-sand beaches, mangroves, and vibrant coral reefs.' },
      { title: 'Darjeeling', location: 'India', image: '/images/destinations/darjeeling.jpg', price: 13000, rating: 4.5, latitude: 27.0410, longitude: 88.2627, description: 'Famed for its distinctive black tea, panoramic views of the Himalayas, and toy train.' },
      { title: 'Udaipur', location: 'India', image: '/images/destinations/udaipur.jpg', price: 16000, rating: 4.7, latitude: 24.5854, longitude: 73.7125, description: 'The City of Lakes. Known for its lavish royal residences and serene boat rides.' },
      { title: 'Rishikesh', location: 'India', image: '/images/destinations/rishikesh.jpg', price: 11000, rating: 4.4, latitude: 30.0869, longitude: 78.2676, description: 'The Yoga Capital of the World, nestled in the Himalayan foothills beside the Ganges.' },
      { title: 'Shimla', location: 'India', image: '/images/destinations/shimla.jpg', price: 14500, rating: 4.5, latitude: 31.1048, longitude: 77.1734, description: 'A picturesque hill station with colonial architecture and scenic mountain vistas.' },
      { title: 'Mysore', location: 'India', image: '/images/destinations/mysore.png', price: 13500, rating: 4.6, latitude: 12.2958, longitude: 76.6394, description: 'Renowned for its heritage structures, rich silk, and the magnificent Mysore Palace.' },
      { title: 'Hampi', location: 'India', image: '/images/destinations/hampi.jpg', price: 13000, rating: 4.7, latitude: 15.3350, longitude: 76.4600, description: 'An ancient village with captivating ruins of the Vijayanagara Empire.' },
      { title: 'Mumbai', location: 'India', image: '/images/destinations/mumbai.png', price: 17000, rating: 4.6, latitude: 19.0760, longitude: 72.8777, description: 'The financial, commercial, and entertainment capital of India. A city that never sleeps.' },
      { title: 'Srinagar', location: 'India', image: '/images/destinations/srinagar.jpg', price: 15500, rating: 4.8, latitude: 34.0837, longitude: 74.7973, description: 'The summer capital of Jammu and Kashmir, known for Dal Lake and houseboats.' },
      { title: 'Jaisalmer', location: 'India', image: '/images/destinations/jaisalmer.jpg', price: 14000, rating: 4.6, latitude: 26.9157, longitude: 70.9083, description: 'The Golden City, famous for its magnificent fort and Thar Desert dunes.' },
      { title: 'Amritsar', location: 'India', image: '/images/destinations/amritsar.jpg', price: 13000, rating: 4.7, latitude: 31.6340, longitude: 74.8723, description: 'Home to the spectacular Golden Temple, the spiritual center of the Sikh religion.' },
      { title: 'Ooty', location: 'India', image: '/images/destinations/ooty.jpg', price: 13500, rating: 4.5, latitude: 11.4102, longitude: 76.6950, description: 'A popular hill station in the Nilgiri Hills known for its tea gardens and scenic beauty.' },
      { title: 'Kanyakumari', location: 'India', image: '/images/destinations/kanyakumari.jpg', price: 12500, rating: 4.4, latitude: 8.0883, longitude: 77.5385, description: 'The southernmost tip of India where three vast water bodies meet.' },

      // 10 International Destinations
      { title: 'Paris', location: 'France', image: '/images/destinations/paris.png', price: 125000, rating: 4.9, latitude: 48.8566, longitude: 2.3522, description: 'The City of Light awaits. Visit the Eiffel Tower, the Louvre, and enjoy world-class cuisine.' },
      { title: 'Bali', location: 'Indonesia', image: '/images/destinations/bali.jpg', price: 112000, rating: 4.8, latitude: -8.4095, longitude: 115.1889, description: 'Experience beautiful beaches, lush rice terraces, and vibrant culture.' },
      { title: 'Maldives', location: 'Maldives', image: '/images/destinations/maldives.jpg', price: 145000, rating: 5.0, latitude: 3.2028, longitude: 73.2207, description: 'Luxury over-water villas and crystal-clear turquoise waters. A tropical escape.' },
      { title: 'Dubai', location: 'UAE', image: '/images/destinations/dubai.jpg', price: 118000, rating: 4.7, latitude: 25.2048, longitude: 55.2708, description: 'A city of superlatives featuring the Burj Khalifa, vast deserts, and luxury shopping.' },
      { title: 'Swiss Alps', location: 'Switzerland', image: '/images/destinations/swiss_alps.jpg', price: 132000, rating: 4.9, latitude: 46.5595, longitude: 8.5614, description: 'Majestic mountains, pristine lakes, and thrilling winter sports.' },
      { title: 'Santorini', location: 'Greece', image: '/images/destinations/santorini.jpg', price: 118000, rating: 4.7, latitude: 36.3932, longitude: 25.4615, description: 'Iconic blue-domed churches and stunning sunsets over the Aegean Sea.' },
      { title: 'Kyoto', location: 'Japan', image: '/images/destinations/kyoto.jpg', price: 121000, rating: 4.8, latitude: 35.0116, longitude: 135.7681, description: 'Classical Buddhist temples, gardens, imperial palaces, and Shinto shrines.' },
      { title: 'New York', location: 'USA', image: '/images/destinations/new_york.jpg', price: 128000, rating: 4.6, latitude: 40.7128, longitude: -74.0060, description: 'The Big Apple. Times Square, Central Park, and the Statue of Liberty.' },
      { title: 'Rome', location: 'Italy', image: '/images/destinations/rome.jpg', price: 122000, rating: 4.8, latitude: 41.9028, longitude: 12.4964, description: 'The Eternal City. Explore the Colosseum, Roman Forum, and Vatican City.' },
      { title: 'Phuket', location: 'Thailand', image: '/images/destinations/phuket.jpg', price: 111000, rating: 4.6, latitude: 7.8804, longitude: 98.3923, description: 'Thailand\'s largest island, known for spectacular beaches and vibrant nightlife.' }
    ];

    const createdDestinations = await Destination.insertMany(destinationsData);

    // Dynamically seed packages for EVERY destination with variations
    let packagesData = [];
    createdDestinations.forEach((dest, index) => {
      const durations = ['3 Days / 2 Nights', '4 Days / 3 Nights', '5 Days / 4 Nights', '7 Days / 6 Nights', '10 Days / 9 Nights'];
      const themes = ['Romantic', 'Adventure', 'Family', 'Luxury', 'Budget', 'Solo Explorer', 'Backpacker'];
      
      // Create randomized 2-5 unique packages per destination
      const numPackages = 2 + Math.floor(Math.random() * 4); // 2 to 5
      const usedThemes = [];
      for(let j=0; j<numPackages; j++) {
        const duration = durations[(index + j) % durations.length];
        let theme = themes[(index + j * 2) % themes.length];
        // Ensure no duplicate themes per destination
        while(usedThemes.includes(theme)) {
          theme = themes[Math.floor(Math.random() * themes.length)];
        }
        usedThemes.push(theme);
        
        const priceMultiplier = 1.3 + (j * 0.5) + (Math.random() * 0.3);
        packagesData.push({
          packageName: `${theme} ${dest.title} Getaway`,
          duration: duration,
          price: Math.max(1500, Math.floor(dest.price * priceMultiplier)),
          destination: dest._id,
          description: `Experience a perfect ${theme.toLowerCase()} trip to ${dest.title}. Includes curated stays, guided excursions, and local highlights.`
        });
      }
    });
    await Package.insertMany(packagesData);

    // Dynamically seed Flights for EVERY destination with distinct details
    const airlines = ['Air India', 'IndiGo', 'Vistara', 'Emirates', 'Lufthansa', 'Singapore Airlines', 'SpiceJet', 'GoAir'];
    const allCityNames = createdDestinations.map(d => d.title);
    
    let flightsData = [];
    createdDestinations.forEach((dest, i) => {
      // 4 flights arriving at 'dest' from random origins
      for(let j=0; j<4; j++) {
        const origin = allCityNames[(i + j + 1) % allCityNames.length];
        if (origin === dest.title) continue;
        
        const airlineName = airlines[(i + j + Math.floor(Math.random()*3)) % airlines.length];
        const randomNum = Math.floor(Math.random() * 900) + 100;
        
        flightsData.push({
          airline: airlineName,
          flightNumber: `${airlineName.substring(0,2).toUpperCase()}-${randomNum}`,
          origin: origin,
          destination: dest.title,
          departureTime: new Date(Date.now() + (j+1) * 86400000 + (Math.random() * 86400000)),
          arrivalTime: new Date(Date.now() + (j+1) * 86400000 + (Math.random() * 86400000) + 14400000), // ~4 hrs later
          price: Math.floor(Math.random() * 8000) + 3000
        });
      }

      // 2 flights departing from 'dest' to random targets
      for(let j=0; j<2; j++) {
        const targetDest = allCityNames[(i + j + 5) % allCityNames.length];
        if (targetDest === dest.title) continue;
        
        const airlineName = airlines[(i + j + Math.floor(Math.random()*3)) % airlines.length];
        const randomNum = Math.floor(Math.random() * 900) + 100;
        
        flightsData.push({
          airline: airlineName,
          flightNumber: `${airlineName.substring(0,2).toUpperCase()}-${randomNum}`,
          origin: dest.title,
          destination: targetDest,
          departureTime: new Date(Date.now() + (j+1) * 86400000 + (Math.random() * 86400000)),
          arrivalTime: new Date(Date.now() + (j+1) * 86400000 + (Math.random() * 86400000) + 14400000),
          price: Math.floor(Math.random() * 8000) + 3000
        });
      }
    });
    await Flight.insertMany(flightsData);

    // Dynamically seed Trains for NATIONAL (India) destinations ONLY
    const trainNames = ['Rajdhani Express', 'Shatabdi Express', 'Vande Bharat', 'Duronto Express', 'Garib Rath', 'Sampark Kranti', 'Jan Shatabdi'];
    const indianCityNames = createdDestinations.filter(d => d.location === 'India').map(d => d.title);
    let trainsData = [];
    createdDestinations.forEach((dest, i) => {
      if (dest.location !== 'India') return;

      // 4 trains arriving at 'dest'
      for(let j=0; j<4; j++) {
        const origin = indianCityNames[(i + j + 1) % indianCityNames.length];
        if (origin === dest.title) continue;

        const tName = trainNames[(i + j + Math.floor(Math.random()*3)) % trainNames.length];
        const randomNum = Math.floor(Math.random() * 9000) + 1000;

        trainsData.push({
          trainName: tName,
          trainNumber: `12${randomNum}`,
          origin: origin,
          destination: dest.title,
          departureTime: new Date(Date.now() + (j+1) * 86400000 + (Math.random() * 86400000)),
          arrivalTime: new Date(Date.now() + (j+2) * 86400000 + (Math.random() * 86400000)), // ~1 day later
          classes: [
            {className: '1AC', price: Math.floor(Math.random() * 2000) + 3000}, 
            {className: '2AC', price: Math.floor(Math.random() * 1000) + 1500}, 
            {className: 'Sleeper', price: Math.floor(Math.random() * 500) + 400}
          ]
        });
      }

      // 2 trains departing from 'dest'
      for(let j=0; j<2; j++) {
        const targetDest = indianCityNames[(i + j + 5) % indianCityNames.length];
        if (targetDest === dest.title) continue;

        const tName = trainNames[(i + j + Math.floor(Math.random()*3)) % trainNames.length];
        const randomNum = Math.floor(Math.random() * 9000) + 1000;

        trainsData.push({
          trainName: tName,
          trainNumber: `12${randomNum}`,
          origin: dest.title,
          destination: targetDest,
          departureTime: new Date(Date.now() + (j+1) * 86400000 + (Math.random() * 86400000)),
          arrivalTime: new Date(Date.now() + (j+2) * 86400000 + (Math.random() * 86400000)),
          classes: [
            {className: '1AC', price: Math.floor(Math.random() * 2000) + 3000}, 
            {className: '2AC', price: Math.floor(Math.random() * 1000) + 1500}, 
            {className: 'Sleeper', price: Math.floor(Math.random() * 500) + 400}
          ]
        });
      }
    });
    await Train.insertMany(trainsData);

    // Seed exactly 1 True Iconic Luxury Hotel per destination mapped directly to reliable local hotel image assets
    const realHotelsMap = {
      'Goa': { name: 'Goa Marriott Resort & Spa', image: '/images/hotels/goa_marriott_resort.jpg' },
      'Jaipur': { name: 'Rambagh Palace Jaipur', image: '/images/hotels/rambagh_palace_jaipur.jpg' },
      'Kerala': { name: 'Taj Kumarakom Resort & Spa', image: '/images/hotels/taj_kumarakom_resort.jpg' },
      'Manali': { name: 'The Himalayan Resort & Spa', image: '/images/hotels/the_himalayan_resort.jpg' },
      'Agra': { name: 'The Oberoi Amarvilas Agra', image: '/images/hotels/oberoi_amarvilas_agra.jpg' },
      'Varanasi': { name: 'BrijRama Palace Varanasi', image: '/images/hotels/brijrama_palace_varanasi.jpg' },
      'Ladakh': { name: 'The Grand Dragon Ladakh', image: '/images/hotels/grand_dragon_ladakh.jpg' },
      'Andaman Islands': { name: 'Taj Exotica Resort & Spa', image: '/images/hotels/taj_exotica_andaman.jpg' },
      'Darjeeling': { name: 'Mayfair Hill Resort Darjeeling', image: '/images/hotels/mayfair_darjeeling.jpg' },
      'Udaipur': { name: 'Taj Lake Palace Udaipur', image: '/images/hotels/taj_lake_palace_udaipur.jpg' },
      'Rishikesh': { name: 'Ananda in the Himalayas', image: '/images/hotels/ananda_himalayas_rishikesh.jpg' },
      'Shimla': { name: 'Wildflower Hall Shimla', image: '/images/hotels/wildflower_hall_shimla.jpg' },
      'Mysore': { name: 'Radisson Blu Plaza Hotel Mysore', image: '/images/hotels/radisson_blu_mysore.jpg' },
      'Hampi': { name: 'Evolve Back Kamalapura Palace', image: '/images/hotels/evolve_back_hampi.jpg' },
      'Mumbai': { name: 'The Taj Mahal Palace Mumbai', image: '/images/hotels/taj_mahal_palace_mumbai.jpg' },
      'Srinagar': { name: 'The Lalit Grand Palace Srinagar', image: '/images/hotels/lalit_grand_palace_srinagar.jpg' },
      'Jaisalmer': { name: 'Suryagarh Jaisalmer', image: '/images/hotels/suryagarh_jaisalmer.jpg' },
      'Amritsar': { name: 'Taj Swarna Amritsar', image: '/images/hotels/taj_swarna_amritsar.jpg' },
      'Ooty': { name: 'Savoy - IHCL SeleQtions Ooty', image: '/images/hotels/savoy_ooty.jpg' },
      'Kanyakumari': { name: 'Sparsa Resort Kanyakumari', image: '/images/hotels/sparsa_kanyakumari.jpg' },
      'Paris': { name: 'Ritz Paris', image: '/images/hotels/ritz_paris.jpg' },
      'Bali': { name: 'Four Seasons Resort Bali at Sayan', image: '/images/hotels/four_seasons_bali.jpg' },
      'Maldives': { name: 'Soneva Fushi Maldives', image: '/images/hotels/soneva_fushi_maldives.jpg' },
      'Dubai': { name: 'Burj Al Arab Jumeirah', image: '/images/hotels/burj_al_arab_dubai.jpg' },
      'Swiss Alps': { name: 'The Chedi Andermatt', image: '/images/hotels/chedi_andermatt.jpg' },
      'Santorini': { name: 'Grace Hotel Santorini', image: '/images/hotels/grace_hotel_santorini.jpg' },
      'Kyoto': { name: 'The Ritz-Carlton Kyoto', image: '/images/hotels/ritz_carlton_kyoto.jpg' },
      'New York': { name: 'The Plaza Hotel New York', image: '/images/hotels/plaza_hotel_new_york.jpg' },
      'Rome': { name: 'Hotel Eden Rome', image: '/images/hotels/hotel_eden_rome.jpg' },
      'Phuket': { name: 'Amanpuri Phuket', image: '/images/hotels/amanpuri_phuket.jpg' }
    };

    let hotelsData = [];
    createdDestinations.forEach(dest => {
      const info = realHotelsMap[dest.title] || {
        name: `The Grand Premium ${dest.title} Resort`,
        image: '/images/hotels/taj_mahal_palace_mumbai.jpg'
      };
      
      hotelsData.push({
        hotelName: info.name,
        location: dest.title,
        rating: (Math.random() * 0.4 + 4.6).toFixed(1), // 4.6 to 5.0 premium rating
        image: info.image,
        rooms: [
          { roomType: 'Premium Luxury Room', pricePerNight: Math.floor(dest.price * 12) },
          { roomType: 'Presidential Suite', pricePerNight: Math.floor(dest.price * 25) }
        ]
      });
    });
    await Hotel.insertMany(hotelsData);

    console.log('MASSIVE Dummy data seeded successfully!');
  } catch (error) {
    console.error(`Error seeding data: ${error.message}`);
  }
};

module.exports = seedData;
