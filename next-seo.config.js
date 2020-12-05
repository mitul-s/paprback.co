const title = 'Paprback – Start building your bookshelf today.';
const description = 'Paprback is the perfect place to showcase books you are reading, would like to read, or have read.';

const SEO = {
  title,
  description,
  canonical: 'https://alpha.paprback.co',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://alpha.paprback.co',
    title,
    description,
    images: [
      {
        url: 'https://alpha.paprback.co/media/paprback.png',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  }
};

export default SEO;
