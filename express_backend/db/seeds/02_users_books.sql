insert into users_books (id, user_id, isbn, date_read, rating, comments, status)
VALUES
  (1, 1, '9780140437300', '2018-07-20 12:10:42', 1, 'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.', 'in_progress'),
  (2, 1, '9780606001052', '2018-09-01 15:30:26', 2, 'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 'finished'),
  (3, 2, '9780140437300', '2020-10-02 05:04:37', 2, 'Etiam faucibus cursus urna. Ut tellus.', 'finished'),
  (4, 2, '9780606001052', '2018-12-22 08:16:04', 2, 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 'new'),
  (5, 1, '9780143036234', '2020-02-04 12:16:45', 1, 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.', 'finished'),
  (6, 4, '9780143036234', '2020-11-18 22:33:26', 3, 'Aliquam non mauris.', 'finished'),
  (7, 10, '9780143036234', '2019-07-10 05:43:40', 4, 'Pellentesque ultrices mattis odio. Donec vitae nisi.', 'new'),
  (8, 1, '9780143036234', '2019-10-04 20:31:10', 5, 'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 'finished'),
  (9, 9, '9780143106159', '2018-06-03 05:01:37', 4, 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 'new'),
  (10, 7, '9780143106159', '2019-05-05 04:50:35', 3, 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.', 'finished');
