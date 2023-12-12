// "use client";

// import { useState, useEffect } from "react";
// import axios from "axios";

// const GeneratorTopic: React.FC = () => {
//     const [weeklyIdea, setWeeklyIdea] = useState<string>("");

//     useEffect(() => {
//         const fetchWeeklyIdea = async () => {
//             try {
//                 const response = await fetch("/api/v1/generatorIdea", {
//                     method: "POST", // Use POST instead of GET
//                 });
//                 const data = await response.json();
//                 setWeeklyIdea(data.idea);
//             } catch (error: any) {
//                 console.error("Error fetching weekly idea:", error.message);
//                 setWeeklyIdea("Failed to fetch idea");
//             }
//         };

//         fetchWeeklyIdea();
//     }, []);

//     return (
//         <div className="w-full border p-6 flex flex-col justify-center items-center gap-4 rounded ">
//             <h1 className="font-bold text-gray-900 text-2xl">
//                 Weekly Idea Generator
//             </h1>
//             <p className="">This Week Challenges : {weeklyIdea}</p>
//         </div>
//     );
// };

// export default GeneratorTopic;
