export interface Project {
  id: string;
  slug: string;
  name: string;
  industry: string;
  keyMetric: string;
  heroImage: string;
  gallery: string[];
  summary: string;
  problem: string;
  solution: string;
  processSteps: ProcessStep[];
  results: Results;
  techStack: TechStackItem[];
  team: Team;
  client: Client;
  testimonial: Testimonial;
  aiContribution: AIContribution;
  navigation: Navigation;
  tags: string[];
  /** Optional one-sentence summary for the Problem section */
  problemSummary?: string;
  /** Optional one-sentence summary for the Solution section */
  solutionSummary?: string;
  /** Optional one-sentence summary for the Process section */
  processSummary?: string;
  /** Optional one-sentence summary for the Results section */
  resultsSummary?: string;
  /** Optional one-sentence summary for the Tech Stack section */
  techStackSummary?: string;
  /** Optional one-sentence summary for the Team section */
  teamSummary?: string;
  /** Optional one-sentence summary for the Testimonial section */
  testimonialSummary?: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  duration: string;
}

export interface Results {
  metrics: Metric[];
  visualizationData: VisualizationData;
}

export interface Metric {
  label: string;
  value: string;
  description: string;
}

export interface VisualizationData {
  type: string;
  labels: string[];
  datasets: Dataset[];
}

export interface Dataset {
  label: string;
  data: number[];
}

export interface TechStackItem {
  name: string;
  icon: string;
  category: string;
}

export interface Team {
  human: TeamMember[];
  ai: AITeamMember[];
}

export interface TeamMember {
  role: string;
  name: string;
}

export interface AITeamMember {
  role: string;
  description: string;
}

export interface Client {
  name: string;
  logo: string;
  duration: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
}

export interface AIContribution {
  percentage: number;
  description: string;
}

export interface Navigation {
  previousSlug: string;
  nextSlug: string;
} 