module.exports = {
  // You can customize webpack configuration here
  webpack: (config, { isServer }) => {
    // Add custom webpack configurations
    // For example, adding a new alias:
    config.resolve.alias["@components"] = path.join(
      __dirname,
      "src/components"
    );

    if (isServer) {
      // This is necessary for server-side rendering
      require("./scripts/generate-sitemap"); // Example: Generating a sitemap
    }

    return config;
  },

  // You can add environment variables
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
  },

  // Add your custom webpack plugins
  plugins: [],

  // Add custom headers to responses
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
        ],
      },
    ];
  },

  // Define where the Next.js app will be served from
  basePath: "/app",
};
