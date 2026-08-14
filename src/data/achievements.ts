import { Achievement, Certificate } from "@/types/content";

export const achievements: Achievement[] = [
  {
    id: "mcf-itb",
    title: "2nd Place",
    event: "Data Science Competition — MCF ITB",
    year: "2024",
  },
  {
    id: "kri",
    title: "Finalist",
    event: "Kontes Robot Indonesia — KRSBI-H",
    year: "2024",
  },
];

export const certificates: Certificate[] = [
  { id: "ibm-ds", issuer: "IBM", title: "Introduction to Data Science" },
  {
    id: "cisco-nae",
    issuer: "Cisco",
    title: "Network Automation Engineering Fundamentals",
  },
  { id: "oracle-ocidf", issuer: "Oracle", title: "OCI Data Foundations Associate" },
  { id: "cisco-it-essentials", issuer: "Cisco", title: "IT Essentials" },
];
