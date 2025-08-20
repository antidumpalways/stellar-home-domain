// CORS Configuration for Stellar Home Domain Quest
// This file provides CORS settings to allow access to stellar.tomlain.vercel.app

const corsOptions = {
  // Allow specific origin
  origin: [
    'https://stellar-home-dom/.well-known/stellar.tomlain.vercel.app',
    'https://stellar.tomlain.vercel.app',
    'https://stellar-home-dom.vercel.app'
  ],
  
  // Allow credentials (cookies, authorization headers)
  credentials: true,
  
  // Allowed HTTP methods
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'HEAD'],
  
  // Allowed headers
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'Authorization',
    'X-API-Key',
    'Stellar-Signature'
  ],
  
  // Expose headers to client
  exposedHeaders: [
    'X-Total-Count',
    'X-Page-Count',
    'X-Current-Page'
  ],
  
  // Preflight request cache time (in seconds)
  maxAge: 86400, // 24 hours
  
  // Allow all origins for development (remove in production)
  // Uncomment the line below if you need to allow all origins during development
  // origin: true,
  
  // Strict CORS for production
  strictOrigin: true,
  
  // Allow subdomains
  allowSubdomains: true
};

// Express.js middleware function
const corsMiddleware = (req, res, next) => {
  const origin = req.headers.origin;
  
  // Check if origin is allowed
  if (corsOptions.origin.includes(origin) || corsOptions.origin === true) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  
  res.header('Access-Control-Allow-Credentials', corsOptions.credentials);
  res.header('Access-Control-Allow-Methods', corsOptions.methods.join(', '));
  res.header('Access-Control-Allow-Headers', corsOptions.allowedHeaders.join(', '));
  res.header('Access-Control-Expose-Headers', corsOptions.exposedHeaders.join(', '));
  res.header('Access-Control-Max-Age', corsOptions.maxAge);
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  next();
};

// Vercel serverless function CORS headers
const vercelCorsHeaders = {
  'Access-Control-Allow-Origin': 'https://stellar-home-dom/.well-known/stellar.tomlain.vercel.app',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-API-Key, Stellar-Signature',
  'Access-Control-Allow-Credentials': 'true',
  'Access-Control-Max-Age': '86400'
};

// Static file CORS headers (for .well-known directory)
const staticCorsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Max-Age': '86400'
};

module.exports = {
  corsOptions,
  corsMiddleware,
  vercelCorsHeaders,
  staticCorsHeaders
};
