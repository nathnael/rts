--
-- PostgreSQL database dump
--

-- Dumped from database version 10.17 (Ubuntu 10.17-1.pgdg18.04+1)
-- Dumped by pg_dump version 13.3 (Ubuntu 13.3-1.pgdg18.04+1)

-- Started on 2021-07-15 00:09:36 EAT

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

--
-- TOC entry 213 (class 1259 OID 173499)
-- Name: addresses; Type: TABLE; Schema: public; Owner: temp
--

CREATE TABLE public.addresses (
    id bigint NOT NULL,
    email character varying,
    postal_code character varying,
    country character varying,
    city character varying,
    state character varying,
    zip_code character varying,
    sub_city character varying,
    woreda character varying,
    house_no character varying,
    home_phone character varying,
    cell_phone character varying,
    work_phone character varying,
    created_by integer,
    modified_by integer,
    deleted_at timestamp without time zone,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL,
    street_no character varying
);


ALTER TABLE public.addresses OWNER TO temp;

--
-- TOC entry 212 (class 1259 OID 173497)
-- Name: addresses_id_seq; Type: SEQUENCE; Schema: public; Owner: temp
--

CREATE SEQUENCE public.addresses_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.addresses_id_seq OWNER TO temp;

--
-- TOC entry 3220 (class 0 OID 0)
-- Dependencies: 212
-- Name: addresses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: temp
--

ALTER SEQUENCE public.addresses_id_seq OWNED BY public.addresses.id;


--
-- TOC entry 197 (class 1259 OID 173404)
-- Name: ar_internal_metadata; Type: TABLE; Schema: public; Owner: temp
--

CREATE TABLE public.ar_internal_metadata (
    key character varying NOT NULL,
    value character varying,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.ar_internal_metadata OWNER TO temp;

--
-- TOC entry 207 (class 1259 OID 173469)
-- Name: clients; Type: TABLE; Schema: public; Owner: temp
--

CREATE TABLE public.clients (
    id bigint NOT NULL,
    name character varying,
    rep_name character varying,
    address_id integer,
    status integer,
    created_by integer,
    modified_by integer,
    deleted_at timestamp without time zone,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.clients OWNER TO temp;

--
-- TOC entry 206 (class 1259 OID 173467)
-- Name: clients_id_seq; Type: SEQUENCE; Schema: public; Owner: temp
--

CREATE SEQUENCE public.clients_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.clients_id_seq OWNER TO temp;

--
-- TOC entry 3221 (class 0 OID 0)
-- Dependencies: 206
-- Name: clients_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: temp
--

ALTER SEQUENCE public.clients_id_seq OWNED BY public.clients.id;


--
-- TOC entry 231 (class 1259 OID 173605)
-- Name: duty_stations; Type: TABLE; Schema: public; Owner: temp
--

CREATE TABLE public.duty_stations (
    id bigint NOT NULL,
    name character varying,
    address_id integer,
    created_by integer,
    modified_by integer,
    deleted_at timestamp without time zone,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.duty_stations OWNER TO temp;

--
-- TOC entry 230 (class 1259 OID 173603)
-- Name: duty_stations_id_seq; Type: SEQUENCE; Schema: public; Owner: temp
--

CREATE SEQUENCE public.duty_stations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.duty_stations_id_seq OWNER TO temp;

--
-- TOC entry 3222 (class 0 OID 0)
-- Dependencies: 230
-- Name: duty_stations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: temp
--

ALTER SEQUENCE public.duty_stations_id_seq OWNED BY public.duty_stations.id;


--
-- TOC entry 233 (class 1259 OID 173617)
-- Name: employment_types; Type: TABLE; Schema: public; Owner: temp
--

CREATE TABLE public.employment_types (
    id bigint NOT NULL,
    name character varying,
    description text,
    created_by integer,
    modified_by integer,
    deleted_at timestamp without time zone,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.employment_types OWNER TO temp;

--
-- TOC entry 232 (class 1259 OID 173615)
-- Name: employment_types_id_seq; Type: SEQUENCE; Schema: public; Owner: temp
--

CREATE SEQUENCE public.employment_types_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.employment_types_id_seq OWNER TO temp;

--
-- TOC entry 3223 (class 0 OID 0)
-- Dependencies: 232
-- Name: employment_types_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: temp
--

ALTER SEQUENCE public.employment_types_id_seq OWNED BY public.employment_types.id;


--
-- TOC entry 227 (class 1259 OID 173586)
-- Name: exceller_assignments; Type: TABLE; Schema: public; Owner: temp
--

CREATE TABLE public.exceller_assignments (
    id bigint NOT NULL,
    exceller_id integer,
    project_id integer,
    skill_id integer,
    start_date timestamp without time zone,
    end_date timestamp without time zone,
    status integer,
    created_by integer,
    modified_by integer,
    deleted_at timestamp without time zone,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.exceller_assignments OWNER TO temp;

--
-- TOC entry 226 (class 1259 OID 173584)
-- Name: exceller_assignments_id_seq; Type: SEQUENCE; Schema: public; Owner: temp
--

CREATE SEQUENCE public.exceller_assignments_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.exceller_assignments_id_seq OWNER TO temp;

--
-- TOC entry 3224 (class 0 OID 0)
-- Dependencies: 226
-- Name: exceller_assignments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: temp
--

ALTER SEQUENCE public.exceller_assignments_id_seq OWNED BY public.exceller_assignments.id;


--
-- TOC entry 237 (class 1259 OID 206172)
-- Name: exceller_interview_items; Type: TABLE; Schema: public; Owner: temp
--

CREATE TABLE public.exceller_interview_items (
    id bigint NOT NULL,
    exceller_interview_id integer,
    interview_criteria_id integer,
    score double precision,
    comment text,
    created_by integer,
    modified_by integer,
    deleted_at timestamp without time zone,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.exceller_interview_items OWNER TO temp;

--
-- TOC entry 236 (class 1259 OID 206170)
-- Name: exceller_interview_items_id_seq; Type: SEQUENCE; Schema: public; Owner: temp
--

CREATE SEQUENCE public.exceller_interview_items_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.exceller_interview_items_id_seq OWNER TO temp;

--
-- TOC entry 3225 (class 0 OID 0)
-- Dependencies: 236
-- Name: exceller_interview_items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: temp
--

ALTER SEQUENCE public.exceller_interview_items_id_seq OWNED BY public.exceller_interview_items.id;


--
-- TOC entry 235 (class 1259 OID 206164)
-- Name: exceller_interviews; Type: TABLE; Schema: public; Owner: temp
--

CREATE TABLE public.exceller_interviews (
    id bigint NOT NULL,
    exceller_id integer,
    interviewer_id integer,
    interview_id integer,
    created_by integer,
    modified_by integer,
    deleted_at timestamp without time zone,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.exceller_interviews OWNER TO temp;

--
-- TOC entry 234 (class 1259 OID 206162)
-- Name: exceller_interviews_tables_id_seq; Type: SEQUENCE; Schema: public; Owner: temp
--

CREATE SEQUENCE public.exceller_interviews_tables_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.exceller_interviews_tables_id_seq OWNER TO temp;

--
-- TOC entry 3226 (class 0 OID 0)
-- Dependencies: 234
-- Name: exceller_interviews_tables_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: temp
--

ALTER SEQUENCE public.exceller_interviews_tables_id_seq OWNED BY public.exceller_interviews.id;


--
-- TOC entry 225 (class 1259 OID 173578)
-- Name: exceller_offers; Type: TABLE; Schema: public; Owner: temp
--

CREATE TABLE public.exceller_offers (
    id bigint NOT NULL,
    exceller_id integer,
    position_id integer,
    response integer,
    created_by integer,
    modified_by integer,
    deleted_at timestamp without time zone,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.exceller_offers OWNER TO temp;

--
-- TOC entry 224 (class 1259 OID 173576)
-- Name: exceller_offers_id_seq; Type: SEQUENCE; Schema: public; Owner: temp
--

CREATE SEQUENCE public.exceller_offers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.exceller_offers_id_seq OWNER TO temp;

--
-- TOC entry 3227 (class 0 OID 0)
-- Dependencies: 224
-- Name: exceller_offers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: temp
--

ALTER SEQUENCE public.exceller_offers_id_seq OWNED BY public.exceller_offers.id;


--
-- TOC entry 219 (class 1259 OID 173540)
-- Name: exceller_skills; Type: TABLE; Schema: public; Owner: temp
--

CREATE TABLE public.exceller_skills (
    id bigint NOT NULL,
    exceller_id integer,
    skill_id integer,
    proficiency integer,
    created_by integer,
    modified_by integer,
    deleted_at timestamp without time zone,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.exceller_skills OWNER TO temp;

--
-- TOC entry 218 (class 1259 OID 173538)
-- Name: exceller_skills_id_seq; Type: SEQUENCE; Schema: public; Owner: temp
--

CREATE SEQUENCE public.exceller_skills_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.exceller_skills_id_seq OWNER TO temp;

--
-- TOC entry 3228 (class 0 OID 0)
-- Dependencies: 218
-- Name: exceller_skills_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: temp
--

ALTER SEQUENCE public.exceller_skills_id_seq OWNED BY public.exceller_skills.id;


--
-- TOC entry 205 (class 1259 OID 173458)
-- Name: excellers; Type: TABLE; Schema: public; Owner: temp
--

CREATE TABLE public.excellers (
    id bigint NOT NULL,
    first_name character varying,
    father_name character varying,
    grandfather_name character varying,
    position_id integer,
    address_id integer,
    years_of_experience integer,
    recommended_for_id integer,
    contract_signing_date date,
    employment_type_id integer,
    duty_station_id integer,
    status_id integer,
    created_by integer,
    modified_by integer,
    deleted_at timestamp without time zone,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL,
    dob date,
    profile_picture_url character varying
);


ALTER TABLE public.excellers OWNER TO temp;

--
-- TOC entry 204 (class 1259 OID 173456)
-- Name: excellers_id_seq; Type: SEQUENCE; Schema: public; Owner: temp
--

CREATE SEQUENCE public.excellers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.excellers_id_seq OWNER TO temp;

--
-- TOC entry 3229 (class 0 OID 0)
-- Dependencies: 204
-- Name: excellers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: temp
--

ALTER SEQUENCE public.excellers_id_seq OWNED BY public.excellers.id;


--
-- TOC entry 223 (class 1259 OID 173559)
-- Name: interview_criteria; Type: TABLE; Schema: public; Owner: temp
--

CREATE TABLE public.interview_criteria (
    id bigint NOT NULL,
    interview_id integer,
    skill_id integer,
    created_by integer,
    modified_by integer,
    deleted_at timestamp without time zone,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL,
    minimum_score numeric
);


ALTER TABLE public.interview_criteria OWNER TO temp;

--
-- TOC entry 222 (class 1259 OID 173557)
-- Name: interview_criteria_id_seq; Type: SEQUENCE; Schema: public; Owner: temp
--

CREATE SEQUENCE public.interview_criteria_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.interview_criteria_id_seq OWNER TO temp;

--
-- TOC entry 3230 (class 0 OID 0)
-- Dependencies: 222
-- Name: interview_criteria_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: temp
--

ALTER SEQUENCE public.interview_criteria_id_seq OWNED BY public.interview_criteria.id;


--
-- TOC entry 221 (class 1259 OID 173548)
-- Name: interviews; Type: TABLE; Schema: public; Owner: temp
--

CREATE TABLE public.interviews (
    id bigint NOT NULL,
    name character varying,
    position_id integer,
    created_by integer,
    modified_by integer,
    deleted_at timestamp without time zone,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL,
    description text
);


ALTER TABLE public.interviews OWNER TO temp;

--
-- TOC entry 220 (class 1259 OID 173546)
-- Name: interviews_id_seq; Type: SEQUENCE; Schema: public; Owner: temp
--

CREATE SEQUENCE public.interviews_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.interviews_id_seq OWNER TO temp;

--
-- TOC entry 3231 (class 0 OID 0)
-- Dependencies: 220
-- Name: interviews_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: temp
--

ALTER SEQUENCE public.interviews_id_seq OWNED BY public.interviews.id;


--
-- TOC entry 201 (class 1259 OID 173439)
-- Name: permissions; Type: TABLE; Schema: public; Owner: temp
--

CREATE TABLE public.permissions (
    id bigint NOT NULL,
    name character varying,
    description text,
    user_type integer,
    created_by integer,
    modified_by integer,
    deleted_at timestamp without time zone,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.permissions OWNER TO temp;

--
-- TOC entry 200 (class 1259 OID 173437)
-- Name: permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: temp
--

CREATE SEQUENCE public.permissions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.permissions_id_seq OWNER TO temp;

--
-- TOC entry 3232 (class 0 OID 0)
-- Dependencies: 200
-- Name: permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: temp
--

ALTER SEQUENCE public.permissions_id_seq OWNED BY public.permissions.id;


--
-- TOC entry 229 (class 1259 OID 173594)
-- Name: positions; Type: TABLE; Schema: public; Owner: temp
--

CREATE TABLE public.positions (
    id bigint NOT NULL,
    name character varying,
    description text,
    created_by integer,
    modified_by integer,
    deleted_at timestamp without time zone,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.positions OWNER TO temp;

--
-- TOC entry 228 (class 1259 OID 173592)
-- Name: positions_id_seq; Type: SEQUENCE; Schema: public; Owner: temp
--

CREATE SEQUENCE public.positions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.positions_id_seq OWNER TO temp;

--
-- TOC entry 3233 (class 0 OID 0)
-- Dependencies: 228
-- Name: positions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: temp
--

ALTER SEQUENCE public.positions_id_seq OWNED BY public.positions.id;


--
-- TOC entry 245 (class 1259 OID 214433)
-- Name: project_requirement_excellers; Type: TABLE; Schema: public; Owner: temp
--

CREATE TABLE public.project_requirement_excellers (
    id bigint NOT NULL,
    project_requirement_id integer,
    exceller_id integer,
    state_id integer,
    performed_by integer,
    date_performed timestamp without time zone,
    comment text,
    current boolean,
    created_by integer,
    modified_by integer,
    deleted_at timestamp without time zone,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.project_requirement_excellers OWNER TO temp;

--
-- TOC entry 244 (class 1259 OID 214431)
-- Name: project_requirement_excellers_id_seq; Type: SEQUENCE; Schema: public; Owner: temp
--

CREATE SEQUENCE public.project_requirement_excellers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.project_requirement_excellers_id_seq OWNER TO temp;

--
-- TOC entry 3234 (class 0 OID 0)
-- Dependencies: 244
-- Name: project_requirement_excellers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: temp
--

ALTER SEQUENCE public.project_requirement_excellers_id_seq OWNED BY public.project_requirement_excellers.id;


--
-- TOC entry 243 (class 1259 OID 214422)
-- Name: project_requirement_flows; Type: TABLE; Schema: public; Owner: temp
--

CREATE TABLE public.project_requirement_flows (
    id bigint NOT NULL,
    project_requirement_id integer,
    name character varying,
    initial_state_id integer,
    final_state_id integer,
    created_by integer,
    modified_by integer,
    deleted_at timestamp without time zone,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.project_requirement_flows OWNER TO temp;

--
-- TOC entry 242 (class 1259 OID 214420)
-- Name: project_requirement_flows_id_seq; Type: SEQUENCE; Schema: public; Owner: temp
--

CREATE SEQUENCE public.project_requirement_flows_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.project_requirement_flows_id_seq OWNER TO temp;

--
-- TOC entry 3235 (class 0 OID 0)
-- Dependencies: 242
-- Name: project_requirement_flows_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: temp
--

ALTER SEQUENCE public.project_requirement_flows_id_seq OWNED BY public.project_requirement_flows.id;


--
-- TOC entry 239 (class 1259 OID 214358)
-- Name: project_requirement_items; Type: TABLE; Schema: public; Owner: temp
--

CREATE TABLE public.project_requirement_items (
    id bigint NOT NULL,
    project_requirement_id integer,
    skill_id integer,
    minimum_score double precision,
    description text,
    created_by integer,
    modified_by integer,
    deleted_at timestamp without time zone,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.project_requirement_items OWNER TO temp;

--
-- TOC entry 238 (class 1259 OID 214356)
-- Name: project_requirement_items_id_seq; Type: SEQUENCE; Schema: public; Owner: temp
--

CREATE SEQUENCE public.project_requirement_items_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.project_requirement_items_id_seq OWNER TO temp;

--
-- TOC entry 3236 (class 0 OID 0)
-- Dependencies: 238
-- Name: project_requirement_items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: temp
--

ALTER SEQUENCE public.project_requirement_items_id_seq OWNED BY public.project_requirement_items.id;


--
-- TOC entry 241 (class 1259 OID 214411)
-- Name: project_requirement_states; Type: TABLE; Schema: public; Owner: temp
--

CREATE TABLE public.project_requirement_states (
    id bigint NOT NULL,
    project_requirement_id integer,
    name character varying,
    description text,
    created_by integer,
    modified_by integer,
    deleted_at timestamp without time zone,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.project_requirement_states OWNER TO temp;

--
-- TOC entry 240 (class 1259 OID 214409)
-- Name: project_requirement_states_id_seq; Type: SEQUENCE; Schema: public; Owner: temp
--

CREATE SEQUENCE public.project_requirement_states_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.project_requirement_states_id_seq OWNER TO temp;

--
-- TOC entry 3237 (class 0 OID 0)
-- Dependencies: 240
-- Name: project_requirement_states_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: temp
--

ALTER SEQUENCE public.project_requirement_states_id_seq OWNED BY public.project_requirement_states.id;


--
-- TOC entry 211 (class 1259 OID 173491)
-- Name: project_requirements; Type: TABLE; Schema: public; Owner: temp
--

CREATE TABLE public.project_requirements (
    id bigint NOT NULL,
    skill_type_id integer,
    amount integer,
    created_by integer,
    modified_by integer,
    deleted_at timestamp without time zone,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL,
    project_id integer,
    start_date date,
    end_date date
);


ALTER TABLE public.project_requirements OWNER TO temp;

--
-- TOC entry 210 (class 1259 OID 173489)
-- Name: project_requirements_id_seq; Type: SEQUENCE; Schema: public; Owner: temp
--

CREATE SEQUENCE public.project_requirements_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.project_requirements_id_seq OWNER TO temp;

--
-- TOC entry 3238 (class 0 OID 0)
-- Dependencies: 210
-- Name: project_requirements_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: temp
--

ALTER SEQUENCE public.project_requirements_id_seq OWNED BY public.project_requirements.id;


--
-- TOC entry 209 (class 1259 OID 173480)
-- Name: projects; Type: TABLE; Schema: public; Owner: temp
--

CREATE TABLE public.projects (
    id bigint NOT NULL,
    name character varying,
    client_id integer,
    status integer,
    start_date date,
    end_date date,
    created_by integer,
    modified_by integer,
    deleted_at timestamp without time zone,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.projects OWNER TO temp;

--
-- TOC entry 208 (class 1259 OID 173478)
-- Name: projects_id_seq; Type: SEQUENCE; Schema: public; Owner: temp
--

CREATE SEQUENCE public.projects_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.projects_id_seq OWNER TO temp;

--
-- TOC entry 3239 (class 0 OID 0)
-- Dependencies: 208
-- Name: projects_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: temp
--

ALTER SEQUENCE public.projects_id_seq OWNED BY public.projects.id;


--
-- TOC entry 196 (class 1259 OID 173396)
-- Name: schema_migrations; Type: TABLE; Schema: public; Owner: temp
--

CREATE TABLE public.schema_migrations (
    version character varying NOT NULL
);


ALTER TABLE public.schema_migrations OWNER TO temp;

--
-- TOC entry 247 (class 1259 OID 222548)
-- Name: skill_type_skills; Type: TABLE; Schema: public; Owner: temp
--

CREATE TABLE public.skill_type_skills (
    id bigint NOT NULL,
    skill_type_id integer,
    skill_id integer,
    created_by integer,
    modified_by integer,
    deleted_at timestamp without time zone,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.skill_type_skills OWNER TO temp;

--
-- TOC entry 246 (class 1259 OID 222546)
-- Name: skill_type_skills_id_seq; Type: SEQUENCE; Schema: public; Owner: temp
--

CREATE SEQUENCE public.skill_type_skills_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.skill_type_skills_id_seq OWNER TO temp;

--
-- TOC entry 3240 (class 0 OID 0)
-- Dependencies: 246
-- Name: skill_type_skills_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: temp
--

ALTER SEQUENCE public.skill_type_skills_id_seq OWNED BY public.skill_type_skills.id;


--
-- TOC entry 217 (class 1259 OID 173529)
-- Name: skill_types; Type: TABLE; Schema: public; Owner: temp
--

CREATE TABLE public.skill_types (
    id bigint NOT NULL,
    name character varying,
    created_by integer,
    modified_by integer,
    deleted_at timestamp without time zone,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL,
    description text
);


ALTER TABLE public.skill_types OWNER TO temp;

--
-- TOC entry 216 (class 1259 OID 173527)
-- Name: skill_types_id_seq; Type: SEQUENCE; Schema: public; Owner: temp
--

CREATE SEQUENCE public.skill_types_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.skill_types_id_seq OWNER TO temp;

--
-- TOC entry 3241 (class 0 OID 0)
-- Dependencies: 216
-- Name: skill_types_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: temp
--

ALTER SEQUENCE public.skill_types_id_seq OWNED BY public.skill_types.id;


--
-- TOC entry 215 (class 1259 OID 173518)
-- Name: skills; Type: TABLE; Schema: public; Owner: temp
--

CREATE TABLE public.skills (
    id bigint NOT NULL,
    name character varying,
    created_by integer,
    modified_by integer,
    deleted_at timestamp without time zone,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL,
    description text,
    default_minimum_score double precision
);


ALTER TABLE public.skills OWNER TO temp;

--
-- TOC entry 214 (class 1259 OID 173516)
-- Name: skills_id_seq; Type: SEQUENCE; Schema: public; Owner: temp
--

CREATE SEQUENCE public.skills_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.skills_id_seq OWNER TO temp;

--
-- TOC entry 3242 (class 0 OID 0)
-- Dependencies: 214
-- Name: skills_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: temp
--

ALTER SEQUENCE public.skills_id_seq OWNED BY public.skills.id;


--
-- TOC entry 203 (class 1259 OID 173450)
-- Name: user_permissions; Type: TABLE; Schema: public; Owner: temp
--

CREATE TABLE public.user_permissions (
    id bigint NOT NULL,
    user_id integer,
    permission_id integer,
    created_by integer,
    modified_by integer,
    deleted_at timestamp without time zone,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.user_permissions OWNER TO temp;

--
-- TOC entry 202 (class 1259 OID 173448)
-- Name: user_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: temp
--

CREATE SEQUENCE public.user_permissions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_permissions_id_seq OWNER TO temp;

--
-- TOC entry 3243 (class 0 OID 0)
-- Dependencies: 202
-- Name: user_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: temp
--

ALTER SEQUENCE public.user_permissions_id_seq OWNED BY public.user_permissions.id;


--
-- TOC entry 199 (class 1259 OID 173414)
-- Name: users; Type: TABLE; Schema: public; Owner: temp
--

CREATE TABLE public.users (
    id bigint NOT NULL,
    email character varying DEFAULT ''::character varying NOT NULL,
    encrypted_password character varying DEFAULT ''::character varying NOT NULL,
    reset_password_token character varying,
    reset_password_sent_at timestamp without time zone,
    remember_created_at timestamp without time zone,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL,
    first_name character varying,
    last_name character varying,
    confirmation_token character varying,
    confirmed_at timestamp without time zone,
    confirmation_sent_at timestamp without time zone,
    unconfirmed_email character varying,
    sign_in_count integer DEFAULT 0 NOT NULL,
    current_sign_in_at timestamp without time zone,
    last_sign_in_at timestamp without time zone,
    current_sign_in_ip inet,
    last_sign_in_ip inet
);


ALTER TABLE public.users OWNER TO temp;

--
-- TOC entry 198 (class 1259 OID 173412)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: temp
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO temp;

--
-- TOC entry 3244 (class 0 OID 0)
-- Dependencies: 198
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: temp
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 2968 (class 2604 OID 173502)
-- Name: addresses id; Type: DEFAULT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.addresses ALTER COLUMN id SET DEFAULT nextval('public.addresses_id_seq'::regclass);


--
-- TOC entry 2965 (class 2604 OID 173472)
-- Name: clients id; Type: DEFAULT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.clients ALTER COLUMN id SET DEFAULT nextval('public.clients_id_seq'::regclass);


--
-- TOC entry 2977 (class 2604 OID 173608)
-- Name: duty_stations id; Type: DEFAULT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.duty_stations ALTER COLUMN id SET DEFAULT nextval('public.duty_stations_id_seq'::regclass);


--
-- TOC entry 2978 (class 2604 OID 173620)
-- Name: employment_types id; Type: DEFAULT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.employment_types ALTER COLUMN id SET DEFAULT nextval('public.employment_types_id_seq'::regclass);


--
-- TOC entry 2975 (class 2604 OID 173589)
-- Name: exceller_assignments id; Type: DEFAULT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.exceller_assignments ALTER COLUMN id SET DEFAULT nextval('public.exceller_assignments_id_seq'::regclass);


--
-- TOC entry 2980 (class 2604 OID 206175)
-- Name: exceller_interview_items id; Type: DEFAULT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.exceller_interview_items ALTER COLUMN id SET DEFAULT nextval('public.exceller_interview_items_id_seq'::regclass);


--
-- TOC entry 2979 (class 2604 OID 206167)
-- Name: exceller_interviews id; Type: DEFAULT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.exceller_interviews ALTER COLUMN id SET DEFAULT nextval('public.exceller_interviews_tables_id_seq'::regclass);


--
-- TOC entry 2974 (class 2604 OID 173581)
-- Name: exceller_offers id; Type: DEFAULT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.exceller_offers ALTER COLUMN id SET DEFAULT nextval('public.exceller_offers_id_seq'::regclass);


--
-- TOC entry 2971 (class 2604 OID 173543)
-- Name: exceller_skills id; Type: DEFAULT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.exceller_skills ALTER COLUMN id SET DEFAULT nextval('public.exceller_skills_id_seq'::regclass);


--
-- TOC entry 2964 (class 2604 OID 173461)
-- Name: excellers id; Type: DEFAULT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.excellers ALTER COLUMN id SET DEFAULT nextval('public.excellers_id_seq'::regclass);


--
-- TOC entry 2973 (class 2604 OID 173562)
-- Name: interview_criteria id; Type: DEFAULT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.interview_criteria ALTER COLUMN id SET DEFAULT nextval('public.interview_criteria_id_seq'::regclass);


--
-- TOC entry 2972 (class 2604 OID 173551)
-- Name: interviews id; Type: DEFAULT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.interviews ALTER COLUMN id SET DEFAULT nextval('public.interviews_id_seq'::regclass);


--
-- TOC entry 2962 (class 2604 OID 173442)
-- Name: permissions id; Type: DEFAULT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.permissions ALTER COLUMN id SET DEFAULT nextval('public.permissions_id_seq'::regclass);


--
-- TOC entry 2976 (class 2604 OID 173597)
-- Name: positions id; Type: DEFAULT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.positions ALTER COLUMN id SET DEFAULT nextval('public.positions_id_seq'::regclass);


--
-- TOC entry 2984 (class 2604 OID 214436)
-- Name: project_requirement_excellers id; Type: DEFAULT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.project_requirement_excellers ALTER COLUMN id SET DEFAULT nextval('public.project_requirement_excellers_id_seq'::regclass);


--
-- TOC entry 2983 (class 2604 OID 214425)
-- Name: project_requirement_flows id; Type: DEFAULT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.project_requirement_flows ALTER COLUMN id SET DEFAULT nextval('public.project_requirement_flows_id_seq'::regclass);


--
-- TOC entry 2981 (class 2604 OID 214361)
-- Name: project_requirement_items id; Type: DEFAULT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.project_requirement_items ALTER COLUMN id SET DEFAULT nextval('public.project_requirement_items_id_seq'::regclass);


--
-- TOC entry 2982 (class 2604 OID 214414)
-- Name: project_requirement_states id; Type: DEFAULT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.project_requirement_states ALTER COLUMN id SET DEFAULT nextval('public.project_requirement_states_id_seq'::regclass);


--
-- TOC entry 2967 (class 2604 OID 173494)
-- Name: project_requirements id; Type: DEFAULT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.project_requirements ALTER COLUMN id SET DEFAULT nextval('public.project_requirements_id_seq'::regclass);


--
-- TOC entry 2966 (class 2604 OID 173483)
-- Name: projects id; Type: DEFAULT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.projects ALTER COLUMN id SET DEFAULT nextval('public.projects_id_seq'::regclass);


--
-- TOC entry 2985 (class 2604 OID 222551)
-- Name: skill_type_skills id; Type: DEFAULT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.skill_type_skills ALTER COLUMN id SET DEFAULT nextval('public.skill_type_skills_id_seq'::regclass);


--
-- TOC entry 2970 (class 2604 OID 173532)
-- Name: skill_types id; Type: DEFAULT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.skill_types ALTER COLUMN id SET DEFAULT nextval('public.skill_types_id_seq'::regclass);


--
-- TOC entry 2969 (class 2604 OID 173521)
-- Name: skills id; Type: DEFAULT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.skills ALTER COLUMN id SET DEFAULT nextval('public.skills_id_seq'::regclass);


--
-- TOC entry 2963 (class 2604 OID 173453)
-- Name: user_permissions id; Type: DEFAULT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.user_permissions ALTER COLUMN id SET DEFAULT nextval('public.user_permissions_id_seq'::regclass);


--
-- TOC entry 2958 (class 2604 OID 173417)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 3180 (class 0 OID 173499)
-- Dependencies: 213
-- Data for Name: addresses; Type: TABLE DATA; Schema: public; Owner: temp
--

COPY public.addresses (id, email, postal_code, country, city, state, zip_code, sub_city, woreda, house_no, home_phone, cell_phone, work_phone, created_by, modified_by, deleted_at, created_at, updated_at, street_no) FROM stdin;
16	edc@excellerentsolutions.com	123456	Ethiopia	Addis Ababa	Shewa	654321	Bole	07	12345	\N	\N	\N	1	1	\N	2021-05-26 22:48:31.225734	2021-05-26 23:10:38.426461	1245
17	edc@excellerentsolutions.com	89	98	89	9887697869	89	98	98	98	\N	\N	\N	1	1	\N	2021-05-26 23:13:42.281829	2021-05-26 23:30:15.074767	98
18	peo@excellerentsolutions.com		USA	Pittsburgh	Pennsylvania	876				\N	\N	\N	1	\N	\N	2021-05-27 00:28:43.405916	2021-05-27 00:28:43.405916	87
19	contact.nathnael@gmail.com	110117	ET	Addis Ababa			Yeka	07	282	\N	\N	\N	1	\N	\N	2021-05-28 13:21:12.85578	2021-05-28 13:21:12.85578	
20	contact.nathnael@gmail.com	110117	ET	Addis Ababa			Yeka	07	282	\N	\N	\N	1	\N	\N	2021-05-28 13:22:16.65615	2021-05-28 13:22:16.65615	
21	contact.nathnael@gmail.com	110117	ET	Addis Ababa			Yeka	07	282	\N	\N	\N	1	\N	\N	2021-05-28 13:28:48.174288	2021-05-28 13:28:48.174288	
22	contact.nathnael@gmail.com	110117	ET	Addis Ababa			Yeka	07	282	\N	\N	\N	1	\N	\N	2021-05-28 13:30:59.68751	2021-05-28 13:30:59.68751	
23	contact.nathnael@gmail.com	110117	ET	Addis Ababa			Yeka	07	282	\N	\N	\N	1	\N	\N	2021-05-28 13:36:02.803298	2021-05-28 13:36:02.803298	
24	contact.nathnael@gmail.com	110117	ET	Addis Ababa			Yeka	07	282	\N	\N	\N	1	\N	\N	2021-05-28 13:38:15.937335	2021-05-28 13:38:15.937335	
25	contact.nathnael@gmail.com	110117	ET	Addis Ababa			Yeka	07	282	\N	\N	\N	1	\N	\N	2021-05-28 13:40:45.635081	2021-05-28 13:40:45.635081	
26	contact.nathnael@gmail.com	123456	Ethiopia	Addis Ababa			Yeka	07	282	251911474539	251911474539	251911474539	1	1	\N	2021-05-28 13:46:20.592662	2021-05-28 17:09:44.985653	
27	contact@xenex.com	1	United States of America (the)	Pittsburgh	Penssylvenya	123456				\N	123456789	123456789	1	1	\N	2021-05-29 08:29:07.194108	2021-05-29 09:10:03.986513	1234
28	pascal.meyers@nohippo.com	123456	Belgium	Brussels	Brussels	123456				\N	+1234567890	+1234567890	1	\N	\N	2021-07-02 20:29:22.614968	2021-07-02 20:29:22.614968	123456
29	abenezer@gmail.com	123456	Ethiopia	Addis Ababa			Bole	01	123	1234567890	1234567890	1234567890	1	\N	\N	2021-07-10 16:51:17.385286	2021-07-10 16:51:17.385286	
30	rekik@gmail.com	123456	Ethiopia	Addis Ababa			Bole	01	123	1234567890	1234567890	1234567890	1	\N	\N	2021-07-10 16:53:11.787167	2021-07-10 16:53:11.787167	
31	rediet@gmail.com	123456	Ethiopia	Addis Ababa			Bole	01	123	1234567890	1234567890	1234567890	1	\N	\N	2021-07-10 16:54:15.465832	2021-07-10 16:54:15.465832	
32	henock@gmail.com	123456	Ethiopia	Addis Ababa			Bole	01	123	1234567890	1234567890	1234567890	1	\N	\N	2021-07-10 16:56:56.513968	2021-07-10 16:56:56.513968	
33	misikir@gmail.com	123456	Ethiopia	Addis Ababa			Bole	01	123	1234567890	1234567890	1234567890	1	\N	\N	2021-07-10 16:58:13.903363	2021-07-10 16:58:13.903363	
34	temesgen@gmail.com	123456	Ethiopia	Addis Ababa			Bole	01	123	1234567890	1234567890	1234567890	1	\N	\N	2021-07-10 17:00:37.771438	2021-07-10 17:00:37.771438	
35	abdi@gmail.com	123456	Ethiopia	Addis Ababa			Bole	01	123	1234567890	1234567890	1234567890	1	\N	\N	2021-07-10 17:01:36.049968	2021-07-10 17:01:36.049968	
36	dawit@gmail.com	123456	Ethiopia	Addis Ababa			Bole	01	123	1234567890	1234567890	1234567890	1	\N	\N	2021-07-10 17:02:38.19056	2021-07-10 17:02:38.19056	
37	nejat@gmail.com	123456	Ethiopia	Addis Ababa			Bole	01	123	1234567890	1234567890	1234567890	1	\N	\N	2021-07-10 17:03:53.715112	2021-07-10 17:03:53.715112	
38	tewodros@gmail.com	123456	Ethiopia	Addis Ababa			Bole	01	123	1234567890	1234567890	1234567890	1	\N	\N	2021-07-10 17:05:35.985205	2021-07-10 17:05:35.985205	
39	edimondi@gmail.com	123456	Ethiopia	Addis Ababa			Bole	01	123	1234567890		1234567890	1	\N	\N	2021-07-10 17:11:32.184684	2021-07-10 17:11:32.184684	
40	amanuel@gmail.com	123456	Ethiopia	Addis Ababa			Bole	01	123	1234567890	1234567890	1234567890	1	\N	\N	2021-07-10 17:12:39.593262	2021-07-10 17:12:39.593262	
41	binyam@gmail.com	123456	Ethiopia	Addis Ababa			Bole	01	123	1234567890	1234567890	1234567890	1	\N	\N	2021-07-10 17:13:38.673842	2021-07-10 17:13:38.673842	
42	yonathan@gmail.com	123456	Ethiopia	Addis Ababa			Bole	01	123	1234567890	1234567890	1234567890	1	\N	\N	2021-07-10 22:45:58.638827	2021-07-10 22:45:58.638827	
43	wondwosen@gmail.com	123456	Ethiopia	Addis Ababa			Bole	01	123	1234567890	1234567890	1234567890	1	\N	\N	2021-07-10 22:47:14.192748	2021-07-10 22:47:14.192748	
\.


--
-- TOC entry 3164 (class 0 OID 173404)
-- Dependencies: 197
-- Data for Name: ar_internal_metadata; Type: TABLE DATA; Schema: public; Owner: temp
--

COPY public.ar_internal_metadata (key, value, created_at, updated_at) FROM stdin;
environment	development	2021-05-22 18:40:29.492298	2021-05-22 18:40:29.492298
\.


--
-- TOC entry 3174 (class 0 OID 173469)
-- Dependencies: 207
-- Data for Name: clients; Type: TABLE DATA; Schema: public; Owner: temp
--

COPY public.clients (id, name, rep_name, address_id, status, created_by, modified_by, deleted_at, created_at, updated_at) FROM stdin;
1	Xenex	John Harper	27	2	1	\N	\N	2021-05-29 08:29:07.314995	2021-05-29 08:55:31.366072
2	noHippo	Pascal Meyers	28	3	1	\N	\N	2021-07-02 20:29:22.770255	2021-07-02 20:29:22.770255
\.


--
-- TOC entry 3198 (class 0 OID 173605)
-- Dependencies: 231
-- Data for Name: duty_stations; Type: TABLE DATA; Schema: public; Owner: temp
--

COPY public.duty_stations (id, name, address_id, created_by, modified_by, deleted_at, created_at, updated_at) FROM stdin;
25	Ethiopia Delivery Center	17	1	\N	\N	2021-05-26 23:13:42.378504	2021-05-26 23:13:42.378504
26	Pittsburgh Excellerent Office	18	1	\N	\N	2021-05-27 00:28:43.512882	2021-05-27 00:28:43.512882
\.


--
-- TOC entry 3200 (class 0 OID 173617)
-- Dependencies: 233
-- Data for Name: employment_types; Type: TABLE DATA; Schema: public; Owner: temp
--

COPY public.employment_types (id, name, description, created_by, modified_by, deleted_at, created_at, updated_at) FROM stdin;
2	FTE	Full Time Employee	1	1	\N	2021-05-26 23:58:33.946375	2021-05-27 00:08:37.775075
3	PTE	Part Time Employee	1	\N	\N	2021-05-27 00:09:17.486771	2021-05-27 00:09:17.486771
\.


--
-- TOC entry 3194 (class 0 OID 173586)
-- Dependencies: 227
-- Data for Name: exceller_assignments; Type: TABLE DATA; Schema: public; Owner: temp
--

COPY public.exceller_assignments (id, exceller_id, project_id, skill_id, start_date, end_date, status, created_by, modified_by, deleted_at, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 3204 (class 0 OID 206172)
-- Dependencies: 237
-- Data for Name: exceller_interview_items; Type: TABLE DATA; Schema: public; Owner: temp
--

COPY public.exceller_interview_items (id, exceller_interview_id, interview_criteria_id, score, comment, created_by, modified_by, deleted_at, created_at, updated_at) FROM stdin;
33	42	19	3.5	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 21:44:22.270799	2021-07-10 21:45:22.041475
34	42	20	4	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 21:44:22.291391	2021-07-10 21:45:34.791678
6	37	17	4	Has deep knowledge of the skill required	1	\N	\N	2021-07-10 19:54:47.039291	2021-07-10 19:58:39.520851
7	37	18	2	Has mediocre knowledge of the skill required	1	\N	\N	2021-07-10 19:54:47.052509	2021-07-10 19:59:19.104228
9	37	20	3	Has an average knowledge of the required skill	1	\N	\N	2021-07-10 19:54:47.096419	2021-07-10 20:01:18.434628
8	37	19	3	Has an average knowledge of the required skill	1	\N	\N	2021-07-10 19:54:47.07664	2021-07-10 20:01:30.145853
5	37	16	3	Has an average knowledge of the skill required	1	\N	\N	2021-07-10 19:54:47.003974	2021-07-10 20:01:46.474729
10	38	16	3	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 20:06:39.311552	2021-07-10 20:07:19.753613
11	38	17	5	Has an deep knowledge of the skill required\t	1	\N	\N	2021-07-10 20:06:39.333194	2021-07-10 20:07:49.145978
12	38	18	3	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 20:06:39.355696	2021-07-10 20:08:06.388501
35	43	16	4	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 21:46:20.636853	2021-07-10 21:46:35.917224
13	38	19	4	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 20:06:39.372115	2021-07-10 20:08:21.988222
14	38	20	3	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 20:06:39.403642	2021-07-10 20:08:39.426111
15	39	16	4	Has a deep knowledge of the skill required\t	1	\N	\N	2021-07-10 20:16:13.911613	2021-07-10 20:16:38.844823
16	39	17	5	Has an excellent knowledge of the skill required\t	1	\N	\N	2021-07-10 20:16:13.932965	2021-07-10 20:17:15.714194
17	39	18	3	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 20:16:13.952887	2021-07-10 20:17:24.620287
18	39	19	4	Has a deep knowledge of the skill required\t	1	\N	\N	2021-07-10 20:16:13.974824	2021-07-10 20:17:38.924308
19	39	20	3	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 20:16:13.995762	2021-07-10 20:17:53.005183
20	40	16	4	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 20:18:03.194466	2021-07-10 20:18:18.465157
21	40	17	4	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 20:18:03.213832	2021-07-10 20:18:28.03158
22	40	18	4	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 20:18:03.23315	2021-07-10 20:18:38.356024
23	40	19	4	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 20:18:03.251808	2021-07-10 20:18:47.677668
24	40	20	4	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 20:18:03.26458	2021-07-10 20:19:00.63166
25	41	16	3	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 20:20:55.353716	2021-07-10 21:41:35.303279
26	41	17	4	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 20:20:55.367449	2021-07-10 21:41:45.858392
27	41	18	3	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 20:20:55.386142	2021-07-10 21:41:58.794732
28	41	19	4	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 20:20:55.405965	2021-07-10 21:42:09.259975
29	41	20	4	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 20:20:55.429365	2021-07-10 21:42:21.233378
30	42	16	3	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 21:44:22.147621	2021-07-10 21:44:38.149718
31	42	17	4	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 21:44:22.231563	2021-07-10 21:44:50.626189
32	42	18	3	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 21:44:22.246977	2021-07-10 21:45:04.034279
36	43	17	5	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 21:46:20.650275	2021-07-10 21:46:47.823529
37	43	18	3	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 21:46:20.66535	2021-07-10 21:46:57.577775
38	43	19	3	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 21:46:20.67848	2021-07-10 21:47:11.219375
39	43	20	3	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 21:46:20.693446	2021-07-10 21:47:19.66577
40	44	16	4	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 21:47:29.694342	2021-07-10 21:47:43.216702
41	44	17	3.5	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 21:47:29.708026	2021-07-10 21:47:56.803378
42	44	18	3	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 21:47:29.719893	2021-07-10 21:48:08.810956
43	44	19	4	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 21:47:29.730928	2021-07-10 21:48:47.874431
44	44	20	3	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 21:47:29.745726	2021-07-10 21:48:56.659592
45	45	16	4	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 21:49:27.882624	2021-07-10 21:49:37.383916
46	45	17	5	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 21:49:27.895845	2021-07-10 21:49:51.391887
47	45	18	3	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 21:49:27.909729	2021-07-10 21:50:01.949324
48	45	19	3	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 21:49:27.929018	2021-07-10 21:50:11.596991
49	45	20	4	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 21:49:27.942673	2021-07-10 21:50:19.77762
50	46	16	4	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 21:51:50.076138	2021-07-10 21:52:06.668848
51	46	17	4	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 21:51:50.08822	2021-07-10 21:52:21.375559
52	46	18	3.5	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 21:51:50.123871	2021-07-10 21:52:31.609894
53	46	19	4	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 21:51:50.178775	2021-07-10 21:52:44.835797
54	46	20	3	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 21:51:50.193564	2021-07-10 21:53:10.535534
55	47	16	4	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 21:53:58.428085	2021-07-10 21:54:14.842647
59	47	20	4	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 21:53:58.508789	2021-07-10 21:54:35.43297
57	47	18	3	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 21:53:58.460282	2021-07-10 21:54:24.027443
56	47	17	4.5	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 21:53:58.443858	2021-07-10 21:54:47.528484
58	47	19	3.5	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 21:53:58.489324	2021-07-10 21:54:58.496989
60	48	16	4	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 21:55:15.237038	2021-07-10 21:55:27.124729
61	48	17	4.5	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 21:55:15.253993	2021-07-10 21:55:40.523707
62	48	18	3.5	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 21:55:15.268481	2021-07-10 21:55:49.949556
63	48	19	3.5	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 21:55:15.290641	2021-07-10 21:56:01.907286
64	48	20	4	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 21:55:15.302775	2021-07-10 21:56:11.816146
65	49	16	4	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 21:56:42.333095	2021-07-10 21:56:55.96196
66	49	17	4.5	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 21:56:42.346099	2021-07-10 21:57:06.030202
67	49	18	3.5	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 21:56:42.358272	2021-07-10 21:57:17.446109
69	49	20	3.5	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 21:56:42.383099	2021-07-10 21:57:28.530667
68	49	19	4	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 21:56:42.371249	2021-07-10 21:57:38.750672
70	50	16	3.5	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 21:58:10.944038	2021-07-10 21:58:34.305998
71	50	17	4.5	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 21:58:10.957836	2021-07-10 21:58:44.85761
72	50	18	3	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 21:58:10.975806	2021-07-10 21:58:54.541915
73	50	19	3.5	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 21:58:11.003701	2021-07-10 21:59:05.368129
74	50	20	4	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 21:58:11.016368	2021-07-10 22:00:33.603645
75	51	16	3.5	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 22:05:03.140469	2021-07-10 22:05:14.391509
76	51	17	3	Has an average knowledge of the skill required\t	1	\N	\N	2021-07-10 22:05:03.153381	2021-07-10 22:05:34.68179
77	51	18	3	Has an average knowledge on the required skill	1	\N	\N	2021-07-10 22:05:03.175491	2021-07-10 22:10:11.019938
79	51	20	2	Has an average knowledge of the skill required	1	\N	\N	2021-07-10 22:05:03.200364	2021-07-10 22:10:51.493613
78	51	19	2	Has an average knowledge of the skill required	1	\N	\N	2021-07-10 22:05:03.186384	2021-07-10 22:11:21.614427
84	52	20	2.5	Has an average knowledge of the skill required	1	\N	\N	2021-07-10 22:12:39.687421	2021-07-10 22:12:54.449651
83	52	19	2	Has an average knowledge of the skill required	1	\N	\N	2021-07-10 22:12:39.66846	2021-07-10 22:13:08.690416
82	52	18	2.5	Has an average knowledge of the skill required	1	\N	\N	2021-07-10 22:12:39.645511	2021-07-10 22:13:39.496083
81	52	17	3	Has an average knowledge of the skill required	1	\N	\N	2021-07-10 22:12:39.620092	2021-07-10 22:13:52.761576
80	52	16	3	Has an average knowledge of the skill required	1	\N	\N	2021-07-10 22:12:39.597939	2021-07-10 22:14:06.040357
89	53	20	3	Has an average knowledge of the required skill	1	\N	\N	2021-07-10 22:14:29.629979	2021-07-10 22:25:48.500346
88	53	19	3	Has an average knowledge of the required skill\t	1	\N	\N	2021-07-10 22:14:29.613477	2021-07-10 22:41:08.056622
87	53	18	2.5	Has an average knowledge of the required skill\t	1	\N	\N	2021-07-10 22:14:29.59668	2021-07-10 22:41:16.684183
86	53	17	4.5	Has an average knowledge of the required skill\t	1	\N	\N	2021-07-10 22:14:29.578377	2021-07-10 22:41:30.479377
85	53	16	3	Has an average knowledge of the required skill\t	1	\N	\N	2021-07-10 22:14:29.554712	2021-07-10 22:42:20.2192
94	54	20	3.5	Has an average knowledge of the required skill\t	1	\N	\N	2021-07-10 22:42:41.414435	2021-07-10 22:42:51.632341
93	54	19	3.5	Has an average knowledge of the required skill\t	1	\N	\N	2021-07-10 22:42:41.391596	2021-07-10 22:43:00.77445
92	54	18	3	Has an average knowledge of the required skill\t	1	\N	\N	2021-07-10 22:42:41.377155	2021-07-10 22:43:09.350185
91	54	17	4.5	Has an average knowledge of the required skill\t	1	\N	\N	2021-07-10 22:42:41.362027	2021-07-10 22:43:18.821085
90	54	16	3	Has an average knowledge of the required skill\t	1	\N	\N	2021-07-10 22:42:41.346904	2021-07-10 22:43:26.416796
99	55	20	3.5	Has an average knowledge of the required skill\t	1	\N	\N	2021-07-10 22:44:49.04989	2021-07-10 22:48:48.118594
98	55	19	3	Has an average knowledge of the required skill\t	1	\N	\N	2021-07-10 22:44:49.015362	2021-07-10 22:48:57.753482
97	55	18	3	Has an average knowledge of the required skill\t	1	\N	\N	2021-07-10 22:44:48.984784	2021-07-10 22:49:13.015982
96	55	17	4	Has an average knowledge of the required skill\t	1	\N	\N	2021-07-10 22:44:48.964507	2021-07-10 22:49:23.029903
95	55	16	2	Has an average knowledge of the required skill\t	1	\N	\N	2021-07-10 22:44:48.940319	2021-07-10 22:49:34.880954
104	56	20	2	Has an average knowledge of the required skill\t	1	\N	\N	2021-07-10 22:49:50.973185	2021-07-10 22:50:00.954323
103	56	19	3	Has an average knowledge of the required skill\t	1	\N	\N	2021-07-10 22:49:50.952156	2021-07-10 22:50:10.723573
102	56	18	1	Has an average knowledge of the required skill\t	1	\N	\N	2021-07-10 22:49:50.926864	2021-07-10 22:50:19.236389
101	56	17	3	Has an average knowledge of the required skill\t	1	\N	\N	2021-07-10 22:49:50.90698	2021-07-10 22:50:26.699967
100	56	16	3	Has an average knowledge of the required skill\t	1	\N	\N	2021-07-10 22:49:50.87098	2021-07-10 22:50:35.006625
109	57	20	2	Has an average knowledge of the required skill\t	1	\N	\N	2021-07-10 22:51:27.107437	2021-07-10 22:51:39.986762
108	57	19	2	Has an average knowledge in the skill required	1	\N	\N	2021-07-10 22:51:27.087599	2021-07-10 22:52:06.91388
107	57	18	1	Has an average knowledge in the skill required	1	\N	\N	2021-07-10 22:51:27.07443	2021-07-10 22:52:14.206327
106	57	17	3	Has an average knowledge in the skill required	1	\N	\N	2021-07-10 22:51:27.058286	2021-07-10 22:52:23.678529
105	57	16	2	Has an average knowledge in the skill required	1	\N	\N	2021-07-10 22:51:27.04617	2021-07-10 22:52:31.513422
114	58	20	2	Has an average knowledge in the skill required	1	\N	\N	2021-07-10 22:52:39.974629	2021-07-10 22:52:48.852282
113	58	19	2	Has an average knowledge in the skill required	1	\N	\N	2021-07-10 22:52:39.958411	2021-07-10 22:52:56.447722
112	58	18	1	Has an average knowledge in the skill required	1	\N	\N	2021-07-10 22:52:39.937939	2021-07-10 22:53:05.273635
111	58	17	3	Has an average knowledge in the skill required	1	\N	\N	2021-07-10 22:52:39.904942	2021-07-10 22:53:12.592665
110	58	16	2	Has an average knowledge in the skill required	1	\N	\N	2021-07-10 22:52:39.88769	2021-07-10 22:53:20.350136
119	59	20	2	Has an average knowledge in the skill required	1	\N	\N	2021-07-10 22:55:08.504339	2021-07-10 22:55:17.880085
118	59	19	2	Has an average knowledge in the skill required	1	\N	\N	2021-07-10 22:55:08.48916	2021-07-10 22:55:26.200014
117	59	18	1	Has an average knowledge in the skill required	1	\N	\N	2021-07-10 22:55:08.462333	2021-07-10 22:56:56.821634
116	59	17	3	Has an average knowledge in the skill required	1	\N	\N	2021-07-10 22:55:08.445507	2021-07-10 22:57:04.012317
115	59	16	2	Has an average knowledge in the skill required	1	\N	\N	2021-07-10 22:55:08.42923	2021-07-10 22:57:11.370479
124	60	20	3	Has an average knowledge in the skill required	1	\N	\N	2021-07-10 22:57:37.029214	2021-07-10 22:57:46.253935
123	60	19	3	Has an average knowledge in the skill required	1	\N	\N	2021-07-10 22:57:37.015087	2021-07-10 22:57:55.379791
122	60	18	2	Has an average knowledge in the skill required	1	\N	\N	2021-07-10 22:57:37.0006	2021-07-10 22:58:04.406121
121	60	17	3	Has an average knowledge in the skill required	1	\N	\N	2021-07-10 22:57:36.982885	2021-07-10 22:58:13.468218
120	60	16	3	Has an average knowledge in the skill required	1	\N	\N	2021-07-10 22:57:36.971007	2021-07-10 22:58:21.190627
129	61	20	4	Has an average knowledge in the skill required	1	\N	\N	2021-07-10 23:02:20.774149	2021-07-10 23:02:36.273156
128	61	19	3.5	Has an average knowledge in the skill required	1	\N	\N	2021-07-10 23:02:20.74895	2021-07-10 23:02:46.049488
127	61	18	3	Has an average knowledge in the skill required	1	\N	\N	2021-07-10 23:02:20.727457	2021-07-10 23:02:54.041156
126	61	17	4	Has an average knowledge in the skill required	1	\N	\N	2021-07-10 23:02:20.71099	2021-07-10 23:03:01.966184
125	61	16	3	Has an average knowledge in the skill required	1	\N	\N	2021-07-10 23:02:20.699133	2021-07-10 23:03:10.710824
134	62	20	4	Has an average knowledge in the skill required	1	\N	\N	2021-07-10 23:03:20.109939	2021-07-10 23:03:29.155647
133	62	19	3.5	Has an average knowledge in the skill required	1	\N	\N	2021-07-10 23:03:20.09023	2021-07-10 23:03:38.190689
132	62	18	3	Has an average knowledge in the skill required	1	\N	\N	2021-07-10 23:03:20.069944	2021-07-10 23:03:45.635975
131	62	17	4	Has an average knowledge in the skill required	1	\N	\N	2021-07-10 23:03:20.048015	2021-07-10 23:03:53.997759
130	62	16	3.5	Has an average knowledge in the skill required	1	\N	\N	2021-07-10 23:03:20.029972	2021-07-10 23:04:03.819897
139	63	20	4	Has an average knowledge in the skill required	1	\N	\N	2021-07-10 23:04:22.711831	2021-07-10 23:04:30.828655
138	63	19	3.5	Has an average knowledge in the skill required	1	\N	\N	2021-07-10 23:04:22.692796	2021-07-10 23:04:38.667411
137	63	18	3	Has an average knowledge in the skill required	1	\N	\N	2021-07-10 23:04:22.673573	2021-07-10 23:04:45.929501
136	63	17	4	Has an average knowledge in the skill required	1	\N	\N	2021-07-10 23:04:22.656477	2021-07-10 23:04:52.709957
135	63	16	4	Has an average knowledge in the skill required	1	\N	\N	2021-07-10 23:04:22.639437	2021-07-10 23:04:59.552779
144	64	20	3	Has an average knowledge in the skill required	1	\N	\N	2021-07-10 23:05:07.835153	2021-07-10 23:05:17.211286
143	64	19	4	Has an average knowledge in the skill required	1	\N	\N	2021-07-10 23:05:07.818854	2021-07-10 23:05:25.468536
142	64	18	3	Has an average knowledge in the skill required	1	\N	\N	2021-07-10 23:05:07.799239	2021-07-10 23:05:33.969377
141	64	17	4	Has an average knowledge in the skill required	1	\N	\N	2021-07-10 23:05:07.783697	2021-07-10 23:05:42.111292
140	64	16	3	Has an average knowledge in the skill required	1	\N	\N	2021-07-10 23:05:07.766482	2021-07-10 23:05:51.211733
149	65	25	3.5	Candidate has average knowledge of the required skill	1	\N	\N	2021-07-11 11:46:16.143476	2021-07-11 11:46:49.400842
148	65	24	3	Candidate has average knowledge of the required skill	1	\N	\N	2021-07-11 11:46:16.126004	2021-07-11 11:46:58.658311
147	65	23	4	Candidate has average knowledge of the required skill	1	\N	\N	2021-07-11 11:46:16.10821	2021-07-11 11:47:08.969445
146	65	22	2	Candidate has average knowledge of the required skill	1	\N	\N	2021-07-11 11:46:16.092111	2021-07-11 11:47:20.254419
145	65	21	2.5	Candidate has average knowledge of the required skill	1	\N	\N	2021-07-11 11:46:16.069077	2021-07-11 11:47:43.491415
\.


--
-- TOC entry 3202 (class 0 OID 206164)
-- Dependencies: 235
-- Data for Name: exceller_interviews; Type: TABLE DATA; Schema: public; Owner: temp
--

COPY public.exceller_interviews (id, exceller_id, interviewer_id, interview_id, created_by, modified_by, deleted_at, created_at, updated_at) FROM stdin;
37	7	8	13	\N	\N	\N	2021-07-10 19:54:46.926116	2021-07-10 19:54:46.926116
38	7	13	13	\N	\N	\N	2021-07-10 20:06:39.18902	2021-07-10 20:06:39.18902
39	8	11	13	\N	\N	\N	2021-07-10 20:16:13.890713	2021-07-10 20:16:13.890713
40	8	12	13	\N	\N	\N	2021-07-10 20:18:03.149785	2021-07-10 20:18:03.149785
41	9	13	13	\N	\N	\N	2021-07-10 20:20:55.246478	2021-07-10 20:20:55.246478
42	9	11	13	\N	\N	\N	2021-07-10 21:44:21.998593	2021-07-10 21:44:21.998593
43	10	8	13	\N	\N	\N	2021-07-10 21:46:20.516968	2021-07-10 21:46:20.516968
44	10	13	13	\N	\N	\N	2021-07-10 21:47:29.590624	2021-07-10 21:47:29.590624
45	11	12	13	\N	\N	\N	2021-07-10 21:49:27.776357	2021-07-10 21:49:27.776357
46	11	13	13	\N	\N	\N	2021-07-10 21:51:49.946042	2021-07-10 21:51:49.946042
47	12	8	13	\N	\N	\N	2021-07-10 21:53:58.404282	2021-07-10 21:53:58.404282
48	12	11	13	\N	\N	\N	2021-07-10 21:55:15.112827	2021-07-10 21:55:15.112827
49	13	8	13	\N	\N	\N	2021-07-10 21:56:42.220797	2021-07-10 21:56:42.220797
50	13	12	13	\N	\N	\N	2021-07-10 21:58:10.833906	2021-07-10 21:58:10.833906
51	14	8	13	\N	\N	\N	2021-07-10 22:05:03.032752	2021-07-10 22:05:03.032752
52	14	11	13	\N	\N	\N	2021-07-10 22:12:39.486477	2021-07-10 22:12:39.486477
53	15	13	13	\N	\N	\N	2021-07-10 22:14:29.448379	2021-07-10 22:14:29.448379
54	15	12	13	\N	\N	\N	2021-07-10 22:42:41.324002	2021-07-10 22:42:41.324002
55	16	8	13	\N	\N	\N	2021-07-10 22:44:48.916218	2021-07-10 22:44:48.916218
56	16	21	13	\N	\N	\N	2021-07-10 22:49:50.831463	2021-07-10 22:49:50.831463
57	17	22	13	\N	\N	\N	2021-07-10 22:51:26.938824	2021-07-10 22:51:26.938824
58	17	11	13	\N	\N	\N	2021-07-10 22:52:39.771762	2021-07-10 22:52:39.771762
59	18	13	13	\N	\N	\N	2021-07-10 22:55:08.324591	2021-07-10 22:55:08.324591
60	18	12	13	\N	\N	\N	2021-07-10 22:57:36.850627	2021-07-10 22:57:36.850627
61	21	22	13	\N	\N	\N	2021-07-10 23:02:20.582909	2021-07-10 23:02:20.582909
62	21	11	13	\N	\N	\N	2021-07-10 23:03:20.002824	2021-07-10 23:03:20.002824
63	22	8	13	\N	\N	\N	2021-07-10 23:04:22.511847	2021-07-10 23:04:22.511847
64	22	13	13	\N	\N	\N	2021-07-10 23:05:07.654776	2021-07-10 23:05:07.654776
65	7	11	14	\N	\N	\N	2021-07-11 11:46:15.920347	2021-07-11 11:46:15.920347
\.


--
-- TOC entry 3192 (class 0 OID 173578)
-- Dependencies: 225
-- Data for Name: exceller_offers; Type: TABLE DATA; Schema: public; Owner: temp
--

COPY public.exceller_offers (id, exceller_id, position_id, response, created_by, modified_by, deleted_at, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 3186 (class 0 OID 173540)
-- Dependencies: 219
-- Data for Name: exceller_skills; Type: TABLE DATA; Schema: public; Owner: temp
--

COPY public.exceller_skills (id, exceller_id, skill_id, proficiency, created_by, modified_by, deleted_at, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 3172 (class 0 OID 173458)
-- Dependencies: 205
-- Data for Name: excellers; Type: TABLE DATA; Schema: public; Owner: temp
--

COPY public.excellers (id, first_name, father_name, grandfather_name, position_id, address_id, years_of_experience, recommended_for_id, contract_signing_date, employment_type_id, duty_station_id, status_id, created_by, modified_by, deleted_at, created_at, updated_at, dob, profile_picture_url) FROM stdin;
7	Nathnael	Getahun	Woldemariam	2	26	9	2	2021-05-28	2	25	10	1	\N	\N	2021-05-28 13:46:20.68977	2021-07-02 20:26:47.08725	1989-04-28	72021-07-02T23:26:47+03:00.png
8	Abenezer	Germande	Lida	3	29	9	3	2019-07-01	2	25	10	1	\N	\N	2021-07-10 16:51:17.43762	2021-07-10 16:51:17.43762	1991-07-10	\N
9	Rekik	Assefa		2	30	13	2	2019-07-01	2	25	10	1	\N	\N	2021-07-10 16:53:11.798781	2021-07-10 16:53:11.798781	2021-07-01	\N
10	Rediet	Tsigebrehan		2	31	13	2	2021-07-01	2	25	10	1	\N	\N	2021-07-10 16:54:15.86961	2021-07-10 16:54:15.86961	2021-07-01	\N
11	Henock	Melisse		4	32	10	4	2021-07-01	2	25	10	1	\N	\N	2021-07-10 16:56:56.613641	2021-07-10 16:56:56.613641	2021-07-01	\N
12	Misikir	Adane		4	33	9	4	2019-07-01	2	25	10	1	\N	\N	2021-07-10 16:58:14.019563	2021-07-10 16:58:14.019563	2021-07-01	\N
13	Temesgen	Sisay		4	34	10	4	2021-07-01	2	25	10	1	\N	\N	2021-07-10 17:00:37.871835	2021-07-10 17:00:37.871835	2021-07-01	\N
14	Abdi	Tolessa		10	35	10	10	2019-07-01	2	25	10	1	\N	\N	2021-07-10 17:01:36.123261	2021-07-10 17:01:36.123261	2021-07-01	\N
15	Dawit	Solomon		5	36	10	5	2019-07-01	2	25	10	1	\N	\N	2021-07-10 17:02:38.213379	2021-07-10 17:02:38.213379	2021-07-06	\N
16	Nejat	Seid		10	37	10	10	2021-07-01	2	25	10	1	\N	\N	2021-07-10 17:03:53.726484	2021-07-10 17:03:53.726484	2021-07-01	\N
17	Tewodros	Tesfa		10	38	10	10	2021-07-06	2	25	10	1	\N	\N	2021-07-10 17:05:36.105443	2021-07-10 17:05:36.105443	2021-07-01	\N
18	Edimondi	Mebratu		5	39	10	5	2021-07-01	2	25	10	1	\N	\N	2021-07-10 17:11:32.290492	2021-07-10 17:11:32.290492	2021-07-01	\N
19	Amanuel	Tedla		5	40	10	5	2021-07-01	2	25	10	1	\N	\N	2021-07-10 17:12:39.691572	2021-07-10 17:12:39.691572	1991-07-10	\N
20	Binyam	Daniel		5	41	10	5	2019-07-01	2	25	10	1	\N	\N	2021-07-10 17:13:38.780386	2021-07-10 17:13:38.780386	2021-07-01	\N
21	Yonathan	Woldeselassie		4	42	10	4	2021-07-01	2	25	10	1	\N	\N	2021-07-10 22:45:58.77374	2021-07-10 22:45:58.77374	2021-07-01	\N
22	Wondwosen	Desalegn		4	43	10	4	2021-07-06	2	25	10	1	\N	\N	2021-07-10 22:47:14.297348	2021-07-10 22:47:14.297348	1991-07-10	\N
\.


--
-- TOC entry 3190 (class 0 OID 173559)
-- Dependencies: 223
-- Data for Name: interview_criteria; Type: TABLE DATA; Schema: public; Owner: temp
--

COPY public.interview_criteria (id, interview_id, skill_id, created_by, modified_by, deleted_at, created_at, updated_at, minimum_score) FROM stdin;
6	10	3	\N	1	\N	2021-05-31 09:10:54.756358	2021-05-31 09:10:54.756358	3.0
10	12	3	\N	1	\N	2021-05-31 09:14:56.601428	2021-05-31 09:14:56.601428	3.0
11	12	5	\N	1	\N	2021-05-31 09:14:56.614481	2021-05-31 09:14:56.614481	3.5
13	11	3	\N	1	\N	2021-05-31 09:28:14.93374	2021-05-31 09:28:14.93374	3.0
14	11	5	\N	1	\N	2021-05-31 09:28:14.940806	2021-05-31 09:28:14.940806	3.5
15	3	3	\N	1	\N	2021-06-04 21:17:29.096386	2021-06-04 21:17:29.096386	4.0
16	13	13	1	\N	\N	2021-07-10 19:53:31.187064	2021-07-10 19:53:31.187064	3.0
17	13	14	1	\N	\N	2021-07-10 19:53:31.191951	2021-07-10 19:53:31.191951	4.0
18	13	15	1	\N	\N	2021-07-10 19:53:31.196738	2021-07-10 19:53:31.196738	2.0
19	13	16	1	\N	\N	2021-07-10 19:53:31.200597	2021-07-10 19:53:31.200597	3.0
20	13	17	1	\N	\N	2021-07-10 19:53:31.20401	2021-07-10 19:53:31.20401	3.0
21	14	30	1	\N	\N	2021-07-11 11:45:44.558617	2021-07-11 11:45:44.558617	3.0
22	14	31	1	\N	\N	2021-07-11 11:45:44.570396	2021-07-11 11:45:44.570396	3.0
23	14	20	1	\N	\N	2021-07-11 11:45:44.577499	2021-07-11 11:45:44.577499	3.0
24	14	22	1	\N	\N	2021-07-11 11:45:44.587302	2021-07-11 11:45:44.587302	3.0
25	14	25	1	\N	\N	2021-07-11 11:45:44.593055	2021-07-11 11:45:44.593055	3.0
\.


--
-- TOC entry 3188 (class 0 OID 173548)
-- Dependencies: 221
-- Data for Name: interviews; Type: TABLE DATA; Schema: public; Owner: temp
--

COPY public.interviews (id, name, position_id, created_by, modified_by, deleted_at, created_at, updated_at, description) FROM stdin;
13	Full-stack .NET C#/AngularJS	5	1	\N	\N	2021-07-10 19:53:31.124494	2021-07-10 19:53:31.124494	Senior Developer I - Full-stack .NET C#/AngularJS
14	Full-stack NodeJS/ReactJS	5	1	\N	\N	2021-07-11 11:45:44.553268	2021-07-11 11:45:44.553268	Interview for senior I Full-stack NodeJS/ReactJS position.
\.


--
-- TOC entry 3168 (class 0 OID 173439)
-- Dependencies: 201
-- Data for Name: permissions; Type: TABLE DATA; Schema: public; Owner: temp
--

COPY public.permissions (id, name, description, user_type, created_by, modified_by, deleted_at, created_at, updated_at) FROM stdin;
1	Projects	Projects	0	\N	\N	\N	2021-06-27 18:34:55.386088	2021-06-27 18:34:55.386088
2	Projects	Projects	1	\N	\N	\N	2021-06-27 18:34:55.517072	2021-06-27 18:34:55.517072
3	Projects	Projects	2	\N	\N	\N	2021-06-27 18:34:55.531041	2021-06-27 18:34:55.531041
4	Projects	Projects	3	\N	\N	\N	2021-06-27 18:34:55.542319	2021-06-27 18:34:55.542319
5	Excellers	Excellers	0	\N	\N	\N	2021-06-27 18:35:14.764375	2021-06-27 18:35:14.764375
6	Excellers	Excellers	1	\N	\N	\N	2021-06-27 18:35:14.805945	2021-06-27 18:35:14.805945
7	Excellers	Excellers	2	\N	\N	\N	2021-06-27 18:35:14.820736	2021-06-27 18:35:14.820736
8	Excellers	Excellers	3	\N	\N	\N	2021-06-27 18:35:14.837223	2021-06-27 18:35:14.837223
\.


--
-- TOC entry 3196 (class 0 OID 173594)
-- Dependencies: 229
-- Data for Name: positions; Type: TABLE DATA; Schema: public; Owner: temp
--

COPY public.positions (id, name, description, created_by, modified_by, deleted_at, created_at, updated_at) FROM stdin;
2	TDM	Technical Delivery Manager	1	\N	\N	2021-05-27 00:22:51.722728	2021-05-27 00:22:51.722728
3	Tech Architect	Technical Architect	1	1	\N	2021-05-27 00:23:15.666186	2021-05-27 00:23:30.018788
4	Tech Lead	Technical Lead	1	\N	\N	2021-05-27 00:23:49.253059	2021-05-27 00:23:49.253059
5	Senior Developer I	Senior Developer I	1	\N	\N	2021-05-27 00:24:05.684528	2021-05-27 00:24:05.684528
6	Senior Developer II	Senior Developer II	1	\N	\N	2021-05-27 00:24:21.922354	2021-05-27 00:24:21.922354
7	Senior Developer III	Senior Developer III	1	\N	\N	2021-05-27 00:24:32.229031	2021-05-27 00:24:32.229031
8	Developer I	Developer I	1	\N	\N	2021-05-27 00:24:52.152331	2021-05-27 00:24:52.152331
9	Developer II	Developer II	1	\N	\N	2021-05-27 00:25:02.740701	2021-05-27 00:25:02.740701
10	Developer III	Developer III	1	\N	\N	2021-05-27 00:25:11.635612	2021-05-27 00:25:11.635612
11	HR Officer	HR Officer	1	\N	\N	2021-05-27 00:39:54.455346	2021-05-27 00:39:54.455346
12	Finance Officer	Finance Officer	1	1	\N	2021-05-27 00:41:02.375586	2021-05-27 00:41:08.067103
\.


--
-- TOC entry 3212 (class 0 OID 214433)
-- Dependencies: 245
-- Data for Name: project_requirement_excellers; Type: TABLE DATA; Schema: public; Owner: temp
--

COPY public.project_requirement_excellers (id, project_requirement_id, exceller_id, state_id, performed_by, date_performed, comment, current, created_by, modified_by, deleted_at, created_at, updated_at) FROM stdin;
1	46	7	14	1	\N		t	1	\N	\N	2021-07-12 20:08:32.945397	2021-07-12 20:08:32.945397
\.


--
-- TOC entry 3210 (class 0 OID 214422)
-- Dependencies: 243
-- Data for Name: project_requirement_flows; Type: TABLE DATA; Schema: public; Owner: temp
--

COPY public.project_requirement_flows (id, project_requirement_id, name, initial_state_id, final_state_id, created_by, modified_by, deleted_at, created_at, updated_at) FROM stdin;
40	46	Preparing the candidate	24	13	\N	\N	\N	2021-07-11 09:09:42.555592	2021-07-11 09:09:42.555592
41	46	Offering candidate to client	13	14	\N	\N	\N	2021-07-11 09:12:00.406901	2021-07-11 09:12:00.406901
42	46	Scheduling noHippo interview	14	15	\N	\N	\N	2021-07-11 09:13:34.520671	2021-07-11 09:13:34.520671
43	46	Passing noHippo Interview	15	17	\N	\N	\N	2021-07-11 09:17:56.780817	2021-07-11 09:17:56.780817
44	46	Failing noHippo Interview	15	18	\N	\N	\N	2021-07-11 09:20:48.636151	2021-07-11 09:20:48.636151
45	46	Scheduling Tobania Interview	17	19	\N	\N	\N	2021-07-11 09:27:05.611258	2021-07-11 09:27:05.611258
46	46	Failing Tobania Interview	19	21	\N	\N	\N	2021-07-11 09:27:35.110546	2021-07-11 09:27:35.110546
47	46	Confirming candidate for project	20	22	\N	\N	\N	2021-07-11 09:28:46.428429	2021-07-11 09:28:46.428429
48	46	Officially onboarding candidate to project	22	23	\N	\N	\N	2021-07-11 09:29:31.441471	2021-07-11 09:29:31.441471
\.


--
-- TOC entry 3206 (class 0 OID 214358)
-- Dependencies: 239
-- Data for Name: project_requirement_items; Type: TABLE DATA; Schema: public; Owner: temp
--

COPY public.project_requirement_items (id, project_requirement_id, skill_id, minimum_score, description, created_by, modified_by, deleted_at, created_at, updated_at) FROM stdin;
1	44	3	3	Ruby on Rails Description	1	\N	\N	2021-07-04 19:03:31.34373	2021-07-04 19:03:31.34373
2	44	4	3	OOAD	1	\N	\N	2021-07-04 19:03:31.361016	2021-07-04 19:03:31.361016
3	45	7	3	MSSQL	1	\N	\N	2021-07-10 17:29:16.458432	2021-07-10 17:29:16.458432
4	45	8	3	PostgreSQL	1	\N	\N	2021-07-10 17:29:16.496236	2021-07-10 17:29:16.496236
5	46	13	3	AngularJS is a JavaScript-based open-source front-end web framework for developing single-page applications. It is maintained mainly by Google and a community of individuals and corporations.	1	\N	\N	2021-07-10 23:11:04.198501	2021-07-10 23:11:04.198501
8	46	16	3	Microsoft SQL Server is a relational database management system developed by Microsoft. As a database server, it is a software product with the primary function of storing and retrieving data as requested by other software applications—which may run either on the same computer or on another computer across a network.	1	\N	\N	2021-07-10 23:11:04.285203	2021-07-10 23:11:04.285203
9	46	17	3	Azure DevOps Server is a Microsoft product that provides version control, reporting, requirements management, project management, automated builds, testing and release management capabilities. It covers the entire application lifecycle, and enables DevOps capabilities.	1	\N	\N	2021-07-10 23:11:04.302136	2021-07-10 23:11:04.302136
6	46	14	4	C# is a general-purpose, multi-paradigm programming language encompassing static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.	1	\N	\N	2021-07-10 23:11:04.261142	2021-07-11 08:35:04.999235
7	46	15	2	The Windows Communication Foundation, previously known as Indigo, is a free and open-source runtime and a set of APIs in the .NET Framework for building connected, service-oriented applications.	1	\N	\N	2021-07-10 23:11:04.272591	2021-07-11 08:35:24.071689
\.


--
-- TOC entry 3208 (class 0 OID 214411)
-- Dependencies: 241
-- Data for Name: project_requirement_states; Type: TABLE DATA; Schema: public; Owner: temp
--

COPY public.project_requirement_states (id, project_requirement_id, name, description, created_by, modified_by, deleted_at, created_at, updated_at) FROM stdin;
13	46	Ready for interview	The candidate is willing and ready to undergo the client screening process and also prepared their CV in Excellerent format.	\N	\N	\N	2021-07-11 08:46:28.883948	2021-07-11 08:46:28.883948
14	46	Offered to client	The candidate's CV and information has been shared with the client	\N	\N	\N	2021-07-11 08:47:38.567439	2021-07-11 08:47:38.567439
15	46	noHippo Intreview Scheduled	The first interview with the noHippo reps is scheduled for the candidate.	\N	\N	\N	2021-07-11 08:49:57.735928	2021-07-11 08:49:57.735928
17	46	Passed noHippo Intreview	The candidate has passed the noHippo first screening interview.	\N	\N	\N	2021-07-11 08:51:47.493747	2021-07-11 08:51:47.493747
18	46	Failed noHippo Interview	The candidate failed the noHippo first screening interview.	\N	\N	\N	2021-07-11 08:54:26.79831	2021-07-11 08:54:26.79831
19	46	Tobania Interview Scheduled	The second interview  in the screening process which is with the Tobania technical team has been scheduled.	\N	\N	\N	2021-07-11 08:56:44.332689	2021-07-11 08:56:44.332689
20	46	Passed Tobania Interview	The candidate passed the second interview in the screening process which is with the Tobania technical team.	\N	\N	\N	2021-07-11 08:58:30.541229	2021-07-11 08:58:30.541229
21	46	Failed Tobania Interview	The candidate failed the second interview in the screening process which is with the Tobania technical team.	\N	\N	\N	2021-07-11 08:58:58.236796	2021-07-11 08:58:58.236796
22	46	Confirmed	The real client has accepted the candidate.	\N	\N	\N	2021-07-11 09:03:14.003679	2021-07-11 09:03:14.003679
23	46	Officially on-boarded	The candidate has been formally onboarded to the project.	\N	\N	\N	2021-07-11 09:05:06.715141	2021-07-11 09:05:06.715141
24	46	 Potential Excellers	Candidates are automatically selected by the system as potential candidate by comparing their interview results with project requirements.	\N	\N	\N	2021-07-11 08:09:20.455407	2021-07-11 08:09:20.455407
\.


--
-- TOC entry 3178 (class 0 OID 173491)
-- Dependencies: 211
-- Data for Name: project_requirements; Type: TABLE DATA; Schema: public; Owner: temp
--

COPY public.project_requirements (id, skill_type_id, amount, created_by, modified_by, deleted_at, created_at, updated_at, project_id, start_date, end_date) FROM stdin;
34	3	3	\N	\N	\N	2021-06-21 22:00:01.605998	2021-06-24 21:18:58.87598	2	2021-06-05	2021-06-13
41	2	2	\N	\N	\N	2021-06-24 21:30:52.517565	2021-06-24 21:30:52.517565	2	2021-06-15	2021-06-25
42	5	1	\N	\N	\N	2021-06-27 22:09:41.883224	2021-06-27 22:09:41.883224	2	2021-06-01	2021-06-30
46	8	10	\N	\N	\N	2021-07-10 23:11:04.055225	2021-07-10 23:11:04.055225	3	2021-07-01	2021-09-30
\.


--
-- TOC entry 3176 (class 0 OID 173480)
-- Dependencies: 209
-- Data for Name: projects; Type: TABLE DATA; Schema: public; Owner: temp
--

COPY public.projects (id, name, client_id, status, start_date, end_date, created_by, modified_by, deleted_at, created_at, updated_at) FROM stdin;
2	Xenex Phase II (New)	1	2	2021-06-01	2021-12-31	1	1	\N	2021-05-29 09:58:31.453171	2021-05-29 10:19:52.723589
3	noHippo 9Altitude	2	4	2021-07-01	2021-08-31	1	\N	\N	2021-07-02 20:36:06.437753	2021-07-02 20:36:06.437753
\.


--
-- TOC entry 3163 (class 0 OID 173396)
-- Dependencies: 196
-- Data for Name: schema_migrations; Type: TABLE DATA; Schema: public; Owner: temp
--

COPY public.schema_migrations (version) FROM stdin;
20201118045935
20201118074453
20201118084439
20201208101053
20210119234436
20210522160828
20210522162923
20210522163602
20210522163831
20210522165836
20210522170600
20210522171006
20210522171121
20210522171900
20210522174029
20210522175250
20210522180813
20210522181622
20210522182642
20210522182926
20210522183053
20210522224047
20210524212748
20210528161458
20210529072702
20210529113214
20210529220642
20210530094848
20210530103704
20210601220731
20210601221825
20210602062027
20210610221112
20210618221731
20210626215650
20210626220255
20210626220537
20210625161729
20210629155539
20210629155807
20210629160120
20210701134421
20210701151935
\.


--
-- TOC entry 3214 (class 0 OID 222548)
-- Dependencies: 247
-- Data for Name: skill_type_skills; Type: TABLE DATA; Schema: public; Owner: temp
--

COPY public.skill_type_skills (id, skill_type_id, skill_id, created_by, modified_by, deleted_at, created_at, updated_at) FROM stdin;
1	7	12	1	\N	\N	2021-07-04 18:34:41.864857	2021-07-04 18:34:41.864857
2	7	3	1	\N	\N	2021-07-04 18:34:41.881849	2021-07-04 18:34:41.881849
3	2	4	1	\N	\N	2021-07-04 18:56:34.28675	2021-07-04 18:56:34.28675
4	2	3	1	\N	\N	2021-07-04 18:56:34.293843	2021-07-04 18:56:34.293843
5	6	8	1	\N	\N	2021-07-04 18:57:01.225397	2021-07-04 18:57:01.225397
6	6	7	1	\N	\N	2021-07-04 18:57:01.23391	2021-07-04 18:57:01.23391
7	5	9	1	\N	\N	2021-07-04 18:57:15.823174	2021-07-04 18:57:15.823174
8	4	3	1	\N	\N	2021-07-04 18:57:32.578514	2021-07-04 18:57:32.578514
9	4	5	1	\N	\N	2021-07-04 18:57:32.588016	2021-07-04 18:57:32.588016
10	3	6	1	\N	\N	2021-07-04 18:57:51.1376	2021-07-04 18:57:51.1376
11	3	4	1	\N	\N	2021-07-04 18:57:51.146321	2021-07-04 18:57:51.146321
12	8	13	1	\N	\N	2021-07-10 19:44:58.591908	2021-07-10 19:44:58.591908
13	8	14	1	\N	\N	2021-07-10 19:44:58.603815	2021-07-10 19:44:58.603815
14	8	15	1	\N	\N	2021-07-10 19:44:58.607412	2021-07-10 19:44:58.607412
15	8	16	1	\N	\N	2021-07-10 19:44:58.613791	2021-07-10 19:44:58.613791
16	8	17	1	\N	\N	2021-07-10 19:44:58.618228	2021-07-10 19:44:58.618228
17	9	25	1	\N	\N	2021-07-11 11:42:50.257034	2021-07-11 11:42:50.257034
18	9	30	1	\N	\N	2021-07-11 11:42:50.268417	2021-07-11 11:42:50.268417
19	9	31	1	\N	\N	2021-07-11 11:42:50.273233	2021-07-11 11:42:50.273233
20	9	20	1	\N	\N	2021-07-11 11:42:50.277355	2021-07-11 11:42:50.277355
21	9	22	1	\N	\N	2021-07-11 11:42:50.281417	2021-07-11 11:42:50.281417
\.


--
-- TOC entry 3184 (class 0 OID 173529)
-- Dependencies: 217
-- Data for Name: skill_types; Type: TABLE DATA; Schema: public; Owner: temp
--

COPY public.skill_types (id, name, created_by, modified_by, deleted_at, created_at, updated_at, description) FROM stdin;
8	Full-stack C#/AngularJS	1	\N	\N	2021-07-10 19:44:58.569462	2021-07-10 19:44:58.569462	Full stack developer AngularJS and .NET C#
9	Full-stack NodeJS/ReactJS	1	\N	\N	2021-07-11 11:42:50.23545	2021-07-11 11:42:50.23545	React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.                   Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.\r\n
\.


--
-- TOC entry 3182 (class 0 OID 173518)
-- Dependencies: 215
-- Data for Name: skills; Type: TABLE DATA; Schema: public; Owner: temp
--

COPY public.skills (id, name, created_by, modified_by, deleted_at, created_at, updated_at, description, default_minimum_score) FROM stdin;
29	WordPress	1	\N	\N	2021-07-11 11:33:07.015945	2021-07-11 11:33:07.015945	WordPress is a free and open-source content management system written in PHP and paired with a MySQL or MariaDB database. Features include a plugin architecture and a template system, referred to within WordPress as Themes. 	3
30	HTML5	1	\N	\N	2021-07-11 11:33:46.202024	2021-07-11 11:33:46.202024	HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and last major HTML version that is a World Wide Web Consortium recommendation. The current specification is known as the HTML Living Standard.	3
31	CSS3	1	\N	\N	2021-07-11 11:34:09.714115	2021-07-11 11:34:09.714115	Cascading Style Sheets Level 3 (CSS3) is the iteration of the CSS standard used in the styling and formatting of Web pages. CSS3 incorporates the CSS2 standard with some changes and improvements. A key change is the division of standard into separate modules, which makes it easier to learn and understand.	3
32	SASS	1	\N	\N	2021-07-11 11:34:57.150966	2021-07-11 11:34:57.150966	Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. SassScript is the scripting language itself. Sass consists of two syntaxes. The original syntax, called "the indented syntax," uses a syntax similar to Haml.	3
33	SCSS	1	\N	\N	2021-07-11 11:35:27.488077	2021-07-11 11:35:27.488077	SCSS : Syntactically Awesome Style Sheet is the superset of CSS. SCSS is the more advanced version of CSS. SCSS was designed by Hampton Catlin and was developed by Chris Eppstein and Natalie Weizenbaum. Due to its advanced features it is often termed as Sassy CSS. SCSS have file extension of .	3
34	CodeIgniter	1	\N	\N	2021-07-11 11:36:11.020461	2021-07-11 11:36:11.020461	CodeIgniter is an open-source software rapid development web framework, for use in building dynamic web sites with PHP. 	3
35	EntityFramwork	1	\N	\N	2021-07-11 11:36:42.208408	2021-07-11 11:36:42.208408	Entity Framework is an open source object–relational mapping framework for ADO.NET. It was originally shipped as an integral part of .NET Framework. Starting with Entity Framework version 6, it has been delivered separately from the .NET Framework.	3
13	AngularJS	1	\N	\N	2021-07-10 19:16:31.454072	2021-07-10 19:16:31.454072	AngularJS is a JavaScript-based open-source front-end web framework for developing single-page applications. It is maintained mainly by Google and a community of individuals and corporations.	3
14	.NET C#	1	\N	\N	2021-07-10 19:30:40.559745	2021-07-10 19:30:40.559745	C# is a general-purpose, multi-paradigm programming language encompassing static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.	3
15	WCF	1	\N	\N	2021-07-10 19:31:31.477608	2021-07-10 19:31:31.477608	The Windows Communication Foundation, previously known as Indigo, is a free and open-source runtime and a set of APIs in the .NET Framework for building connected, service-oriented applications.	3
16	MSSQL	1	\N	\N	2021-07-10 19:32:19.97652	2021-07-10 19:32:19.97652	Microsoft SQL Server is a relational database management system developed by Microsoft. As a database server, it is a software product with the primary function of storing and retrieving data as requested by other software applications—which may run either on the same computer or on another computer across a network.	3
17	Azure DevOps	1	\N	\N	2021-07-10 19:33:01.036772	2021-07-10 19:33:01.036772	Azure DevOps Server is a Microsoft product that provides version control, reporting, requirements management, project management, automated builds, testing and release management capabilities. It covers the entire application lifecycle, and enables DevOps capabilities.	3
18	Tableau	1	\N	\N	2021-07-11 11:26:16.304201	2021-07-11 11:26:16.304201	Tableau is a powerful and fastest growing data visualization tool used in the Business Intelligence Industry. Tableau helps create the data that can be understood by professionals at any level in an organization. It also allows non-technical users to create customized dashboards	3
19	MySQL	1	\N	\N	2021-07-11 11:26:57.847994	2021-07-11 11:26:57.847994	MySQL is a relational database management system based on SQL – Structured Query Language. The application is used for a wide range of purposes, including data warehousing, e-commerce, and logging applications. The most common use for mySQL however, is for the purpose of a web database.	3
20	ReactJS	1	\N	\N	2021-07-11 11:27:33.987043	2021-07-11 11:27:33.987043	React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.	3
21	Ruby on Rails	1	\N	\N	2021-07-11 11:28:11.418471	2021-07-11 11:28:11.418471	Ruby on Rails, or Rails, is a server-side web application framework written in Ruby under the MIT License. Rails is a model–view–controller framework, providing default structures for a database, a web service, and web pages.	3
22	NodeJS	1	\N	\N	2021-07-11 11:28:44.39903	2021-07-11 11:28:44.39903	Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.	3
23	SpringBoot	1	\N	\N	2021-07-11 11:29:19.620446	2021-07-11 11:29:19.620446	The Spring Framework is an application framework and inversion of control container for the Java platform. The framework's core features can be used by any Java application, but there are extensions for building web applications on top of the Java EE platform. 	3
24	PHP	1	\N	\N	2021-07-11 11:29:50.886665	2021-07-11 11:29:50.886665	PHP is a general-purpose scripting language especially suited to web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994. The PHP reference implementation is now produced by The PHP Group.	3
25	OOAD	1	\N	\N	2021-07-11 11:30:30.976018	2021-07-11 11:30:30.976018	Object-oriented analysis and design is a technical approach for analyzing and designing an application, system, or business by applying object-oriented programming, as well as using visual modeling throughout the software development process to guide stakeholder communication and product quality.	3
26	MaterialUI	1	\N	\N	2021-07-11 11:31:18.988205	2021-07-11 11:31:18.988205	Material-UI is simply a library that allows us to import and use different components to create a user interface in our React applications. This saves a significant amount of time since the developers do not need to write everything from scratch.	3
27	Xamarin	1	\N	\N	2021-07-11 11:31:47.635161	2021-07-11 11:31:47.635161	Xamarin is an open-source platform for building modern and performant applications for iOS, Android, and Windows with . NET. Xamarin is an abstraction layer that manages communication of shared code with underlying platform code.	3
28	Flutter	1	\N	\N	2021-07-11 11:32:31.82809	2021-07-11 11:32:31.82809	Flutter is a free and open-source mobile UI framework created by Google and released in May 2017. In a few words, it allows you to create a native mobile application with only one codebase. This means that you can use one programming language and one codebase to create two different apps (for iOS and Android).	3
36	Clean Architecture	1	\N	\N	2021-07-11 11:37:21.524098	2021-07-11 11:37:21.524098	Clean architecture is a software design philosophy that separates the elements of a design into ring levels. The main rule of clean architecture is that code dependencies can only move from the outer levels inward. Code on the inner layers can have no knowledge of functions on the outer layers.	3
37	MongoDB	1	\N	\N	2021-07-11 11:38:43.771127	2021-07-11 11:38:43.771127	MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License (SSPL)	3
\.


--
-- TOC entry 3170 (class 0 OID 173450)
-- Dependencies: 203
-- Data for Name: user_permissions; Type: TABLE DATA; Schema: public; Owner: temp
--

COPY public.user_permissions (id, user_id, permission_id, created_by, modified_by, deleted_at, created_at, updated_at) FROM stdin;
1	1	1	\N	1	\N	2021-06-27 18:35:35.464889	2021-06-27 18:35:35.464889
2	1	2	\N	1	\N	2021-06-27 18:35:35.492284	2021-06-27 18:35:35.492284
3	1	3	\N	1	\N	2021-06-27 18:35:35.511499	2021-06-27 18:35:35.511499
\.


--
-- TOC entry 3166 (class 0 OID 173414)
-- Dependencies: 199
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: temp
--

COPY public.users (id, email, encrypted_password, reset_password_token, reset_password_sent_at, remember_created_at, created_at, updated_at, first_name, last_name, confirmation_token, confirmed_at, confirmation_sent_at, unconfirmed_email, sign_in_count, current_sign_in_at, last_sign_in_at, current_sign_in_ip, last_sign_in_ip) FROM stdin;
1	ngetahun@excellerentsolutions.com	$2a$12$39ABv.d5PvMvw3WxP8Kop.q0XhYdxPEWIPMneS8XTbQdPsywTb3d.	\N	\N	\N	2021-05-22 18:44:47.957547	2021-07-11 21:42:59.997002	Nathnael	Getahun	y-n1wKwrHJTGhZpw6aKH	2021-05-22 18:44:47.957729	2021-05-22 18:44:47.957729	\N	15	2021-07-11 21:42:59.996338	2021-07-10 16:25:14.408233	10.0.2.2	10.0.2.2
\.


--
-- TOC entry 3245 (class 0 OID 0)
-- Dependencies: 212
-- Name: addresses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: temp
--

SELECT pg_catalog.setval('public.addresses_id_seq', 43, true);


--
-- TOC entry 3246 (class 0 OID 0)
-- Dependencies: 206
-- Name: clients_id_seq; Type: SEQUENCE SET; Schema: public; Owner: temp
--

SELECT pg_catalog.setval('public.clients_id_seq', 2, true);


--
-- TOC entry 3247 (class 0 OID 0)
-- Dependencies: 230
-- Name: duty_stations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: temp
--

SELECT pg_catalog.setval('public.duty_stations_id_seq', 26, true);


--
-- TOC entry 3248 (class 0 OID 0)
-- Dependencies: 232
-- Name: employment_types_id_seq; Type: SEQUENCE SET; Schema: public; Owner: temp
--

SELECT pg_catalog.setval('public.employment_types_id_seq', 3, true);


--
-- TOC entry 3249 (class 0 OID 0)
-- Dependencies: 226
-- Name: exceller_assignments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: temp
--

SELECT pg_catalog.setval('public.exceller_assignments_id_seq', 1, false);


--
-- TOC entry 3250 (class 0 OID 0)
-- Dependencies: 236
-- Name: exceller_interview_items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: temp
--

SELECT pg_catalog.setval('public.exceller_interview_items_id_seq', 149, true);


--
-- TOC entry 3251 (class 0 OID 0)
-- Dependencies: 234
-- Name: exceller_interviews_tables_id_seq; Type: SEQUENCE SET; Schema: public; Owner: temp
--

SELECT pg_catalog.setval('public.exceller_interviews_tables_id_seq', 65, true);


--
-- TOC entry 3252 (class 0 OID 0)
-- Dependencies: 224
-- Name: exceller_offers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: temp
--

SELECT pg_catalog.setval('public.exceller_offers_id_seq', 1, false);


--
-- TOC entry 3253 (class 0 OID 0)
-- Dependencies: 218
-- Name: exceller_skills_id_seq; Type: SEQUENCE SET; Schema: public; Owner: temp
--

SELECT pg_catalog.setval('public.exceller_skills_id_seq', 1, false);


--
-- TOC entry 3254 (class 0 OID 0)
-- Dependencies: 204
-- Name: excellers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: temp
--

SELECT pg_catalog.setval('public.excellers_id_seq', 22, true);


--
-- TOC entry 3255 (class 0 OID 0)
-- Dependencies: 222
-- Name: interview_criteria_id_seq; Type: SEQUENCE SET; Schema: public; Owner: temp
--

SELECT pg_catalog.setval('public.interview_criteria_id_seq', 25, true);


--
-- TOC entry 3256 (class 0 OID 0)
-- Dependencies: 220
-- Name: interviews_id_seq; Type: SEQUENCE SET; Schema: public; Owner: temp
--

SELECT pg_catalog.setval('public.interviews_id_seq', 14, true);


--
-- TOC entry 3257 (class 0 OID 0)
-- Dependencies: 200
-- Name: permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: temp
--

SELECT pg_catalog.setval('public.permissions_id_seq', 8, true);


--
-- TOC entry 3258 (class 0 OID 0)
-- Dependencies: 228
-- Name: positions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: temp
--

SELECT pg_catalog.setval('public.positions_id_seq', 12, true);


--
-- TOC entry 3259 (class 0 OID 0)
-- Dependencies: 244
-- Name: project_requirement_excellers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: temp
--

SELECT pg_catalog.setval('public.project_requirement_excellers_id_seq', 1, true);


--
-- TOC entry 3260 (class 0 OID 0)
-- Dependencies: 242
-- Name: project_requirement_flows_id_seq; Type: SEQUENCE SET; Schema: public; Owner: temp
--

SELECT pg_catalog.setval('public.project_requirement_flows_id_seq', 48, true);


--
-- TOC entry 3261 (class 0 OID 0)
-- Dependencies: 238
-- Name: project_requirement_items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: temp
--

SELECT pg_catalog.setval('public.project_requirement_items_id_seq', 9, true);


--
-- TOC entry 3262 (class 0 OID 0)
-- Dependencies: 240
-- Name: project_requirement_states_id_seq; Type: SEQUENCE SET; Schema: public; Owner: temp
--

SELECT pg_catalog.setval('public.project_requirement_states_id_seq', 24, true);


--
-- TOC entry 3263 (class 0 OID 0)
-- Dependencies: 210
-- Name: project_requirements_id_seq; Type: SEQUENCE SET; Schema: public; Owner: temp
--

SELECT pg_catalog.setval('public.project_requirements_id_seq', 46, true);


--
-- TOC entry 3264 (class 0 OID 0)
-- Dependencies: 208
-- Name: projects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: temp
--

SELECT pg_catalog.setval('public.projects_id_seq', 3, true);


--
-- TOC entry 3265 (class 0 OID 0)
-- Dependencies: 246
-- Name: skill_type_skills_id_seq; Type: SEQUENCE SET; Schema: public; Owner: temp
--

SELECT pg_catalog.setval('public.skill_type_skills_id_seq', 21, true);


--
-- TOC entry 3266 (class 0 OID 0)
-- Dependencies: 216
-- Name: skill_types_id_seq; Type: SEQUENCE SET; Schema: public; Owner: temp
--

SELECT pg_catalog.setval('public.skill_types_id_seq', 9, true);


--
-- TOC entry 3267 (class 0 OID 0)
-- Dependencies: 214
-- Name: skills_id_seq; Type: SEQUENCE SET; Schema: public; Owner: temp
--

SELECT pg_catalog.setval('public.skills_id_seq', 37, true);


--
-- TOC entry 3268 (class 0 OID 0)
-- Dependencies: 202
-- Name: user_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: temp
--

SELECT pg_catalog.setval('public.user_permissions_id_seq', 3, true);


--
-- TOC entry 3269 (class 0 OID 0)
-- Dependencies: 198
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: temp
--

SELECT pg_catalog.setval('public.users_id_seq', 1, true);


--
-- TOC entry 3007 (class 2606 OID 173507)
-- Name: addresses addresses_pkey; Type: CONSTRAINT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.addresses
    ADD CONSTRAINT addresses_pkey PRIMARY KEY (id);


--
-- TOC entry 2989 (class 2606 OID 173411)
-- Name: ar_internal_metadata ar_internal_metadata_pkey; Type: CONSTRAINT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.ar_internal_metadata
    ADD CONSTRAINT ar_internal_metadata_pkey PRIMARY KEY (key);


--
-- TOC entry 3001 (class 2606 OID 173477)
-- Name: clients clients_pkey; Type: CONSTRAINT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_pkey PRIMARY KEY (id);


--
-- TOC entry 3025 (class 2606 OID 173613)
-- Name: duty_stations duty_stations_pkey; Type: CONSTRAINT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.duty_stations
    ADD CONSTRAINT duty_stations_pkey PRIMARY KEY (id);


--
-- TOC entry 3027 (class 2606 OID 173625)
-- Name: employment_types employment_types_pkey; Type: CONSTRAINT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.employment_types
    ADD CONSTRAINT employment_types_pkey PRIMARY KEY (id);


--
-- TOC entry 3021 (class 2606 OID 173591)
-- Name: exceller_assignments exceller_assignments_pkey; Type: CONSTRAINT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.exceller_assignments
    ADD CONSTRAINT exceller_assignments_pkey PRIMARY KEY (id);


--
-- TOC entry 3031 (class 2606 OID 206180)
-- Name: exceller_interview_items exceller_interview_items_pkey; Type: CONSTRAINT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.exceller_interview_items
    ADD CONSTRAINT exceller_interview_items_pkey PRIMARY KEY (id);


--
-- TOC entry 3029 (class 2606 OID 206169)
-- Name: exceller_interviews exceller_interviews_tables_pkey; Type: CONSTRAINT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.exceller_interviews
    ADD CONSTRAINT exceller_interviews_tables_pkey PRIMARY KEY (id);


--
-- TOC entry 3019 (class 2606 OID 173583)
-- Name: exceller_offers exceller_offers_pkey; Type: CONSTRAINT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.exceller_offers
    ADD CONSTRAINT exceller_offers_pkey PRIMARY KEY (id);


--
-- TOC entry 3013 (class 2606 OID 173545)
-- Name: exceller_skills exceller_skills_pkey; Type: CONSTRAINT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.exceller_skills
    ADD CONSTRAINT exceller_skills_pkey PRIMARY KEY (id);


--
-- TOC entry 2999 (class 2606 OID 173466)
-- Name: excellers excellers_pkey; Type: CONSTRAINT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.excellers
    ADD CONSTRAINT excellers_pkey PRIMARY KEY (id);


--
-- TOC entry 3017 (class 2606 OID 173564)
-- Name: interview_criteria interview_criteria_pkey; Type: CONSTRAINT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.interview_criteria
    ADD CONSTRAINT interview_criteria_pkey PRIMARY KEY (id);


--
-- TOC entry 3015 (class 2606 OID 173556)
-- Name: interviews interviews_pkey; Type: CONSTRAINT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.interviews
    ADD CONSTRAINT interviews_pkey PRIMARY KEY (id);


--
-- TOC entry 2995 (class 2606 OID 173447)
-- Name: permissions permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.permissions
    ADD CONSTRAINT permissions_pkey PRIMARY KEY (id);


--
-- TOC entry 3023 (class 2606 OID 173602)
-- Name: positions positions_pkey; Type: CONSTRAINT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.positions
    ADD CONSTRAINT positions_pkey PRIMARY KEY (id);


--
-- TOC entry 3039 (class 2606 OID 214441)
-- Name: project_requirement_excellers project_requirement_excellers_pkey; Type: CONSTRAINT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.project_requirement_excellers
    ADD CONSTRAINT project_requirement_excellers_pkey PRIMARY KEY (id);


--
-- TOC entry 3037 (class 2606 OID 214430)
-- Name: project_requirement_flows project_requirement_flows_pkey; Type: CONSTRAINT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.project_requirement_flows
    ADD CONSTRAINT project_requirement_flows_pkey PRIMARY KEY (id);


--
-- TOC entry 3033 (class 2606 OID 214366)
-- Name: project_requirement_items project_requirement_items_pkey; Type: CONSTRAINT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.project_requirement_items
    ADD CONSTRAINT project_requirement_items_pkey PRIMARY KEY (id);


--
-- TOC entry 3035 (class 2606 OID 214419)
-- Name: project_requirement_states project_requirement_states_pkey; Type: CONSTRAINT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.project_requirement_states
    ADD CONSTRAINT project_requirement_states_pkey PRIMARY KEY (id);


--
-- TOC entry 3005 (class 2606 OID 173496)
-- Name: project_requirements project_requirements_pkey; Type: CONSTRAINT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.project_requirements
    ADD CONSTRAINT project_requirements_pkey PRIMARY KEY (id);


--
-- TOC entry 3003 (class 2606 OID 173488)
-- Name: projects projects_pkey; Type: CONSTRAINT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (id);


--
-- TOC entry 2987 (class 2606 OID 173403)
-- Name: schema_migrations schema_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


--
-- TOC entry 3041 (class 2606 OID 222553)
-- Name: skill_type_skills skill_type_skills_pkey; Type: CONSTRAINT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.skill_type_skills
    ADD CONSTRAINT skill_type_skills_pkey PRIMARY KEY (id);


--
-- TOC entry 3011 (class 2606 OID 173537)
-- Name: skill_types skill_types_pkey; Type: CONSTRAINT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.skill_types
    ADD CONSTRAINT skill_types_pkey PRIMARY KEY (id);


--
-- TOC entry 3009 (class 2606 OID 173526)
-- Name: skills skills_pkey; Type: CONSTRAINT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.skills
    ADD CONSTRAINT skills_pkey PRIMARY KEY (id);


--
-- TOC entry 2997 (class 2606 OID 173455)
-- Name: user_permissions user_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.user_permissions
    ADD CONSTRAINT user_permissions_pkey PRIMARY KEY (id);


--
-- TOC entry 2993 (class 2606 OID 173424)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: temp
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 2990 (class 1259 OID 173425)
-- Name: index_users_on_email; Type: INDEX; Schema: public; Owner: temp
--

CREATE UNIQUE INDEX index_users_on_email ON public.users USING btree (email);


--
-- TOC entry 2991 (class 1259 OID 173426)
-- Name: index_users_on_reset_password_token; Type: INDEX; Schema: public; Owner: temp
--

CREATE UNIQUE INDEX index_users_on_reset_password_token ON public.users USING btree (reset_password_token);


-- Completed on 2021-07-15 00:09:37 EAT

--
-- PostgreSQL database dump complete
--

