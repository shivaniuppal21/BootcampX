SELECT
  teachers.name as teacher,
  count(assistance_requests.*) as "total_assistances"
FROM
  assistance_requests
  JOIN teachers on teacher_id = teachers.id
WHERE
  name = 'Waylon Boehm'
GROUP BY
  teachers.name