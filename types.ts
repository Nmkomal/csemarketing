
// Added React import to provide access to the React namespace for ElementType
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface Industry {
  id: string;
  name: string;
  icon: React.ElementType;
  description: string;
  workDescription: string;
  growthMethod: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  category: string;
  result: string;
  image: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  date: string;
  category: string;
  image: string;
}
