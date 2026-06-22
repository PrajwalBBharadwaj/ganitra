/**
 * Books are the single source of truth for all learning content.
 * Each Book contains chapters, and each chapter contains sections.
 * There is NO separate chapters data file.
 */

export interface Section {
  title?: string;
  content: string;
}

export interface Chapter {
  id: string;
  title: string;
  concept: string;
  sections: Section[];
}

export interface Book {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  level: "Foundations" | "Core" | "Advanced";
  gradeRange: string;
  accent: string;
  chapters: Chapter[];
  samplePdfUrl?: string;
}

export const books: Book[] = [
  {
    id: "foundations",
    title: "Foundations",
    description:
      "Numbers, arithmetic, and patterns — building a strong mathematical foundation for grades 1 through 4.",
    shortDescription:
      "Numbers, arithmetic, and patterns — building a strong mathematical foundation.",
    level: "Foundations",
    gradeRange: "Grades 1–4",
    accent: "bg-accent-numbers",
    samplePdfUrl: "/assets/Math%20You%20Can%20See%20-%20Sample%20Chapter.pdf",
    chapters: [
      {
        id: "foundations-ch1",
        title: "Understanding Numbers",
        concept:
          "Numbers are the building blocks of mathematics. This chapter introduces what numbers mean and how they relate to the world around us.",
        sections: [
          {
            title: "What Is a Number?",
            content:
              "A number is an idea. It represents how many of something exists. When you see three apples, the number 3 is not the apples themselves — it is the idea of 'threeness'. This distinction between the symbol and the quantity is the first step toward mathematical thinking.",
          },
          {
            title: "Counting and Quantity",
            content:
              "Counting is matching each object to a number word. One-to-one correspondence — touching each item once — builds the foundation for addition and subtraction. Practice counting groups of objects and recognizing quantities without counting (subitizing).",
          },
          {
            title: "Number Patterns",
            content:
              "Numbers follow patterns. Even and odd numbers alternate. Counting by twos, fives, and tens reveals structure. Recognizing these patterns makes arithmetic feel natural rather than memorized.",
          },
        ],
      },
      {
        id: "foundations-ch2",
        title: "Addition and Subtraction",
        concept:
          "Addition and subtraction are not separate operations — they are the same idea of moving forward and backward on the number line.",
        sections: [
          {
            title: "Putting Together and Taking Apart",
            content:
              "Addition means combining groups. Subtraction means finding the difference. Visualize these with objects, fingers, and number lines before introducing symbols. The goal is understanding, not speed.",
          },
          {
            title: "Number Bonds",
            content:
              "Every number can be broken into smaller parts. The number 5 can be 2 and 3, or 4 and 1. These relationships — number bonds — make mental arithmetic intuitive. When children see 5 as 2+3, subtraction becomes finding the missing part.",
          },
        ],
      },
    ],
  },
  {
    id: "core-math",
    title: "Core Math",
    description:
      "Fractions, algebra introduction, and geometry — connecting concepts for grades 5 through 7.",
    shortDescription:
      "Fractions, algebra introduction, and geometry — connecting concepts.",
    level: "Core",
    gradeRange: "Grades 5–7",
    accent: "bg-accent-algebra",
    chapters: [
      {
        id: "core-ch1",
        title: "Fractions as Numbers",
        concept:
          "Fractions are not strange symbols — they are numbers that live between whole numbers on the number line.",
        sections: [
          {
            title: "What Fractions Represent",
            content:
              "A fraction like 3/4 means '3 parts of a whole divided into 4 equal parts'. The denominator tells how many equal parts make one whole. The numerator tells how many of those parts we have. Visualize with pie slices, number lines, and area models.",
          },
          {
            title: "Comparing Fractions",
            content:
              "To compare fractions, think about the size of the parts. When denominators are the same, compare numerators. When denominators differ, find a common denominator or use a number line. The fraction with the larger value is the one farther to the right on the number line.",
          },
          {
            title: "Adding and Subtracting Fractions",
            content:
              "You can only add or subtract fractions when the parts are the same size — that is, when denominators match. If they don't match, find a common denominator first. Visual models make this rule obvious rather than arbitrary.",
          },
        ],
      },
      {
        id: "core-ch2",
        title: "Introduction to Algebra",
        concept:
          "Algebra is not a new subject — it is arithmetic with a missing piece. Variables are just placeholders for numbers we haven't found yet.",
        sections: [
          {
            title: "Variables as Placeholders",
            content:
              "A variable like x is simply a number whose value we don't know yet. The equation x + 3 = 7 asks: 'What number, when you add 3, gives you 7?' This is the same as asking '7 - 3 = ?' Algebra is the natural extension of arithmetic.",
          },
          {
            title: "Solving Simple Equations",
            content:
              "To solve an equation, do the same thing to both sides. If x + 5 = 12, subtract 5 from both sides to isolate x. Visualize a balance scale — whatever you do to one side, you must do to the other to keep it balanced.",
          },
        ],
      },
    ],
  },
  {
    id: "advanced-mathematics",
    title: "Advanced Mathematics",
    description:
      "Algebra, trigonometry, reasoning, and problem solving — mastering mathematical thinking for grades 8 through 10.",
    shortDescription:
      "Algebra, trigonometry, reasoning, and problem solving — mastering mathematical thinking.",
    level: "Advanced",
    gradeRange: "Grades 8–10",
    accent: "bg-accent-logic",
    chapters: [
      {
        id: "advanced-ch1",
        title: "Linear Relationships",
        concept:
          "Linear relationships describe how one quantity changes in proportion to another. They are the foundation for understanding functions and graphs.",
        sections: [
          {
            title: "What Is a Linear Relationship?",
            content:
              "A relationship is linear when a constant change in one quantity produces a constant change in another. For example, if you earn $10 per hour, your total pay increases by $10 for each additional hour. This constant rate of change is the slope.",
          },
          {
            title: "Graphing Lines",
            content:
              "Every linear equation can be written as y = mx + b, where m is the slope and b is the y-intercept. The slope tells you how steep the line is. The y-intercept tells you where the line crosses the vertical axis. Plot points to see the relationship visually.",
          },
          {
            title: "Solving Systems of Equations",
            content:
              "When you have two linear equations, the solution is the point where their graphs intersect. This point satisfies both equations simultaneously. You can find it by graphing, substitution, or elimination — each method reveals a different aspect of the relationship.",
          },
        ],
      },
      {
        id: "advanced-ch2",
        title: "Introduction to Trigonometry",
        concept:
          "Trigonometry connects angles to side ratios in triangles. It is the language of patterns that repeat — waves, circles, and cycles.",
        sections: [
          {
            title: "Angles and Triangles",
            content:
              "Every right triangle has three sides and three angles. The ratio of any two sides depends only on the angles, not on the size of the triangle. This is the core insight of trigonometry: shape determines ratio.",
          },
          {
            title: "Sine, Cosine, and Tangent",
            content:
              "Sine of an angle is the ratio of the opposite side to the hypotenuse. Cosine is adjacent over hypotenuse. Tangent is opposite over adjacent. These ratios let you find unknown sides or angles when you have partial information about a triangle.",
          },
        ],
      },
    ],
  },
];