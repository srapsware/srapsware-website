import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'www.srapsware.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.srapsware.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // Author redirects
      {
        source: '/author/:slug',
        destination: '/about',
        permanent: true,
      },
      
      // Portfolio redirects - old date-based URLs to new slug-based URLs
      {
        source: '/portfolio/2021-09-18-kumbhcamp',
        destination: '/portfolio/kumbhcamp',
        permanent: true,
      },
      {
        source: '/portfolio/2021-06-21-leehyne',
        destination: '/portfolio/leehyne',
        permanent: true,
      },
      {
        source: '/portfolio/2021-06-21-q5infotech',
        destination: '/portfolio/q5infotech',
        permanent: true,
      },
      {
        source: '/portfolio/2021-06-21-rain-forest-wash-and-lube',
        destination: '/portfolio/rain-forest-wash-and-lube',
        permanent: true,
      },
      {
        source: '/portfolio/2021-06-21-whois-extractor',
        destination: '/portfolio/whois-extractor',
        permanent: true,
      },
      {
        source: '/portfolio/2021-06-21-safqaq8',
        destination: '/portfolio/safqaq8',
        permanent: true,
      },
      {
        source: '/portfolio/2021-07-09-awesum-dimsum',
        destination: '/portfolio/awesum-dimsum',
        permanent: true,
      },
      {
        source: '/portfolio/2021-07-09-radio-ruposhi-bangla',
        destination: '/portfolio/radio-ruposhi-bangla',
        permanent: true,
      },
      {
        source: '/portfolio/2021-09-17-souq360',
        destination: '/portfolio/souq360',
        permanent: true,
      },
      {
        source: '/portfolio/2021-09-17-global-network-pro',
        destination: '/portfolio/global-network-pro',
        permanent: true,
      },
      {
        source: '/portfolio/2021-09-18-tostishop',
        destination: '/portfolio/tostishop',
        permanent: true,
      },
      {
        source: '/portfolio/2021-09-18-usariart',
        destination: '/portfolio/usariart',
        permanent: true,
      },
      {
        source: '/portfolio/2021-09-18-jupitec',
        destination: '/portfolio/jupitec',
        permanent: true,
      },
      {
        source: '/portfolio/2021-09-18-fericart',
        destination: '/portfolio/fericart',
        permanent: true,
      },
      {
        source: '/portfolio/2021-09-21-agriculture-wy-gov',
        destination: '/portfolio/agriculture-wy-gov',
        permanent: true,
      },
      {
        source: '/portfolio/2021-09-21-photography-talk',
        destination: '/portfolio/photography-talk',
        permanent: true,
      },
      {
        source: '/portfolio/2021-09-21-fotojet',
        destination: '/portfolio/fotojet',
        permanent: true,
      },
      {
        source: '/portfolio/2022-03-01-sts-verbund',
        destination: '/portfolio/sts-verbund',
        permanent: true,
      },
      {
        source: '/portfolio/2022-05-12-pharmagenies',
        destination: '/portfolio/pharmagenies',
        permanent: true,
      },
      {
        source: '/portfolio/2022-09-28-bionic-reading',
        destination: '/portfolio/bionic-reading',
        permanent: true,
      },
      {
        source: '/portfolio/2022-12-15-il-gusto-di-napoli',
        destination: '/portfolio/il-gusto-di-napoli',
        permanent: true,
      },
      {
        source: '/portfolio/2023-01-06-apk-downloader-by-play-store',
        destination: '/portfolio/apk-downloader-by-play-store',
        permanent: true,
      },
      {
        source: '/portfolio/2023-01-06-json-formatter',
        destination: '/portfolio/json-formatter',
        permanent: true,
      },
      
      // Blog post redirects - old category/date-based URLs to new slug-based URLs
      {
        source: '/news/update/2021/05/28/wordpress-at-18',
        destination: '/blog/wordpress-at-18',
        permanent: true,
      },
      {
        source: '/tech/news/how-to/2021/06/21/use-sucuri-security-to-secure-your-wordpress-site',
        destination: '/blog/use-sucuri-security-to-secure-your-wordpress-site',
        permanent: true,
      },
      {
        source: '/tech/news/2021/06/21/fontawesome-6',
        destination: '/blog/fontawesome-6',
        permanent: true,
      },
      {
        source: '/how-to/2021/06/21/enable-mod_rewrite-on-iis-web-server',
        destination: '/blog/enable-mod_rewrite-on-iis-web-server',
        permanent: true,
      },
      {
        source: '/how-to/news/2021/06/26/enabling-jekyll-blog-comments-with-utterances',
        destination: '/blog/enabling-jekyll-blog-comments-with-utterances',
        permanent: true,
      },
      {
        source: '/news/tech/linux/2021/06/26/06-cpanel-price-increase-and-alternative-control-panels',
        destination: '/blog/06-cpanel-price-increase-and-alternative-control-panels',
        permanent: true,
      },
      {
        source: '/update/2021/07/02/website-new-design-moved-to-jekyll-and-netlify-with-headless-cms',
        destination: '/blog/website-new-design-moved-to-jekyll-and-netlify-with-headless-cms',
        permanent: true,
      },
      {
        source: '/update/2021/08/14/happy-independence-day-2021',
        destination: '/blog/happy-independence-day-2021',
        permanent: true,
      },
      {
        source: '/linux/how-to/2021/08/21/openlitespeed-configure-with-monit-to-monitor',
        destination: '/blog/openlitespeed-configure-with-monit-to-monitor',
        permanent: true,
      },
      {
        source: '/how-to/2021/12/13/disable-cod-cash-on-delivery-for-products-type-digital-on-magento-1-9-2',
        destination: '/blog/disable-cod-cash-on-delivery-for-products-type-digital-on-magento-1-9-2',
        permanent: true,
      },
      {
        source: '/how-to/2022/08/04/bulk-disable-multiple-magento-2-products-by-phpmyadmin',
        destination: '/blog/bulk-disable-multiple-magento-2-products-by-phpmyadmin',
        permanent: true,
      },
      {
        source: '/news/update/how-to/tech/2022/10/09/no-more-g-suite-legacy-free-edition',
        destination: '/blog/no-more-g-suite-legacy-free-edition',
        permanent: true,
      },
      {
        source: '/news/2022/12/04/13-years-of-code-backing-happy-anniversary',
        destination: '/blog/13-years-anniversary-celebration',
        permanent: true,
      },
      
      // Service redirects
      {
        source: '/services/android-app-development',
        destination: '/services/mobile-development/android',
        permanent: true,
      },
      {
        source: '/services/ios-app-development',
        destination: '/services/mobile-development/ios',
        permanent: true,
      },
      {
        source: '/services/chrome-extension-development',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/firefox-extension-development',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/e-commerce-website-design',
        destination: '/services/ecommerce-development/custom',
        permanent: true,
      },
      {
        source: '/services/fix-your-hacked-website-immediately',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/joomla-development',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/magento-development',
        destination: '/services/ecommerce-development/magento',
        permanent: true,
      },
      {
        source: '/services/mobile-site-design',
        destination: '/services/mobile-development/design',
        permanent: true,
      },
      {
        source: '/services/responsive-website-design',
        destination: '/services/web-development/frontend',
        permanent: true,
      },
      {
        source: '/services/woocommerce-website-development',
        destination: '/services/ecommerce-development/woocommerce',
        permanent: true,
      },
      {
        source: '/services/wordpress-website-development',
        destination: '/services/web-development/wordpress',
        permanent: true,
      },
      
      // Static page redirects
      {
        source: '/about-our-company',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/srapsware-portfolio',
        destination: '/portfolio',
        permanent: true,
      },
      {
        source: '/our-process',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/make-payment',
        destination: '/contact',
        permanent: true,
      },
      
      // Blog pagination redirects
      {
        source: '/blog/page/:page',
        destination: '/blog',
        permanent: true,
      },
      
      // Tag redirects
      {
        source: '/tag/:tag',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/tag/:tag/page/:page',
        destination: '/blog',
        permanent: true,
      },
      
      // Category redirects
      {
        source: '/category/:category',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/category/:category/page/:page',
        destination: '/blog',
        permanent: true,
      },
      
      // Admin redirect
      {
        source: '/admin',
        destination: '/admin/index.html',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
