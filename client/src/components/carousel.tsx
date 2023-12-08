import Link from 'next/link';
import { GridTileImage } from './grid/tile';
const imageUrl = 'https://instagram.fssa7-1.fna.fbcdn.net/v/t39.30808-6/407846302_17904603194870794_5434279238283622427_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDk2MC5zZHIifQ&_nc_ht=instagram.fssa7-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=InA7UTaixfcAX-4Moua&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzI0OTM4MTM3MDExMDAwODExNQ%3D%3D.2-ccb7-5&oh=00_AfBsX3sIh5RVAmWrgIqAnqA0kurWZFxVxRmQ28YooGfIBQ&oe=657617C7&_nc_sid=ee9879';
const exampleProducts = [
    {
      handle: 'product-1',
      title: 'Product 1',
      priceRange: {
        maxVariantPrice: {
          amount: '19.99',
          currencyCode: 'USD',
        },
      },
      featuredImage: {
        url: imageUrl,
      },
    },
    {
      handle: 'product-2',
      title: 'Product 2',
      priceRange: {
        maxVariantPrice: {
          amount: '29.99',
          currencyCode: 'USD',
        },
      },
      featuredImage: {
        url: imageUrl,      },
    },
    {
      handle: 'product-3',
      title: 'Product 3',
      priceRange: {
        maxVariantPrice: {
          amount: '14.99',
          currencyCode: 'USD',
        },
      },
      featuredImage: {
        url: imageUrl,      },
    },
    {
      handle: 'product-4',
      title: 'Product 4',
      priceRange: {
        maxVariantPrice: {
          amount: '24.99',
          currencyCode: 'USD',
        },
      },
      featuredImage: {
        url: imageUrl,      },
    },
    {
      handle: 'product-5',
      title: 'Product 5',
      priceRange: {
        maxVariantPrice: {
          amount: '39.99',
          currencyCode: 'USD',
        },
      },
      featuredImage: {
        url: imageUrl,      },
    },
    {
      handle: 'product-6',
      title: 'Product 6',
      priceRange: {
        maxVariantPrice: {
          amount: '49.99',
          currencyCode: 'USD',
        },
      },
      featuredImage: {
        url: imageUrl,      },
    },
    {
      handle: 'product-7',
      title: 'Product 7',
      priceRange: {
        maxVariantPrice: {
          amount: '29.99',
          currencyCode: 'USD',
        },
      },
      featuredImage: {
        url: imageUrl,      },
    },
    {
      handle: 'product-8',
      title: 'Product 8',
      priceRange: {
        maxVariantPrice: {
          amount: '19.99',
          currencyCode: 'USD',
        },
      },
      featuredImage: {
        url: imageUrl,      },
    },
    {
      handle: 'product-9',
      title: 'Product 9',
      priceRange: {
        maxVariantPrice: {
          amount: '34.99',
          currencyCode: 'USD',
        },
      },
      featuredImage: {
        url: imageUrl,      },
    },
    {
      handle: 'product-10',
      title: 'Product 10',
      priceRange: {
        maxVariantPrice: {
          amount: '44.99',
          currencyCode: 'USD',
        },
      },
      featuredImage: {
        url: imageUrl,
      },
    },
    {
      handle: 'product-11',
      title: 'Product 11',
      priceRange: {
        maxVariantPrice: {
          amount: '25.99',
          currencyCode: 'USD',
        },
      },
      featuredImage: {
        url: imageUrl,
      },
    },
    {
      handle: 'product-12',
      title: 'Product 12',
      priceRange: {
        maxVariantPrice: {
          amount: '19.99',
          currencyCode: 'USD',
        },
      },
      featuredImage: {
        url: imageUrl,
      },
    },
    {
      handle: 'product-13',
      title: 'Product 13',
      priceRange: {
        maxVariantPrice: {
          amount: '14.99',
          currencyCode: 'USD',
        },
      },
      featuredImage: {
        url: imageUrl,
      },
    },
    {
      handle: 'product-14',
      title: 'Product 14',
      priceRange: {
        maxVariantPrice: {
          amount: '29.99',
          currencyCode: 'USD',
        },
      },
      featuredImage: {
        url: imageUrl,
      },
    },
    {
      handle: 'product-15',
      title: 'Product 15',
      priceRange: {
        maxVariantPrice: {
          amount: '24.99',
          currencyCode: 'USD',
        },
      },
      featuredImage: {
        url: imageUrl,
      },
    },
    {
      handle: 'product-16',
      title: 'Product 16',
      priceRange: {
        maxVariantPrice: {
          amount: '19.99',
          currencyCode: 'USD',
        },
      },
      featuredImage: {
        url: imageUrl,
      },
    },
    {
      handle: 'product-17',
      title: 'Product 17',
      priceRange: {
        maxVariantPrice: {
          amount: '34.99',
          currencyCode: 'USD',
        },
      },
      featuredImage: {
        url: imageUrl,
      },
    },
    {
      handle: 'product-18',
      title: 'Product 18',
      priceRange: {
        maxVariantPrice: {
          amount: '44.99',
          currencyCode: 'USD',
        },
      },
      featuredImage: {
        url: imageUrl,
      },
    },
    {
      handle: 'product-19',
      title: 'Product 19',
      priceRange: {
        maxVariantPrice: {
          amount: '25.99',
          currencyCode: 'USD',
        },
      },
      featuredImage: {
        url: imageUrl,
      },
    },
    {
      handle: 'product-20',
      title: 'Product 20',
      priceRange: {
        maxVariantPrice: {
          amount: '19.99',
          currencyCode: 'USD',
        },
      },
      featuredImage: {
        url: imageUrl,
      },
    },
  ];
  

export async function Carousel() {
  // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
  const carouselProducts = [...exampleProducts, ...exampleProducts, ...exampleProducts];

  return (
    <div className=" w-full overflow-x-auto pb-6 pt-1 px-4 mt-2">
      <ul className="flex animate-carousel gap-4">
        {carouselProducts.map((product, i) => (
          <li
            key={`${product.handle}${i}`}
            className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
          >
            <Link href={`/product/${product.handle}`} className="relative h-full w-full">
              <GridTileImage
                alt={product.title}
                label={{
                  title: product.title,
                  amount: product.priceRange.maxVariantPrice.amount,
                  currencyCode: product.priceRange.maxVariantPrice.currencyCode
                }}
                src={product.featuredImage?.url}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}