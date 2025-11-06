const connectDB = require('./db');

const articlesData = [
  {
    id: 1,
    title: "Understanding Diabetes",
    description:
      "Learn causes, prevention, diet tips, and treatment options for diabetes. Includes lifestyle changes, medications, and nutrition guidance.",
    category: "Nutrition",
  },
  {
    id: 2,
    title: "Meditation for Stress Relief",
    description:
      "Simple meditation techniques to reduce stress and anxiety, improve mental clarity, and boost overall wellbeing.",
    category: "Lifestyle",
  },
  {
    id: 3,
    title: "Heart-Healthy Diet",
    description:
      "Foods and habits that support heart health, reduce cholesterol, and maintain a strong cardiovascular system.",
    category: "Nutrition",
  },
  {
    id: 4,
    title: "Vitamin D Deficiency",
    description:
      "Know the causes, symptoms, and best food sources of Vitamin D to maintain healthy bones and immunity.",
    category: "Health",
  },
  {
    id: 5,
    title: "Managing Anxiety Naturally",
    description:
      "Learn how deep breathing, mindfulness, and physical activity can ease anxiety without medication.",
    category: "Mental Health",
  },
  {
    id: 6,
    title: "Sleep and Productivity",
    description:
      "Understand how good sleep improves your focus, creativity, and mental health — and how to fix poor sleep habits.",
    category: "Wellness",
  },
  {
    id: 7,
    title: "Hydration and Your Body",
    description:
      "Discover why staying hydrated is essential for digestion, energy, and overall body function.",
    category: "Health",
  },
  {
    id: 8,
    title: "Yoga for Beginners",
    description:
      "Get started with simple yoga poses to improve flexibility, posture, and reduce stress.",
    category: "Fitness",
  },
  {
    id: 9,
    title: "Boosting Immunity the Natural Way",
    description:
      "Explore foods, habits, and supplements that strengthen your immune system against common illnesses.",
    category: "Nutrition",
  },
  {
    id: 10,
    title: "Understanding Depression",
    description:
      "Learn about symptoms, causes, and therapy options for managing depression effectively.",
    category: "Mental Health",
  },
  {
    id: 11,
    title: "Healthy Weight Loss Tips",
    description:
      "Safe, science-backed ways to lose weight while maintaining muscle and energy levels.",
    category: "Fitness",
  },
  {
    id: 12,
    title: "Managing High Blood Pressure",
    description:
      "Find out how diet, exercise, and stress management can help control hypertension naturally.",
    category: "Health",
  },
];

async function seedArticles() {
  try {
    const db = await connectDB();
    const collection = db.collection('articles');

    await collection.deleteMany({});
    await collection.insertMany(articlesData);
    console.log('✨ Articles seeded successfully');
  } catch (error) {
    console.error('❌ Error inserting articles:', error);
  }
}

seedArticles();
