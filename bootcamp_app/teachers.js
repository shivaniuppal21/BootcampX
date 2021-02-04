const { Pool } = require('pg');
const process = require('process');

var args = process.argv.slice(2);
const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});
const queryString = `
SELECT
  DISTINCT teachers.name as teacher,
  cohorts.name as cohort
FROM
  teachers
  JOIN assistance_requests ON teacher_id = teachers.id
  JOIN students ON student_id = students.id
  JOIN cohorts ON cohort_id = cohorts.id
WHERE
  cohorts.name = $1
ORDER BY
  teacher;
`;
pool.query(queryString,[args[0]])
.then(res => {
  res.rows.forEach(user => {

      console.log(`${args[0]}:${user.teacher}`);
  })
})
.catch(err => console.error('query error', err.stack));


