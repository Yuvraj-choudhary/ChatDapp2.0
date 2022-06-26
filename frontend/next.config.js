/** @type {import('next').NextConfig} */
module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/",
        destination: "http://localhost:8000/",
      },
    ];
  };
  return {
    rewrites,
  };
};
