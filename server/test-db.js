const mongoose = require('mongoose');
require('dotenv').config();

console.log('Attempting to connect to MongoDB...');
console.log('URI:', process.env.MONGO_URI ? 'FOUND (hidden for security)' : 'NOT FOUND');

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ SUCCESS: Connected to MongoDB successfully!');
    process.exit(0);
  })
  .catch((err) => {
    console.error('❌ FAILURE: Could not connect to MongoDB.');
    console.error('Error Details:', err.message);
    console.error('\nPossible causes:');
    console.error('1. Your IP address might not be whitelisted in MongoDB Atlas.');
    console.error('2. The username or password in your MONGO_URI might be incorrect.');
    console.error('3. You might be behind a firewall or VPN that blocks port 27017.');
    process.exit(1);
  });
