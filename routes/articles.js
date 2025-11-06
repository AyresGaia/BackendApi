const express = require('express');
const router = express.Router();
const connectDB = require('../db'); 

router.get('/', async (req, res) => {
  try {
    const db = await connectDB(); 
    const collection = db.collection('articles');

    const count = await collection.countDocuments();
    if (count === 0) {
      const sampleArticles = [
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
      ];
      await collection.insertMany(sampleArticles);
      console.log("Sample articles inserted");
    }

    const { search } = req.query;
    let query = {};
    if (search) {
      const keyword = new RegExp(search, 'i'); 
      query = { $or: [{ title: keyword }, { category: keyword }] };
    }

    const articles = await collection.find(query).toArray();

    res.json(articles);
  } catch (err) {
    console.error('Error fetching articles:', err);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
