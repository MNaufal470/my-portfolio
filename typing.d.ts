interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}

export interface Technology extends SanityBody {
  _type: "skill";
  title: string;
  image: Image;
  progress: string;
}

export interface Skill extends SanityBody {
  _type: "skill";
  title: string;
  image: Image;
  progress: string;
  isBestSkill: boolean;
}

export interface Project extends SanityBody {
  _type: "project";
  title: string;
  image: Image;
  LinkToBuild: string;
  summary: string;
  technologies: Technology[];
  name: string;
  application: string;
  dateStarted: string;
  dateEnded: string;
  description: string;
  points: Array;
  images: Image;
}

export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  companyImage: Image;
  dateStarted: string;
  dateEnded: string;
  technologies: Technology[];
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  images: any;
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  address: string;
  surName: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: Image;
  profilePic: Image;
  phoneNumber: string;
  name: string;
  age: string;
}
