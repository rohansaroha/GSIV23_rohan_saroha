import { Link } from '@remix-run/react';

interface IBackNavigation {
   title: string;
}
const BackNavigation = ({ title }: IBackNavigation) => {
   return (
      <div className="flex items-center bg-slate-800 p-4">
         <Link to="/" className="mr-4 text-gray-50 hover:text-gray-500">
            <svg
               className="w-6 h-6"
               fill="none"
               stroke="currentColor"
               viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
               ></path>
            </svg>
         </Link>
         <h1 className="text-xl font-semibold text-gray-50">{title}</h1>
      </div>
   );
};

export default BackNavigation;
