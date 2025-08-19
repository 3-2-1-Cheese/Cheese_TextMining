const express = require('express');
const router = express.Router();
const { Recommend } = require('../model/Recommend');


//=================================
//          Recommned
//=================================

// 모든 Recommend 데이터 조회
router.get('/', async (req, res) => {
  try {
    const recommends = await Recommend.find();
    res.json(recommends);
  } catch (err) {
    console.error("❌ DB 조회 에러:", err);
    res.status(500).json({ message: err.message });
  }
});

router.post('/user', async (req, res) => {
  const userPref = req.body; // 사용자 선호 벡터
  try {
    const studios = await Recommend.find();

    // 추천 점수 계산
    const scored = studios.map(studio => {
      let score = 0;
      for (let key in userPref) {
        if (studio[key] !== undefined) {
          score += studio[key] * userPref[key];
        }
      }
      return { ...studio._doc, score }; // _doc: 실제 문서 데이터
    });

    // 점수 내림차순 정렬 후 상위 5개 추천
    scored.sort((a, b) => b.score - a.score);
    res.json(scored.slice(0, 5));

  } catch (err) {
    console.error("추천 에러:", err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;