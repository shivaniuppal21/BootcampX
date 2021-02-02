SELECT
  cohorts.name as cohort_name,
  AVG(assignment_submissions.*) AS submission_total
FROM
  assignment_submissions
  JOIN students ON students.id = student_id
  JOIN cohorts ON cohorts.id = cohort_id
GROUP BY
  cohorts.name
ORDER BY
  submission_total DESC;