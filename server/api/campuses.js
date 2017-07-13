const router = require('express').Router();
const { Campus, Student } = require('../../db/models');

module.exports = router;

// GET api/campuses
router.get('/', function (req, res, next) {
  Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(next);
});

// GET /api/campuses/:campusId
router.get('/:campusId', function (req, res, next) {
  const campusId = req.params.campusId;

  Campus.findById(campusId)
    .then(campus => res.json(campus))
    .catch(next);
});

// GET /api/campuses/:campusId/students
router.get('/:campusId/students', function (req, res, next) {
  const campusId = req.params.campusId;

  Student.findAll({ where: { campusId } })
    .then(students => res.json(students))
    .catch(next);
});

// POST /api/campuses
router.post('/', function (req, res, next) {
  Campus.create(req.body)
    .then(campus => res.json(campus))
    .catch(next);
});

// PUT /api/campuses/:campusId
router.put('/:campusId', (req, res, next) => {
  const campusId = req.params.campusId;

  Campus.findById(campusId)
    .then(campus => res.json(campus))
    .catch(next);
});

// DELETE /api/campuses
router.delete('/:campusId', function (req, res, next) {
  const campusId = req.params.campusId;

  Campus.destroy({ where: { campusId } })
    .then(() => res.status(204).end())
    .catch(next);
});
