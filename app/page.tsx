import Image from "next/image";

function Header() {
  return (
    <header className="w-screen fixed h-24 md:h-32 bg-white z-20">
      <div className="h-full flex items-center relative md:justify-center">
        <button
          className="md:hidden p-4 flex border-black border-2 mr-auto mt-auto mb-auto"
        >
          ☰
        </button>
        <ul className="h-full relative hidden md:flex gap-2 lg:gap-10 justify-center items-center">
          <li className="border-black border-2">Пункт 1</li>
          <li className="border-black border-2">Пункт 2</li>
          <li className="border-black border-2">Пункт 3</li>
          <li className="border-black border-2">Пункт 4</li>
          <li className="ml-20 mr-20">
            <Image
              src="/logo.png"
              alt="logo"
              width="250"
              height="250"
              sizes="25vw"
              className="absolute -translate-x-1/2 top-1/3 transform -mt-10"
              priority
            />
          </li>
          <li className="border-black border-2">Пункт 5</li>
          <li className="border-black border-2">Пункт 6</li>
          <li className="border-black border-2">Пункт 7</li>
          <li className="border-black border-2">Пункт 8</li>
        </ul>
        <Image
          src="/logo.png"
          alt="logo"
          width="250"
          height="250"
          sizes="25vw"
          className="absolute right-0 top-4 max-[600px]:top-12 md:hidden w-1/4"
          priority
        />
      </div>
    </header >
  )
}

function Footer() {
  return (
    <footer>
      <div>by</div>
    </footer>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Header />
      <main className="pt-24 md:pt-32">
        <div className="flex flex-col">
          <Image
            src="/plant1.jpg"
            alt="Plant logo"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto z-11 z-10 h-60vh"
            priority
          />
          <div className="flex flex-col md:flex-row md:h-60vh md:h-50vh overflow-hidden">
            <div className="ml-auto mr-auto w-4/5 md:w-1/3 md:mt-auto md:mb-auto md:ml-auto flex flex-center items-center flex-col">
              <h1 className="text-xl mb-5">Georgian House</h1>
              nam atque! Ea soluta excepturi labore, quis vero ipsum illum repellendus animi, fugit ratione tenetur fuga, consequatur blanditiis at aperiam magni dolores velit molestiae corporis maiores debitis officia? Iusto expedita tempora adipisci voluptate?
            </div>
            <Image
              src="/translucent-image.png"
              alt="Plant logo"
              width="0"
              height="0"
              sizes="100vw"
              className="w-3/5 md:w-6/12 md:-mt-14 ml-auto mr-auto"
              priority
            />
          </div>
        </div>
      </main>
      <div>111111111111111111111111111111111111111111</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <Footer />
    </div>
  );
}

// "use client";

// import Image from "next/image";
// import { useState } from "react";

// function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="w-screen fixed h-32 bg-white z-20">
//       <div className="h-full">
//         <button
//           className="block md:hidden p-4"
//           onClick={(prev) => setIsOpen(!prev)}
//         >
//           ☰
//         </button>
//         <ul
//           className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transition-transform duration-500 ease-in-out z-30 md:static md:w-auto md:h-full md:bg-transparent md:shadow-none md:flex ${isOpen ? "translate-x-0" : "-translate-x-full"
//             }`}
//         >
//           <li className="border-black border-2 p-4">Пункт 1</li>
//           <li className="border-black border-2 p-4">Пункт 2</li>
//           <li className="border-black border-2 p-4">Пункт 3</li>
//           <li className="border-black border-2 p-4">Пункт 4</li>
//           <li className="ml-20 mr-20 p-4">
//             <Image
//               src="/logo.png"
//               alt="logo"
//               width="250"
//               height="250"
//               sizes="25vw"
//               className="absolute -translate-x-1/2 top-1/3 transform -mt-10"
//               priority
//             />
//           </li>
//           <li className="border-black border-2 p-4">Пункт 5</li>
//           <li className="border-black border-2 p-4">Пункт 6</li>
//           <li className="border-black border-2 p-4">Пункт 7</li>
//           <li className="border-black border-2 p-4">Пункт 8</li>
//         </ul>
//       </div>
//     </header>
//   );
// }

// export default function Home() {
//   return (
//     <div className="flex flex-col">
//       <Header />
//       <main className="flex flex-col pt-32">
//         <Image
//           src="/plant1.jpg"
//           alt="Plant logo"
//           width="0"
//           height="0"
//           sizes="100vw"
//           className="w-full h-auto z-11 z-10"
//           priority
//         />
//         <div className="flex h-50vh overflow-hidden">
//           <div className="w-1/3 mt-auto mb-auto ml-auto flex flex-center items-center flex-col">
//             <h1 className="text-xl mb-5">Georgian House</h1>
//             nam atque! Ea soluta excepturi labore, quis vero ipsum illum
//             repellendus animi, fugit ratione tenetur fuga, consequatur
//             blanditiis at aperiam magni dolores velit molestiae corporis maiores
//             debitis officia? Iusto expedita tempora adipisci voluptate?
//           </div>
//           <Image
//             src="/translucent-image.png"
//             alt="Plant logo"
//             width="0"
//             height="0"
//             sizes="100vw"
//             className="w-6/12 -mt-14"
//             priority
//           />
//         </div>
//       </main>
//     </div>
//   );
// }
