--
-- PostgreSQL database dump
--

\restrict RumapVWV8mw2WeBvePCVDybI7N8WCcD9PUCgE9rEoA9cD0j2TuWwVQPU2m5BRv4

-- Dumped from database version 18.6
-- Dumped by pg_dump version 18.6

-- Started on 2026-10-27 14:37:37

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 226 (class 1259 OID 16524)
-- Name: encuesta_usuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.encuesta_usuario (
    id_respuesta bigint NOT NULL,
    id_usuario bigint NOT NULL,
    id_encuesta bigint NOT NULL,
    id_pregunta bigint NOT NULL,
    respuesta text NOT NULL,
    fecha timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.encuesta_usuario OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 16523)
-- Name: encuesta_usuario_id_respuesta_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.encuesta_usuario ALTER COLUMN id_respuesta ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.encuesta_usuario_id_respuesta_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 222 (class 1259 OID 16492)
-- Name: encuestas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.encuestas (
    id_encuesta bigint NOT NULL,
    codigo character varying(30) NOT NULL,
    descripcion text NOT NULL
);


ALTER TABLE public.encuestas OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16491)
-- Name: encuestas_id_encuesta_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.encuestas ALTER COLUMN id_encuesta ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.encuestas_id_encuesta_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 224 (class 1259 OID 16505)
-- Name: preguntas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.preguntas (
    id_pregunta bigint NOT NULL,
    descripcion text NOT NULL,
    tipo character varying(30) NOT NULL,
    id_encuesta bigint NOT NULL
);


ALTER TABLE public.preguntas OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 16504)
-- Name: preguntas_id_pregunta_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.preguntas ALTER COLUMN id_pregunta ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.preguntas_id_pregunta_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 220 (class 1259 OID 16473)
-- Name: usuarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuarios (
    id_usuario bigint NOT NULL,
    nombre character varying(100) NOT NULL,
    tipo_documento character varying(10) NOT NULL,
    numero_documento character varying(30) NOT NULL,
    email character varying(150) NOT NULL,
    edad smallint,
    genero character varying(30),
    contrasena character varying(255) NOT NULL,
    CONSTRAINT chk_edad CHECK (((edad IS NULL) OR (edad >= 0)))
);


ALTER TABLE public.usuarios OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16472)
-- Name: usuarios_id_usuario_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.usuarios ALTER COLUMN id_usuario ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.usuarios_id_usuario_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 5047 (class 0 OID 16524)
-- Dependencies: 226
-- Data for Name: encuesta_usuario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.encuesta_usuario (id_respuesta, id_usuario, id_encuesta, id_pregunta, respuesta, fecha) FROM stdin;
1	1	1	1	Entre 4 y 6 horas	2026-10-17 11:12:00.186223-05
2	1	1	2	Si	2026-10-17 11:12:00.186223-05
3	2	2	3	Entre 7 y 8 horas	2026-10-17 11:12:00.186223-05
4	3	3	6	Si	2026-10-17 11:12:00.186223-05
5	4	1	1	Entre 2 y 4 horas	2026-10-17 11:12:00.186223-05
6	5	3	5	Entre 2 y 3 horas	2026-10-17 11:12:00.186223-05
\.


--
-- TOC entry 5043 (class 0 OID 16492)
-- Dependencies: 222
-- Data for Name: encuestas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.encuestas (id_encuesta, codigo, descripcion) FROM stdin;
1	ENC001	Encuesta sobre uso del celular
2	ENC002	Encuesta sobre habitos de sueno
3	ENC003	Encuesta sobre rendimiento academico
\.


--
-- TOC entry 5045 (class 0 OID 16505)
-- Dependencies: 224
-- Data for Name: preguntas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.preguntas (id_pregunta, descripcion, tipo, id_encuesta) FROM stdin;
1	Cuantas horas al dia utilizas el celular?	opcion_multiple	1
2	Utilizas el celular antes de dormir?	si_no	1
3	Cuantas horas duermes normalmente?	opcion_multiple	2
4	Consideras que duermes lo suficiente?	si_no	2
5	Cuantas horas dedicas al estudio diariamente?	opcion_multiple	3
6	El uso del celular afecta tu rendimiento academico?	si_no	3
\.


--
-- TOC entry 5041 (class 0 OID 16473)
-- Dependencies: 220
-- Data for Name: usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuarios (id_usuario, nombre, tipo_documento, numero_documento, email, edad, genero, contrasena) FROM stdin;
1	Carlos Perez	CC	1001001001	carlos@gmail.com	22	Masculino	hash_prueba_01
2	Laura Gomez	CC	1001001002	laura@gmail.com	20	Femenino	hash_prueba_02
3	Andres Rodriguez	TI	1001001003	andres@gmail.com	17	Masculino	hash_prueba_03
4	Maria Torres	CC	1001001004	maria@gmail.com	25	Femenino	hash_prueba_04
5	Sofia Martinez	CC	1001001005	sofia@gmail.com	21	Femenino	hash_prueba_05
\.


--
-- TOC entry 5053 (class 0 OID 0)
-- Dependencies: 225
-- Name: encuesta_usuario_id_respuesta_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.encuesta_usuario_id_respuesta_seq', 6, true);


--
-- TOC entry 5054 (class 0 OID 0)
-- Dependencies: 221
-- Name: encuestas_id_encuesta_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.encuestas_id_encuesta_seq', 3, true);


--
-- TOC entry 5055 (class 0 OID 0)
-- Dependencies: 223
-- Name: preguntas_id_pregunta_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.preguntas_id_pregunta_seq', 6, true);


--
-- TOC entry 5056 (class 0 OID 0)
-- Dependencies: 219
-- Name: usuarios_id_usuario_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuarios_id_usuario_seq', 5, true);


--
-- TOC entry 4888 (class 2606 OID 16537)
-- Name: encuesta_usuario encuesta_usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.encuesta_usuario
    ADD CONSTRAINT encuesta_usuario_pkey PRIMARY KEY (id_respuesta);


--
-- TOC entry 4880 (class 2606 OID 16503)
-- Name: encuestas encuestas_codigo_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.encuestas
    ADD CONSTRAINT encuestas_codigo_key UNIQUE (codigo);


--
-- TOC entry 4882 (class 2606 OID 16501)
-- Name: encuestas encuestas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.encuestas
    ADD CONSTRAINT encuestas_pkey PRIMARY KEY (id_encuesta);


--
-- TOC entry 4884 (class 2606 OID 16515)
-- Name: preguntas preguntas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.preguntas
    ADD CONSTRAINT preguntas_pkey PRIMARY KEY (id_pregunta);


--
-- TOC entry 4886 (class 2606 OID 16517)
-- Name: preguntas uq_pregunta_encuesta; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.preguntas
    ADD CONSTRAINT uq_pregunta_encuesta UNIQUE (id_pregunta, id_encuesta);


--
-- TOC entry 4874 (class 2606 OID 16490)
-- Name: usuarios usuarios_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_email_key UNIQUE (email);


--
-- TOC entry 4876 (class 2606 OID 16488)
-- Name: usuarios usuarios_numero_documento_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_numero_documento_key UNIQUE (numero_documento);


--
-- TOC entry 4878 (class 2606 OID 16486)
-- Name: usuarios usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id_usuario);


--
-- TOC entry 4889 (class 2606 OID 16518)
-- Name: preguntas fk_pregunta_encuesta; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.preguntas
    ADD CONSTRAINT fk_pregunta_encuesta FOREIGN KEY (id_encuesta) REFERENCES public.encuestas(id_encuesta);


--
-- TOC entry 4890 (class 2606 OID 16543)
-- Name: encuesta_usuario fk_respuesta_encuesta; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.encuesta_usuario
    ADD CONSTRAINT fk_respuesta_encuesta FOREIGN KEY (id_encuesta) REFERENCES public.encuestas(id_encuesta);


--
-- TOC entry 4891 (class 2606 OID 16548)
-- Name: encuesta_usuario fk_respuesta_pregunta; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.encuesta_usuario
    ADD CONSTRAINT fk_respuesta_pregunta FOREIGN KEY (id_pregunta, id_encuesta) REFERENCES public.preguntas(id_pregunta, id_encuesta);


--
-- TOC entry 4892 (class 2606 OID 16538)
-- Name: encuesta_usuario fk_respuesta_usuario; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.encuesta_usuario
    ADD CONSTRAINT fk_respuesta_usuario FOREIGN KEY (id_usuario) REFERENCES public.usuarios(id_usuario);


-- Completed on 2026-10-27 14:37:37

--
-- PostgreSQL database dump complete
--

\unrestrict RumapVWV8mw2WeBvePCVDybI7N8WCcD9PUCgE9rEoA9cD0j2TuWwVQPU2m5BRv4

