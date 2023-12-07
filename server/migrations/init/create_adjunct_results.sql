CREATE DATABASE adjunct_results_db;
GRANT ALL PRIVILEGES ON DATABASE adjunct_results_db TO postgres;

CREATE TABLE IF NOT EXISTS adjunct_results
(
    person_id integer NOT NULL,
    res_civil integer NOT NULL,
    res_crim integer NOT NULL,
    res_phil integer NOT NULL,
    res_eng integer NOT NULL
);

INSERT INTO adjunct_results VALUES
('1000', '100', '100', '100', '100'),
('1001', '100', '100', '100', '100'),
('1002', '100', '100', '100', '100'),
('1003', '100', '100', '100', '100'),
('1004', '100', '100', '100', '100'),
('1005', '100', '100', '100', '100');


