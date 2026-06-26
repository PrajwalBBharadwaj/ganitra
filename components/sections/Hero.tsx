import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { HeroIllustration } from "@/components/ui/MathGraphics";


export function Hero() {
 return (
  <section className="relative min-h-screen bg-hero-bg math-bg overflow-hidden">
  {/* Hero SVG illustration — right side */}
  <div className="absolute inset-y-0 right-0 hidden w-3/5 lg:block">
    <HeroIllustration className="h-full w-full" />
  </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-screen items-center">
          <div className="max-w-2xl py-20 lg:max-w-3xl">
         {/* Overline */}
         <p className="text-sm font-semibold uppercase tracking-[0.3em] text-discovery">
           VISUAL. INTUITIVE. CONNECTED.
         </p>


         {/* Hero Heading */}
         <h1
           className="
           mt-5
           font-extrabold
           tracking-tight
           leading-[1.02]
           text-white
           text-5xl
           sm:text-6xl
           lg:text-[60px]
           xl:text-[68px]
         "
         >
           Math becomes easy
           <br />
           when you can <span className="text-discovery">see</span> it.
         </h1>


         {/* Mission */}
         <p className="mt-8 max-w-[600px] text-lg leading-relaxed text-white/80 sm:text-xl">
           {siteConfig.missionStatement}
         </p>


         {/* Buttons */}
         <div className="mt-10 flex flex-col gap-4 sm:flex-row">
           <Link
             href="/books"
             className="inline-flex items-center justify-center rounded-lg bg-discovery px-7 py-3 text-sm font-semibold text-primary-dark shadow-md transition-all duration-200 hover:scale-[1.03] hover:bg-discovery/90"
           >
             Explore Books
           </Link>


           <Link
             href="/sample-chapters"
             className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:scale-[1.03] hover:bg-white/10"
           >
             See the Method
           </Link>
         </div>
       </div>
       </div>
     </div>
   </section>
 );
}

