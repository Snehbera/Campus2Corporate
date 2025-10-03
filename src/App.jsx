import React, { useState, useMemo } from "react";
import logo from "./assets/logo.png";

// --- Mock Data for the entire application ---
const companies = [
  {
    id: 1,
    name: "Open AI",
    path: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
  },
  {
    id: 2,
    name: "Google",
    path: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png",
  },
  {
    id: 3,
    name: "IBM",
    path: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1280px-IBM_logo.svg.png",
  },
  {
    id: 4,
    name: "Meta",
    path: "https://static.xx.fbcdn.net/rsrc.php/v4/ym/r/__J0RTJO3M_.png",
  },
  {
    id: 5,
    name: "Microsoft",
    path: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1280px-Microsoft_logo.svg.png",
  },
  {
    id: 6,
    name: "Netflix",
    path: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png",
  },
  {
    id: 7,
    name: "Amazon",
    path: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png",
  },
  {
    id: 8,
    name: "Apple",
    path: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1280px-Apple_logo_black.svg.png",
  },
  {
    id: 9,
    name: "TCS",
    path: "https://banner2.cleanpng.com/lnd/20250118/bt/533fb9570517508a96ae44ae23f5d5.webp",
  },
];

const faqs = [
  {
    question: "How do I create an account?",
    answer:
      "You can create an account by clicking the 'Sign Up' button. Students must use their university email address to register.",
  },
  {
    question: "Can alumni use this job portal?",
    answer:
      "Yes! Our platform is open to both current students and alumni of the university.",
  },
  {
    question: "What kind of jobs are listed here?",
    answer:
      "You will find a wide range of opportunities including internships, part-time jobs, and full-time entry-level positions.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Absolutely. We prioritize your privacy and data security. All personal information is encrypted and handled securely.",
  },
];

let initialJobsData = [
  {
    id: 1,
    title: "Data Scientist",
    company: "Apple",
    location: "Maharashtra",
    description:
      "Apple is seeking an experienced Data Scientist to join our analytics team.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1280px-Apple_logo_black.svg.png",
    recruiterId: 101,
  },
  {
    id: 2,
    title: "DevOps Engineer",
    company: "Meta",
    location: "Rajasthan",
    description:
      "Meta is looking for a skilled DevOps Engineer to join our team.",
    logo: "https://static.xx.fbcdn.net/rsrc.php/v4/ym/r/__J0RTJO3M_.png",
    recruiterId: 102,
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Netflix",
    location: "West Bengal",
    description:
      "Netflix is seeking a creative UI/UX Designer to join our design team.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png",
    recruiterId: 101,
  },
  {
    id: 4,
    title: "Backend Developer (SDE 1)",
    company: "Amazon",
    location: "Tamil Nadu",
    description:
      "Amazon is looking for a talented Backend Developer (SDE 1) to join our dynamic team.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png",
    recruiterId: 103,
  },
  {
    id: 5,
    title: "Product Manager",
    company: "Microsoft",
    location: "Delhi",
    description:
      "Microsoft is looking for a Product Manager to join our product team.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1280px-Microsoft_logo.svg.png",
    recruiterId: 102,
  },
  {
    id: 6,
    title: "Frontend Developer (SDE 2)",
    company: "Google",
    location: "Bengaluru",
    description:
      "Google is looking for an experienced Frontend Developer to join our team.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png",
    recruiterId: 103,
  },
  {
    id: 7,
    title: "Machine Learning Engineer",
    company: "Tesla",
    location: "Pune",
    description:
      "Tesla is hiring a Machine Learning Engineer to develop advanced AI models for autonomous systems.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/1280px-Tesla_Motors.svg.png",
    recruiterId: 104,
  },
  {
    id: 8,
    title: "Cloud Architect",
    company: "IBM",
    location: "Hyderabad",
    description:
      "IBM is seeking a Cloud Architect to design and implement scalable cloud solutions.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    recruiterId: 105,
  },
  {
    id: 9,
    title: "Cybersecurity Analyst",
    company: "Cisco",
    location: "Gurgaon",
    description:
      "Cisco is looking for a Cybersecurity Analyst to strengthen our security operations.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg",
    recruiterId: 101,
  },
  {
    id: 10,
    title: "AI Research Scientist",
    company: "OpenAI",
    location: "Remote",
    description:
      "OpenAI is seeking an AI Research Scientist to push the boundaries of artificial intelligence.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
    recruiterId: 106,
  },
  {
    id: 11,
    title: "Full Stack Developer",
    company: "Adobe",
    location: "Chandigarh",
    description:
      "Adobe is hiring a Full Stack Developer to work on innovative web applications.",
    logo: "https://www.adobe.com/federal/assets/svgs/adobe-logo.svg",
    recruiterId: 102,
  },
  {
    id: 12,
    title: "Blockchain Developer",
    company: "Coinbase",
    location: "Mumbai",
    description:
      "Coinbase is looking for a Blockchain Developer to build secure and scalable crypto solutions.",
    logo: "https://images.seeklogo.com/logo-png/43/1/chainlink-link-logo-png_seeklogo-436990.png",
    recruiterId: 103,
  },
];

let initialCandidatesData = [
  {
    id: 1,
    name: "Jane Doe",
    email: "jane.doe@university.edu",
    major: "Computer Science",
    skills: ["React", "Node.js", "Python"],
    resume: "jane_doe_resume.pdf",
  },
  {
    id: 2,
    name: "John Smith",
    email: "john.smith@university.edu",
    major: "Marketing",
    skills: ["SEO", "Content Creation", "Google Analytics"],
    resume: "john_smith_resume.pdf",
  },
];

let initialApplicationsData = [
  { applicationId: 1, jobId: 1, candidateId: 1, status: "In Review" },
  { applicationId: 2, jobId: 4, candidateId: 1, status: "Applied" },
  { applicationId: 3, jobId: 5, candidateId: 2, status: "Rejected" },
];

let initialCoursesData = [
  {
    id: 1,
    title: "React for Beginners",
    provider: "Coursera",
    image: "https://placehold.co/300x180/61DAFB/000000?text=React",
  },
  {
    id: 2,
    title: "Advanced Node.js",
    provider: "Udemy",
    image: "https://placehold.co/300x180/3C873A/FFFFFF?text=Node.js",
  },
  {
    id: 3,
    title: "Data Structures & Algorithms in JS",
    provider: "edX",
    image: "https://placehold.co/300x180/F7DF1E/000000?text=JS",
  },
  {
    id: 4,
    title: "Introduction to Python for DS",
    provider: "Coursera",
    image: "https://placehold.co/300x180/306998/FFFFFF?text=Python",
  },
  {
    id: 5,
    title: "UI/UX Design Fundamentals",
    provider: "Skillshare",
    image: "https://placehold.co/300x180/F24E1E/FFFFFF?text=Figma",
  },
  {
    id: 6,
    title: "Cloud Computing with AWS",
    provider: "Udemy",
    image: "https://placehold.co/300x180/FF9900/FFFFFF?text=AWS",
  },
  {
    id: 7,
    title: "SQL for Data Analysis",
    provider: "DataCamp",
    image: "https://placehold.co/300x180/00758F/FFFFFF?text=SQL",
  },
];

// --- SVG Icons & UI Components ---
const PlusIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
    />
  </svg>
);
const GoogleIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
  >
    <path
      fill="#FFC107"
      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
    />
    <path
      fill="#FF3D00"
      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
    />
    <path
      fill="#4CAF50"
      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.223,0-9.657-3.657-11.303-8H6.393c1.65,6.023,7.215,10.22,13.607,11.192V44z"
    />
    <path
      fill="#1976D2"
      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C39.994,36.61,44,30.631,44,24C44,22.659,43.862,21.35,43.611,20.083z"
    />
  </svg>
);
const LogoIcon = ({ className, ...props }) => (
  <img src={logo} className={className}></img>
);
const LocationIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);
const HeartIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
    />
  </svg>
);

const Card = ({ children, className }) => (
  <div
    className={`bg-[#111111]/50 border border-gray-800 rounded-xl shadow-lg backdrop-blur-sm ${className}`}
  >
    {children}
  </div>
);
const CardHeader = ({ children }) => <div className="p-6">{children}</div>;
const CardTitle = ({ children }) => (
  <h3 className="text-xl font-bold text-white">{children}</h3>
);
const CardContent = ({ children }) => (
  <div className="p-6 pt-0 text-gray-400">{children}</div>
);

const AccordionItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-5 px-2 focus:outline-none"
      >
        <span className="text-lg font-medium text-white">{faq.question}</span>
        <PlusIcon
          className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
            isOpen ? "transform rotate-45" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="p-4 text-gray-400 bg-black/20">{faq.answer}</div>
      </div>
    </div>
  );
};

// --- AuthModal Component ---
const AuthModal = ({
  isOpen,
  onClose,
  onLoginSuccess,
  formType,
  setFormType,
}) => {
  if (!isOpen) return null;
  const isLogin = formType === "login";
  const [role, setRole] = useState("candidate");

  const handleContinue = (e) => {
    e.preventDefault();
    onLoginSuccess(role);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-[#212130] border border-gray-700 rounded-2xl shadow-2xl w-full max-w-md p-8 text-white relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-center mb-2">
          {isLogin ? "Sign in to job-portal" : "Create your account"}
        </h2>
        <p className="text-gray-400 text-center mb-6">
          {isLogin
            ? "Welcome back! Please sign in to continue."
            : "Get started by creating a new account."}
        </p>
        <div className="flex justify-center bg-gray-800 rounded-lg p-1 mb-6 text-sm font-semibold">
          <button
            onClick={() => setRole("candidate")}
            className={`w-1/2 py-2 rounded-md transition-colors duration-200 ${
              role === "candidate"
                ? "bg-blue-600 text-white"
                : "text-gray-400 hover:bg-gray-700"
            }`}
          >
            Candidate
          </button>
          <button
            onClick={() => setRole("recruiter")}
            className={`w-1/2 py-2 rounded-md transition-colors duration-200 ${
              role === "recruiter"
                ? "bg-blue-600 text-white"
                : "text-gray-400 hover:bg-gray-700"
            }`}
          >
            Recruiter
          </button>
        </div>
        <button className="w-full flex items-center justify-center gap-3 bg-gray-700 hover:bg-gray-600 p-3 rounded-lg font-semibold transition-colors mb-4">
          <GoogleIcon className="w-6 h-6" />
          Continue with Google
        </button>
        <div className="flex items-center my-6">
          <hr className="w-full border-gray-600" />
          <span className="px-4 text-gray-400">OR</span>
          <hr className="w-full border-gray-600" />
        </div>
        <form onSubmit={handleContinue} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Email address
            </label>
            <input
              type="email"
              required
              className="w-full bg-gray-700 border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Password
              </label>
              <input
                type="password"
                required
                className="w-full bg-gray-700 border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg font-bold text-lg transition-colors"
          >
            Continue
          </button>
        </form>
        <p className="text-center text-gray-400 mt-6">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            className="font-semibold text-blue-400 hover:text-blue-300 ml-2"
            onClick={() => setFormType(isLogin ? "signup" : "login")}
          >
            {isLogin ? "Sign up" : "Sign in"}
          </button>
        </p>
      </div>
    </div>
  );
};

// --- Landing Page Component ---
const LandingPage = ({ onLoginClick, onSignupClick }) => {
  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-10 py-4 px-4 sm:px-6 lg:px-8">
        <nav className="container mx-auto flex justify-between items-center">
          <a href="#">
            <img src={logo} className="h-20"></img>
          </a>
          <div className="flex items-center gap-4">
            <button
              onClick={onLoginClick}
              className="text-white hover:text-gray-200 hidden sm:block"
            >
              Login
            </button>
            <button
              onClick={onSignupClick}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg transition-colors"
            >
              Sign Up
            </button>
          </div>
        </nav>
      </header>
      <main className="relative z-0 container mx-auto px-4 flex flex-col gap-20 sm:gap-32 py-20 sm:py-28">
        <section className="text-center pt-24 sm:pt-32">
          <h1 className="flex flex-col items-center gradient-title text-4xl font-extrabold sm:text-6sl tracking-tighter py-4 lg:text-8xl justify-center">
            Find Your Dream Job
            <span className="flex items-center justify-center gap-4 sm:gap-6">
              and get Hirred
            </span>
          </h1>
          <p className="text-gray-400 mt-6 text-lg sm:text-xl max-w-2xl mx-auto">
            Explore thousands of job listings or find the perfect candidate
          </p>
          <div className="flex gap-4 sm:gap-6 justify-center mt-10">
            <button
              onClick={onLoginClick}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 text-lg rounded-lg transition-transform hover:scale-105 shadow-lg shadow-blue-600/20"
            >
              Find Jobs
            </button>
            <button
              onClick={onLoginClick}
              className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-8 text-lg rounded-lg transition-transform hover:scale-105 shadow-lg shadow-rose-600/20"
            >
              Post a Job
            </button>
          </div>
        </section>

        <section className="logo-carousel w-full overflow-hidden relative py-10">
          <div className="logo-slide-track flex">
            {[...companies, ...companies].map((company, index) => (
              <div
                key={`${company.id}-${index}`}
                className="logo-slide-item mx-8 sm:mx-12 flex-shrink-0"
              >
                <img
                  src={company.path}
                  alt={company.name}
                  className="h-7 sm:h-9 object-contain filter invert"
                />
              </div>
            ))}
          </div>
        </section>

        {/* <img
          src="https://placehold.co/1200x600/000000/FFFFFF?text=Unlock+Your+Potential"
          className="w-full rounded-2xl border border-gray-800"
          alt="Banner"
        /> */}

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>For Job Seekers</CardTitle>
            </CardHeader>
            <CardContent>
              Search and apply for jobs from top companies, track your
              applications, and build a standout profile to launch your career.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>For Employers</CardTitle>
            </CardHeader>
            <CardContent>
              Post job openings, manage applications seamlessly, and discover
              the best pre-vetted candidates from our university talent.
            </CardContent>
          </Card>
        </section>
        <section>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} faq={faq} />
            ))}
          </div>
        </section>
      </main>
      <footer className="relative z-0 border-t border-gray-900 mt-20 sm:mt-32">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <LogoIcon className="h-8 mb-4 text-white" />
              <p className="text-gray-400">
                The premier job portal for the next generation of talent.
              </p>
            </div>
            <div className="col-span-1">
              <h4 className="font-semibold text-white mb-4">PLATFORM</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Find a Job
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Post a Job
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Companies
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h4 className="font-semibold text-white mb-4">RESOURCES</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h4 className="font-semibold text-white mb-4">LEGAL</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-500">
              &copy; {new Date().getFullYear()} Hirred. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 sm:mt-0"></div>
          </div>
        </div>
      </footer>
    </>
  );
};

// --- Candidate Page Components ---
const JobsDashboard = ({ handleApply, appliedJobs, jobs }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [company, setCompany] = useState("");

  const filteredJobs = useMemo(() => {
    return jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (location === "" || job.location === location) &&
        (company === "" || job.company === company)
    );
  }, [searchTerm, location, company, jobs]);

  const uniqueLocations = [...new Set(jobs.map((job) => job.location))];
  const uniqueCompanies = [...new Set(jobs.map((job) => job.company))];

  const clearFilters = () => {
    setSearchTerm("");
    setLocation("");
    setCompany("");
  };

  const JobCard = ({ job }) => (
    <div className="bg-[#1a202c] border border-gray-700 rounded-xl p-6 flex flex-col justify-between hover:border-blue-500 transition-all duration-300">
      <div>
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-white">{job.title}</h3>
          <img
            src={job.logo}
            alt={`${job.company} logo`}
            className="h-12 w-12 object-contain filter invert"
          />
        </div>
        <div className="flex items-center gap-4 text-gray-400 mb-4">
          <span className="font-semibold">{job.company}</span>
          <div className="flex items-center gap-1">
            <LocationIcon className="w-4 h-4" />
            <span>{job.location}</span>
          </div>
        </div>
        <p className="text-gray-400 mb-6">{job.description}</p>
      </div>
      <div className="flex justify-between items-center">
        <button
          onClick={() => handleApply(job.id)}
          disabled={appliedJobs.includes(job.id)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          {appliedJobs.includes(job.id) ? "Applied" : "Apply Now"}
        </button>
        <button className="text-gray-500 hover:text-rose-500 transition-colors">
          <HeartIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-12">
        Latest Jobs
      </h1>
      <div className="bg-[#1a202c]/80 border border-gray-700 rounded-xl p-4 sm:p-6 mb-12 backdrop-blur-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Search Jobs by Title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="lg:col-span-2 w-full bg-gray-800 border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          />
          <div></div>
          <button
            onClick={() => {}}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors"
          >
            Search
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full bg-gray-800 border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          >
            <option value="">Filter by Location</option>
            {uniqueLocations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
          <select
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full bg-gray-800 border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          >
            <option value="">Filter by Company</option>
            {uniqueCompanies.map((comp) => (
              <option key={comp} value={comp}>
                {comp}
              </option>
            ))}
          </select>
          <button
            onClick={clearFilters}
            className="sm:col-start-2 lg:col-start-4 w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 rounded-lg transition-colors"
          >
            Clear Filters
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </main>
  );
};

const Profile = ({ candidate, setCandidate }) => {
  const [formState, setFormState] = useState(candidate);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSkillsChange = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      skills: e.target.value.split(",").map((s) => s.trim()),
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFormState((prevState) => ({
        ...prevState,
        resume: e.target.files[0].name,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCandidate(formState);
    alert("Profile updated successfully!");
  };

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-12">
        My Profile
      </h1>
      <div className="max-w-2xl mx-auto bg-[#1a202c]/80 border border-gray-700 rounded-xl p-8 backdrop-blur-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={handleInputChange}
              className="w-full bg-gray-800 border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formState.email}
              disabled
              className="w-full bg-gray-900 border-gray-700 rounded-lg p-3 text-gray-400 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Major
            </label>
            <input
              type="text"
              name="major"
              value={formState.major}
              onChange={handleInputChange}
              className="w-full bg-gray-800 border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Skills (comma separated)
            </label>
            <input
              type="text"
              name="skills"
              value={formState.skills.join(", ")}
              onChange={handleSkillsChange}
              className="w-full bg-gray-800 border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Upload Resume
            </label>
            <div className="mt-2 flex items-center justify-center w-full">
              <label className="flex flex-col w-full h-32 border-2 border-dashed border-gray-600 hover:border-gray-500 rounded-lg cursor-pointer">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <p className="mb-2 text-sm text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500">
                    PDF, DOC, DOCX (MAX. 5MB)
                  </p>
                  {formState.resume && (
                    <p className="text-sm text-green-400 mt-2">
                      {formState.resume}
                    </p>
                  )}
                </div>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg font-bold text-lg transition-colors"
          >
            Save Changes
          </button>
        </form>
      </div>
    </main>
  );
};

const MyApplications = ({ applications, jobs }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Applied":
        return "text-blue-400 bg-blue-900/50";
      case "In Review":
        return "text-yellow-400 bg-yellow-900/50";
      case "Accepted":
        return "text-green-400 bg-green-900/50";
      case "Rejected":
        return "text-red-400 bg-red-900/50";
      default:
        return "text-gray-400 bg-gray-700";
    }
  };

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-12">
        My Applications
      </h1>
      <div className="max-w-4xl mx-auto bg-[#1a202c]/80 border border-gray-700 rounded-xl backdrop-blur-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-black/30">
            <tr>
              <th className="p-4 font-semibold text-white">Job Title</th>
              <th className="p-4 font-semibold text-white">Company</th>
              <th className="p-4 font-semibold text-white">Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => {
              const job = jobs.find((j) => j.id === app.jobId);
              if (!job) return null;
              return (
                <tr
                  key={app.applicationId}
                  className="border-t border-gray-800"
                >
                  <td className="p-4 text-white font-medium">{job.title}</td>
                  <td className="p-4 text-gray-300">{job.company}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(
                        app.status
                      )}`}
                    >
                      {app.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {applications.length === 0 && (
          <p className="text-center p-8 text-gray-400">
            You haven't applied to any jobs yet.
          </p>
        )}
      </div>
    </main>
  );
};

const Courses = ({ courses }) => {
  const CourseCard = ({ course }) => (
    <div className="bg-[#1a202c] border border-gray-700 rounded-xl overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 shadow-lg">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg text-white truncate">
          {course.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4">{course.provider}</p>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors">
          View Course
        </button>
      </div>
    </div>
  );

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-12">
        Recommended Courses
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </main>
  );
};

// --- Recruiter Page Components ---
const RecruiterDashboard = ({
  recruiterJobs,
  setPage,
  setSelectedJobId,
  applications,
}) => {
  const getApplicantCount = (jobId) => {
    return applications.filter((app) => app.jobId === jobId).length;
  };

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
          My Job Postings
        </h1>
        <button
          onClick={() => setPage("postJob")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 text-lg rounded-lg transition-transform hover:scale-105"
        >
          Post a New Job
        </button>
      </div>
      <div className="max-w-4xl mx-auto bg-[#1a202c]/80 border border-gray-700 rounded-xl backdrop-blur-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-black/30">
            <tr>
              <th className="p-4 font-semibold text-white">Job Title</th>
              <th className="p-4 font-semibold text-white">Location</th>
              <th className="p-4 font-semibold text-white">Applicants</th>
              <th className="p-4 font-semibold text-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {recruiterJobs.map((job) => (
              <tr key={job.id} className="border-t border-gray-800">
                <td className="p-4 text-white font-medium">{job.title}</td>
                <td className="p-4 text-gray-300">{job.location}</td>
                <td className="p-4 text-gray-300">
                  {getApplicantCount(job.id)}
                </td>
                <td className="p-4">
                  <button
                    onClick={() => {
                      setSelectedJobId(job.id);
                      setPage("viewApplicants");
                    }}
                    className="text-blue-400 hover:text-blue-300 font-semibold"
                  >
                    View Applicants
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {recruiterJobs.length === 0 && (
          <p className="text-center p-8 text-gray-400">
            You haven't posted any jobs yet.
          </p>
        )}
      </div>
    </main>
  );
};

const PostJob = ({ setPage, addJob }) => {
  const [formState, setFormState] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addJob(formState);
    setPage("recruiterDashboard");
  };

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-12">
        Post a New Job
      </h1>
      <div className="max-w-2xl mx-auto bg-[#1a202c]/80 border border-gray-700 rounded-xl p-8 backdrop-blur-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Job Title
            </label>
            <input
              type="text"
              name="title"
              required
              onChange={handleInputChange}
              className="w-full bg-gray-800 border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Company Name
            </label>
            <input
              type="text"
              name="company"
              required
              onChange={handleInputChange}
              className="w-full bg-gray-800 border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Location
            </label>
            <input
              type="text"
              name="location"
              required
              onChange={handleInputChange}
              className="w-full bg-gray-800 border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Job Description
            </label>
            <textarea
              name="description"
              rows="5"
              required
              onChange={handleInputChange}
              className="w-full bg-gray-800 border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />
          </div>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setPage("recruiterDashboard")}
              className="w-full bg-gray-600 hover:bg-gray-700 p-3 rounded-lg font-bold text-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg font-bold text-lg transition-colors"
            >
              Post Job
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

const ViewApplicants = ({
  jobId,
  applications,
  updateApplicationStatus,
  setPage,
  jobs,
  candidates,
}) => {
  const job = jobs.find((j) => j.id === jobId);
  const jobApplicants = applications.filter((app) => app.jobId === jobId);

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <button
        onClick={() => setPage("recruiterDashboard")}
        className="text-blue-400 hover:text-blue-300 mb-8"
      >
        &larr; Back to Dashboard
      </button>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-2">
        Applicants for
      </h1>
      <h2 className="text-2xl text-gray-300 text-center mb-12">{job.title}</h2>

      <div className="space-y-6">
        {jobApplicants.length > 0 ? (
          jobApplicants.map((app) => {
            const candidate = candidates.find((c) => c.id === app.candidateId);
            return (
              <div
                key={app.applicationId}
                className="bg-[#1a202c]/80 border border-gray-700 rounded-xl p-6 backdrop-blur-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
              >
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {candidate.name}
                  </h3>
                  <p className="text-gray-400">{candidate.major}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Skills: {candidate.skills.join(", ")}
                  </p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <button className="text-blue-400 hover:text-blue-300 font-semibold">
                    View Resume
                  </button>
                  {app.status === "Applied" || app.status === "In Review" ? (
                    <>
                      <button
                        onClick={() =>
                          updateApplicationStatus(app.applicationId, "Accepted")
                        }
                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() =>
                          updateApplicationStatus(app.applicationId, "Rejected")
                        }
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
                      >
                        Reject
                      </button>
                    </>
                  ) : (
                    <p
                      className={`font-semibold ${
                        app.status === "Accepted"
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      Status: {app.status}
                    </p>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-400">
            No applicants for this job yet.
          </p>
        )}
      </div>
    </main>
  );
};

// --- Main App Component ---
export default function App() {
  // --- State Management ---
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("landing");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formType, setFormType] = useState("login");

  // Mock Database State
  const [jobs, setJobs] = useState(initialJobsData);
  const [candidates, setCandidates] = useState(initialCandidatesData);
  const [applications, setApplications] = useState(initialApplicationsData);
  const [courses, setCourses] = useState(initialCoursesData);

  const [selectedJobId, setSelectedJobId] = useState(null);

  // --- Handlers ---
  const openModal = (type) => {
    setFormType(type);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const handleLoginSuccess = (role) => {
    const mockUserId = role === "candidate" ? 1 : 101;
    setUser({ role, id: mockUserId });
    setPage(role === "candidate" ? "jobsDashboard" : "recruiterDashboard");
    closeModal();
  };

  const handleLogout = () => {
    setUser(null);
    setPage("landing");
  };

  const handleApply = (jobId) => {
    const newApplication = {
      applicationId: applications.length + 1,
      jobId,
      candidateId: user.id,
      status: "Applied",
    };
    setApplications([...applications, newApplication]);
    alert("Application submitted!");
  };

  const updateApplicationStatus = (applicationId, status) => {
    setApplications((apps) =>
      apps.map((app) =>
        app.applicationId === applicationId ? { ...app, status } : app
      )
    );
  };

  const addJob = (jobData) => {
    const newJob = {
      ...jobData,
      id: jobs.length + 1,
      recruiterId: user.id,
      logo: "https://placehold.co/40x40/FFFFFF/1a202c?text=L",
    };
    setJobs([...jobs, newJob]);
  };

  // --- Render Logic ---
  const renderCandidatePage = () => {
    const candidateData = candidates.find((c) => c.id === user.id);
    const candidateApplications = applications.filter(
      (a) => a.candidateId === user.id
    );

    switch (page) {
      case "jobsDashboard":
        return (
          <JobsDashboard
            handleApply={handleApply}
            appliedJobs={candidateApplications.map((a) => a.jobId)}
            jobs={jobs}
          />
        );
      case "profile":
        return (
          <Profile
            candidate={candidateData}
            setCandidate={(updated) =>
              setCandidates((cands) =>
                cands.map((c) => (c.id === user.id ? updated : c))
              )
            }
          />
        );
      case "myApplications":
        return (
          <MyApplications applications={candidateApplications} jobs={jobs} />
        );
      case "courses":
        return <Courses courses={courses} />;
      default:
        return (
          <JobsDashboard
            handleApply={handleApply}
            appliedJobs={candidateApplications.map((a) => a.jobId)}
            jobs={jobs}
          />
        );
    }
  };

  const renderRecruiterPage = () => {
    const recruiterJobs = jobs.filter((j) => j.recruiterId === user.id);

    switch (page) {
      case "recruiterDashboard":
        return (
          <RecruiterDashboard
            recruiterJobs={recruiterJobs}
            setPage={setPage}
            setSelectedJobId={setSelectedJobId}
            applications={applications}
          />
        );
      case "postJob":
        return <PostJob setPage={setPage} addJob={addJob} />;
      case "viewApplicants":
        return (
          <ViewApplicants
            jobId={selectedJobId}
            applications={applications}
            updateApplicationStatus={updateApplicationStatus}
            setPage={setPage}
            jobs={jobs}
            candidates={candidates}
          />
        );
      default:
        return (
          <RecruiterDashboard
            recruiterJobs={recruiterJobs}
            setPage={setPage}
            setSelectedJobId={setSelectedJobId}
            applications={applications}
          />
        );
    }
  };

  const Header = () => (
    <header className="sticky top-0 z-20 bg-black/50 backdrop-blur-lg border-b border-gray-800">
      <nav className="container mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
        <LogoIcon
          className="h-6 sm:h-15 text-white cursor-pointer"
          onClick={() =>
            setPage(
              user.role === "candidate" ? "jobsDashboard" : "recruiterDashboard"
            )
          }
        />
        <div className="flex items-center gap-6">
          {user.role === "candidate" && (
            <>
              <button
                onClick={() => setPage("jobsDashboard")}
                className={`font-semibold ${
                  page === "jobsDashboard"
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Jobs
              </button>
              <button
                onClick={() => setPage("myApplications")}
                className={`font-semibold ${
                  page === "myApplications"
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                My Applications
              </button>
              <button
                onClick={() => setPage("courses")}
                className={`font-semibold ${
                  page === "courses"
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Courses
              </button>
              <button
                onClick={() => setPage("profile")}
                className={`font-semibold ${
                  page === "profile"
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Profile
              </button>
            </>
          )}
          {user.role === "recruiter" && (
            <>
              <button
                onClick={() => setPage("recruiterDashboard")}
                className={`font-semibold ${
                  page === "recruiterDashboard"
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setPage("postJob")}
                className={`font-semibold ${
                  page === "postJob"
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Post Job
              </button>
            </>
          )}
          <img
            src={`https://placehold.co/40x40/FFFFFF/000000?text=${
              user.role === "candidate" ? "C" : "R"
            }`}
            alt="User Avatar"
            className="w-10 h-10 rounded-full border-2 border-gray-600"
          />
          <button
            onClick={handleLogout}
            className="text-sm text-gray-400 hover:text-white"
          >
            Logout
          </button>
        </div>
      </nav>
    </header>
  );

  return (
    <div className="bg-black text-gray-300 font-sans">
      <style>{`
                .grid-background {
                    background-image: linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px);
                    background-size: 4rem 4rem;
                }
                .scrollbar-thin {
                    scrollbar-width: thin;
                    scrollbar-color: #4a5568 #1a202c;
                }
                .scrollbar-thin::-webkit-scrollbar {
                    height: 8px;
                }
                .scrollbar-thin::-webkit-scrollbar-track {
                    background: #1a202c;
                    border-radius: 10px;
                }
                .scrollbar-thin::-webkit-scrollbar-thumb {
                    background-color: #4a5568;
                    border-radius: 10px;
                    border: 2px solid #1a202c;
                }
                @keyframes slide {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                .logo-carousel {
                    -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0));
                    mask-image: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0));
                }
                .logo-slide-track {
                    animation: slide 40s linear infinite;
                    width: fit-content;
                }
            `}</style>
      <div className="relative grid-background min-h-screen">
        <div className="absolute inset-0 bg-black/25"></div>
        {!user && (
          <LandingPage
            onLoginClick={() => openModal("login")}
            onSignupClick={() => openModal("signup")}
          />
        )}
        {user && (
          <div className="relative z-10">
            <Header />
            {user.role === "candidate" && renderCandidatePage()}
            {user.role === "recruiter" && renderRecruiterPage()}
          </div>
        )}
        <AuthModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onLoginSuccess={handleLoginSuccess}
          formType={formType}
          setFormType={setFormType}
        />
      </div>
    </div>
  );
}
