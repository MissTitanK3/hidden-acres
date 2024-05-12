import Hero from '@/components/Hero';
import Image from 'next/image';
import SunFlowers from '../public/sunflowers.jpg';
import Shop from '../public/farm_shop.jpg';
import Stage from '../public/stage_view.jpg';
import Family from '../public/family.png';
import { openSans, openSans700 } from '@/components/styles/fonts';

export const revalidate = 5;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <section className="rounded-3xl flex flex-col items-center justify-center p-4 text-center m-4 mt-20 bg-[var(--background-start)]">
        <h2 className={`${openSans700.className} w-full text-3xl font-bold`}>
          Welcome to Hidden Acres Farm – Your Sanctuary of Celebration
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-around p-4 text-center">
          <Image
            src={SunFlowers}
            alt="sunflowers"
            layout="responsive"
            objectFit="cover"
            height={300}
            className="md:mr-4"
          />
          <div className="flex flex-col items-center justify-center p-4 text-center w-full md:w-1/2">
            <p className={`${openSans.className} w-4/5 text-xl sm:text-l md:xl lg:text-2xl`}>
              Nestled in 60 acres of beauty, Hidden Acres Farm is a dedicated safe haven for the LGBT community and
              Pagans of all walks, and a welcoming space for all who cherish inclusivity and diversity.
            </p>
            <br />
            <p className={`${openSans.className} w-4/5 text-xl sm:text-l md:xl lg:text-2xl`}>
              Managed with love by Vicki &ldquo;The Grandmom&ldquo;, JR &ldquo;Honey&ldquo;, and their family—Tianna
              &ldquo;T&ldquo;, Anthony &ldquo;The Shop Chef&ldquo;, and Kelsey &ldquo;The Daughter In Love&ldquo; — our
              farm is more than just land; it&apos;s a vibrant community hub.
            </p>
          </div>
        </div>
      </section>
      <section className="rounded-3xl flex flex-col items-center justify-center p-4 text-center m-4 mt-20 bg-[var(--background-start)]">
        <h2 className={`${openSans700.className} w-full text-3xl font-bold`}>Explore and Connect</h2>
        <div className="flex flex-col md:flex-row items-center justify-around p-4 text-center">
          <div className="flex flex-col items-center justify-center p-4 text-center w-full md:w-1/2">
            <p className={`${openSans.className} w-4/5 text-xl sm:text-l md:xl lg:text-2xl`}>
              Our meticulously manicured front 20 acres feature lush lawns perfect for any gathering. From our live
              music stage to intimate camping nooks that host dozens of sites, every corner of Hidden Acres is designed
              for connection and celebration. Venture along our established roads to discover secluded spots or engage
              with our vibrant vendor booths that bring our community&apos;s crafts and goods to life.
            </p>
          </div>
          <Image src={Shop} alt="shop" layout="fixed" objectFit="cover" height={500} className="md:mr-4" />
        </div>
      </section>
      <section className="rounded-3xl flex flex-col items-center justify-center p-4 text-center m-4 mt-20 bg-[var(--background-start)]">
        <h2 className={`${openSans700.className} w-full text-3xl font-bold`}>A Place for Events and More</h2>
        <div className="flex flex-col md:flex-row items-center justify-around p-4 text-center">
          <Image src={Stage} alt="sunflowers" layout="fixed" objectFit="cover" height={500} className="md:mr-4" />
          <div className="flex flex-col items-center justify-center p-4 text-center w-full md:w-1/2">
            <p className={`${openSans.className} w-4/5 text-xl sm:text-l md:xl lg:text-2xl`}>
              Hidden Acres Farm is not only a venue; it&apos;s an experience. Whether you&apos;re looking to attend a
              spectacular show, participate in a workshop, or celebrate your most cherished moments, we provide the
              perfect backdrop. Our stage is alive with the sound of music, our fields buzz with the energy of
              festivals, and our paths invite you to adventure into the tranquil unknown.
            </p>
          </div>
        </div>
      </section>
      <section className="rounded-3xl flex flex-col items-center justify-center p-4 text-center m-4 mt-20 bg-[var(--background-start)]">
        <h2 className={`${openSans700.className} w-full text-3xl font-bold`}>Join Our Family</h2>
        <div className="flex flex-col md:flex-row items-center justify-around p-4 text-center">
          <div className="flex flex-col items-center justify-center p-4 text-center w-full md:w-1/2">
            <p className={`${openSans.className} w-full text-l sm:text-xl md:xl lg:text-2xl`}>
              At Hidden Acres Farm, everyone is family. Come meet &ldquo;The Grandmom&ldquo; and &ldquo;Honey&ldquo;,
              enjoy a story with &ldquo;T&ldquo;, savor a dish crafted by &ldquo;The Shop Chef&ldquo;, and feel the
              embrace of &ldquo;The Daughter In Love&ldquo;. We&apos;re more than family by name — we&apos;re family by
              action, and we extend our hearts and our home to you.
            </p>
          </div>
          <div className="flex flex-col md:flex-col md:mr-4 m-auto justify-center align-middle items-center">
            <Image src={Family} alt="sunflowers" layout="fixed" objectFit="cover" height={500} className="md:mr-4" />
          </div>
        </div>
      </section>
      <section className="rounded-3xl flex flex-col items-center justify-center p-4 text-center m-4 mt-20 bg-[var(--background-start)]">
        <h2 className={`${openSans700.className} w-full text-3xl font-bold`}>Your Adventure Awaits</h2>
        <div className="flex flex-col items-center justify-around p-4 text-center">
          <div className="flex flex-col items-center justify-center p-4 text-center">
            <p className={`${openSans.className} w-4/5 text-3xl`}>
              Hidden Acres Farm invites you to step into a world where you can be yourself, surrounded by nature and
              nurtured by community. Join us at Hidden Acres, where every visit is a celebration of life, freedom, and
              joy.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
