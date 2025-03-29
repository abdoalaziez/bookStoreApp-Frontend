import React from "react";
import banner from "../../public/Banner.png";
function Banner() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              Hello, welcomes here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-sm md:text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              et totam. Tempora amet atque expedita, quae corrupti totam sed
              pariatur corporis at veniam est voluptas animi!
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="btn mt-6 btn-secondary">Get Started</button>
        </div>
        <div className=" order-1 w-full mt-20 md:w-1/2">
          <img
            src={banner}
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner;









// [
//   {
//     "id": 1,
//     "title": "Lorem ipsum sit amet consectetur adipiscing elit",
//     "price": 0,
//     "category": "free",
//     "image": "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149329569.jpg"
//   },
//   {
//     "id": 2,
//     "title": "The Art of Web Development",
//     "price": 10,
//     "category": "technology",
//     "image": "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books_23-2149322347.jpg"
//   },
//   {
//     "id": 3,
//     "title": "Mastering JavaScript",
//     "price": 15,
//     "category": "programming",
//     "image": "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149330604.jpg"
//   },
//   {
//     "id": 4,
//     "title": "Understanding ReactJS",
//     "price": 20,
//     "category": "frontend",
//     "image": "https://img.freepik.com/free-photo/books-stack-with-shadow_23-2148898279.jpg?semt=ais_hybrid"
//   },
//   {
//     "id": 5,
//     "title": "Node.js for Beginners",
//     "price": 12,
//     "category": "backend",
//     "image": "https://img.freepik.com/free-vector/hand-drawn-stack-books-illustration_23-2149350533.jpg?semt=ais_hybrid"
//   },
//   {
//     "id": 6,
//     "title": "Database Design Principles",
//     "price": 18,
//     "category": "database",
//     "image": "https://img.freepik.com/free-vector/hand-drawn-flat-design-book-spine-illustration_23-2149343627.jpg?semt=ais_hybrid"
//   },
//   {
//     "id": 7,
//     "title": "Cybersecurity Basics",
//     "price": 25,
//     "category": "security",
//     "image": "https://img.freepik.com/free-psd/books-pile-isolated_23-2151572700.jpg?semt=ais_hybrid"
//   },
//   {
//     "id": 8,
//     "title": "Data Structures and Algorithms",
//     "price": 30,
//     "category": "computer science",
//     "image": "https://img.freepik.com/premium-vector/illustration-book_1083548-648.jpg?semt=ais_hybrid"
//   },
//   {
//     "id": 9,
//     "title": "The Future of AI",
//     "price": 22,
//     "category": "artificial intelligence",
//     "image": "https://img.freepik.com/free-vector/watercolor-book-club-illustration_23-2149338975.jpg?semt=ais_hybrid"
//   },
//   {
//     "id": 10,
//     "title": "Full Stack Web Development",
//     "price": 28,
//     "category": "full stack",
//     "image": "https://img.freepik.com/premium-photo/many-books-white_180633-1170.jpg?semt=ais_hybrid"
//   }
// ]
