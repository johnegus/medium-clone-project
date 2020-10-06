const express = require("express");
const router = express.Router();
const { asyncHandler, handleValidationErrors } = require("../../utils");
const { check } = require('express-validator');
const {User, Story, Clap} = require("../../db/models");







const storyValidator = [
  check('body')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a valid story')
]

router.post('/', storyValidator, handleValidationErrors, asyncHandler(async (req, res, next) => {
  const { title, body, userId } = req.body;
  const story = await Story.create({
    title,
    body,
    userId
  });
  res.redirect('/stories')
}))


router.post("/:id/clap", asyncHandler(async (req, res) => {
    const { userId } = req.body;
    const storyId = req.params.id;
    const clap = await Clap.create({
        userId,
        storyId
    })
    res.json({ clap });

router.get('/', asyncHandler(async (req, res, next) => {
  const { userId } = req.body;
  const stories = await Story.findAll({
    where: { userId },
    include: [{ model: User, as: "user", attributes: ["username"] }],
    order: [["createdAt", "DESC"]]
  })
  res.json({stories})
}))

const storyNotFoundError = (id) => {
  const err = new Error('Story not found!');
  err.title = [`Story with id of ${id} not found!`];
  err.status = 404;
  return (err)
}
router.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {
  const story = await Story.findByPk(req.params.id);
  if (story) {
    res.json({ story })
  } else {
    next(storyNotFoundError(req.params.id));
  }
}))


router.put('/:id(\\d+)', storyValidator, handleValidationErrors, asyncHandler(async (req, res, next) => {
  const storyId = parseInt(req.params.id);
  const story = await Story.findByPk(storyId);
  if (story) {
    await story.update({
      body: req.body.body,
      title: req.body.title
    })
    res.json({story})
  } else {
    next(storyNotFoundError(storyId))
  }
} ))




module.exports = router;
