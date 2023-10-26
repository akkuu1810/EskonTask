/** @type {import('next').NextConfig} */
require('next-transpile-modules')(['echarts', 'zrender'])
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'lh3.googleusercontent.com'],
  },
}
