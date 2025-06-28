import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";

export interface Project {
  id: string;
  title: string;
  tags: string[];
  image: string;
  alt: string;
}

export const projects: Project[] = [
  {
    id: "master-goal",
    title: "Human Transformation",
    tags: ["UI/UX design", "Web Development", "Medical"],
    image: project1,
    alt: "Laptop mock-up for MasterGoal website",
  },
  {
    id: "rotary-club",
    title: "Rotary Club Solihull",
    tags: ["UI/UX design", "Web Development", "Social"],
    image: project2,
    alt: "iPhone showing Rotary member app",
  },
  {
    id: "hubber-expo",
    title: "Hubber Expo",
    tags: ["UI/UX design", "Web Development", "Social"],
    image: project3,
    alt: "Phone render for Hubber Expo landing page",
  },
];
