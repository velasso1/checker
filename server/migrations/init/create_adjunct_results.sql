CREATE DATABASE adjunct_results_db;
GRANT ALL PRIVILEGES ON DATABASE adjunct_results_db TO postgres;

CREATE TABLE IF NOT EXISTS adjunct_results
(
    first_name character(36) COLLATE pg_catalog."default" NOT NULL,
    second_name character(36) COLLATE pg_catalog."default" NOT NULL,
    last_name character(36) COLLATE pg_catalog."default" NOT NULL,
    res_civil integer NOT NULL,
    res_crim integer NOT NULL,
    res_phil integer NOT NULL,
    person_id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1000 MINVALUE 1000 MAXVALUE 9999 CACHE 1 )
);


INSERT INTO adjunct_results VALUES
('Иван', 'Иванович', 'Иванов', '95', '78', '32'),
('Сергей', 'Иванович', 'Шестопалов', '53', '58', '49'),
('Артем', 'Евгеньевич', 'Сухоруков', '72', '31', '1'),
('Петр', 'Андреевич', 'Гавриленко', '40', '0', '67'),
('Игнат', 'Захарович', 'Смирнов', '56', '31', '34'),
('Андрей', 'Иванович', 'Суворов', '91', '100', '97');


