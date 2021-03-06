PGDMP     )                    y            ets_development "   10.17 (Ubuntu 10.17-1.pgdg18.04+1)     13.3 (Ubuntu 13.3-1.pgdg18.04+1) ?    ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    173394    ets_development    DATABASE     d   CREATE DATABASE ets_development WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';
    DROP DATABASE ets_development;
                temp    false            ?            1259    173499 	   addresses    TABLE     ?  CREATE TABLE public.addresses (
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
    DROP TABLE public.addresses;
       public            temp    false            ?            1259    173497    addresses_id_seq    SEQUENCE     y   CREATE SEQUENCE public.addresses_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.addresses_id_seq;
       public          temp    false    213            ?           0    0    addresses_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.addresses_id_seq OWNED BY public.addresses.id;
          public          temp    false    212            ?            1259    173404    ar_internal_metadata    TABLE     ?   CREATE TABLE public.ar_internal_metadata (
    key character varying NOT NULL,
    value character varying,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);
 (   DROP TABLE public.ar_internal_metadata;
       public            temp    false            ?            1259    173469    clients    TABLE     m  CREATE TABLE public.clients (
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
    DROP TABLE public.clients;
       public            temp    false            ?            1259    173467    clients_id_seq    SEQUENCE     w   CREATE SEQUENCE public.clients_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.clients_id_seq;
       public          temp    false    207            ?           0    0    clients_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.clients_id_seq OWNED BY public.clients.id;
          public          temp    false    206            ?            1259    173605    duty_stations    TABLE     ?  CREATE TABLE public.duty_stations (
    id bigint NOT NULL,
    name character varying,
    address_id integer,
    created_by integer,
    modified_by integer,
    deleted_at timestamp without time zone,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);
 !   DROP TABLE public.duty_stations;
       public            temp    false            ?            1259    173603    duty_stations_id_seq    SEQUENCE     }   CREATE SEQUENCE public.duty_stations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.duty_stations_id_seq;
       public          temp    false    231            ?           0    0    duty_stations_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.duty_stations_id_seq OWNED BY public.duty_stations.id;
          public          temp    false    230            ?            1259    173617    employment_types    TABLE     @  CREATE TABLE public.employment_types (
    id bigint NOT NULL,
    name character varying,
    description text,
    created_by integer,
    modified_by integer,
    deleted_at timestamp without time zone,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);
 $   DROP TABLE public.employment_types;
       public            temp    false            ?            1259    173615    employment_types_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.employment_types_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.employment_types_id_seq;
       public          temp    false    233            ?           0    0    employment_types_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.employment_types_id_seq OWNED BY public.employment_types.id;
          public          temp    false    232            ?            1259    173586    exceller_assignments    TABLE     ?  CREATE TABLE public.exceller_assignments (
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
 (   DROP TABLE public.exceller_assignments;
       public            temp    false            ?            1259    173584    exceller_assignments_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.exceller_assignments_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public.exceller_assignments_id_seq;
       public          temp    false    227            ?           0    0    exceller_assignments_id_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public.exceller_assignments_id_seq OWNED BY public.exceller_assignments.id;
          public          temp    false    226            ?            1259    206172    exceller_interview_items    TABLE     ?  CREATE TABLE public.exceller_interview_items (
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
 ,   DROP TABLE public.exceller_interview_items;
       public            temp    false            ?            1259    206170    exceller_interview_items_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.exceller_interview_items_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public.exceller_interview_items_id_seq;
       public          temp    false    237            ?           0    0    exceller_interview_items_id_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public.exceller_interview_items_id_seq OWNED BY public.exceller_interview_items.id;
          public          temp    false    236            ?            1259    206164    exceller_interviews    TABLE     `  CREATE TABLE public.exceller_interviews (
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
 '   DROP TABLE public.exceller_interviews;
       public            temp    false            ?            1259    206162 !   exceller_interviews_tables_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.exceller_interviews_tables_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 8   DROP SEQUENCE public.exceller_interviews_tables_id_seq;
       public          temp    false    235            ?           0    0 !   exceller_interviews_tables_id_seq    SEQUENCE OWNED BY     `   ALTER SEQUENCE public.exceller_interviews_tables_id_seq OWNED BY public.exceller_interviews.id;
          public          temp    false    234            ?            1259    173578    exceller_offers    TABLE     U  CREATE TABLE public.exceller_offers (
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
 #   DROP TABLE public.exceller_offers;
       public            temp    false            ?            1259    173576    exceller_offers_id_seq    SEQUENCE        CREATE SEQUENCE public.exceller_offers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.exceller_offers_id_seq;
       public          temp    false    225            ?           0    0    exceller_offers_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.exceller_offers_id_seq OWNED BY public.exceller_offers.id;
          public          temp    false    224            ?            1259    173540    exceller_skills    TABLE     U  CREATE TABLE public.exceller_skills (
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
 #   DROP TABLE public.exceller_skills;
       public            temp    false            ?            1259    173538    exceller_skills_id_seq    SEQUENCE        CREATE SEQUENCE public.exceller_skills_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.exceller_skills_id_seq;
       public          temp    false    219            ?           0    0    exceller_skills_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.exceller_skills_id_seq OWNED BY public.exceller_skills.id;
          public          temp    false    218            ?            1259    173458 	   excellers    TABLE     ?  CREATE TABLE public.excellers (
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
    DROP TABLE public.excellers;
       public            temp    false            ?            1259    173456    excellers_id_seq    SEQUENCE     y   CREATE SEQUENCE public.excellers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.excellers_id_seq;
       public          temp    false    205            ?           0    0    excellers_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.excellers_id_seq OWNED BY public.excellers.id;
          public          temp    false    204            ?            1259    173559    interview_criteria    TABLE     [  CREATE TABLE public.interview_criteria (
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
 &   DROP TABLE public.interview_criteria;
       public            temp    false            ?            1259    173557    interview_criteria_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.interview_criteria_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.interview_criteria_id_seq;
       public          temp    false    223            ?           0    0    interview_criteria_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.interview_criteria_id_seq OWNED BY public.interview_criteria.id;
          public          temp    false    222            ?            1259    173548 
   interviews    TABLE     S  CREATE TABLE public.interviews (
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
    DROP TABLE public.interviews;
       public            temp    false            ?            1259    173546    interviews_id_seq    SEQUENCE     z   CREATE SEQUENCE public.interviews_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.interviews_id_seq;
       public          temp    false    221            ?           0    0    interviews_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.interviews_id_seq OWNED BY public.interviews.id;
          public          temp    false    220            ?            1259    173439    permissions    TABLE     R  CREATE TABLE public.permissions (
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
    DROP TABLE public.permissions;
       public            temp    false            ?            1259    173437    permissions_id_seq    SEQUENCE     {   CREATE SEQUENCE public.permissions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.permissions_id_seq;
       public          temp    false    201            ?           0    0    permissions_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.permissions_id_seq OWNED BY public.permissions.id;
          public          temp    false    200            ?            1259    173594 	   positions    TABLE     9  CREATE TABLE public.positions (
    id bigint NOT NULL,
    name character varying,
    description text,
    created_by integer,
    modified_by integer,
    deleted_at timestamp without time zone,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);
    DROP TABLE public.positions;
       public            temp    false            ?            1259    173592    positions_id_seq    SEQUENCE     y   CREATE SEQUENCE public.positions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.positions_id_seq;
       public          temp    false    229            ?           0    0    positions_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.positions_id_seq OWNED BY public.positions.id;
          public          temp    false    228            ?            1259    214433    project_requirement_excellers    TABLE     ?  CREATE TABLE public.project_requirement_excellers (
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
 1   DROP TABLE public.project_requirement_excellers;
       public            temp    false            ?            1259    214431 $   project_requirement_excellers_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.project_requirement_excellers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ;   DROP SEQUENCE public.project_requirement_excellers_id_seq;
       public          temp    false    245            ?           0    0 $   project_requirement_excellers_id_seq    SEQUENCE OWNED BY     m   ALTER SEQUENCE public.project_requirement_excellers_id_seq OWNED BY public.project_requirement_excellers.id;
          public          temp    false    244            ?            1259    214422    project_requirement_flows    TABLE     ?  CREATE TABLE public.project_requirement_flows (
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
 -   DROP TABLE public.project_requirement_flows;
       public            temp    false            ?            1259    214420     project_requirement_flows_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.project_requirement_flows_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 7   DROP SEQUENCE public.project_requirement_flows_id_seq;
       public          temp    false    243            ?           0    0     project_requirement_flows_id_seq    SEQUENCE OWNED BY     e   ALTER SEQUENCE public.project_requirement_flows_id_seq OWNED BY public.project_requirement_flows.id;
          public          temp    false    242            ?            1259    214358    project_requirement_items    TABLE     ?  CREATE TABLE public.project_requirement_items (
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
 -   DROP TABLE public.project_requirement_items;
       public            temp    false            ?            1259    214356     project_requirement_items_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.project_requirement_items_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 7   DROP SEQUENCE public.project_requirement_items_id_seq;
       public          temp    false    239            ?           0    0     project_requirement_items_id_seq    SEQUENCE OWNED BY     e   ALTER SEQUENCE public.project_requirement_items_id_seq OWNED BY public.project_requirement_items.id;
          public          temp    false    238            ?            1259    214411    project_requirement_states    TABLE     n  CREATE TABLE public.project_requirement_states (
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
 .   DROP TABLE public.project_requirement_states;
       public            temp    false            ?            1259    214409 !   project_requirement_states_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.project_requirement_states_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 8   DROP SEQUENCE public.project_requirement_states_id_seq;
       public          temp    false    241            ?           0    0 !   project_requirement_states_id_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE public.project_requirement_states_id_seq OWNED BY public.project_requirement_states.id;
          public          temp    false    240            ?            1259    173491    project_requirements    TABLE     ?  CREATE TABLE public.project_requirements (
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
 (   DROP TABLE public.project_requirements;
       public            temp    false            ?            1259    173489    project_requirements_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.project_requirements_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public.project_requirements_id_seq;
       public          temp    false    211            ?           0    0    project_requirements_id_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public.project_requirements_id_seq OWNED BY public.project_requirements.id;
          public          temp    false    210            ?            1259    173480    projects    TABLE     u  CREATE TABLE public.projects (
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
    DROP TABLE public.projects;
       public            temp    false            ?            1259    173478    projects_id_seq    SEQUENCE     x   CREATE SEQUENCE public.projects_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.projects_id_seq;
       public          temp    false    209            ?           0    0    projects_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.projects_id_seq OWNED BY public.projects.id;
          public          temp    false    208            ?            1259    173396    schema_migrations    TABLE     R   CREATE TABLE public.schema_migrations (
    version character varying NOT NULL
);
 %   DROP TABLE public.schema_migrations;
       public            temp    false            ?            1259    222548    skill_type_skills    TABLE     @  CREATE TABLE public.skill_type_skills (
    id bigint NOT NULL,
    skill_type_id integer,
    skill_id integer,
    created_by integer,
    modified_by integer,
    deleted_at timestamp without time zone,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);
 %   DROP TABLE public.skill_type_skills;
       public            temp    false            ?            1259    222546    skill_type_skills_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.skill_type_skills_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.skill_type_skills_id_seq;
       public          temp    false    247            ?           0    0    skill_type_skills_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.skill_type_skills_id_seq OWNED BY public.skill_type_skills.id;
          public          temp    false    246            ?            1259    173529    skill_types    TABLE     ;  CREATE TABLE public.skill_types (
    id bigint NOT NULL,
    name character varying,
    created_by integer,
    modified_by integer,
    deleted_at timestamp without time zone,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL,
    description text
);
    DROP TABLE public.skill_types;
       public            temp    false            ?            1259    173527    skill_types_id_seq    SEQUENCE     {   CREATE SEQUENCE public.skill_types_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.skill_types_id_seq;
       public          temp    false    217            ?           0    0    skill_types_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.skill_types_id_seq OWNED BY public.skill_types.id;
          public          temp    false    216            ?            1259    173518    skills    TABLE     b  CREATE TABLE public.skills (
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
    DROP TABLE public.skills;
       public            temp    false            ?            1259    173516    skills_id_seq    SEQUENCE     v   CREATE SEQUENCE public.skills_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.skills_id_seq;
       public          temp    false    215            ?           0    0    skills_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.skills_id_seq OWNED BY public.skills.id;
          public          temp    false    214            ?            1259    173450    user_permissions    TABLE     >  CREATE TABLE public.user_permissions (
    id bigint NOT NULL,
    user_id integer,
    permission_id integer,
    created_by integer,
    modified_by integer,
    deleted_at timestamp without time zone,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);
 $   DROP TABLE public.user_permissions;
       public            temp    false            ?            1259    173448    user_permissions_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.user_permissions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.user_permissions_id_seq;
       public          temp    false    203            ?           0    0    user_permissions_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.user_permissions_id_seq OWNED BY public.user_permissions.id;
          public          temp    false    202            ?            1259    173414    users    TABLE     ?  CREATE TABLE public.users (
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
    DROP TABLE public.users;
       public            temp    false            ?            1259    173412    users_id_seq    SEQUENCE     u   CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          temp    false    199            ?           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          temp    false    198            ?           2604    173502    addresses id    DEFAULT     l   ALTER TABLE ONLY public.addresses ALTER COLUMN id SET DEFAULT nextval('public.addresses_id_seq'::regclass);
 ;   ALTER TABLE public.addresses ALTER COLUMN id DROP DEFAULT;
       public          temp    false    213    212    213            ?           2604    173472 
   clients id    DEFAULT     h   ALTER TABLE ONLY public.clients ALTER COLUMN id SET DEFAULT nextval('public.clients_id_seq'::regclass);
 9   ALTER TABLE public.clients ALTER COLUMN id DROP DEFAULT;
       public          temp    false    207    206    207            ?           2604    173608    duty_stations id    DEFAULT     t   ALTER TABLE ONLY public.duty_stations ALTER COLUMN id SET DEFAULT nextval('public.duty_stations_id_seq'::regclass);
 ?   ALTER TABLE public.duty_stations ALTER COLUMN id DROP DEFAULT;
       public          temp    false    231    230    231            ?           2604    173620    employment_types id    DEFAULT     z   ALTER TABLE ONLY public.employment_types ALTER COLUMN id SET DEFAULT nextval('public.employment_types_id_seq'::regclass);
 B   ALTER TABLE public.employment_types ALTER COLUMN id DROP DEFAULT;
       public          temp    false    233    232    233            ?           2604    173589    exceller_assignments id    DEFAULT     ?   ALTER TABLE ONLY public.exceller_assignments ALTER COLUMN id SET DEFAULT nextval('public.exceller_assignments_id_seq'::regclass);
 F   ALTER TABLE public.exceller_assignments ALTER COLUMN id DROP DEFAULT;
       public          temp    false    227    226    227            ?           2604    206175    exceller_interview_items id    DEFAULT     ?   ALTER TABLE ONLY public.exceller_interview_items ALTER COLUMN id SET DEFAULT nextval('public.exceller_interview_items_id_seq'::regclass);
 J   ALTER TABLE public.exceller_interview_items ALTER COLUMN id DROP DEFAULT;
       public          temp    false    237    236    237            ?           2604    206167    exceller_interviews id    DEFAULT     ?   ALTER TABLE ONLY public.exceller_interviews ALTER COLUMN id SET DEFAULT nextval('public.exceller_interviews_tables_id_seq'::regclass);
 E   ALTER TABLE public.exceller_interviews ALTER COLUMN id DROP DEFAULT;
       public          temp    false    234    235    235            ?           2604    173581    exceller_offers id    DEFAULT     x   ALTER TABLE ONLY public.exceller_offers ALTER COLUMN id SET DEFAULT nextval('public.exceller_offers_id_seq'::regclass);
 A   ALTER TABLE public.exceller_offers ALTER COLUMN id DROP DEFAULT;
       public          temp    false    225    224    225            ?           2604    173543    exceller_skills id    DEFAULT     x   ALTER TABLE ONLY public.exceller_skills ALTER COLUMN id SET DEFAULT nextval('public.exceller_skills_id_seq'::regclass);
 A   ALTER TABLE public.exceller_skills ALTER COLUMN id DROP DEFAULT;
       public          temp    false    219    218    219            ?           2604    173461    excellers id    DEFAULT     l   ALTER TABLE ONLY public.excellers ALTER COLUMN id SET DEFAULT nextval('public.excellers_id_seq'::regclass);
 ;   ALTER TABLE public.excellers ALTER COLUMN id DROP DEFAULT;
       public          temp    false    205    204    205            ?           2604    173562    interview_criteria id    DEFAULT     ~   ALTER TABLE ONLY public.interview_criteria ALTER COLUMN id SET DEFAULT nextval('public.interview_criteria_id_seq'::regclass);
 D   ALTER TABLE public.interview_criteria ALTER COLUMN id DROP DEFAULT;
       public          temp    false    222    223    223            ?           2604    173551    interviews id    DEFAULT     n   ALTER TABLE ONLY public.interviews ALTER COLUMN id SET DEFAULT nextval('public.interviews_id_seq'::regclass);
 <   ALTER TABLE public.interviews ALTER COLUMN id DROP DEFAULT;
       public          temp    false    220    221    221            ?           2604    173442    permissions id    DEFAULT     p   ALTER TABLE ONLY public.permissions ALTER COLUMN id SET DEFAULT nextval('public.permissions_id_seq'::regclass);
 =   ALTER TABLE public.permissions ALTER COLUMN id DROP DEFAULT;
       public          temp    false    200    201    201            ?           2604    173597    positions id    DEFAULT     l   ALTER TABLE ONLY public.positions ALTER COLUMN id SET DEFAULT nextval('public.positions_id_seq'::regclass);
 ;   ALTER TABLE public.positions ALTER COLUMN id DROP DEFAULT;
       public          temp    false    228    229    229            ?           2604    214436     project_requirement_excellers id    DEFAULT     ?   ALTER TABLE ONLY public.project_requirement_excellers ALTER COLUMN id SET DEFAULT nextval('public.project_requirement_excellers_id_seq'::regclass);
 O   ALTER TABLE public.project_requirement_excellers ALTER COLUMN id DROP DEFAULT;
       public          temp    false    244    245    245            ?           2604    214425    project_requirement_flows id    DEFAULT     ?   ALTER TABLE ONLY public.project_requirement_flows ALTER COLUMN id SET DEFAULT nextval('public.project_requirement_flows_id_seq'::regclass);
 K   ALTER TABLE public.project_requirement_flows ALTER COLUMN id DROP DEFAULT;
       public          temp    false    242    243    243            ?           2604    214361    project_requirement_items id    DEFAULT     ?   ALTER TABLE ONLY public.project_requirement_items ALTER COLUMN id SET DEFAULT nextval('public.project_requirement_items_id_seq'::regclass);
 K   ALTER TABLE public.project_requirement_items ALTER COLUMN id DROP DEFAULT;
       public          temp    false    238    239    239            ?           2604    214414    project_requirement_states id    DEFAULT     ?   ALTER TABLE ONLY public.project_requirement_states ALTER COLUMN id SET DEFAULT nextval('public.project_requirement_states_id_seq'::regclass);
 L   ALTER TABLE public.project_requirement_states ALTER COLUMN id DROP DEFAULT;
       public          temp    false    241    240    241            ?           2604    173494    project_requirements id    DEFAULT     ?   ALTER TABLE ONLY public.project_requirements ALTER COLUMN id SET DEFAULT nextval('public.project_requirements_id_seq'::regclass);
 F   ALTER TABLE public.project_requirements ALTER COLUMN id DROP DEFAULT;
       public          temp    false    211    210    211            ?           2604    173483    projects id    DEFAULT     j   ALTER TABLE ONLY public.projects ALTER COLUMN id SET DEFAULT nextval('public.projects_id_seq'::regclass);
 :   ALTER TABLE public.projects ALTER COLUMN id DROP DEFAULT;
       public          temp    false    208    209    209            ?           2604    222551    skill_type_skills id    DEFAULT     |   ALTER TABLE ONLY public.skill_type_skills ALTER COLUMN id SET DEFAULT nextval('public.skill_type_skills_id_seq'::regclass);
 C   ALTER TABLE public.skill_type_skills ALTER COLUMN id DROP DEFAULT;
       public          temp    false    247    246    247            ?           2604    173532    skill_types id    DEFAULT     p   ALTER TABLE ONLY public.skill_types ALTER COLUMN id SET DEFAULT nextval('public.skill_types_id_seq'::regclass);
 =   ALTER TABLE public.skill_types ALTER COLUMN id DROP DEFAULT;
       public          temp    false    217    216    217            ?           2604    173521 	   skills id    DEFAULT     f   ALTER TABLE ONLY public.skills ALTER COLUMN id SET DEFAULT nextval('public.skills_id_seq'::regclass);
 8   ALTER TABLE public.skills ALTER COLUMN id DROP DEFAULT;
       public          temp    false    215    214    215            ?           2604    173453    user_permissions id    DEFAULT     z   ALTER TABLE ONLY public.user_permissions ALTER COLUMN id SET DEFAULT nextval('public.user_permissions_id_seq'::regclass);
 B   ALTER TABLE public.user_permissions ALTER COLUMN id DROP DEFAULT;
       public          temp    false    203    202    203            ?           2604    173417    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          temp    false    198    199    199            l          0    173499 	   addresses 
   TABLE DATA           ?   COPY public.addresses (id, email, postal_code, country, city, state, zip_code, sub_city, woreda, house_no, home_phone, cell_phone, work_phone, created_by, modified_by, deleted_at, created_at, updated_at, street_no) FROM stdin;
    public          temp    false    213   ??       \          0    173404    ar_internal_metadata 
   TABLE DATA           R   COPY public.ar_internal_metadata (key, value, created_at, updated_at) FROM stdin;
    public          temp    false    197   ?       f          0    173469    clients 
   TABLE DATA           ?   COPY public.clients (id, name, rep_name, address_id, status, created_by, modified_by, deleted_at, created_at, updated_at) FROM stdin;
    public          temp    false    207   n?       ~          0    173605    duty_stations 
   TABLE DATA           z   COPY public.duty_stations (id, name, address_id, created_by, modified_by, deleted_at, created_at, updated_at) FROM stdin;
    public          temp    false    231   ??       ?          0    173617    employment_types 
   TABLE DATA           ~   COPY public.employment_types (id, name, description, created_by, modified_by, deleted_at, created_at, updated_at) FROM stdin;
    public          temp    false    233   ??       z          0    173586    exceller_assignments 
   TABLE DATA           ?   COPY public.exceller_assignments (id, exceller_id, project_id, skill_id, start_date, end_date, status, created_by, modified_by, deleted_at, created_at, updated_at) FROM stdin;
    public          temp    false    227   ?       ?          0    206172    exceller_interview_items 
   TABLE DATA           ?   COPY public.exceller_interview_items (id, exceller_interview_id, interview_criteria_id, score, comment, created_by, modified_by, deleted_at, created_at, updated_at) FROM stdin;
    public          temp    false    237   5?       ?          0    206164    exceller_interviews 
   TABLE DATA           ?   COPY public.exceller_interviews (id, exceller_id, interviewer_id, interview_id, created_by, modified_by, deleted_at, created_at, updated_at) FROM stdin;
    public          temp    false    235   $      x          0    173578    exceller_offers 
   TABLE DATA           ?   COPY public.exceller_offers (id, exceller_id, position_id, response, created_by, modified_by, deleted_at, created_at, updated_at) FROM stdin;
    public          temp    false    225         r          0    173540    exceller_skills 
   TABLE DATA           ?   COPY public.exceller_skills (id, exceller_id, skill_id, proficiency, created_by, modified_by, deleted_at, created_at, updated_at) FROM stdin;
    public          temp    false    219   .      d          0    173458 	   excellers 
   TABLE DATA           2  COPY public.excellers (id, first_name, father_name, grandfather_name, position_id, address_id, years_of_experience, recommended_for_id, contract_signing_date, employment_type_id, duty_station_id, status_id, created_by, modified_by, deleted_at, created_at, updated_at, dob, profile_picture_url) FROM stdin;
    public          temp    false    205   K      v          0    173559    interview_criteria 
   TABLE DATA           ?   COPY public.interview_criteria (id, interview_id, skill_id, created_by, modified_by, deleted_at, created_at, updated_at, minimum_score) FROM stdin;
    public          temp    false    223   ?	      t          0    173548 
   interviews 
   TABLE DATA           ?   COPY public.interviews (id, name, position_id, created_by, modified_by, deleted_at, created_at, updated_at, description) FROM stdin;
    public          temp    false    221   ?
      `          0    173439    permissions 
   TABLE DATA           ?   COPY public.permissions (id, name, description, user_type, created_by, modified_by, deleted_at, created_at, updated_at) FROM stdin;
    public          temp    false    201   ?      |          0    173594 	   positions 
   TABLE DATA           w   COPY public.positions (id, name, description, created_by, modified_by, deleted_at, created_at, updated_at) FROM stdin;
    public          temp    false    229   O      ?          0    214433    project_requirement_excellers 
   TABLE DATA           ?   COPY public.project_requirement_excellers (id, project_requirement_id, exceller_id, state_id, performed_by, date_performed, comment, current, created_by, modified_by, deleted_at, created_at, updated_at) FROM stdin;
    public          temp    false    245   ?      ?          0    214422    project_requirement_flows 
   TABLE DATA           ?   COPY public.project_requirement_flows (id, project_requirement_id, name, initial_state_id, final_state_id, created_by, modified_by, deleted_at, created_at, updated_at) FROM stdin;
    public          temp    false    243   ?      ?          0    214358    project_requirement_items 
   TABLE DATA           ?   COPY public.project_requirement_items (id, project_requirement_id, skill_id, minimum_score, description, created_by, modified_by, deleted_at, created_at, updated_at) FROM stdin;
    public          temp    false    239         ?          0    214411    project_requirement_states 
   TABLE DATA           ?   COPY public.project_requirement_states (id, project_requirement_id, name, description, created_by, modified_by, deleted_at, created_at, updated_at) FROM stdin;
    public          temp    false    241   ?      j          0    173491    project_requirements 
   TABLE DATA           ?   COPY public.project_requirements (id, skill_type_id, amount, created_by, modified_by, deleted_at, created_at, updated_at, project_id, start_date, end_date) FROM stdin;
    public          temp    false    211   ,      h          0    173480    projects 
   TABLE DATA           ?   COPY public.projects (id, name, client_id, status, start_date, end_date, created_by, modified_by, deleted_at, created_at, updated_at) FROM stdin;
    public          temp    false    209   ?      [          0    173396    schema_migrations 
   TABLE DATA           4   COPY public.schema_migrations (version) FROM stdin;
    public          temp    false    196   m      ?          0    222548    skill_type_skills 
   TABLE DATA           ?   COPY public.skill_type_skills (id, skill_type_id, skill_id, created_by, modified_by, deleted_at, created_at, updated_at) FROM stdin;
    public          temp    false    247   Y      p          0    173529    skill_types 
   TABLE DATA           y   COPY public.skill_types (id, name, created_by, modified_by, deleted_at, created_at, updated_at, description) FROM stdin;
    public          temp    false    217   ?      n          0    173518    skills 
   TABLE DATA           ?   COPY public.skills (id, name, created_by, modified_by, deleted_at, created_at, updated_at, description, default_minimum_score) FROM stdin;
    public          temp    false    215   :      b          0    173450    user_permissions 
   TABLE DATA           ?   COPY public.user_permissions (id, user_id, permission_id, created_by, modified_by, deleted_at, created_at, updated_at) FROM stdin;
    public          temp    false    203   '      ^          0    173414    users 
   TABLE DATA           T  COPY public.users (id, email, encrypted_password, reset_password_token, reset_password_sent_at, remember_created_at, created_at, updated_at, first_name, last_name, confirmation_token, confirmed_at, confirmation_sent_at, unconfirmed_email, sign_in_count, current_sign_in_at, last_sign_in_at, current_sign_in_ip, last_sign_in_ip) FROM stdin;
    public          temp    false    199   z'      ?           0    0    addresses_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.addresses_id_seq', 43, true);
          public          temp    false    212            ?           0    0    clients_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.clients_id_seq', 2, true);
          public          temp    false    206            ?           0    0    duty_stations_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.duty_stations_id_seq', 26, true);
          public          temp    false    230            ?           0    0    employment_types_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.employment_types_id_seq', 3, true);
          public          temp    false    232            ?           0    0    exceller_assignments_id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.exceller_assignments_id_seq', 1, false);
          public          temp    false    226            ?           0    0    exceller_interview_items_id_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public.exceller_interview_items_id_seq', 149, true);
          public          temp    false    236            ?           0    0 !   exceller_interviews_tables_id_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('public.exceller_interviews_tables_id_seq', 65, true);
          public          temp    false    234            ?           0    0    exceller_offers_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.exceller_offers_id_seq', 1, false);
          public          temp    false    224            ?           0    0    exceller_skills_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.exceller_skills_id_seq', 1, false);
          public          temp    false    218            ?           0    0    excellers_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.excellers_id_seq', 22, true);
          public          temp    false    204            ?           0    0    interview_criteria_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.interview_criteria_id_seq', 25, true);
          public          temp    false    222            ?           0    0    interviews_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.interviews_id_seq', 14, true);
          public          temp    false    220            ?           0    0    permissions_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.permissions_id_seq', 8, true);
          public          temp    false    200            ?           0    0    positions_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.positions_id_seq', 12, true);
          public          temp    false    228            ?           0    0 $   project_requirement_excellers_id_seq    SEQUENCE SET     S   SELECT pg_catalog.setval('public.project_requirement_excellers_id_seq', 1, false);
          public          temp    false    244            ?           0    0     project_requirement_flows_id_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public.project_requirement_flows_id_seq', 48, true);
          public          temp    false    242            ?           0    0     project_requirement_items_id_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('public.project_requirement_items_id_seq', 9, true);
          public          temp    false    238            ?           0    0 !   project_requirement_states_id_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('public.project_requirement_states_id_seq', 24, true);
          public          temp    false    240            ?           0    0    project_requirements_id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.project_requirements_id_seq', 46, true);
          public          temp    false    210            ?           0    0    projects_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.projects_id_seq', 3, true);
          public          temp    false    208            ?           0    0    skill_type_skills_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.skill_type_skills_id_seq', 21, true);
          public          temp    false    246            ?           0    0    skill_types_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.skill_types_id_seq', 9, true);
          public          temp    false    216            ?           0    0    skills_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.skills_id_seq', 37, true);
          public          temp    false    214            ?           0    0    user_permissions_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.user_permissions_id_seq', 3, true);
          public          temp    false    202            ?           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 1, true);
          public          temp    false    198            ?           2606    173507    addresses addresses_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.addresses
    ADD CONSTRAINT addresses_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.addresses DROP CONSTRAINT addresses_pkey;
       public            temp    false    213            ?           2606    173411 .   ar_internal_metadata ar_internal_metadata_pkey 
   CONSTRAINT     m   ALTER TABLE ONLY public.ar_internal_metadata
    ADD CONSTRAINT ar_internal_metadata_pkey PRIMARY KEY (key);
 X   ALTER TABLE ONLY public.ar_internal_metadata DROP CONSTRAINT ar_internal_metadata_pkey;
       public            temp    false    197            ?           2606    173477    clients clients_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.clients DROP CONSTRAINT clients_pkey;
       public            temp    false    207            ?           2606    173613     duty_stations duty_stations_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.duty_stations
    ADD CONSTRAINT duty_stations_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.duty_stations DROP CONSTRAINT duty_stations_pkey;
       public            temp    false    231            ?           2606    173625 &   employment_types employment_types_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.employment_types
    ADD CONSTRAINT employment_types_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.employment_types DROP CONSTRAINT employment_types_pkey;
       public            temp    false    233            ?           2606    173591 .   exceller_assignments exceller_assignments_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public.exceller_assignments
    ADD CONSTRAINT exceller_assignments_pkey PRIMARY KEY (id);
 X   ALTER TABLE ONLY public.exceller_assignments DROP CONSTRAINT exceller_assignments_pkey;
       public            temp    false    227            ?           2606    206180 6   exceller_interview_items exceller_interview_items_pkey 
   CONSTRAINT     t   ALTER TABLE ONLY public.exceller_interview_items
    ADD CONSTRAINT exceller_interview_items_pkey PRIMARY KEY (id);
 `   ALTER TABLE ONLY public.exceller_interview_items DROP CONSTRAINT exceller_interview_items_pkey;
       public            temp    false    237            ?           2606    206169 3   exceller_interviews exceller_interviews_tables_pkey 
   CONSTRAINT     q   ALTER TABLE ONLY public.exceller_interviews
    ADD CONSTRAINT exceller_interviews_tables_pkey PRIMARY KEY (id);
 ]   ALTER TABLE ONLY public.exceller_interviews DROP CONSTRAINT exceller_interviews_tables_pkey;
       public            temp    false    235            ?           2606    173583 $   exceller_offers exceller_offers_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.exceller_offers
    ADD CONSTRAINT exceller_offers_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.exceller_offers DROP CONSTRAINT exceller_offers_pkey;
       public            temp    false    225            ?           2606    173545 $   exceller_skills exceller_skills_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.exceller_skills
    ADD CONSTRAINT exceller_skills_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.exceller_skills DROP CONSTRAINT exceller_skills_pkey;
       public            temp    false    219            ?           2606    173466    excellers excellers_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.excellers
    ADD CONSTRAINT excellers_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.excellers DROP CONSTRAINT excellers_pkey;
       public            temp    false    205            ?           2606    173564 *   interview_criteria interview_criteria_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public.interview_criteria
    ADD CONSTRAINT interview_criteria_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public.interview_criteria DROP CONSTRAINT interview_criteria_pkey;
       public            temp    false    223            ?           2606    173556    interviews interviews_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.interviews
    ADD CONSTRAINT interviews_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.interviews DROP CONSTRAINT interviews_pkey;
       public            temp    false    221            ?           2606    173447    permissions permissions_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.permissions
    ADD CONSTRAINT permissions_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.permissions DROP CONSTRAINT permissions_pkey;
       public            temp    false    201            ?           2606    173602    positions positions_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.positions
    ADD CONSTRAINT positions_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.positions DROP CONSTRAINT positions_pkey;
       public            temp    false    229            ?           2606    214441 @   project_requirement_excellers project_requirement_excellers_pkey 
   CONSTRAINT     ~   ALTER TABLE ONLY public.project_requirement_excellers
    ADD CONSTRAINT project_requirement_excellers_pkey PRIMARY KEY (id);
 j   ALTER TABLE ONLY public.project_requirement_excellers DROP CONSTRAINT project_requirement_excellers_pkey;
       public            temp    false    245            ?           2606    214430 8   project_requirement_flows project_requirement_flows_pkey 
   CONSTRAINT     v   ALTER TABLE ONLY public.project_requirement_flows
    ADD CONSTRAINT project_requirement_flows_pkey PRIMARY KEY (id);
 b   ALTER TABLE ONLY public.project_requirement_flows DROP CONSTRAINT project_requirement_flows_pkey;
       public            temp    false    243            ?           2606    214366 8   project_requirement_items project_requirement_items_pkey 
   CONSTRAINT     v   ALTER TABLE ONLY public.project_requirement_items
    ADD CONSTRAINT project_requirement_items_pkey PRIMARY KEY (id);
 b   ALTER TABLE ONLY public.project_requirement_items DROP CONSTRAINT project_requirement_items_pkey;
       public            temp    false    239            ?           2606    214419 :   project_requirement_states project_requirement_states_pkey 
   CONSTRAINT     x   ALTER TABLE ONLY public.project_requirement_states
    ADD CONSTRAINT project_requirement_states_pkey PRIMARY KEY (id);
 d   ALTER TABLE ONLY public.project_requirement_states DROP CONSTRAINT project_requirement_states_pkey;
       public            temp    false    241            ?           2606    173496 .   project_requirements project_requirements_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public.project_requirements
    ADD CONSTRAINT project_requirements_pkey PRIMARY KEY (id);
 X   ALTER TABLE ONLY public.project_requirements DROP CONSTRAINT project_requirements_pkey;
       public            temp    false    211            ?           2606    173488    projects projects_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.projects DROP CONSTRAINT projects_pkey;
       public            temp    false    209            ?           2606    173403 (   schema_migrations schema_migrations_pkey 
   CONSTRAINT     k   ALTER TABLE ONLY public.schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);
 R   ALTER TABLE ONLY public.schema_migrations DROP CONSTRAINT schema_migrations_pkey;
       public            temp    false    196            ?           2606    222553 (   skill_type_skills skill_type_skills_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.skill_type_skills
    ADD CONSTRAINT skill_type_skills_pkey PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.skill_type_skills DROP CONSTRAINT skill_type_skills_pkey;
       public            temp    false    247            ?           2606    173537    skill_types skill_types_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.skill_types
    ADD CONSTRAINT skill_types_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.skill_types DROP CONSTRAINT skill_types_pkey;
       public            temp    false    217            ?           2606    173526    skills skills_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.skills
    ADD CONSTRAINT skills_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.skills DROP CONSTRAINT skills_pkey;
       public            temp    false    215            ?           2606    173455 &   user_permissions user_permissions_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.user_permissions
    ADD CONSTRAINT user_permissions_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.user_permissions DROP CONSTRAINT user_permissions_pkey;
       public            temp    false    203            ?           2606    173424    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            temp    false    199            ?           1259    173425    index_users_on_email    INDEX     N   CREATE UNIQUE INDEX index_users_on_email ON public.users USING btree (email);
 (   DROP INDEX public.index_users_on_email;
       public            temp    false    199            ?           1259    173426 #   index_users_on_reset_password_token    INDEX     l   CREATE UNIQUE INDEX index_users_on_reset_password_token ON public.users USING btree (reset_password_token);
 7   DROP INDEX public.index_users_on_reset_password_token;
       public            temp    false    199            l   u  x???M??F??ݿ?c?hZ]??}?i??J?=D?K????028?ɯO?ð??F????_?????`Y?mo??67M>?v???4?]ۋmw`?J????{????꾺ۤMb?|N???}?d&?t{????M?7?ܠ???Q?@4N除"Ȩ??h??SQ?L?~????m??ݴ?P?~*j??cXHJF0B:???q??9w??=ܱ??0????q?????_??SKq#4F??i?????2??Z	-M [???ضk??D??}?rs?xHu3?$P???2Kc???4f	=X|EaA????|A?(?́??Ƃ)(?J??? /?i?_?R??W&??4AX????6J??0,#2?8?k???Q?)?,????\?D˨???H?L?L?h?$۝??? ??6*??7وR????LrQ????X??}??}?m~?ٻ???zҐ???P???ަ??a?\xa?zan_ӧ7??t?ȱ/????>b??	??IalR?5???G???oS#?5?۶?????ep?s?X???x????_vf??}撳?y?ݍ?
?H?(,?`}I?.ĩ??E??|???O?v쎊]?|{wA	?9????$q%?1??O??QW?????+ ?]??U???'???$qZ??????n\=????+?u_?????1=?R)?J??pȇ???v=>r=?>?p??%?S/I?]?*PWR?ejW??ҹ^?? ?v?؂cm?-????6??%?S^?|?vǮ_??De?N?Ҕ$N]???е?????
??P?????ĵd???ӿ_???UU??E?]&u&qlS??qX?n;?u????.%N?k7?i=???[?D?GW??V?L?v??}x??@i2tڗ$?^p??
??      \   ?   x?K?+?,???M?+?LI-K??/ ???uLu??-?L??,?L,??,-?Hq??qqq ?n      f   ?   x?}?1
!F?z<?P??̺z?%??2?6????$??nx??ѽ???s{V???? 9Z?{`8?b5?	1q?ޝb??$ײַ&P?ږW??ny{䷾?oa&X???}?"H?V)?N?(V      ~   ?   x?}?A
?0 ϛW????	?j??zѲ??????ճP???{ڒ??|ĭ????ƍ\?T? ??????{d??&?چ??[Q?{8????G=/8?&)E?7??yΓ ??C@c?????1??R?VJ} )?.?      ?   x   x?3?tq?t+??Q??MUp?-?ɯLM?4??N##C]S]#3#c+S+cc=K3csS???????P?\?????ܔ˘3 hj@bQ	??@3???赴24?3?0377?#????? ?>'?      z      x?????? ? ?      ?   ?  x???M???׍S?T?????x?h??C4eS?????S??t?Th?"?k ??/???O?N??????~yz???ݿ???????O?~??????????????O?????ǧ????ׇ??????D?????????j?Q}jtf>??5?q??LlR:'??/&????y? 5/z?v"??????????,|f?j??[`???&??P??S????????o??u?4?q?3?F?[?	????????_ǆ2?v[??ҙ|??
????b???L?u#?^dP??#k???+X֍??E!,????;1???7?H??,wפ+?B4?vz9????-l?ӄ?̑?8:?֗OXDC?C?ѭ?K????=?z?\???M?"???.[??ƅ??s?"????y?s?-?[k?8?w????\??^C??)??_???.?3u,'!r????3{CP??~?????????O??Qvo?ǵ&(ٌ?h?e셑}!Ks???xS?O????*????aA?'T?u4?'9??2?.??cl?,z*??dʯO2?<??o?E֣?`(s?
??F?l?ɍ??i?8?s@⥵??`?՞??E+???^?]0v??<????d?)s??ٻ?"?G?\S?I?4?	Z??????1OP??^{?(Myat]?j̓?NO??8?gi6???Bv?C?dqXi???????\??? ?s?^ʇI^_r?~????????zEӲ?R??*?6.???8?@?A^a/%TD'?g????(P?$/??2k???\??y?????'X???6??YS?`E?E?W?y'??+`?M??2????zl?~?BdS?G??y?pt??+???0+??k?=?z?*?M?l??
4$ɶ?d??zmW&-?yB?_?????)<????	?M5Dv9??d???k?)Ć-p$?NX??!??Yl^m??V	A?dYcqn??7=X?1???a?u?WJ?Nq??$?B??:
? ???A?֎?D?rdF??B?????[T:F?18?DX?Ƣ???@il?S?d,o+?.0I@^~Q????nF?^?y?/???b?
![?D?6??R=w4??v4C`wڴB޸H??v!??d@f޼?????f?b?BTmG%?~???1Hǜ?a?6?z?yn???9??0g?=cΑ䕧j'Ku?II8?*?-?ƔJ?eʨ?}
n?{C??":??/????e:???Y46?{ic????癝CPx}?&?? ??hk???c??Jm\?+?????c?Db??]V??Z)?ي-??L?V?R`?P{?????Uyb?H?՚?ͧQ????S4˨f?vRb?!f?6?P???b???C(?C) ?^f;?2u=?2UW,???^f;[??$h(?z???E?????r????n?^Uq?|?{e?????BT?V??d\7???gR?+???i?U"???H]i;[?????P??a,?k??6?z,?"S??d????S8j?TOj皗?N? ??^?f;??O??!?z?v?+c?rZf ??kpe?y?e??`???????~?\c??6?m?_?Owv???5?8b????4?s??6???n???3?4??캛???Z.?v???u%7+?N????2?????i?[f?*ޓ?n?.,?Gz^PiT&-p?2??WO?Eh?p????? ޥ??,??ElE???6?5?x?5OX^????Ð y	BG??;߻?0?x^?? ?0??y?⫰I?=?ox(???u!S?CG?e?
?UE???6????Cl	??Ф8h??oׁ??<???6?^7F6Z?? {?,v$???o????u?w?9??1???IC?k??3?|??Z??ؙy?(aܳm??8?r???c`3?i?=;?]*9?4?K????+S??|a??j??`/??31?䦈5u(?Ʋ,?j?"?r?Qʲ??a??Kx?WJ????????tv?-??A?9?p?ɑp????H??=WΏ????bqn #??^P?????v$???i??H??^C?"P?>?y/:??7???t?S????/?jO?????H?:?]?X??Hth??Y?n????*????Z?{??c??qL? CM4"?@???R?٭^#wAqw" C?li?	?;?j܏'Cp???,(x?_7?>??Awpu?8???????}5????[????U???d?W??\??ӑj)aj.?ٸ???0+M<ZfS???	?7b?!?(2?Xە??b????0?v??V?9	\??1?6??Bk?+e????j??1??_[;f??? [??e????:??bk??m??&?]gWp?[?2?$k6??畖??FVN?	????5??A?!?L(?+?䃎XZ;W???qHǳ?F???.?v0?켲w??|???d?ׅ?nѦ	?gi?*??B?OZo?Q<ĵ|???h????d?01~????`ʮ?<?/n-,?6??l?wp?SH{n0W??X?u?,?<??lo=?	Vu~VT?U?????M=??!X?? ?[z???`d?q?a?t?J?!?&?n?=???&ހ?p?<?y??n?޺????yH8??ܧ??j??0[???íJ?l2????7??z?i?$?A?n}??x$ܜo?2???c??]z?????5j?2?|????[o??.?v.?yb?`??s ?4???k?W??Sϯ?"u?u?o4?ހ?+?v?ly>??m?x???5??U?y??zEa#?؞???5????;?7Uh*RJX??*?`˻?y-??Sx?^`;8?$?<C5??X??w2o ?8^????o??'No??~?g???dZ????5G?@ٮ????Lp!????K????޺?l?;	?????ћ!?^\;ػƴǒ?fP???\x]n?????vIvf???{I{??Yɐ????????w?>??????Hz???	??b?y??????S??S??????ŗ!??	???6?{??p t?,?rٟ"ց?.}|EiEW??fJu???ц??@?~-?_~???7)?o???d???      ?   ?  x?}??q#1Dσ(??Y ?/?p???G:?G;???A-v????q?<~?F?o?o?/ʥ??F?Y?`F	?̃?B[3E"????C?٢9?ث???V?N)?A?? :??V??b?? ?J??h?,????A ?|??.????di? ?J?????94?X????̫>?p??? {??,??+#?P?A ???E?si???P? ??@u?S]???????䜨?Q??3z~(]??y]??pĜզ??3i?u?Nv?A?Rj??E??^??Z洛???=?"1=*??sT\?.?1Y???t????Ub$S4ԶwQ?f?n??A?U??????=#n???Ɩj?g??????֨G??Z??&5O?֠?i#??}???v?MVs!?g281?>uYU???58???"???nU??@s?n
????\#U??0?-??????}???R?-??Q~ ??e?&      x      x?????? ? ?      r      x?????? ? ?      d   t  x????n?0????Ƚ0Ar(n7.?C?Cb?(?S16k?*LA???J?? ?~j??84p?b_?!ln2?h?:??>?H?\?p)漚K?}T 8?<??G?D?W?Kδu???sy"???+ø5??κ9W?9??k%???G?9???3????߸'?????S A:r?.\??x?53?Dh_	/Sh?|G?
Y?98?۴?E)?: ??c???X?B0㬱b??;332w??*i??qr???????????W??.?[???-??&Q? 
Pv5??=L???5i`K8M%m?u?G4R?Մ?[/?ݕ?1?@FX?],???"?pףդ?5?Gì?1??V??u?U??R???>)|l?5??b?!?
??6??m?]KmV??RM@K??I?h?????,????>m??p??Č?ʪ1???b߶??-?R?????t?????+?p?4?-|???J~J?;n???????]PU%??+'?H???F?M?U??С????:???????Ӂ*9|N????eȉ??bb??=Ce,G??HǨ???m??.?\?M(%?FMnRzU?(aƠQ#??I?\߶?&?2???u?????n?u?M1?*???4??l6??=??      v     x???͑?0?ᳩ???_??H鿎???Nfą??|?!4n?G?u! <@?b"L??j??J?a;?kI?Z7@??=??K?ZB??U??r;??M4?'z0?%?r???-0???????? ;?D??xX?dM??N?/???aǘʓ??p0?R??ӑ?
?*媑??P?<ʴ?H?J? 4?J??I?%??|??????	??8E?HW?^??()?)?RR???f??DT))I?jj8U))M?˯?~0?ViQϾm?y8?      t   ?   x?}?=?0????7qn??V?????? ?,????
?}5.Jr?w8*v?C??;??p??b?mo????d?!????(F?F?IjT?Pb?u??RI??=?i"?;?!s??????????&??  ?ڤZKcT??̥??O?p}??.???????[?+?9}]Q      `   ?   x???=
?@Fk???2??ڧ9???!?)r?@?bv?)?+5???????{?o?12??[??AtH????? ;R?????H?D*?Ju?r"U?????yY?u???U?@?YV? Ȯ????-?z??;s??????$????ݷb? ; ? @???      |   ;  x????j?0??????9?I??dl07ؼ?M??,HE??????6!I>??????r??خ??m6?<n?}~?E?7?q(>_??p<#W????#_@R???Ю?]lwI???B?4: +k-z;E?w?KsJx??W"?o<]S+b\?d??n;????f???9wu#???OJ??e.??C?j"ͦ???9?A?$M???$?H۹?)&?L:?=#Y??:????rL?	?Ⲁ??????f?T@Q<?Wo?U׎Ӕl?Z]6?0ks?ۧH???]??m<??ٱ2x?p??'cu@^?uZ~*)????      ?      x?????? ? ?      ?   F  x?}??N? ?3</????\M?^?D?{a[?b*4ݪ??m7???J	??̗!3(j?4??!??q?Y?b7z"?@A??+???(7 LTv?(??N%W"?0?m??¹:????8#?9???Е???????zn?b?}?X??>???PY??r%?.??ED?8~?;???/??Y??J??3??GqFn]????!RX4\?e'ˈ??????s1??S??Ni??@*??	Y4?R	+H?8?PS?|D?????0???6?қ?ǩ?2k???4(????9?t????o??.??????:mHv?de???W?????SJ ?z?J      ?   u  x???ϒ?6???)?*W?,?̍?ɦf+??,[??^??0?ʒ#?rڇ??I?-???l1L!??I???[??jT????9???^j??????ّ}|?E^?I>???f???RL˪??ߏd?????J??E}#???j6???o????~%&r?e?,E=?f??,n????$?΅???CŦ.??F(???z$???#??5? ?Ƚ\'???؂??N??B?zg?m??Jvxp?l???h\???38??A???J?7a
??O餶????????_???@????n?:??[ж?{?????r?w?I?[?r)?2???Y?rq#?-??}?ʻ???.???џ?x4?0i??Q2????:??1D???SN?̳?V,??^H?c??????G??k???#?G?Н?G?V??L"D?0S???=/Yd????ˤ+8?/??>????ãV????`uz??????C?ʹ/?I?y[r?????5pۈb1+??F(k??0?????p?ËCgX?Q?U??RT?ޙ1??:?Dh??h????????.??]'?A?6?!???(%{??FG??"W?/?hR\_???????8	????????M?%?]????NTy????q??4?~?&
t?n0QS?z??]?<v??gk$?nb???!uw?,?c??bM?????)MC=w?z?#w??kQѬyZ?+[?U?ZZ??m؎	?9???O????????=[?&??G??Z??b?
??rơ?i?r???٨} ?????^??ѓ}??`???ˇZ????d??r?Ӽڹ?????i?]?Q깨?????W??ͺT4ӷ???W?5?"gK?m	??i??P????Q̋Y#?FQT?|.?E?}?fY????F?      ?   ?  x???Mo!???Wp?)??e??Q???Fm?S.?g?0??????#^?Y????? ?;?2?lŊ?w??o??R{?$V?`?u+[?K?R)??q??m????-?g?}?V??NX 3w?p?_??3?츅6?K?????ǿ???-???????)%wiyGN??????jV?!¢?o?????\?"??ù?h?q?ׁ??'=H???-??MV%yQ???B$?d?|????_?????ڽ??g?H???'?ia???=qӲ?y~.o??u??I??5?*?,?HQ?sa?+?Ĳ???9? ???I?t9	KX????B??t??T?t??w3????5?Hʺ??r?:r=?5ג??.?@??xS8^??w}y??p?FL?{??????ogΝ?Z?R4?%YF??ҭ????W?.?<k???w?[?R5Y???Pz%eB???򖔙_????JhV?uq#?(?R??ގ?
YM8?;?jxk&?M?5?%i?B4??+u?F߭???q>z7??uH3?@?X?p?@,M?prޤ?Z??0r#?h?????A}?zyQ??~?	???ޛ8?E?@????8???<lq?d/[??$a????=ޯ?),???c?G]??ｴ?[?Ŧ14MX???r??C?)A??Kr      j   ?   x?}??? F?g?"?????????????"x?t?+?&?????L?B?0? 
Bmdc?&=??ݦ,#[#$+&?į?PWC?f????{???%???u?Euf}?};?(??%O??|/??%? ?d?lO$W~??Ys?o?F.      h   ?   x?}?;?0??9?uH8??77?G?.?????7?R??,^>?2??:?.???F????$5x??H?Q|?k??4%)???u?B?Z?b?d1??~?F??????R!?N?FA\?
mV??2??X???$;#?? ?S.      [   ?   x?U??u?0C??O`?]??%M?????Ʉǲ8?q??????.? ?lE\?ʎC?@*?*ڀ:??ado51??z?;?O?C?a(Z?fbS?%??J??R?7??Pr??袦??W_z<?05??i??(??׀????2?&??Q????Kfl?FݪQ?2kc?~<o5?ۜ+???[)j?????2"??u=/???γ??Ne????yu???q??y9      ?   8  x???ۍ!E?qi ?kcl(b+H?u??P??^i??Ց??A?.(???Ǎqmvm?_?WG??]-A?!????>DR???CGd+?0??a?M??M?.	"-???a??2?̿m|"???!2?'dE????Y`=A????[?U?'?7???#A?c??DQ!v?xB?݌g???B߈b??Z?}?]0W?K???l? 
AX??|FG?&?B?c??Q?1?Q?r,?+~,??~????3???D?x?''?X????jMz?i?ex?%?0???xh	"n??3???&?b'?r??~E?=?*?B?:      p   ?  x?}?MO?0??ͯi?$4!????z?z;???cG?(??3v?R-?F?"y?ϼ??&?Q???{??q????F?\O??f??f???????P?m??fUw;oo?K?D???i;???p@?C?zx????<????\_?"??!j??E?,?i??tmw???< lQ??1L?mt??КP?.??k??@+??ak??t??????r[???k/O ?0ZC&?
???????A??{???<S??
G?[???????K?ύ??FCOH4 (e`JZF?'@x????HX?i5?#?(??P?G?$eS???y??gU?\?Hg?/G???W<[??U??	j  sP?4g	????????;V???w?1??3??`c???o$@8??꫍ۘbSE??b?u      n   ?  x??YM??6=˿?6??X??5???'???v"g??\ ??!	.AJ?O???0?d_7@??HS?UNl	d?????uk??}1E??P??????h8
?? Eތ?7?y0??????Ǝ?VH?)?2???U6??*"%"??*+E*3?U)??m?Rq(t?%?3???O?b.u?bq??????_?S?'Yhy?VĲ?kiU ?,+쌗?????ȓjS??v?T-?M)?Y??R????PU?F??????(Ҋ?;8j??{?~z????d???h???p(??x?r??l[QY8??)mYT??ζ???c??D?S?l?/???ցx,?4?l????ۉ???0L???*???e??Zw&??(u??Ȥ??+?!?
?Q?r鍎x?=g??j??o?^???U	?dcػ[???P????<????|k/?I???>&J?vJ?V?W{?????????IP8'͆??*0v>9Ե???X:?ʒA?k?K? !?6e?)r???6G'???֤@k???2?Ӽ0{N}ع????kWc f???1?!;??%?&RW??}q??h??>S??BI?UA??(Yd?a??6?a?G???ju??<???l???Jַi??D?*??Q?sF???:???*?p	??$2*׉????@?6+?Ycsa]Z?l??t5???????R~??Q֚B?d????H&??w?!?)#???w?tD?YX??D2???4a0ǽ??u0?7?y0Y,???kKdB܈m??|:?ۃ??i?`P?(>??x''~15Dt?^f?R_?Γ??XY?????H??K<t'?D??q???????]???9(?????hb?MekY????ა?|?4??'0by$C?5lCa;????=?????}?{һ3?z?ft???>?	? <;???-?,q&g?:e??A?B?:???zu l
???)????Hb?u??????TG??????k??L{?????f????LF???p?ڒ3&j?Z??<f?'?????P	? .A*???m?g???|x????A}g??v???EMf|??쀓8鵓1~?W????:7g}ʌ???U??D?гv?&??>?`???-? 7??q(??M8???d:?G?-5v??"?ұπdFW????(?+?|`}???-???U?_)m]?S	????qT\????K^?P??2???P?J&?????M?#t??(?Û?0?N????{?t???`?2??d?W?Ȫ?H???
L??)?? Ҵ??*#zǽfJ???Hx?I?|[L?WOx6"??S}?J??f??Y?TY?2????Q??? I?????????E?}??X?H#?r?A??=\?+????g?+?r???D?,?G?k?Sy?ԧb?צ?8n??ҭ鿢??
W'??????G[+????l?1B?U?^G?J'!	?Y?i?}??M???????W?tT?OAr}?==??????B?);?1(%2Ѽg?n??y?k:?nv?C?䅆?>6??T?it5$	?`?J?)$??w?l?\00R???1???????HQJ??^?[I??XQ?1??̜??kI?d?l(m޻?F˽??/?et?^?f????u?ڦ:?8E????St?!hj7
?P??f?>C???Ul+????nd?;Y?2?𤴄lEI,O?V??B$s?։.?rLr?Q???荊?Q???W?\C?G?#tq[?Y])?#ȄY0NF?s?Y?V?6Ul?ĵ??pB?-̡I,?z????|.?I:m???#!??%??v?@?G?W??N%t?BQ????E??kU~c8??򽃣%<?v?Gb!????̻?`?9??%?e??h?wDg?/E???G?ͤ?PH?????%??=?֯?Vb1?/??mrg?u??w?2?1?@?@??&??Z)??{_?\??N"l????????|?????%?EwB?Oe?<L?v?Iީ??Y?ے;?%?H{?|?????o??????d??> ?h??M?m?$~?s?A?\̇??kKl??*t<']???.?\?%????{?Ɛ????SQ??}??xvm??벧)?mJ=??h?????TΉ???e<???8??5??Uq?~??d?7??kS?т??I??}?????>????????R?Q??z??Y???'|z?,ޣ?g4c?~̄n'???ku?_????je?sr????k?P??{Q?^ߧ??.??|?`?>`??y???L??r9|???2?i_vh?ݩph?GS?>=??g-?T???_<S%l]????:n??y?UE?l-3??*9,??kP;?'?V9鉷Ɣ?N?$?4C?99?t???????T??R???}h?o?\E?#t Q?刨?????6?z?!èh??-/ yEp**?E?_?]>8?c????A?}???a:??[??t,???|@?Y?9??.??I?$?u"?.?4?????zbW	?{???P?b???C??iE??"6?T?r?b@^??>ڟ?kZS??(x?涩???0U??7?}?x{m?0???????????I!?29Z?h֍??'9??FB?27???jQ?^p??9SO?9C????3G???????????#????U???s?*[???I?Z?????+)?ۊn4Z?g??$v¼ռ?????&?Vq4J?z?|?????M?@q]??/?????? 5?ZJ ?єV?+??*vO@??ٮ?q񆓧l?ؖF?g???????6!?ލ=)?4ڇe??????t
?#ծ?T?c?T-??????kf:?O*[7??͓e?c??I?f:???d?????$????\??Ք??#J???<?ϺH?????/n??0????{?@𔬻?\?bJ?g&??EY?͐=K.R ;Iڔ?[?J?.B?<?2`??CR???>G4?X???++??+R?!$??δx?5???71Oh?????YV?7???MM?I͌g;??C??@????8ES%3??%?T??&ГR|?????#???+~????|????Y????m?W?k??ߌ?`:??/h???v~??4<??;??Y?w????o?ߊs?P?5???R?۽???(??I???.???I??X!-b&?%G$5{u??c?-???~?w??????????3?3?DŮǪ?3?,?v?5F?{2??ܿ?9t?8???p???????R?L)???	u?g??Uig????>?p؄f?]??r???E?1???????A??U??'??F?F;?J???pw:??̢?u?N?ǭ??|VT?>Uk<Q???????????7o???v?      b   P   x?3?4??ad`d?k`?kd?`hael
Dz&f&?x????????aidda?G????????&?????????? ??&?      ^   ?   x?}??j?@E??W?p?cޛǙUR(I+	?
IK6&?`?45?BC?J?..?? ?o?/볟????Ɲ?ﻶ9??????~???)f~7@??a5?b3?i???o??j??7?ʻ?t[쟪????^T?v?k??\?D!?VJ+5???W?cĐ?J?ʀ1?sb벯}????d??㘍??c??_?cRf?[ۚ??[
Ս?D???Kʢ?S?!?[?A?h?T
     