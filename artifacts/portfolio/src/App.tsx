import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Mail, Code2, Database, BrainCircuit, GraduationCap, MapPin, Sparkles, Linkedin, Award, BookOpen, Phone } from "lucide-react";
import { SiGithub, SiPython, SiNumpy, SiPandas, SiScikitlearn, SiJupyter, SiCplusplus } from "react-icons/si";

const queryClient = new QueryClient();

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const skills = [
  { name: "Python", icon: <SiPython /> },
  { name: "C++ Basics", icon: <SiCplusplus /> },
  { name: "NumPy", icon: <SiNumpy /> },
  { name: "Pandas", icon: <SiPandas /> },
  { name: "Scikit-learn", icon: <SiScikitlearn /> },
  { name: "Jupyter Notebook", icon: <SiJupyter /> },
  { name: "Machine Learning", icon: <BrainCircuit className="w-5 h-5" /> },
  { name: "Data Structures", icon: <Database className="w-5 h-5" /> },
  { name: "OOP", icon: <Code2 className="w-5 h-5" /> },
  { name: "Matplotlib", icon: <Code2 className="w-5 h-5" /> },
  { name: "Seaborn", icon: <Code2 className="w-5 h-5" /> },
];

const projects = [
  {
    title: "Flower Species Prediction System",
    type: "Machine Learning Project",
    description:
      "Developed a classification model to predict flower species using machine learning algorithms. Performed data preprocessing and feature selection for improved model accuracy. Visualized data insights using Matplotlib and Seaborn.",
    tags: ["Python", "Scikit-learn", "Matplotlib", "Seaborn", "ML"],
  },
  {
    title: "Moodify",
    type: "Mood-Based Song Recommendation System",
    description:
      "Built a sentiment analysis-based system to recommend songs based on user mood. Processed text input to classify emotions using basic NLP techniques. Mapped detected sentiments to curated song recommendations for a personalized experience.",
    tags: ["Python", "NLP", "Sentiment Analysis", "Pandas"],
  },
];

function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-semibold tracking-tight text-primary">ZAH.</div>
          <div className="flex gap-6 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors" data-testid="link-about">About</a>
            <a href="#skills" className="hover:text-foreground transition-colors" data-testid="link-skills">Skills</a>
            <a href="#projects" className="hover:text-foreground transition-colors" data-testid="link-projects">Projects</a>
            <a href="#certifications" className="hover:text-foreground transition-colors" data-testid="link-certifications">Certifications</a>
            <a href="#contact" className="hover:text-foreground transition-colors" data-testid="link-contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 px-6">
        <motion.div
          style={{ y, opacity }}
          className="max-w-3xl mx-auto text-center z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              <span>B.Tech AI/ML Student</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground">
              Zainab Abbas Husaini
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4">
              Aspiring AI & ML Engineer — building intelligent systems that solve real-world problems.
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm mt-2">
              <MapPin className="w-4 h-4" />
              <span>Lucknow, India</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* About & Education */}
      <section id="about" className="py-32 px-6 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <FadeIn>
              <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                <BrainCircuit className="text-primary" />
                About Me
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-5">
                I am an aspiring Artificial Intelligence and Machine Learning engineer with a strong foundation in Python programming. Passionate about building intelligent systems and solving real-world problems using data-driven approaches.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am actively seeking opportunities to apply my technical skills and grow in the AI/ML domain — driven by curiosity about how systems like ChatGPT work and a desire to build the next generation of intelligent tech solutions.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                <GraduationCap className="text-primary" />
                Education
              </h2>
              <div className="space-y-4">
                <div className="p-6 rounded-2xl border border-border bg-card shadow-sm">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-lg font-semibold leading-snug">B.Tech – CSE (AI & ML)</h3>
                    <span className="shrink-0 text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">2023 – 2027</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">Shri Ramswaroop Memorial College of Engineering and Management, Lucknow</p>
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
                    CGPA: 7.53
                  </div>
                </div>
                <div className="p-6 rounded-2xl border border-border bg-card shadow-sm">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-lg font-semibold leading-snug">Class XII – CBSE</h3>
                    <span className="shrink-0 text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">Completed</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">Lucknow Public School, Lucknow</p>
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
                    Percentage: 80%
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-semibold mb-4 text-center">Technical Skills</h2>
            <p className="text-center text-muted-foreground mb-12">Languages, libraries, and tools I work with</p>
          </FadeIn>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <FadeIn key={skill.name} delay={index * 0.07}>
                <div
                  className="flex items-center gap-3 px-6 py-3 rounded-full border border-border bg-card hover:border-primary hover:text-primary transition-colors cursor-default shadow-sm"
                  data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <span className="text-lg">{skill.icon}</span>
                  <span className="font-medium">{skill.name}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-32 px-6 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-semibold mb-4 flex items-center gap-3">
              <Code2 className="text-primary" />
              Projects
            </h2>
            <p className="text-muted-foreground mb-12">Things I have built and explored</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <FadeIn key={project.title} delay={index * 0.2}>
                <div className="group h-full p-8 rounded-3xl border border-border bg-card hover:shadow-md transition-all hover:border-primary/50 flex flex-col">
                  <div className="mb-6 flex-grow">
                    <p className="text-xs font-medium text-primary uppercase tracking-widest mb-2">{project.type}</p>
                    <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-semibold mb-4 flex items-center gap-3">
              <Award className="text-primary" />
              Certifications
            </h2>
            <p className="text-muted-foreground mb-12">Courses and credentials completed</p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="p-8 rounded-3xl border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all">
              <div className="flex items-start justify-between gap-6 flex-wrap">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-3">
                    <BookOpen className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-xs font-semibold text-primary uppercase tracking-widest">Udemy</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Learn C++ Programming – Beginner to Advance</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Gained a strong understanding of C++ programming and OOP concepts. Covered inheritance, polymorphism, encapsulation, and abstraction. Applied concepts through practical coding exercises.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["OOP", "Polymorphism", "Encapsulation", "Inheritance"].map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href="https://www.udemy.com/certificate/UC-288dbd4b-6fa2-477a-9aaf-9bc919a98244/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border hover:border-primary hover:text-primary transition-colors text-sm font-medium"
                  data-testid="link-certificate"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6 bg-secondary/30">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl font-semibold mb-6">Let's Connect</h2>
            <p className="text-lg text-muted-foreground mb-12">
              I am always open to discussing AI/ML, internship opportunities, or collaborative projects.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href="mailto:husainizainababbas@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                data-testid="button-email"
              >
                <Mail className="w-5 h-5" />
                husainizainababbas@gmail.com
              </a>
              <a
                href="tel:+916392683493"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-border hover:border-primary hover:text-primary transition-colors font-medium"
                data-testid="button-phone"
              >
                <Phone className="w-5 h-5" />
                +91 63926 83493
              </a>
            </div>

            <div className="flex items-center justify-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full border border-border hover:bg-secondary hover:border-primary transition-colors"
                aria-label="GitHub"
                data-testid="link-github"
              >
                <SiGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/zainab-abbas-husaini-b0100029a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full border border-border hover:bg-secondary hover:border-primary transition-colors"
                aria-label="LinkedIn"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground text-sm border-t border-border/50">
        <p>© {new Date().getFullYear()} Zainab Abbas Husaini. All rights reserved.</p>
      </footer>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
