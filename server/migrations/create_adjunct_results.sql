CREATE TABLE IF NOT EXISTS public.adjunct_results
(
    first_name character(36) COLLATE pg_catalog."default" NOT NULL,
    second_name character(36) COLLATE pg_catalog."default" NOT NULL,
    last_name character(36) COLLATE pg_catalog."default" NOT NULL,
    res_civil integer NOT NULL,
    res_crim integer NOT NULL,
    res_phil integer NOT NULL,
    person_id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 )
);


INSERT INTO adjunct_results VALUES
('Иван', 'Иванович', 'Ивановов', '95', '78', '32'),
('Сергей', 'Иванович', 'Шестопалов', '53', '58', '49'),
('Артем', 'Евгеньевич', 'Сухоруков', '72', '31', '1'),
('Петр', 'Андреевич', 'Гавриленко', '40', '0', '67'),
('Игнат', 'Захарович', 'Смирнов', '56', '31', '34'),
('Андрей', 'Иванович', 'Суворов', '91', '100', '97');

