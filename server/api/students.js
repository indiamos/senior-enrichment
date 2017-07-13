const router = require('express').Router();
const { Student } = require('../../db/models');

module.exports = router;

// GET api/students
router.get('/', (req, res, next) => {
  Student.findAll()
    .then(students => res.json(students))
    .catch(next);
});

// GET /api/students/:studentId
router.get('/:studentId', (req, res, next) => {
  const studentId = req.params.studentId;

  Student.findById(studentId)
    .then(student => res.json(student))
    .catch(next);
});

// POST /api/students
router.post('/', (req, res, next) => {
  Student.create(req.body)
    .then(student => res.json(student))
    .catch(next);
});

// PUT /api/students/:studentId
router.put('/:studentId', (req, res, next) => {
  const studentId = req.params.studentId;

  Student.findById(studentId)
    .then(student => res.json(student))
    .catch(next);
});

// DELETE /api/students
router.delete('/:studentId', (req, res, next) => {
  const studentId = req.params.studentId;

  Student.destroy({ where: { studentId } })
    .then(() => res.status(204).end())
    .catch(next);
});
