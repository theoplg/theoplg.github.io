export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  image: string;
  codeUrl?: string;
  paper?: string | null;
  ongoing?: boolean;
  // Detailed content for project page
  abstract: string;
  type: string;
  publication?: string;
  sections?: {
    title: string;
    content: string;
    image?: string;
    images?: string[];
  }[];
}

export const allProjects: Project[] = [
  {
    slug: "llm-ssc",
    title: "LLM-SSC",
    description:
      "Web application for automatic topic extraction from text corpora. Uses BERTopic, SentenceTransformers and unsupervised clustering techniques to analyze YouTube comments or rap lyrics.",
    tags: ["NLP", "Python", "BERTopic"],
    date: "Dec 2024",
    image: "/nlp-topic-extraction-visualization-with-clusters.jpg",
    codeUrl: "https://github.com/theoplg/llm-ssc",
    abstract:
      "This project presents a web application designed for automatic topic extraction from large text corpora. The system leverages BERTopic, a state-of-the-art topic modeling technique that combines transformer-based embeddings with clustering algorithms. By utilizing SentenceTransformers for semantic text representation and unsupervised clustering techniques such as HDBSCAN, the application can identify coherent topics from diverse text sources including YouTube comments and rap lyrics. The pipeline includes preprocessing steps for text normalization, embedding generation, dimensionality reduction via UMAP, and final topic assignment with interpretable labels.",
    type: "Personal Project",
    sections: [
      {
        title: "Technical Overview",
        content:
          "The application is built with a Python backend using FastAPI for the REST API and Streamlit for the interactive web interface. BERTopic is used as the core topic modeling library, which internally uses SentenceTransformers (all-MiniLM-L6-v2) for generating document embeddings. UMAP reduces the high-dimensional embeddings to a lower-dimensional space, and HDBSCAN performs density-based clustering to identify topics. The system also generates word clouds and interactive visualizations for topic exploration.",
      },
      {
        title: "Results and Applications",
        content:
          "The tool has been successfully applied to analyze sentiment and themes in YouTube comment sections, as well as to extract recurring motifs and subjects in French rap lyrics corpora. The extracted topics provide meaningful insights into public opinion and artistic themes, demonstrating the versatility of the approach across different domains and languages.",
      },
    ],
  },
  {
    slug: "copy-move-forgery-detection",
    title: "Copy-Move Forgery Detection",
    description:
      "Implementation of the PatchMatch algorithm to detect Copy-Move forgeries in images. Robust pipeline including median filtering, error map and RMSE verification.",
    tags: ["Computer Vision", "Python", "Image Processing"],
    date: "Nov 2024",
    image: "/image-forgery-detection-algorithm-visualization.jpg",
    codeUrl: "https://github.com/theoplg/copy-moove-forgery",
    paper: "https://theoplg.github.io/portfolio-website/reports/papier1.pdf",
    abstract:
      "Digital image manipulation has become increasingly common, with copy-move forgery being one of the most prevalent techniques where a region is copied and pasted elsewhere in the same image to hide or duplicate objects. This project implements an automatic detection system based on the PatchMatch algorithm, originally designed for structural image editing. By adapting this dense correspondence algorithm with spatial constraints and post-processing techniques, we created a robust pipeline capable of detecting copy-move forgeries while maintaining resilience against common image alterations such as blur, noise, and JPEG compression.",
    type: "Academic Project",
    publication: "Course Project - Computer Vision (IM01), November 2025",
    sections: [
      {
        title: "The PatchMatch Algorithm",
        content:
          "PatchMatch efficiently computes a Nearest-Neighbor Field (NNF) by exploiting local image coherence. The algorithm operates through three key phases: (1) Random initialization assigns random correspondences between patches; (2) Propagation exploits spatial coherence by testing if neighboring offsets improve the current match, using both forward and backward passes; (3) Random search escapes local minima by testing candidates in exponentially decreasing concentric neighborhoods. For copy-move detection, we introduced a 'forbidden zone' constraint that prevents patches from matching to themselves, forcing the algorithm to find duplicated regions elsewhere in the image.",
        image: "/copy-move/patchmatch-phases.png",
      },
      {
        title: "Detection Pipeline",
        content:
          "The raw displacement field from PatchMatch requires extensive post-processing to produce reliable binary detection masks. Our pipeline includes: (1) Median filtering on displacement components to remove isolated outliers while preserving boundaries; (2) Error map computation measuring local variance of displacement vectors—copied regions exhibit near-zero variance while natural homogeneous areas show high variance; (3) Global frequency filtering to keep only displacement vectors shared by many pixels (typically >1000); (4) RMSE verification between matched patches to eliminate false positives; (5) Morphological operations including size filtering and dilation to produce clean detection masks.",
      },
      {
        title: "Results & Robustness",
        content:
          "The system successfully detects copy-move forgeries in various scenarios, performing particularly well on simple translations with textured objects. The algorithm demonstrates remarkable robustness: (1) Blur resistance—PatchMatch compares neighborhoods rather than individual pixels, so low-frequency structures remain detectable; (2) Noise tolerance—median filtering effectively handles impulse noise, and the method remains functional with Gaussian noise and JPEG compression artifacts; (3) Parameter sensitivity—the forbidden zone radius must be carefully tuned based on image characteristics (larger for homogeneous areas, smaller for detailed images). Key limitations include difficulty with uniform regions (sky, grass) that exhibit natural self-similarity, inability to handle rotation/scaling without invariant descriptors, and challenges with inpainting where copied patches originate from multiple dispersed locations.",
        images: [
          "/copy-move/results-comparison.png",
          "/copy-move/robustness-examples.png",
          "/copy-move/inpainting-examples.png",
        ],
      },
    ],
  },
  {
    slug: "spinning-ball-spiral",
    title: "spinning-ball-spiral",
    description:
      "This project investigates the aerodynamics of spinning spherical projectiles, inspired by the legendary perfect free-kick scored by Roberto Carlos in 1997.",
    tags: ["Physics Simulation", "Python", "Matplotlib"],
    date: "Oct 2024",
    image: "/soccer-ball-trajectory-physics-simulation.jpg",
    codeUrl: "https://github.com/theoplg/spinning-ball-spiral",
    paper: "https://theoplg.github.io/portfolio-website/reports/papier2.pdf",
    abstract:
      "This project presents a comprehensive physics simulation investigating the aerodynamics of spinning spherical projectiles, with particular focus on the Magnus effect. Inspired by Roberto Carlos's legendary free-kick goal in 1997, where the ball curved dramatically in flight, we develop a mathematical model that captures the complex interplay between drag forces, lift forces, and the Magnus effect. The simulation allows for exploration of how spin rate, initial velocity, and environmental conditions affect the trajectory of a spinning ball.",
    type: "Academic Project",
    publication: "Course Project - Applied Mathematics, Fall 2024",
    sections: [
      {
        title: "Physical Model",
        content:
          "The simulation models three main forces acting on a spinning ball: gravitational force, aerodynamic drag (proportional to velocity squared), and the Magnus force (perpendicular to both velocity and angular velocity vectors). The equations of motion are solved using numerical integration methods (Runge-Kutta 4th order) to compute the ball's trajectory over time. Parameters such as ball mass, radius, drag coefficient, and spin decay are configurable.",
      },
      {
        title: "Visualization and Analysis",
        content:
          "Using Matplotlib, the project generates 3D trajectory visualizations and 2D projections showing the ball's path from different angles. Analysis reveals how varying spin rates produce different curvature patterns, explaining phenomena observed in football, tennis, and baseball. The Roberto Carlos kick is recreated by setting appropriate initial conditions, demonstrating that the extreme curve was indeed physically achievable.",
      },
    ],
  },
  {
    slug: "contractive-robust-imitation",
    title: "Contractive and Robust Imitation",
    description:
      "Learning unconstrained and stable imitation policies from state-only expert demonstrations applicable to a variety of robotic platforms. Experiments and simulations are entirely conducted in simulation environments.",
    tags: ["Imitation Learning", "PyTorch", "Isaac Sim/Lab"],
    date: "Apr 28, 2024",
    image: "/robotic-arm-imitation-learning-simulation.jpg",
    ongoing: true,
    abstract:
      "Imitation learning is a data-driven approach to learning policies from expert behavior, but it is prone to unreliable outcomes in out-of-sample (OOS) regions. While previous research relying on stable dynamical systems guarantees convergence to a desired state, it often overlooks transient behavior. We propose a framework for learning policies modeled by contractive dynamical systems, ensuring that all policy rollouts converge regardless of perturbations, and in turn, enable efficient OOS recovery. By leveraging recurrent equilibrium networks and coupling layers, the policy structure guarantees contractivity for any parameter choice, which facilitates unconstrained optimization. We also provide theoretical upper bounds for worst-case and expected loss to rigorously establish the reliability of our method in deployment. Empirically, we demonstrate substantial OOS performance improvements for simulated robotic manipulation and navigation tasks.",
    type: "Research Project",
    publication:
      "Submitted to International Conference on Learning Representations (ICLR 2025)",
    sections: [
      {
        title: "Design Overview",
        content:
          "The architecture consists of three main components: a Contractive Recurrent Equilibrium Network (REN) that processes sequential state information, a linear projection layer that maps the hidden state to action space, and a bijection block that boosts the policy's expressive power while preserving contraction properties. The contractive property ensures that any two trajectories starting from different initial conditions will exponentially converge to each other.",
      },
      {
        title: "Summary of Results",
        content:
          "After training on expert demonstrations, the policy can be deployed with a low-level controller. The contractivity and, in turn, global stability of the policy facilitates reliable recovery from out-of-sample states. Experiments on robotic manipulation tasks (reaching, pushing) and locomotion tasks (walking, running) show significant improvements over baseline imitation learning methods, especially when the robot encounters states not seen during training.",
      },
    ],
  },
  {
    slug: "safe-rl-policy-optimization",
    title: "Safe RL Policy Optimization",
    description:
      "Learning model-free reinforcement learning policies with internal safety and stability guarantees mainly for manipulation and locomotion tasks. The experiments leverage domain randomization techniques.",
    tags: ["Reinforcement Learning", "PyTorch", "Isaac Sim/Lab"],
    date: "Feb 24, 2024",
    image: "/reinforcement-learning-robot-locomotion.jpg",
    ongoing: true,
    abstract:
      "This research project focuses on developing model-free reinforcement learning algorithms that incorporate internal safety and stability guarantees directly into the policy architecture. Traditional RL methods often produce policies that can exhibit unsafe or unstable behaviors, especially during deployment in real-world scenarios. Our approach embeds Lyapunov stability constraints and safety barrier functions into the neural network policy structure, ensuring that the learned behaviors remain within safe operating regions while still achieving high task performance. Domain randomization is extensively used to improve sim-to-real transfer.",
    type: "Research Project",
    publication: "Ongoing Research",
    sections: [
      {
        title: "Safety Constraints Integration",
        content:
          "We integrate Control Barrier Functions (CBFs) and Control Lyapunov Functions (CLFs) directly into the policy optimization process. The policy network outputs are filtered through a safety layer that projects actions onto the safe set defined by CBF constraints. This ensures that safety is maintained at every timestep, regardless of the RL exploration strategy.",
      },
      {
        title: "Experimental Setup",
        content:
          "Experiments are conducted in NVIDIA Isaac Sim/Lab environments, featuring high-fidelity physics simulation for robotic manipulation (Franka Panda arm) and locomotion (quadruped robots). Domain randomization is applied to physical parameters (mass, friction, damping) and visual properties to bridge the sim-to-real gap. Results show that our safe RL approach achieves comparable task performance to unconstrained RL while significantly reducing safety violations.",
      },
    ],
  },
  {
    slug: "lyapunov-stable-polynomial",
    title: "Lyapunov-Stable Polynomial Imitation Policies",
    description:
      "Learning polynomial imitation policies with guaranteed stability and out of distribution recovery.",
    tags: ["Imitation Learning", "Python", "C/C++"],
    date: "Apr 28, 2024",
    image: "/robotic-arm-drawing-mathematical-curves.jpg",
    abstract:
      "This project explores the use of polynomial dynamical systems for imitation learning, with a focus on ensuring Lyapunov stability. Unlike neural network policies that can be difficult to analyze theoretically, polynomial policies allow for explicit computation of Lyapunov functions that certify stability. We develop methods to learn polynomial coefficients from expert demonstrations while simultaneously constructing a valid Lyapunov function, guaranteeing that the learned policy will converge to the target state from any initial condition within a verified region of attraction.",
    type: "Research Project",
    sections: [
      {
        title: "Polynomial Policy Representation",
        content:
          "Policies are represented as polynomial vector fields of configurable degree. The coefficients are learned via regression on expert state-action pairs, with additional constraints ensuring that a sum-of-squares (SOS) Lyapunov function exists. The SOS programming problems are solved using MOSEK through the SOSTOOLS interface, implemented in a combination of Python for data processing and C/C++ for efficient SOS solving.",
      },
      {
        title: "Stability Guarantees",
        content:
          "The main advantage of this approach is the ability to provide formal stability certificates. Given the learned polynomial policy and the corresponding Lyapunov function, we can compute the region of attraction where convergence to the goal is guaranteed. This is particularly valuable for safety-critical robotics applications where theoretical guarantees are required.",
      },
    ],
  },
  {
    slug: "stable-neural-imitation",
    title: "Stable Neural Imitation Policies",
    description: "Learning globally stable neural imitation policies (SNDS).",
    tags: ["Imitation Learning", "PyTorch"],
    date: "Oct 26, 2023",
    image: "/robot-arm-neural-network-imitation-learning-poses.jpg",
    abstract:
      "Stable Neural Dynamical Systems (SNDS) is a framework for learning neural network policies that are guaranteed to be globally asymptotically stable. The key insight is to parameterize the policy as the negative gradient of a learned Lyapunov function, ensuring that the system always moves toward decreasing Lyapunov values and thus converges to the equilibrium. This project implements SNDS for robotic manipulation tasks, demonstrating that neural network expressiveness can be combined with strong stability guarantees.",
    type: "Course Project",
    sections: [
      {
        title: "SNDS Architecture",
        content:
          "The SNDS architecture consists of two components: a Lyapunov network V(x) that outputs a positive scalar for any state x (achieved using input convex neural networks), and a damping matrix D(x) that modulates the descent direction. The policy is computed as f(x) = -D(x)∇V(x), which by construction decreases V along trajectories, ensuring global convergence to the minimum of V.",
      },
      {
        title: "Implementation Results",
        content:
          "The implementation uses PyTorch for neural network training with custom gradient computations for the Lyapunov gradient. Experiments on 2D reaching tasks and 7-DOF robotic arm control show that SNDS successfully learns from demonstrations while maintaining stability, even when starting from states far outside the training distribution.",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return allProjects.map((p) => p.slug);
}
