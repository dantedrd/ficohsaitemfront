require('dotenv').config();

console.log("running")
console.log(process.env.URL_BACKEND)

const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/item/:id',
          destination: '/item/[id]',
        },
      ];
    },
  };
  
  module.exports = nextConfig;
