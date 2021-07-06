PGDMP                         y            expensao    12.4    12.4 0    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    33425    expensao    DATABASE     z   CREATE DATABASE expensao WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'pt_BR.UTF-8' LC_CTYPE = 'pt_BR.UTF-8';
    DROP DATABASE expensao;
                postgres    false            �            1259    41619    agencias    TABLE     �  CREATE TABLE public.agencias (
    id integer NOT NULL,
    nome character varying,
    cnpj character varying,
    tp_pessoa integer,
    status integer,
    email character varying,
    telefone character varying,
    dt_create timestamp(0) without time zone,
    fax character varying,
    contato character varying,
    fantasia character varying,
    nome_red character varying,
    cidade_red character varying,
    cargo character varying,
    clientes character varying,
    obs character varying,
    insc_est character varying,
    cod_cont character varying,
    cep character varying,
    rua character varying,
    cod_cidade character varying,
    bairro character varying,
    complemento character varying,
    estado integer
);
    DROP TABLE public.agencias;
       public         heap    postgres    false            �            1259    41617    agencias_id_seq    SEQUENCE     �   CREATE SEQUENCE public.agencias_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.agencias_id_seq;
       public          postgres    false    209            �           0    0    agencias_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.agencias_id_seq OWNED BY public.agencias.id;
          public          postgres    false    208            �            1259    49822    anunciantes    TABLE     ,  CREATE TABLE public.anunciantes (
    id integer NOT NULL,
    nome character varying,
    fantasia character varying,
    cnpj character varying,
    agencia_select integer,
    tp_pessoa character varying,
    classificacao character varying,
    telefone character varying,
    observacao character varying,
    whatsapp character varying,
    cep character varying,
    rua character varying,
    bairro character varying,
    cod_cidade integer,
    estado integer,
    complemento character varying,
    banco character varying,
    agencia character varying,
    conta character varying,
    tp_conta character varying,
    historico character varying,
    insc_est character varying,
    cod_cont character varying,
    nome_red character varying,
    cidade_red character varying,
    dt_create date
);
    DROP TABLE public.anunciantes;
       public         heap    postgres    false            �            1259    49820    anunciantes_id_seq    SEQUENCE     �   CREATE SEQUENCE public.anunciantes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.anunciantes_id_seq;
       public          postgres    false    213            �           0    0    anunciantes_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.anunciantes_id_seq OWNED BY public.anunciantes.id;
          public          postgres    false    212            �            1259    33443    cidades    TABLE     �   CREATE TABLE public.cidades (
    id integer NOT NULL,
    nome character varying(150),
    estado_id integer,
    created timestamp without time zone,
    modified timestamp without time zone
);
    DROP TABLE public.cidades;
       public         heap    postgres    false            �            1259    33441    cidades_id_seq    SEQUENCE     �   CREATE SEQUENCE public.cidades_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.cidades_id_seq;
       public          postgres    false    207            �           0    0    cidades_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.cidades_id_seq OWNED BY public.cidades.id;
          public          postgres    false    206            �            1259    33437    estados    TABLE     �   CREATE TABLE public.estados (
    id integer NOT NULL,
    nome character varying(250),
    uf character varying(3),
    created timestamp without time zone,
    modified timestamp without time zone
);
    DROP TABLE public.estados;
       public         heap    postgres    false            �            1259    33435    estados_id_seq    SEQUENCE     �   CREATE SEQUENCE public.estados_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.estados_id_seq;
       public          postgres    false    205            �           0    0    estados_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.estados_id_seq OWNED BY public.estados.id;
          public          postgres    false    204            �            1259    33428    funcionarios    TABLE     �  CREATE TABLE public.funcionarios (
    id integer NOT NULL,
    nome character varying NOT NULL,
    cpf character varying NOT NULL,
    rg character varying,
    tp_acesso integer NOT NULL,
    status integer NOT NULL,
    primeiro_acesso integer,
    senha character varying,
    email character varying,
    telefone character varying,
    obs character varying,
    funcao character varying,
    ctps character varying,
    reservista character varying,
    titulo character varying,
    dt_nascimento date,
    dt_admissao date,
    dt_desligamento date,
    genero integer,
    cep character varying,
    cod_cidade integer,
    estado integer,
    rua character varying,
    bairro character varying,
    complemento character varying,
    banco character varying,
    agencia character varying,
    conta character varying,
    tp_conta character varying,
    dt_create timestamp(0) without time zone
);
     DROP TABLE public.funcionarios;
       public         heap    postgres    false            �            1259    33426    funcionarios_id_seq    SEQUENCE     �   CREATE SEQUENCE public.funcionarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.funcionarios_id_seq;
       public          postgres    false    203            �           0    0    funcionarios_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.funcionarios_id_seq OWNED BY public.funcionarios.id;
          public          postgres    false    202            �            1259    41628 	   parceiros    TABLE     B  CREATE TABLE public.parceiros (
    id integer NOT NULL,
    rz_social character varying NOT NULL,
    fantasia character varying,
    cnpj character varying NOT NULL,
    tp_acesso integer NOT NULL,
    status integer NOT NULL,
    email character varying,
    telefone character varying,
    whatsapp character varying,
    obs character varying,
    cep character varying,
    cod_cidade integer,
    estado integer,
    rua character varying,
    bairro character varying,
    complemento character varying,
    banco character varying,
    agencia character varying,
    conta character varying,
    tp_conta character varying,
    dt_create timestamp(0) without time zone,
    insc_est character varying,
    cod_cont character varying,
    nome_red character varying,
    cidade_red character varying,
    tp_pessoa integer
);
    DROP TABLE public.parceiros;
       public         heap    postgres    false            �            1259    41626    parceiros_id_seq    SEQUENCE     �   CREATE SEQUENCE public.parceiros_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.parceiros_id_seq;
       public          postgres    false    211            �           0    0    parceiros_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.parceiros_id_seq OWNED BY public.parceiros.id;
          public          postgres    false    210            �            1259    49843    veiculos    TABLE       CREATE TABLE public.veiculos (
    id integer NOT NULL,
    rz_social character varying,
    fantasia character varying,
    cnpj character varying,
    agencia_select integer,
    tp_pessoa character varying,
    tp_veiculo character varying,
    email character varying,
    classificacao character varying,
    telefone character varying,
    observacao character varying,
    whatsapp character varying,
    contato character varying,
    cep character varying,
    rua character varying,
    bairro character varying,
    cod_cidade integer,
    estado integer,
    complemento character varying,
    banco character varying,
    agencia character varying,
    conta character varying,
    tp_conta character varying,
    historico character varying,
    insc_est character varying,
    cod_cont character varying,
    nome_red character varying,
    cidade_red character varying,
    ativo_tabela_preco character varying,
    preco_15 character varying,
    preco_30 character varying,
    preco_60 character varying,
    dt_create date
);
    DROP TABLE public.veiculos;
       public         heap    postgres    false            �            1259    49841    veiculos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.veiculos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.veiculos_id_seq;
       public          postgres    false    215            �           0    0    veiculos_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.veiculos_id_seq OWNED BY public.veiculos.id;
          public          postgres    false    214                       2604    41622    agencias id    DEFAULT     j   ALTER TABLE ONLY public.agencias ALTER COLUMN id SET DEFAULT nextval('public.agencias_id_seq'::regclass);
 :   ALTER TABLE public.agencias ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    209    208    209                       2604    49825    anunciantes id    DEFAULT     p   ALTER TABLE ONLY public.anunciantes ALTER COLUMN id SET DEFAULT nextval('public.anunciantes_id_seq'::regclass);
 =   ALTER TABLE public.anunciantes ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    213    212    213                       2604    33446 
   cidades id    DEFAULT     h   ALTER TABLE ONLY public.cidades ALTER COLUMN id SET DEFAULT nextval('public.cidades_id_seq'::regclass);
 9   ALTER TABLE public.cidades ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    206    207    207                       2604    33440 
   estados id    DEFAULT     h   ALTER TABLE ONLY public.estados ALTER COLUMN id SET DEFAULT nextval('public.estados_id_seq'::regclass);
 9   ALTER TABLE public.estados ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    204    205    205                       2604    33431    funcionarios id    DEFAULT     r   ALTER TABLE ONLY public.funcionarios ALTER COLUMN id SET DEFAULT nextval('public.funcionarios_id_seq'::regclass);
 >   ALTER TABLE public.funcionarios ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    203    202    203                       2604    41631    parceiros id    DEFAULT     l   ALTER TABLE ONLY public.parceiros ALTER COLUMN id SET DEFAULT nextval('public.parceiros_id_seq'::regclass);
 ;   ALTER TABLE public.parceiros ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    211    211                       2604    49846    veiculos id    DEFAULT     j   ALTER TABLE ONLY public.veiculos ALTER COLUMN id SET DEFAULT nextval('public.veiculos_id_seq'::regclass);
 :   ALTER TABLE public.veiculos ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    215    215            �          0    41619    agencias 
   TABLE DATA           �   COPY public.agencias (id, nome, cnpj, tp_pessoa, status, email, telefone, dt_create, fax, contato, fantasia, nome_red, cidade_red, cargo, clientes, obs, insc_est, cod_cont, cep, rua, cod_cidade, bairro, complemento, estado) FROM stdin;
    public          postgres    false    209   �C       �          0    49822    anunciantes 
   TABLE DATA             COPY public.anunciantes (id, nome, fantasia, cnpj, agencia_select, tp_pessoa, classificacao, telefone, observacao, whatsapp, cep, rua, bairro, cod_cidade, estado, complemento, banco, agencia, conta, tp_conta, historico, insc_est, cod_cont, nome_red, cidade_red, dt_create) FROM stdin;
    public          postgres    false    213   �E       �          0    33443    cidades 
   TABLE DATA           I   COPY public.cidades (id, nome, estado_id, created, modified) FROM stdin;
    public          postgres    false    207   &F       �          0    33437    estados 
   TABLE DATA           B   COPY public.estados (id, nome, uf, created, modified) FROM stdin;
    public          postgres    false    205   z�       �          0    33428    funcionarios 
   TABLE DATA           0  COPY public.funcionarios (id, nome, cpf, rg, tp_acesso, status, primeiro_acesso, senha, email, telefone, obs, funcao, ctps, reservista, titulo, dt_nascimento, dt_admissao, dt_desligamento, genero, cep, cod_cidade, estado, rua, bairro, complemento, banco, agencia, conta, tp_conta, dt_create) FROM stdin;
    public          postgres    false    203   �       �          0    41628 	   parceiros 
   TABLE DATA           	  COPY public.parceiros (id, rz_social, fantasia, cnpj, tp_acesso, status, email, telefone, whatsapp, obs, cep, cod_cidade, estado, rua, bairro, complemento, banco, agencia, conta, tp_conta, dt_create, insc_est, cod_cont, nome_red, cidade_red, tp_pessoa) FROM stdin;
    public          postgres    false    211   ��       �          0    49843    veiculos 
   TABLE DATA           m  COPY public.veiculos (id, rz_social, fantasia, cnpj, agencia_select, tp_pessoa, tp_veiculo, email, classificacao, telefone, observacao, whatsapp, contato, cep, rua, bairro, cod_cidade, estado, complemento, banco, agencia, conta, tp_conta, historico, insc_est, cod_cont, nome_red, cidade_red, ativo_tabela_preco, preco_15, preco_30, preco_60, dt_create) FROM stdin;
    public          postgres    false    215   ��       �           0    0    agencias_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.agencias_id_seq', 5, true);
          public          postgres    false    208            �           0    0    anunciantes_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.anunciantes_id_seq', 4, true);
          public          postgres    false    212            �           0    0    cidades_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.cidades_id_seq', 1, false);
          public          postgres    false    206            �           0    0    estados_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.estados_id_seq', 1, false);
          public          postgres    false    204            �           0    0    funcionarios_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.funcionarios_id_seq', 19, true);
          public          postgres    false    202            �           0    0    parceiros_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.parceiros_id_seq', 6, true);
          public          postgres    false    210            �           0    0    veiculos_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.veiculos_id_seq', 1, true);
          public          postgres    false    214                       1259    33448    cidades_id_idx    INDEX     @   CREATE INDEX cidades_id_idx ON public.cidades USING btree (id);
 "   DROP INDEX public.cidades_id_idx;
       public            postgres    false    207                       1259    33449    estados_id_idx    INDEX     @   CREATE INDEX estados_id_idx ON public.estados USING btree (id);
 "   DROP INDEX public.estados_id_idx;
       public            postgres    false    205            �   �  x��S͎�0>O��GVjV������J�J����^��%�F
��,�з���:I�B�C�؞ߗAApom�q@�����*�Y�a�x'r��in-�%a*)�\`VShsL�y*�T�w�o� ������cq�l�@��V
ʀ��Z�繆B�tK�^�����A'Up-d�[��1NgClBt'��JI]��,�9A��R�Ո����?Ap�&Ԭ"���@[��D��Lb T���\�sVL�{��,{�H]��X�l�̅*��c�Xx�%�e��:��(aĪ`P]w��(c%+~Γa�~U��e%ܯ�z�E������C�>����j���~��qd��)�VY9��#y������ ��4�����x�0߸�;_��t�x��-?>{�燧�q�4��t0O\�;�wa�s�M���։w�7��VM�'m��yA�W�,�������2�
�Z�Y;�X�
����XzQ�������bvuxN6K^�$�3�@:      �   W   x�3�@� ӈӐ�E�$�B�LsK�~4]89xy�lCp഑�����	q�{�C4㉰v0y҈��hlaj<�~����� ��k�      �      x�|����H�%Hc�"�]�Go��|v�dfEG>n��wGF x�1���rK�_P���l���S����Q3�T�+UD�Q8�`55U=ap���������k���������y7V��m}��/>�é��1K����Pu�jƓભ����m��/���82�����~t��W����O�Epuh����)�����ӌ���թi�i_��j����y/��{�v�������a�.v�ŧ�o����9n�˄q�.^5���MH��xW��{�4x1��i܈?ɂ��������o^��C�o�f�TrR����Ӱ �x�[�^e�o�S�9�蒰n[7��1;�6h���ZN_�{j��Ǧ��yߏCM�:q��7�]��P��F	Ɇ����f�O�/����?�ԑw⭲�������o��z�]?\�o�]�m���)}��?��O�����@��F�ep��^!	j���"`'B�B1��}w/�$�ƃx|�7��ò`���9Pj�x\\���@��ӆ�7�.�w�p���������a��w�XӠwp��o=T�k9
�8���1�$�Pѣ��m� %�P����'�����U{��i�v�r����ݮ�[�Gx���	� ��dO����q;��uv�5O4K����Q(�-(��WjϏ�x�4	n�X���ipS�̄��� V�4n����B='���$i����/�<Jˀ����q{�/�k�u��n�09^�X�*�YLk��EY|��S]��i��;9����鼔��i���2K���(�2x���y��e��x[m��n1�n�V|�,7
�����YQZZ$w�+��h|�N�(���������aW�s��e�I�<>�����ͣ�k5����J���ey�ï��݀�T��k#'c�Т}�r)�3�v���#ϭ������οb��Wm�z���گ����ش�͊���M[����mFb���j#���%�f1Ch��{hN���7��nο;$�ee�5y�h���џӂ�\b��ip|6X&Ay�ֈ��ո�N�p'�apC&Ƕ��n��h҈��@�
]��آ�V��zpxbf�o�4��wCs7Ҏt����E�����G��8�BLú�0�v#�ܲ`	���c��a�de�ˑ�	//��V�Q|��2������Y��S��8(��s�wP�df���R���f*�IW�	G/t2�����i�BN
'��+Z��?�*���d��跼��|�yPw�Jw��d��A��7����~y�s �j�i�ȟL����	2+xK?���Xu��``�V�Z	C�3����ĺ?�Ɔ�Pfˊ�=/�Ͽ��B6Yj�j�vrj+A��O�V4�����@#� ޞ���d�����"�U�����X����&�e涁�)��^�/[Wmu׫g�Xh���G6՛��}�U}�i2
I�i���+� 2��2�4#���'��B�a�����uGCC dk�~0����ܢ�#?'�Z�h��=���u'_���lGٯl{`�4�Ng�W��&�����W�-�h��H��ϱ��O�����]�3�%���v������4\{���,��|��W��`��.0Z��Z���(���`�h���	A��7��Y�`>6j��6-���^� Yc�L6}��(,��rp�08O�.��x�f#���iߔ#�̲�Y�1�h����E`�ɼu"j��2g��36��H� ��Ꞌ���ʽ��l�ʏKV���V%�MƚR�O��/m�X�Iӡi��8�����F�ZZՂB6�{�����ENN|2�n� Hc����LB2]�s��ό�9�0�f�`�ë��c�}vS��O�|k:�T��vS�U,!��:IU��)���N��xǜm�]����|��>��:��+��C�m�ŉ�3cQ���(^��3�S�pB�C����4��i}�q'�Y2��2��t����P��ٝD�|�Oz���fM�񩩜i��	��Pu�^��pBL�]u�C��Y�b8�*�V*{�~�z�I6���
�QxO�+�'�26�Qq����#��i�d��*hܩ�F6+}�i+<5jƗ�<v�8(��۱��f�P��z��4�A[d�}����J�^�낎�z����L{�aP|��x9��W�=�~_�G�2��Ձv�d�`����#P�
�E�����.�D신�iVL.��p�pBl[�"!�����@Z&�� {F��'s�G�h�)�&��.�N@�����M��-�̜y��%�w8U�xW�OdmJ�;�-[Nf ��U��'���+>�P�80��C��`���<��=�m�ٔw��	��j<UO��نߒ�-��{��la;�;}T:��2���NB
3���Kvx~mH��x�^��x�·'3'�jO'@����*c w#��+G'�*��^�O����_��Z>��^?��]��enɨ{�cW�?��G,
��70.�O��H�q��Ɍ�3ri$I��V:����k2X1�G�Y	O�mO�g�^� �g�T�%���Ma���$���mD����������� ��M�Ӟ�^�)�d��n�YF�(:VYՑ%1�N�1F���FX5����v_��/NF{t�D�wg9]�c���a���a�T���,a˦c?�CS.M'Zc����`kjp�!4�`vzct�~�	?����jÛ��� cU>��ѝ�v2�D/���t� ~/�;���Ȋqv�Ӊ�-?��6������a���ZO7���Д�C��j��or�����*���T��� z�l�/ø�ӌ3��f��"��jCc�� �����h��V#_	8����h�h��K��<g�U�ր����ƍ����-���u�bK�W;�c%�(d%Hmڟ��T֑%�K�V��8T;��16�;�t2��h��y �`ov�R�;zp+0����v�eDU6���y��BM�N?c��f��c�G��S{=>��"열��+�O��\�m�7�4v�2�$����	�5���C�q�P�� {_�Ή���|�?qs�8��� w��Su���b�H2��py�����>\��r��a�dj�a�J�����{�g�dEȮ%(\l'�5�K���Č�Ç}�/��=/c������_l���FzQ�{v$:06�E>������84e���B̴�y<4{!���-�9�ǅ���'�黦�#�����Ķ�I�l&�F����m����D���]��[�i�aY�]�X�!5} Sd'߅ڋ��'�K/����O��Y�%2&��%��[���i��|:�0p[�C��;�b1��p);vaM�i/���µ*@؅ߪ�����ɨ����fc`14rO��9,�d���\ Ґѽxt)�3>n��<Kc���jL�>��iʎi>f:0c��&e�^�Z���`�R,T�̫�<�pI�����0��پ�_'��ۜ��Nx���%՞z�?�.Ȍ�o��e��z�GJ�m�;[h.�)"�Rp�m_r�3���/
�e`��u��է�T��j���1z��5����A~��hQ�bw�]�����mM��R[gLv��栔�iF�`9�3[��E��=��E���;�-BCz=�pݨ5f������ddC1w�f@O����S�m��O��[��S�ݶ�c����q(�f�r�J���wd&�8�O�WJtmw�2���q���62�^��\�w��q��)㧥 �KZ�I��"j��͖oY�86�vr�]��zՠ�v���M�$	Z�h�zQ�?ۦ����oL��F�����ȿ��������C�<�;�G		N��6�[$dz��_��V`B6��㡥EM='^�ۖ�W���tN�{=.V̄�7�_O���IxiﭦKH'	'�� ��lB��������Ǆ{�|z�H�637 d`\=�����Y�+���-G�9$'䱑KnB��[�M�m� �2xۚ0�#{��j��qX(#�>�]�Q�(!���Zl�I�����o�_������?�E���ke$dr]oh�ǭ    0z����sIB&�^���j���ù�F�q8�ԫ�U#�j��Ą�-�S+����(�:47�c�m��dNb�����������+2���*m%&dG]��M9h���,b�SȖ�n��?F�A���9�ߌbYK��:�[���[�uhpa�Р��-2�U�Ʉ��-�P�h��2�����L&Տ����ՈI9�nS�/�6T�٫�ew��Q�*�@��C��;^BF��� ۈ��|A2�4�~�]h�	ż��'È��t}�� !M�Tm�I�M��1T�ܢ�E��p���M�;��9�����x�s3G����΃|d�HG�L���e"O��r;ʅ&7����˹I���@y�ݜs�T�MtP�O�65�I
����A�\I�6�cMR�M#.��ɴ�9EȬyWm޺R�`i�%� �iw$���^^ڨP���v1��R2]�U������`���lyW�i��7h�kص�l��l�w����S�6��x��c�yc�qh���q�>LJ�ʻ�x�-N/C�5�k*�ܔ���tl�SM�h<�Ŏ�&6��V���KDV<ȧd��曒= �� �%��۪'�$�W�z�#�i�(($h4�f�ǀ����Ӟo$�����'�����1�y�E��̥�G:o�qA�/��Ls7�z7�0#�஢��Z�X��}jOC+�_%,��"�����\c��;sX~U��)�U�i����[��O�ȡ�B��i�N���w�l
Z�ڜ��'�k�c��Cd�-��Fr`9���Q���4�1��l��c���S?>������?ɧ�&Bf���&�@#׏�,���Pt�Qڛ)Y-�.�eW�� t�^�;��|�$ �.�ʗ$ÅCkL������pP[yJ������[�XȊ!�iԿ��tZ3����"&�/ D�۱����Dsč�l����)��ޒQ��)�d��Z��|aR���)�:�'eq�RoZ:��*�EJ�Gn�uDJV_~�@i�g�B)?, #T~�|Ҟ��l ���?�	��0n�{'�.��'�q����\��t�yh����}�ԽH��'\\M�L��bI���":5��;9��0¡�?��B�q���U��C�Lx�x�	�����r�(J9�vf{A��׊Sķ�&eR�� nhS{�P���o�(�e�j��d��@��:�q�ȧ���F��ؽS�>5lD,�B���M&�'ZfEO�	�P��OwC�d򢞑#�H�����ړZ�ɚ��M��r��"�Fa¦�M��+A9�s}���);� t���F���BW�NZ&�n��x�ߊl*!|GñA\m�r��z�3�6�3���>��L���5Ms��dn�elh^�ɍ��-B�{���[�����2�22�n�}%�`F��-��ˉ�]"�������{��2�waF��	J^s�dd��6;�/����ȷʥ���o�!���f���M���|Q���^�`�Ф��D켓���F�l(Yl(+3#����)GvFF���d�m�j�q0-}��8��;Z<vR�~�#�8�~/οi@g�l�b8��ӏ*��}�/�mѭ��d�	�L	-N%�b��D��H�,
�KQZ}攤t���%�ZG���4&ua�E6��8�@
����6��Ћ�i��"$�67�B'�:����岜�6��&��!r�Xg`	��nD���3���z�����$n�
���6Uk�d��t�gq�BK��ƅ�[�^�m�J����I��-W�ċ���ƕ���� YXY�u��~�%�_��]�j�31�F=��������P�H-��"&�R�Y�d6��/� 2�?��|{2�X�[:S�����h�~�GF��������I��x���N��f����M��uI�g��R�h�灌��O=u�>Ng��F���ԒJ��9]��_�s��������f�ī��,K��|p s/v�,C�(,��xRx|�����n�2�F��e�[�yN�#ɾ5��&�K��ϟQ]_fd>~�}��B�����ϥ��J�,ً_�訌�E¨	 ���!��Hk0C�~3�� z�@��x�_�3,#��;��R/	�h:#��k՚p5f�dF��łs��?(�F�؝������J�Z.��Lį�`�D�F@k9�6t���Wt�-#[�ߪ��;9Y���{����!�,�����ǖ�o�fo���B���?�UyH2Deч�Z���P�_�X�p��qT8,$�?�?��Ռ'��F��ȣ�Q���W�9��Z�K��,�B��0"����5���(168K�_��q�͓�P�������j�oW���`S�r��W���0��2�<A���{����c����j�7�O8ت�6�Z�Qk��L�s�� MM���D��6���-;��!��T��f���±��whnC���z/���-�_;‛~������m�p
�8��G��xՉs�9�xe3�L�95y�p0G�P��瘓�$I8�ql�"@��ѹ.����M��5�&��.j�}�(�Q�|M� ^қ\#�b�ՔF`�Z��QC%?⡆�:�9�x(���XyUF����5�F��b*� ����P�	(^�d�m�X'k�Np�4�]R�@���;�+���_?I4gT�*�R� qʆp�7괐��=��Dy�A�
u��L��[�;쯢�3�17�NL�5�k��G6	���w�y��f�5'(�fs(.�+[/aFs�A�9$�j�kuW��(�F�?��CQ9q�w7"F�A�i��,��B��ẹ�J�8���h|kŕ�|.�7�z�o�ֲ��7�̐=��}��
�;L�酹�� j�;�٥�w�|7�PS�E�Va�*�r=���j��k6j+v�~r}�k?���p����S\��-�o�8��Z��T&�©d�m�ʀ�-���"�-��0�3��P�f���%_�ҫh2���~�!`N=F��4m�KN:���}	���_�⦈��X��K\�s_`y�F����]�8%�Ss���%*�qA�ȇ���������d�Q�Q↤;��$NGG)Lp}Rٚ'O?�� ��{=�{�ڸ��i����t�"�Rf�8<�w���ύB���ehj�Dd����#� S�����5��H���)3���������ĎVD�����C?j������4��� א"����Fj�SoDF�̄�!�oz"���S�m������Tą��{�H��O����T�����Q�k�s"v��E�HLI��	�6Ouw'�I�
�ͽw!���� %�03�ji�I�`ݞ�C��ѹ��Iib�.ȄZ��{hƓ��d�����k���f���H6�'�F���sU���*R��mLT!�R��//ͤ"]z��{Y�i��n���o E��m�T���l��M�?�RϢO�ӡ�<>������_���ٌ�3�;dhU�,�dC�M~+�`��1#�xy�%��m�]lJ7�m��p� �A���/�~�ǥ��rHF��f
�[�q3��oW!C�k5<�'���3�+l���S�8��oݝ4�zR�;��|Fc�v�`�۾��]���qUU	8�BVl�8�N������s�<���U C� ��4�����KZ�o�,��߽�C�\��/�,9����D��p쩩b��)�3��:M'M9k��n
�,������{�<��ch�E�I�O7E9;9u��M�������l�CJ�4���U/��P7k��dT�����!��$܍�ܺ;kH�s0'��-���`�UOE�]�����$���9�++�pj�#r�O���y�ʱLespb�6[l1J��!!���U�Lf����+龭�%r�V���	w4h� � �lt�����:8I4IV^�!._ է�n7	_N]�����D���X.��Յ�·��;��j�cg�}F-_8��)��>#<�������Z��Ӣ)�~=N,��|�zc��*�ai[[UJ�.����qp�b|�9��I�پ��,˝8��%b���N�S�@F6����D?<V����d	�    .\B]P?��3���n�Bt��"�	��_��P�B�l���˱�]	�5�㦪�,����;��w.K�	9�g�oP�k�X$���������I�9	���8��~<�|�=b6�S���Ƃ���U�_}l	I���dҽ�W&-�q����f��Z嵞�P����?���x�:���;�N��Ւ�wɒ�7�~BA��\�SJ�m�hYr&�f��ɞ�	7��)��aq����s+wU�-�$��F��d��G�9�� �y��P�+��Ǉ["�g|\�w�4��8�?��\��nu(�S���ZD�ݟk�ǪU��ܐNPX���d�]��)[M��u'�:Iϡ�!oe�˕�,��CK`	'��̺���X8��AYp}�e����L"[^6�C�j9�n�//9��A�a6�b�H0�
�p���Ԋќ�ΎɁt�=��ܿ�c�V7՝S�]OxaR4Xr�C>(94�s�$;�08&G�yd��Et�C�&���]��M��9@�S!D>"KA�z��i��{� y�H���&�����_��ہ #�͕b%��H[�J���_�!�M�q(.���.�bԒ4�҆��"|���I��F�qBm�����1�im}�V�_S�M�7�$�F�B�g|���B$���m4��ݸ[o<b�������z�>,"�{�@���Hw�-���
I
g���-�����&;�#�i�_Nl,�T�E�"+2׿B`+���I#��<��Ɓ_O�e+�ؘ��~��4���OJP�wR%Aio+����ȜCq�(~ᓶҏLK6ZWߘl�_�G�&� ���y��a�~'u�/ן��(�u['�U�5��K�Dp����^��wUc
�
�q+o	�����=I���'�}��.
U�源C�q;�0�%U�����b�˃7I
�6�))]@����Uk��ك|��E>;������+�
���a�C��>�Q�j���H^�A���B��	L��_ƺS�YaB�����0�i�����Cb��Ҷ&Y��~�"Q�k�����X*L���\�Rm]'W�ɤ�P�������Rz:�<���)?s9���+�Q�"����H�ി�/"w'J�����.���e��m������+D�ܵ�*���oWmc�g�J�T���B���ңo3]|�C�Z�������������G�zO	Ḹ�N�D�p�-Kw�?�����fĞ���v�ˊ�Yn"^��u�Q,�3�P��~a��z���7���p*ۮ}6���q髃%�y�>
Q���p�������P���9�I���(V�9.-�&��r�E��/|�g���2���D��/&�@`��q U��V��y�z�����П:J��c�1#ql�TˊВq�J�@K�1����{E�j����O"2t'J,.B"E�ǉű�̓!�"��p��L�9=*�	��ی���0�ɔN-��8�}��Ϸ�q�Iaa?�#e0]5>�����z0��s�܃��0�&�����F����� 7�{��?��A|7����pN�Q|��@�dn+��I�4�!qx��LNF�`hA��)�H��O�N�:z;P��P�D��뇝~b*����f�R�oDV0�=~��U0�����usR}��l0��g�1<Y��`�P��|oG�Ӓ��hQ�X��;^|��G���0���AᆋM�jf�T�L?�z�r{+���VNI��a�mǃ�dO��:��(�7U��b��T������y"�7��ʨF6|�� ��k̡H��G��ݓ)
nL)��k��'a��O�8��TY��џ����
���j϶	ɠқ�Դ��Pɤ1�j�?(�W��ܣNY�.����v��pQ2䨘�{)��/$Z^����Z�}�H�	̕p�Ra�?Z;�7R�p�/�Vx��2CkV��Sr������>37~�F7�lXSik"�Z��3�\�]�S�QC��eKpr��J)�.&���>�w6DTj�]�i������~�rJ�&���jԚl1)Mea��a{_J�I��]s컋���o�b:|�BS���I�BQ"�͓��*uJ���'�MZ�[����;�F=��hhX�zZ���r�B��"\��I�'��F��5�X�X�D���эȝx�|�����D2J����P�Q�Ҋ�Ҕ/B��f�����)�ܘF��wթߨɊ����A�3ү�b��5l�s��W�M6�;2q��� ލ��٥� XT���5V�
+���ȼiBVN��(=-�K�`� RN�E6AP�"+3��ٷ�c��SMn\)B��}�2��8~�����-wc��~#P�e*#��H[�����A- у��qB����p�L�����;h%��.z�%\
�/7$�L����)4�َFݔf�r��Ћy�b��F�����Y
8���p�PHCs��(��3�ꨛ�=��i�Z��5�F��N�Sk�j_���`x������<���������<�ʾQ�j��F�s�z�C�(p�'w�E���9���e<KZ�0��	�&t�USt�-M�)KmA��!%���b�ʦ�#\T�h�S��� g��h	ox�\h�T��4(��Y�O�?�f�V�I���k�r!�������ugm�()�l��7�lR����O�d�b�k�H���}7�\o^��>�S�p����T��'~�C�#)��n#
�P߲��_R�����K�\�C�\��.��ҬS�l赑���)&GⓋ�Mӂ����7;���[�t�
)ѵ+�$�[�|�|����Ͽ]*\�J�����6�5*�W+���#Y�=�'7�|�W�j�b<��_�N������IY���9~���~��2^ꭵ*�\�S�X<_J<��U�.��=+[�[��\��_��|T�T:����ʦm�֘��R�G��O�H*	�1���TB��@Qf�~J'�%8�s�h��D�(A*/��T=o��B�??�f{��!Յ�Ǖ��RD���+N��U��` SDd�CS�ѥ��������ܒ��DZmn}�����Q�&�F�;�9�ϸ��t�1��V:k��q��F�.�5��#�p���gT���Ӹ���[|໐����	����Ў�m���=O���Na�p�<���?�zJ�b�V�� ��<v�q��w&�[�|C��\����W� "�=fR�U+�ˉ�|q��V _JX��r8���KbEJ�p��.c�]�<��7����@Vp����0�cO��?�x�wS�s%+�%�t(d饑;^%��M���%d�Jf�5�%�%�70�9%���u��I�SQ8I������`���
����K���P�w8(��y�_��@*����t�v��x�iƙ�u�����1���+��l���F���c#�'����SL;2����@����C�ã\}�B�hQ$�`rP%s |�� -I����;�J�;���q�;r���s��s&����Z/`����'�xo�l�;���Pچ��T��C�/�QwSv�pF6˛�P�M�>(�&p��_)J��Y�k���sO��)��R���X<Ai9�?"AJ�X�\z�����d����l��G��SY�9�U��,a��Sd4��OGpt3�����D+?��[⹈D^{`a�����D&���E84�`���HI�&�Z�\ ���i� p�/1���v��i0c��C��ܚS���H�7:�/{��G[�˅Q	ڭH��c�zjh
(�Q0w�u9T_��N,2Iڵ��.��5�e�!�RT�f��\p[i� ���d������5��+�T�:�k(�2�9f_��Id�P�W���A�(Ta\��(vbo`����8����f���!�v���z;���E���'}Tr�O_�nC��`a�_i��!�/��ë}۪-��t�>A+[���@��Z'6&�S0� �)I��0u�����{o.O� �X{�[�qU������vh2Em>c>$\��o�L�"#:^�k�,���]�ɢ��B _a'楽W�$I�_?6;fƑ�l�sڑ�����O
�jU��������P��k��8�ã������E�Y.���Of    �'ϐ �	��֩(���!�2c��e����lv�],?�7О\���Mў�6�ոNU�X�ۿ�JEjd�^(�@�W�,��7�4��W��-:W>c���}�;e��eū��6��+Yzçg��{
���H��
Ok�y��1ѓ\�F}݉xv��l���[j}��˧��䜁+��������04�S0���2I�:������\]�~�^���w��`䨮y�Gݩd:�U���K.E9U�E¨�E\Fr.�?G�J�x��0�0�b�
Jm "�-̦v�y<�r�۔��ѿm��:�M��!I�$�%,�0��C�Lޒ�K��;�PצW��!c�&�V㱣�5LR��(N���R%�
����G���-H̂)D ��F�!H����Q	J4v`��̸h8%@Lڮ��1pM���m�	�8$�ws��I��#>/!�҃նoʥ��ԩ�<ޝ8d�;S�V��̍Hk��K(�ќ<�`�@O���?~�%$��N��nv)	�+{:�]"4U~mȝP�s&/R��4aa�^?�^��~�C�3�c�s�^����鿊ܡ��X�9f�#1߫�Q�hd���{ծ���dh��%����aq1%���#�<��1��\<%�����>x8U�� Ǳ�����}7�O�x�l�*�0#�~����x<�(��	}R@g��q�%���\ͩ99O�r�F���#.�W���ٿ�l��{=~��^��������8'S����a���0'B'%_��g�s%��Kkd��&���̰ �N�M�ҝ+|���W���`{_{?�x���RUq�k8�N��n�}��\�+�X0��:)A�HR�"����W;�m>�Jo�2>F�ǀ��k�?'�s��8iQ2�.�M�"L�Q�1��Ƞ����	l(���܀�^���0ny�s0���/�)��e�?0��}�8��Uh<m���dAZ�WD����z���\�Y��N��XF�zX�0�p'�xM�%h�̍�F	�R|�;�6�'lH((��-'LI�R  aЏ��U����8;�p"�������xYq���Jf�6����L�RZ�\�I���(s}�~��i=��WԚL����W0���Ŀ�C�d�Z��Q°s�	Q
�sU�9�^�E��IM���NƬ=�-)M�+�Lf\9�nj�K<���|���,a�0��t���LU�C�?Hf*k��[����R_<3u�P��`\XU�=]4r[oF��<D+��\)�fKJ�h�]c|�F�P�l7>j�EE$H�;���[??	���~4F����h|`��TR��ڰ�t.�޲Y�@���ߌ��q!us�Pp4��v/�2m�Cj�d\]}� t,cR%5Eݽ�d6���?4Pq�C��s
�z�?��mC{�W|��mR��Hȓ���ڭR���x�$��U�'�?B��5?��+�l^�'���>|ј-�O�BB@�Oc��Ɣ�W8ه���Yȫ�B�����\tc��=�s��>�ԣD�W8n��T%6]���
�w�k���F�5�2]�T(X�>��;�k#�'��Z��6CU#�P��[mQ:��ץ�a��٥�uB��t�ɖ�8��ο-!���Ꜿ�"�+���P������ɸ�0���-ˍ����ebQ)�Y��3�PXjSʴffQù+%�+�7;�n��|'�,懋	�[񽽨���>��X��F`�ЈV
J9��kA�%e	˔a⛗6�C�p�<�zK�̶v�1�0�S�����݌��I8�m�������S��&��,$���_��>��S���w+&��Փޯ�)���L�s�����j�5P��6�_��I��VY�ᐸV��y��T���"胎��lS�*�Ȓ3}sT9�6KIJ#i�7i�˙�\�!�J��+!2�%+�4:!&�:j%N��uw�Q�?N�����?�N8�'=�r�XT�5g���ZAi;��N��}��Ð�EǄ�����qfm1�lfޖ���՝np��-{SnO��T�&��(��)x{8x�l����g��ɋ�z���IoV;1
u�N{-$"Ӥ�S��بo[ɹD�����/���شr\������GǕ="�,��c�ڠde05
�K���ڗ����?�HJ.8�fk=��T�i|h�0x� ��;��hf�v،Z�U��gJ:^�(�j�� �@��_��#�@�8�(0Qh�=�G��F<))����%P� �#[���f�&�pư�!��s�B>��o�uZ���k%'7��GP�I;�X�N!Y<l��%YENtu1_,)��W�ђ+_e[�.��u�	�t�5���L+�״g�{�n����.�W���_�+�K��W1SN-�3ɏ\W�;٦/��ѡN.G��~ϸ�ɮ���|���P�̸�O�:����4*���Xs���UM��i�Tn��tGӞd3�(��91I��1�ι�q9�{U�'6T�R�Bǹ��H��,=X E#kw������Z�8�t�as��݊����ۆ��B9+��@�Ǚ�m��^�w��걩쿏z���-��j�R�J��T�$N�	���	�e����F{�T)���;wh�0��,lYg���lh�� �����_�FB%�T�CX�ømVF ��a�4JՅ�2�:	���#B�+�k	<C�ݰ�K�^��(�M{�/����N��"~����+,x�Hv��Q j�IA�	��x��j��6�~b"�p$i�3R|�5C��;~��N�ҝ����,KP9�@i�l@�&$�T
��� ϓ,ͭD1��3݇�%��;���%k�86�E���䌣��2���s��BR������GY�@AfI��z�����T�Mf𫩸���/����9���
ɤ�_\����FA5�QM�Vf�+]M���GmہG���Μ
F���f.��Dd���j��|�p>�ZJ�?���d˔�0oz�
dSn.��42�_��ީ��="����
�0����x��Q`\�ND�&�n�-(�^Ӻ�.��S�W&K\�BY\~����,��U�ǻ5�x�^��M��w>8��}�}d��_?��S՛ʃrCdy��롛�N����.�Ȅ�I�XX`����r+{���C��3u�gρ�
����j&�ãY��)^��羹�?�ͅ�%��B<+#���Ϻ��aN�}Q!�_zj�b��F�+q(ğ�� �v��2r�?Gǭ��$1�9VG5��]�⺿3QBH}4�2��IA�0���Jp����^���W3�حX��zK�U�>LW3��q�#�ժ�RXn��ߤ�A�9S#LՓ� �8gX��!8�~R4��°Џ]߲}��_u8P]Λӆ1a��ڄ�^�'�&kU��W��ҷ.M	�K-�B��X� �?}Pg}P_����(��f��>ȯl��^����q6�<)G,���L����d�uu����돌����t#�l�b�����Y�F��o1�hgh�>5�?� ���8h������������T
��|�'8�8PP\]?x-!��m��ڏ�����d�/�'?����M��8�����I�+N][��uuMmП��hP�!V+��?t�P�k��6N�냇���:+B}If����\� ��>���W�	X����3f��b�/7���9kR�z��'u���O�ZB��/'����H�_13�<�:��U�Z0Eݳq2��עb����/��l��U�8�����?-���^eSw��%����)	w�{J4����A=<�m�6��SC�\?j45<�U3z#)�L�jw%���p��S��HiK�I0Es���A4vl�%���Ż�;�5���I��q��i����������R�?��JU ���ث�)�!�ػ9�;:���H��ڴW#g�qW�q0X��|��B�s���8PS����u.b�"���&3!v��d��;ou$l5 �TV@c\�$��
2kIջ�PEK��f��LA�}��@W�a0T�+�%�y`��E���a�|�20)J�<�Z�if�n    ��N�B�h����}�n�������h�V��9W�)�-�+{�Z�#;��=l�zO�w�V+2�M��S��e`警
�s�!��#.�@ued���Ūv�%�!IJ��෉L6���Pt�^�5L���2+Az�%�:a���о+��[��M�h����\�M�r�(���e	���/	��f��ӝ~���|E+�IK2H�H>a.����;y�F����S�W|��%箃;k������I!�Z��W(*�Uc#�}~w��a?�6�"Pe}�C����~3�\Ю����Z�#C��ݏzE�7x��~~,�J�,=;y�^\KdH�h�l�+2,Y�r�d&J���3)��f�RkM��K��%���`(!]q�϶1�R��>�мX�"�ƪL>��/ơ�/>���19
�zwz�cU'G#E\�� SGI��{DI��7�I!N�9A��S��D̏e�/��q�Y�� =2�%�?=-�#�K�|z29Ϊ����x�3���;Cg&���Kmg�*�hX���Xn�����~���G޶�3��D#+%�pJ��\ #pa!?iS��1(p�5T�S-ևFG�D ���m���>��Nc�?S��W��?���+��>�v�).�t���\��jW~wI��i9騐��WF�C�"p_'�{���N�$XFf��+/�%�J��y#p`);%ˌ�i�ݙ�g8��d��`ay�8$cP�X��6V+̈́�XF�$j�'���$S���z���7�'��w7%�G���*5�G���5aN������Y�/9�P�r��ȸ{B�z��>և~�#-Q������hډ���-A���[}D�G�2eGο���/��n�A4͕0	Y��L�-:�r�^�
[sĔ�SU�z,&�\Il����W�l�[�:�J�w��̏�[�K[y��{�a|��-b�d�o�eX80��Z^r]�G�c�8����DT����ʦ�r�	�/(�����x#�N�%�_�@6�D�~e�)��Q����EK� �8��������0�BW�SQݹ������̩)�d\c��n�"�H�0?��bƖf�n����9�t��e�M�V#�F٪{��m��^ޏF ���?����e�迤(��ϵ�]�@#Œ�^�$����6z
�@
���?��������h�(���p�6��
)aW�b���[�?d~)�/M���I�f�^x�kh�nj�Lzb�4ʔ�v_0F�/�6Q���
��eN��K��8����4+�Z=jQa�c�����p��B�!�Z	v�@eR�'B_%���s�|��'0C��~��P@5�>v͝�휆M�S�_)gX�FF`�Bar��)��V�fF���i*5�R�0�qt5��+�4QBŔaґX�f�;"0G9�e,~�(cF�G�3���Wv�E�l���1�)H��
�(��^"P�ޔ�Shh��[�P��<[�P����3[��#�R�jwc2Q�rc��q�ASrk�\r��Ed[2E*�a�ױQ�T�[j��x̔�?pa����x`�T�/�m�\Ҿ�Ŷ��m�����ִ_�C�\��M3��CQ���BԮG��"d)��$��k���(����\�,H��G���0�f8�U�m�r�p2׋��\���qӜ�����+U��j�����fw����S�lȿ�۪�y�Vz�"�2����-:dAr-~�yd3�Ҧ�t6����~52o���=:�<բ��CKR�ڑ�H�ce�.��4����-��~��Ґ��og�*����6U�?bj�]m��O���������$A�̭�@��DL)A��Uw��1��:�57�-ܱ�%�@�4W�X�d���
|C����6�p�P��N��g�2�X�E�脕�V&[d���3��w'Xp�I<Ls�����\L���Q���üW��mt�E�%B��0.}���K��K���oX4��#��3�t��7�<+a�	EI;�_�h7��}�R��xw�C/I`c��ҋǞ�J���+
��B�޼�'ҋ���8[����I1Y/&�j�d�ԙ����z�bP6)�'I�.� :]�$_�,5ﾈ�@ޤ��w;09�*|�R^B0;ɲ9+6؝�
Ǻz��%���r���Ik-�4�)��[��g 75�t�RM�]�EC"pB����F�!��0e��<vrt�2-���D�uZ��X�m!M%�+��MMQ�[��fZ��R��?��Me6'���K4����I�"��mv��A�C!?Zp�0���2��Q�Zw���q����o���5>us����E�B�����g���-��&�kj�6ߕj~iU��ۑV�gQn������dU�SO֫xnYZL}�g։<�s*���V�;�uZ+�\g��>}�+���QZ��'��jI�c��)=K�����o�H���ޜ��V�i!������v��vX��@��P��M�"[*��"_�\�iE�T\[z�r�;�lNT*�!Kq�L�����2�ΔF�i|��Z{
���ٴ�-]���b�HKh���n�B��Yf�|�u�;�ÜZJmQ'�	�ѓ���f*�.(��:��c��X:g2�������̭5���3KʉfZ-[vئ�*���x_�B�)|��5�3rO���ǂJ��H^���U�ӳ"��eU8l]�����y�AF>���"����#b����o?��h�⍝ٴ�J΋;��Bk�W\�
|-Z����h�΢��ab���&�S����fʺu�n��kY���t�Β�ˎ��5-At%T�5U?�)��jk�1��4זcC����Ԙu����=~�\��4x�n���RQH �2��_y�e]:�&%[��|
4��Ĩ)�0�h�P�X�G����C��O +P�ęn�7C0���8�Y�K�vd\��G�q�,5S�?5q���]�\��b-+%S�L���"�]�����J�v�=h9��ñ!��c�.���d]�Z;.~V�n��K��7��b>�6'=�pb���Ųg/s٭L x���%��,��c�U��D�2�｢�H2Q�	�z�i}��r9��2������2�G"������T^�����NF`��Է�5͢P&�ڌ�wBy���7�-1�>#�Y_����`�m�̂z�r[�;��[�1,����5ݯ)}:�|�Ͽk�E|j��ԡ��j���~�e�7A����-��~���O�[>��A�.�]�����7��[���t����V��%� ���Q��s�����O����\��a�Վ�@��)��8�r}�襗_6�7���fb���)H@G=��  t����e�q��������d�O+��l�/�X�{�@�E��b�E|��,x�v ������Ř^Yl�X+�(x�~x���ߚ("p���6@���䲟����z���|\l"��A
b!�7̀��^	�`r��w����B�G];$5���W�A����_@����]@�!�&43��qd+� �\_��p~��=�*�� ������Ƕ�OJX�۵�8H��$�v ^k���᫭9�0����b�f�k�ԍ�;�0(8�*�f�0��������f�(�"��M2juE�M��s�]Z+i�SA���8L֏�r24��>'@����*0�5�Tn�U�{�ru�-����4��`�d��Feܮ~l��W�.�*6 �ĕb� Q⳺��cق�v�		(C�^�B�fH�����-$)$��(
;>T������*n���L+
�pC�KɄ>�'����LG�⋡�r�C��)��0�%��:q(8uz�]���h��Z�[[�����k�0jq�t:W�(�p�C#����������o9@�-���������g�ꋒI8Q�<��(DP驇����s}B��[8z��~[4:+l^?���Nː�>�E���8�G��}mB:�Jq.1�0�#���>v�/�#˷9��u9�x6���#�s<L�GB�Y�(G�]�L�c��~�����zW���VlJ<Q����BοMۘ� d�k��2�y!����*��2�0���9-�    Q�3�,��,HdZ��BV��X��{�ڰ.��xPm.C�a�Dz7�#8����W��F����D60�������̄]�=X���Yen���);��'�Ep��6Ǩ�~aim���|o81L	BD(�,5Юp�rf����9��۲�cu����C|qT����y����(�JP0-e��}�p���7�18�n������WE�آ�F&(�U��-�1TOJ�Q`�Dh�H�!������m��#W)��2�<C�TZ��>G�8,��Nq0Ś����4��dd��'���
H�)v���l���L�(��2�L!��n�� �
���(uս�]�S�?]�h���k�۟+�'�Պ����8�_vL[��/.[�yӕ�֗�p�P�[g:H��_���\<]��+�՗�7S��Mi$�bʄFx�A�/��*��;��c��o��8�h�L�I����z�_Z���� p��^Fap���t��2$�W��
���j'I�?�_:`��L�2��F��mN��mǽ��A�t����Vz8�(c��7H������֒��ճ6��5�ݬI�u����M�QUp�DL� -N���p��B�L2�,$���^�`K��[�`%������)d>�?]j�xpL10$�V�"���PE�����3�)7$P��p�+����jf�
�QPM5����W����q��4! C��'��0(
�r��[<� a�`k�8
�:�.�KiĞ���D��"�T��G=~W��	0� �u�|�۴����v�?(��	c�r�����J��e���4׊�Ă1e��T`F���S)�F6��R(�,x�� V�2W�P��%��� ؊�ѐ1%���W����_:���\�	f !3�?�?2�G��S"!O&�~*Ӏ�
�Oc"��iـ|X� !+,Q��nR��V 6qpx9t,�8PkY���9���e�WXl���Z�Ce+
Q�|��)���ps1.��p�[Kc�oﵸ�B��Қ�U�r)�������2�^*�L�p�q�mת͑����N��ʐ*-�K�p�[�J��(�0h�������KV���>-W��e�f%���𫉪�(xU��cW1Y��TY�Q�����@�,xF�I5�|B���>6�\g�,!(�7�ue���KSs���d(B�+p���)}��Fa��z=��^��צ�fzbk�m���<�ޓQ�V;��ruw0���6�L��\��]�	Ah��VK�l��46'o� ��bPjC�S����9(hDv����󯏽���uMu*z��vbnlv��w��=eN��^|f�-i�����꺝MŌ>պ�2�2:��(��8gcA�����B��-ߩ �|����LZ����j}ڣ����ι�ͶZ,��)j� S��i�������yC&�.��S�)��o\y(�^!��-�<�ݶ����\�����U���x������V��D�ۑ�E�
r�|W�x���T�aro+�-��K�tz�O�pK�ozdšf�ڰ C�C�v�h)�������1����.M����p��`��tqO)ً�����o�F�2-�M��V�X�P���;5�duC˞^�@buӘhV"��U�;pVf-�Zt�
$Dȼ��$ߞ&�(2O���L��L�D�Ϳ僠	��P��9�#�u�{���2Q�(O.4%��������򪿐ŵ�&RΞ��q������]���!ɪ�kx�&�D�oQ�N`��:�:N��9s*�3�͔Z$S6A���L�ύ^�svL�w;��V���>�SJ�C�e�����0>O%�|�&_L���%�X��l;�$&$Sv�m��ĜKb���c����k���"-	��(��Shʡ�]��.Gf7(#6�|�/�{\���9|�����+t��b91&�vs�Z���c(rF�0�܉+{*Sb��2�������&���b��ɶ���fG"�g� K�0!�}�ϕ ��j\���S*}%��H�ԏi��Y������$[Z�S��![J���mB-��n���b��l�Z�����5}�栖�t%������>��Rk%�AmO�5�sv�AO��^=[�Y&Nv���6k�����Yle ����Lm��C�e�^y2F�o�<�����OMU��sЪ���Ff��_�J@[?ꡈĵq�;q�d%����	��!�s��"����KE)8>��}�h|iH�_�~l�lm��BCڶ���teش�j_B����_
MHv�K�¡ip���^�2��w�M�k��ky�����&�T�s$ؔ��y?^BC�48Y����3�z�Un�QL�J�p�?�:z˶�|��܉N�e?��*-Pd����ƶk�5�����N��vQ�;�)w��`5��xpꕔZ�+&��N�X؏
�~j�0:�f��jv���j����B ��%8%���n����>Xl�2�TW�#n'5��:���N�Y�W����+���3���y���V�"vܣ�(�!�R�ɫ/R�����o٦x�h�A�:��F�RY�`�z1�<88Z�a�	�cL�ф^$/f��^�
<VK��8z��<��
Z�ř�]�\J�����j�U
�V&ౖslV�`}�P�z�V�gN�������,y�ڵ����6�h{�?c.l[�C�L���#-f
l�oh1;�]>��NL���a������O&��P*D�cߦ�Ϥ�
ql��+.C-$��|��|HH�IBG\�m�_l�:�q���Bڑ��6��Y�^��Os����|_c���j�Y�Wj8���Z/h6:�+��Čn��Zu0BF��P�)S
w��Q�߈EGw����{!`��M�=!��8��8�{�:sć"�~��ѡ��4�BH�o�ǵY�-�\�0jl@�|��;(D��S�P�E���J��fOu�W)&b68�k��G;�\��F�N�H�S�T�Jh9"үͣ�Dr֑����]_.7$�s	u!J���j��J�f�
y���O�,�W�ɳ>@ۊk�F�^�	+�r/��r�۹��m�E(�st��GJ�d�Hc��6�#N�Kw�~�[��Mx��2Td��K���QK2cm���'V"|�_�Ȁ���+_��U�������3���ZP�~"��M/�FB�0#T�E��oP��3���8�B�4��Gq�urV>'��P�� ���\��/V�h��r;�7�%����Zo���~��2������r�mW&WHs��`�zK�%nRi�����~��ñ�:��o����2�^�F���G�S+D�g��ʔq'��L��nԄ�)�pն�8�ld����{N��D/����Hc��H�X@�f�F���q�<�ܛS:�A��V5�X�L[�	���4������n(ԆE�JC��@�j���kU2��t�T����	�5	@B
�4f-�s���HUX|`�i-�
�,S-uub�Gk�tO�Dk�O�0I&�e�Z��0.�ˤ��N]�y�K�3�g�:^�I�Q�����B�V��x1��w�e:��j94p�X��k�2�q1D��r^)0�	��V�E<.y���I\�3��	��aZ-&�[i�ju���`n���1��a��ì5����dL�Ų�S��x��ff�m��I�L�e���B
r%��5c���Y�"�[�y�_�������2٣*球��@0m��L���N'��}�̄%k�=�`�g2��~��:�HU��e��.�#TJ!.C۶jx��:�3'õ|ն�I�B�S���q��r3�"#Q>��s��^k���YD�7Y�[�`��2�]BĴB=
25=�
�ש�6o��&B���h��s��҈Z=#��=� �+��3����P�a��l؆Vz��&V!��3�7OJ��$-��#�DNh^-��,���Z&�CZ&1H�8����
GcG̕�0�$0���T����G2�{3(4g����!�ԡE�U ��p|�-�d�%��'-�
ߤ֭j_F�̥Xh�x����!6�슣����i���e�    ����dߪ��r�hqr��X
8NF%��7%-���>��"��˄=5{�����S�C+^�\1��ls�h��7��X5�c�t����H���R�m����65\����)B�/d��g��]H�{�u+�H�� ,�d��3c��-E�z��pt�?sJ޾9�av�
O^��&�땃}�.Szۜ���܍r����e���d,�G=��t��w�fx����
H�A�'�5�b ��7����񟪇!C�ѝ>���+�bB�fiƮ����cFڰ��Lʀ<�مo�"�JdU�I4�d"[�L��|`�l�/S�@��ћ�DA��|"&X�������%`�.�����{���3���>�Č3�m���lJͼ�WO�iP+���]R+���,�WXsC h%��i��7'���R?\ƴ���h06\sܤ�V��S5��-�ʋ+���ɬb�{�OW�:a�)���N������d��X�+K2�$'K�۪�b�Q ����{5Z�4��󺝶�b�V�f�.!����/N/1返lm⒱z[�E�
��M?��yp���L�b0h[��'��+
�(�drJZJFC��תҔ�ח1���xM�WhdQ����B�	�3�t�Z)O�[sJS��c}���~���ﶾy��Z���j�/�,`��8�� 	����i�%�̖��З�1��f�D�*�S4������$4�ܣ^�A�U��Œ�4���7�+���B��:I8����E�S��Ӥ�� 0����[�������=���.��Z��0ȧg��K����>�~	=U!}m��:�d���gX��l����*�pEmP��ZZ���FS�t�dT�d�:Zs����S��w�v�����s[�*�J�6^i�_�x�~I�9���sp�p����q�V~&�<E�&�b/�S$`
-���q�Ws-N��ťeN��֣�j�S����],��l�◫|8�΅~Wt��[��w�r;k��o�Rr��Y�S .��+���}���.�F�XƉ�l�Y\���
��+���12���~P�bꗞV<1X�>5�O[͔�B�G��5D��z�$}x�1j���c��l.�)�|��\\�� V��h�}���~�违����]Z��[�ɼ�����j�������v���am*�)@���#��{(X��4�m���D�ұ{^\@<{������oǣjj��Ʀ���"���?�ڗ=fzX��>U���N#�_#�o�2����e��g����׼p�FW�eѶ��b��R
6�^���Z�W�.�,�pQQ��4����B�%�͜(	���0�@;A;ܝI�V:)�p��^�|L�"�綎�jkIa$G�8~T�R��p8�6ֽ&`n5~W�FצF�Y�R���^��)��E��Dz6�Yi�����-��;x;r���"��˪�doO�� �,�����B-�2q��$IN�8��c��lQy#hq�s��@M��1�?l�W~7��-
��Rl��d����O�I�\w���U=�&���Xw\�WZ!�����)P��mdV�]�Pĩ�����ӹ�7B#����~�4jw��\���Ԕh�ިw�8(��6�EJ�P���z���;jޢ�Hȇ/�R�2c��S��S�fv�u���2 T#t��Em(���	'C��P��zf�Q��Q�������NQ=B�2E�MO�8�����
�
D偃^5�_�rD���{�2x����%���r� ���w�[d���`��� �x����B#	��M�}2�L@�3|$�ܖ`�Yd齭�E���U*A�ҩ!�Β�p���ႥB���a����V2�El�~B\s����Ԁ��.`f�(n��"ǣ��̲�/��v>���@��"�0X�yA�u}�a�)�4G��dځ"S��3��gt�����&��;��5�u�^?��+�C����c7��9m/8	�����r���:�8��P�
�~���,6s��j����B��A�ͨw��[ol���x�J,��-�S]>���	�C'!uP�uN:�/���s��=�ZL��k[��^��t�c�`�roAQ��,��[\p��Au��ۯ�v�Cq���Q;�J�����E�zETE� �0�SB�SȌ ���žMF�/�oՐņ�D�$��\	z!���A�n����ê6dA�d��L���ލ�gቹ(u��n�J�]1W��jز�+����s����/�h���k�ͼ��[l3��`�9�~��)pܖ4�ꠦ/��LڼV�U���V+0�3��qe.o�8w�|����&�UK�xl�2C�Ho�����:��n�q�� �]������M]1�]5�	=��6%)7457Zm�e7m�����y*�P+}�2�nF���s���V�����in�X�\��
�O�  �����#����}o���I���	M[�ٿ���[L�Fx�;o�ǦNf�� y�;"O	
�����s�}qz��q9|0MH@e�|��'�W�󋔎LПz��^DҴ���P�01�.\$.y����bɳ7w�,©`/061�-±`Pzw��������YTm����k.��8�����f��� j��mԩ8��{����p���n���<C�蓐%��+�"[k����Q��<M�d69�p�'���)�t�^@��S���i'}� �S&%���6�b�t6V9�²�J�%2�0�iA���{�
#�e4�_�s�KF���D7��}�:sHsl4�L���Z2�o�[�M�s�����T�.�
GF�fX{���L?j��p8���RlLT4#��>�`���׍f$�D��*�����S�%�&��&y	ƌ*�z��.�7͎��N�-�3�j�p�-��s-_�i걢�-�=c��9���W3օ!��Y�>`���;F?�r`,RV�g���i��ӱ���A*�,'馁?>�k�Gf�y|g+i�\������f��W���<�0]��=�����U�>�`�'��w^)� Y��Es�'���>��"*�l-,���
���<�v���%t��m�xn�I�i�Qԣ4�b )��3�?R6'��xA��A���Вn��!�|�	��;���ǚa%����!=��@
��O�Ġ!1yΑ�k�U(��ߢ��g��5��D�塎��<�:`嘒�'t9��
m���L�bhpU�O�����a�C+)�4v�I�T�ӠN?�i�u�4N4Hf!�kG�}C���d�Yߦ���&�5�d� ���͠(��J�� ����������&�f���X�H@�C2��*[u=_�|/��?�$3�k1�L��{H���P�m�L�^�z�f칒��|#�@�*�ӿW����u�G���� kq@4E�m����1�\ey�u2������:A|q��2������Nkq��x<1��Th(L3`�^�<�C�kߵϼ�������+�7ȴ�T��y��5�P�[��s�]����)7re��������L�}H� ��r�?����ޭ;����T���;�ȴ�R�X�s���ܼ��tO[E/g�8�;B��đ��/��s�Ђ�	�F��BGS��g�]<��"uԬC����P�Z�Z_��Mq��:���[9c��(Nl���k���
���c��i�u4h��vSU��ѭgR����F�g��>������.��p�k��D7���p�;�ĚV�XW]��3'�S�b@?>�v�Hy�d��k� ԡ�@��ڵ8�g7����Ld��m�ԋj��Q��?����ʮ�-^��]��-GK�Tv�N����'5^g������t泲F�4���?r|�n�w0��]��$UHW5��������ﻚ�%T�Ŭɇ��꣰��Q�}q ����7��tw�3W���5Nt��Á�T�>y�4���.�P�,n�j٦eNeB5��w�Ƕ��Th���Դ�]�8gF��k�[Rt`�{��⋢���W�����\3�ˈ�    i��j�I����=*�YI�@+��P����}�s�\��}$�J^�:7�a�4I�h90и�-:��k�ي߽#s���%�F�5��а���w���Fb��[w���������+)�Ax�N��GI����|��-	�1�9��,T�M�i��%�Ų���P�	c��l�#o[�<���
���#�*�A�*5�L_#�G���&	7q�t���,��b�0`�\#~b�!~��S�L�zn�'��(�r�u�wP��Ɵy���O�l��E&�3-�n/26�&���uG���/�T���|�ŏ���e���'.�S�Ֆ��/![F����*�V>�޴��� �����\���sR�bq���1���!���7p�i�b�;!��������Q|i�
�s���F帇X�h��(~|����ѧ�����序�j�{�CYﻃ��w�.�I����ej��߲�p|��*�!q���k�᫻���ʇo�KX���JU��M��n �]�JJ2��KMGo��8��>��ְ؉ ܥ	�dL�6���Kd��n1H��~#t��d�89E�Y��+�
���q�W����n��d��K�µZ`2{q��Zr��ً�I�͘E�#�ؐ�/�}�x��ǣx��M"-zb~?�.U-+&���[��n$S�K�n��o/�˩���k�9ӌ�α?ʹJ4)V=c_�_'�O�8���ȹ�C���z�ʓf05?��J�ʴ�-��K�(�k;n����]�x�*g�{���џ��g�lǱ龒\��M?_\���T�Q��a��|-���{dcNU�)��9D>\��#4�tzZs/g ��޴Tb���h MM\_��T��$��~*2������N5��_D��Q<�IMt��� _�I�\���p
�M�*�i�GI�3F�P�q�ťP� �@����3��b�n3��'c\8�	9�|������E&Iq�j�f�㜅�ߑs���k��F�>W�кs`q�['���z
����@���)%��O`�x��8g��x�?���R��g�qn'J�X�,g���^n����8@���U��9:_R�O��j�k؎��ۈ~��/��<����|�5ھ���s�#y-�[pك?B܍AMaS��x��8O������r���}�e�q��Ѩ��j�-�S��5%x�a/@X��/UbܴȨ؁4@i���?�����-�1���HU5.�����*8��G�b���n/ql��#�)������qd�a�u`��܉U>l���R���L��Cƚ�8��CyݲZFx���>��ձ�Z3�Ր���ǒ����	|�t(34����0��Cnap�Ros�/kBYZs8!#�Q6�}6���X ��79%g���!zU¼�P����
��JI?[�C.O�Yi���w��ޡ�\RT�X���;A#�zp�����{�W��5���vMd��	�'�5�R|P��X�ϵ�d(���E/�:d�Y<%��}r�Lc7ѭ�>AB���𤣎C��,T�Vk_�*�?ֺ��Be����R0������q�ݍ8mJ<W�s&�Wl�E��X9ף��� ��D\�6��g��qz	��.��+	�Z�ϛ2�}�	�q�F�5ngRr�(
��nnlɌ*�]}DIe�iC��/t�I���Tbۚ�j�	A��Y"���a�q��:W;d%Xs��I�{j��-~�=b{������x��I~�%U]G��B}�s�f�v#�X�����Q2O�${w�౵J�������Qf��9�Ț�٠�n�+�#�h�)�ʇN�e^՛�{::U2%}����F3+���W�R�bPJ����7�8	�=&�4X��lq��� ��0���ӕ2�rWg}D��n���d�!ج���=Vѭd4D��E_^�UJ�d���m�0i�d�E���`Y�#̣�'[�a*c�/�L��c+v�yG�QaV�F�\�C:�h��D�M�Y���j!�a�N�'*ۻ�g8�c�\j<��%u	*<$t����!a���<���9�d���#M�h�Z��;J��/$����y���(U�Dϗf�l���3�̰T��x&ZJLyt��+[�d��Rc���w��a�^r՚���FM��P�[��ji�S/��OC,�yH�
,�����&l�1U��J�[ͤ�X�r�ƺ
���W��d9f���6^��Ѕe���;mF�%��Ndt���KY��]<��)|��Q��Ca�hD��H��<�{��t\�R_���[��g�	ov_��Q�}}�~��BV�,l���(���Fo�"��T/4�eU$�jwN����n�V�O��6sa	Na�p�E�Ib[%��]_�`��2�^q�6I���M}��5���$���R˿�G�&:w���%BFDMW��%��sQ�����\�yK�D�<��Y�X�%,��� Ħ�]|�{��������rXhtU5�dMLOP�:#āj[,g��Mt�I('�b��23v� %���+�XPvJ�lA��d3B���N��9�b*8jmzR�N
jb^��}�`���[�萈2�*��z%�����q�����W�i��������'��1	ud�5��/f?�!>_�拾�����f�p��
�����_�p���}v{�hRM}�n��;�Ŧ�#)7�{�ܟ�ȴIH�:�d[�^�#���֎��j#���f}��Y�	��ii����8
�1�3��H�E9��}$`ޗ����������`_�C�Rts��U�hѮm�@f�'P��i��'��hJ�w	�x����J�B��6�JQ��c*ƺD�Z��~S��(��Aɿ#41�ǒ�u|=���M"�28p�F�ȭ{7���"������L7�����lDu��^�´ݡ�]�g���go�[c�,t��]}��.}������r�x��
���o"���� ��>/-�r-"�o��?_��b��.�{p�Qor���ý�B��ʽ���!u|�L*��Y��[����Qji�T4�Q�g��*�U��꾾ɻæ�^�:?� ~[�g�q��W>!�m��vbLe?��d���x� j��m����ٔdG�=�)�1f�9J6�'�UKf���.[#N`�+<�ݳ���D�U�^}���Iq�!�r!6`��xݬwar>��"k���,I�?P�l��,(�Y�W>��_U5��g�r�����h�r��X�~!DM�d��`R<�т�R��v��l�lP,�jD�Ԣ����3���W;6zf/'�ƌ�84%����CP�F��P<�Q\䞶;��=�݊��C}� M:��D����d�16x�WY�Y�3�T>u�>hA��B�0�Q�`�[�-������(Q�V����R�Y3��ܹY�:^�m��2�)���r��[k�'��@+��{h�Yh�> j+-��/��_ݬDKȜ�Lz`j�T������֠�b�{��-�s��:�s���[M7�f��8#(�3�`+�>to����,�O쉮D�V�ݚǪ��C���-���zp�}���Ư|Φ��v�=x�v |���={:c��o���~�նn欻=�P�u�d��g'����"=�C�p�����	=Z�.g�ˇz����5f�b�ڍ�n�%*f�P�'�|��k�c���U�>��X���Z;k!�M� �Z=���ZD$��b�T�b���#�A�j�r�}�"V�8��%l+�0e��`�7n���>ɐ��B3�/���@�v��og�A�Vb�ѧ��SgoQo������)��	���HK7��L����k�@��M[����W\��<2Z�����=xr_k_9;���)5���B+����7{s�C��Θ)��by���ݞ�I
��7����k�`w�(�+��S�9���)d�����q�"X'.㞿��6�'G��x����o˻N�f?�����pw��ϓ�T,=ќ�����<��Y�3�Q�A��f�QD
Y�PA�����̲��:��̿W��6n������_�%t%Zõ�J3�sD���:�A焾�hǣ�9W��)�޶ն{    ��_��<~E5Y�e�y�mM����|�.�9{'�֚��!8l�%�sMy �Yˍ�;�+�gV����s��eW����m��I�^(�J�F�V
���f�J�'�䨴�O!a&���YsUD^�c�J�Z���Y R�}��CMt�����@ƹ}��ؓ�����B�����rbMH�})�����2~��п�ܳ5/��.�*8v"8k�� ݚ���;M}�v~���dKf��`k_@��_ n���5ƞA�:��HsP8��n�=���d*�� ���w�F�*�\�����=A-}��$�#m��O-KF�HN�Lm멛u�C��`�}h��^k���K�K�t�h���M�ln�>�j���$��*�j�!��ے��R�W�i6��m��YH�RT�)���!ܩ>��m�8�)�����6
��+�� ����}�d�~ V=V����R�ډ}a
ٰ�z��eI#��aSz)\��ͮ�	��z��By���&��\����Qev�]x��s�N�=�L,��e[FӓJٖ4#����}�P���x=[�}Q4u����[��*ۂ{��>8�i���ʾ��_�\%nq��[�sո�)�f����V��]����m��%aE�))��Pb��+֞iOGT�"j�S๲�B��K�3�#�`�D��"��R12{-\I#���<�<�y�Kz�;�������L!�u�3�=]�K��Ӑ���v(0�������������<a(I�4�"qs��囋���)���� ���y�q�2�A��%B|�����l-�l_:����<��N�Z�� c�g��y╀��s~$�� �R���!����w�-����H����\@F|�|h�S7�HG�͔z����X��2��6=���(�ӳZ�y�q�V
}� ���TK��{��܎����XJ�bR�T�&�=��D���cڡ�:�
Gk�n�4�'�X�r�;>�L!�u��RHaY��3Q��6ut4�B�!{������O!�@�Y�������1�y5`�Zb� ��yXg�2'��g���~+9����}XR�bݺ99�ok(h�!��� ��d\�j���J
U,��_�n�n#`ZH���[L��\�(`�BV7�h��F�ט�!yP��Qg,U�7Z'��X���h���ۧDzBP����6Ձ�E���e�LZxt���D�mӝ�hT
�,��8�$��c�)�����ܕ/8J�B1�v��C,k$O!��5}G��)D����Pm#�R�z���RYBsnxTB���=D�	J�rVw��L[���������g�hb�]P��[>�L�P��Tn>m� P��VC��ŠN�ㄗt.ⴻh;;uڃ�����P�h[�H�(b�W��1�)hcY�[�_I����^�e	F��n������ i�-"�DF����-/�䌆6�TY<�m�:З���D�;MzYZ+���|v�\$���F��NX\�E��b݁�)4��H��� {0P�7���l5d�N��P�2I�׵۰�u0�*�uy��9��?!I��bT�[��j��īHP���e%b-\�9/*��8I�'3k>a�I"c"���u<���˦���=���>K~D�ƔG������#����L��K`Lm�S{���ұ��m�{��>TԪ�5j�XQB�3o<��Ҧ�O:���̙���f1��ԁa�ƴF>]ش�i�D��6����כF�����N�� �dJlT5n״�_(&���_	�]��k�����y-2�xC�^��My�I ����_m ���m�2�d�yT�>��%�x�:\1�s<N�J�,�@�z;�nqE�+���@H�:�;�6�D?��e����M�z�7���&�G?��A3���L�ğc����d/z����Z����
^�j]�lD.�����*p'Bh�
j����C�:h]`3�,CB��d�K��莗RkP~A��e���w���+o� �&�4���U����RH�}m�J6���I���`���j U�}}_(h`p.�I}Mߕs�u_ׅh�T��b͐�^G��X��\�92��H����*8�r�k�5�V��M��j)D��ZӾ��s��y%t�P[%��lw�>,�k���pg��V�i��� ��	��'2�A`��*dP7Q>H���i�C���r�,?��Y���PP�v��q�1	{�Zi�@�1��[tգZ!>@Ώ�C�N�.�(<�0ۧn�����V7�RU+ڌsS��y��8�	�6�h�2�*�vȀ��ǙB��ޞ�a�;�{��W.��9)Y[�'ර��(&���Т�ٚ�W���	Q6<e��\�*�f��|��5��H�Jㅋ-��M��@d��?������:˓L}��M�|��u��8�U5g��A��������шB&�U[V_��%@�D����=�]ɟ�P,�B*�8 ��B�3)��YH���*i��|���eRh���i��iH?����@7�on�o��v�A9��&��}	�|h���DZ@'g�'jUh�p8L��hV� �X-��%����^~���X��(�������B����a��� ��s�R�V��]�l��!�?���Ry��6%���+d�)(��4�O���$ĶP�� H�=�������E�Z��v��d���b���]|)l�����[��fo9쩧AbCۑi5����/��奉xOݰ�9ojL�(�?l�L��Hw��_Q7��^�x�{����A^*H�L܁��ݔ{�C2���yzS��`���&{�y�B����鑡�'��g	����=as�R>y�"����6U��M}�5J��~]�'�sW:��q.�S���_�c4�BL���E���3�b5Qz>d�W#���V"|�z������_ �ܛ��s�==�JHo��	��~�q���U�cS��JV��}0ւ�D�Y���^~���H[�h�s/�F�DxT�ƸP�-�0 ��q;I�f��jJkE&���]t	|I�-^ss�0�ut�ٷF��`sf�FTW?ҟ�ɐ��tn�;�>�}1{��B�Ck�gΛ��anc���ޕ�2�R�z%�9<�k/�$Y�2��ͦ"�P@������4X�o[)@��2@7M{�0�+9�_˻�cLt����n9��.2�r���gkF�p-�Q�Jk�\Ч_��4�r�(��!B�wp��n�X�rx��q0/઄��1ϥ���Z b�G�Zs_*��?�"�վ8'1f��M'떱��v�2���&j[�*_S�BGj���2Z�u�V)�RFp�&s�䪬��5�p�|��A�>W�	
u�>� Y$��I�[M�|�k$[�r��@k�`����^f̮�vP�*ɜ]}̉.����!�Eb�j�}���~I3RS?K ���˨lQƎ
�s�Vh�Υ}��&K�b� ��µ�w���Yu@�w됓$i�\i%�j̉��GO�Ļ#�R}��^���(�.R����"�� E�.���Zi5��z�R�<�Q�/��N�j��Tu�!�0慩��B%����QC��KRψd��GEyW�;���Y�C���%��z���TZ�d5�Z_��^�2��b.l�n{�s��Dn��xT#�(��E���\ՠ���)!aR��>��.Q\��=��!s�՚>�������W��]��x�L��N�Rh^�9��������?<q�i�К�7{��U�Ĥ\MN����-P���K_E�7)L��	ĘB|e��'K���Ҙ���P�,��qU�p~}z�s����v�=V�ۓ������f��^�"��(	���Ͷ{`c1S�~2���M��V#e<%C̗�г;_S*dڎ����R����v�� ��� Rk�v���ߠ��?�)��XHiw�bPjPJ��>�(w�`v����а���;�\g�(>��N���V����=Y�Txc�`�j6��d+�:ֺ��k�/����rީ�B^� /g�
0�ʦ'ΠQE)�R��lî�v>��KUZ9��������DH��U*U5}L� RYsl�GS��    t��F�R�!L�`���������q�$�tc|��¦&Х6�Ix�.�-��nG��y|�����F�|�Cw��y�(uS�ۉ�V�Ԋm=��F�QaH�3 8R{�:,y�m� Zu]����ӯw�M�Ԭ+ɨ��#q^j[P�3��λ�v�vK�2$�$���6`�O̓dE�ɦ��;Nݔ_"[�)Z��v=;�Q�<�T!u-�6���j�gdr�F� �ʌ�M:8|1C���4;v�쐃���x%��f+�Y�(#��K]�
��R�Ȕ�
r�`FB��n$A�c�yp�ˇ���������@>�bU}o�?x��V�A�I��n����G�.g?���<���ϥ�6����7�	L�u��XU3 2ܣ5d%����������:w���%�{��d�}�?�+��C����pИW!Ѿ�������x?.	��<{�,�H�u�0��y~jc�:�dVm���/�4�
��,�i�����υPS��.���g�+@�)����j��{�l��أ�
Ę`js]&m!�[������X�2)�Z����j�`�@�r�%C�ɜ��I����%���̩�ܶx_A����s���D����� ��拥����:=�f�H��70X�ze�N�2@������ �B��+��o-���bC�	����\h�����Y�t����#_)�y�dD�����X��]��-$��<���g��-^sbHRe�1��i��|��+���PbҤU�t��`�z�UI����]�Q����iާCO�L�W��,��#3��֏�.�K��ӳ%;��'�C����/��J�6�ή�é�����:�p�4e�҉HX��${4`�v��A=���y����H7u|#}�1*��'��6���8����%�q2qO�e�,&�tG�r7���]�H'�,��6�XI�5�"�7�ٯ�>d��KEcɜ��m&�#�]B��r*�����F�ܤ�G.��r�ه�	@�bM'�"Փ'3R�tZ�_��}���P�c��m��b��,��bY�Ľ�#g�@�^�P�tS ]���*��3X�O2��Ր���� �kK�q$��=��1��A7��A�S�R��P!�mbp�$]m-�~c]H���B�F�Q
}�v�ۻ*�K�_���`�Ko�� �z��S4�A9$r�!��F-�T;�Ѓ�k}v���ۓ=A�Է� zP+ќ������Kd�Gï�2���"?T/����� c�i��c����:�4�ް=�sӀK��Yb��y�d���'2�[x+j2g}�XJto`pMF�[2J��9�1P��`$�u���D�`�K{'Iƚ�v���%��Ϛ�xس����+�X ӭ>�n��R�e�0�_:��{�Do?���g��C�a��0\'�%����e�NVB̍l*�/D*�o��Zq_+�7��n_ҍ �}�L�-_#��q��3�A��6��%T��x�`K���P��鷉����G�Jd���(q�c���&����P�f���M����<|�L������qӥ'��]��2Ef<�k�&��G�P�-;9�2F���#j���{V-W36��جG-S��_vћ��C�f�{��{>lK~|p�?h������Y�5�� �UX�� l~�ew*��I�HH8`KOV�d�v�n�᱑K2�����!�<��Y��` �X���ӯ4�r�X�f*]yu�S�����/�����֖x�St�%�����W��w-ݠ��^V�J>�=�潜��p�<ӓ���-n��!�w�+7ds�[c6�}}��G!ՀsI[�`I1m���AV�\|�x�i}S�;�EF�'H-o5;�4ʥ��nS��w�̣��z�����H�+r��oܸԣ���zg�	���9�gzA��tN�t�a,$����з��������6������_��3x�;���Gl<�G@-/!�G�z����y�z �2�A���ۓ�Ý�F`~���Q.;cE�ŗj����YC���eR��QcF�I���/�N���r��*t���3F<�}�f#���?�b���A�e��L��'h'sH����ߩ^��![f+%�[q���l��k���<�a��n	T������H>`F%�4�|U7樇��C=D,�9�C��>[�̹$��!��-���;_�-C	s���+��4�����B~��9�g��6�Y`�#s2��=�����Q?}�`�	*��~=q��<�Ҕ�idy�k�q�a�(�9�j��N��j_�{,)�8�e�{�J+�.�⛯��`�+���mm���I��䌆�ME�hi���2�O���w�C��'Oh�s�m /����
�z��̔E�{�s��Z������3�-�3��'O"c���u]ny�����ݠ��{��y�k�`��d��|�F�(�D௞~w^�wH���fj
��(Q��u��kdq�(s��N �잺CJ*W�7n�y�������<wf�)�-���@	�S�5�����_dNa���yx0}w�X�;D�'��9vJ.Q�WM}��"�_�CzO�eڭ���>2T�޸��D���b��f�7�P2��>,g`�O�fWo#��Q���.�fFEv<Q9���=�A�ѧ��AQ�z����\��_j�])��Xi�]�]�÷;n��y��\�ہ���B��٘9���{�����vBp�>I4�8�j4�t�J8�W��;+¶���ѕ���L˳�t�m{�Bpjw�"��]��I��.iwA���%���$����+�u}�"R{�|%}�ZCH��ܝ�z�!�1H�d��}4��ex8��
I��r � ��+M/j9畝�[��n��~�ػ^�V}�5'��ݎ�9�IZ�1���8�v@^����tSP:����'����f�b��]��rc]�Jn#T��E�J�z�5��B3)�q�h��ʸߑi��=��1/`��{�z��"c�f�#^����t�O�{��`��Mԁ���zy���tC���j�ǖ�$��fw�ν l-$Ƽ�ٟ�K��wxk�i��xi�:л�[M����zwt��_p�+�6F�V�; K�1v����O�4��|������ �I*��/2���:@��݉��i)�G!+]T�����2%g������f�6r�>u̻R��#�1�l�Ǌ���;+�k���V�.�Uꛧ�w^H����sM���奯��\j
-;�z���x�.���%����'���4�d���#�O�}��ۣ���Fo��sһ/���B҄QB�}��ry{j��i�/�#�-#E.��dZ
w~��l�"����e"�/v+p��ב��p��2WI��l������VxRdW�{�
$
�#�ܩ�)��:�h^f��!�r������Mur;y;�3���ۍ�И7�;� ���*��c��:�v�ɠ�#V�Tv��ϧ��u���;on��fPڹ."�6���}閱#z_Y�s�������9���u���(���88�AM�ZJ��)�]#Z���㺭'Q3��8����Cvn�E�U�<�}� �s�&�?�ΫBw����s����s�7� ���+��9$6�қA�>��8rN����-ې�d)94�B���A�G_v~� ��$���/��v1���<�*�pl� &�HeF�B!��:cV�������xI����%� ��=66�Еۛh��A���*}f��y���/�`�@j�&	��^�f��=�E/ye�L �[d�B��9�2NO����2(��V��:�c��
��iϠ�s�l���p�"CrF7�%�Ƈ'$sn����&�+�3v�T��gD0��2�7����+�7�-c%	�{e��	-����U �m����CE�_����S�y\c`��c7MKv���â�f]�-�
DJ��A�/m�z���H����S�;�|��qN���,9���{�>�p�{�"=�Jv6�A3H�/E�}�����z����ĽG��*�k���n��+�ϼ��8��������%   &�I76��oG2h�hiG��H�^+	s%O˅׉��w�g��^$V�2-|�`Σ(ԍ���#�I<WL����O7u���G�:E߳s��׮�.B����7��t��(�xZDb�d�c[W�}8/�G����̠��c;1O9w��Nɘ;�s�/^"	�<�O,�P o��(N�Ao��� �v ��Q6���MY��r��[��|,�AT������0���:ZC�un݊��z:�������i�L���\����<!��ub:��R% #3:��<�ƌ�ڴ���E�� <�dĳ��f#yq�O����T�b: b/":�:�)O�[]�U"=�Q$T��(�AJGʇ�2����tt�UwOQ���a���j�rzt%�Y�E�	t�|U��N�sn+����c��e@���/�i/ �=�̹�=���BdW��%:9����7ȷ�I(� }���� ��¨�m}���g�^Jiզ�ן���U��pO�Y1��-z8�Q���N"M�2t*�M�ی�.U��ө;t<���@�<���(�4)�<�9��Ӑ':8ͮ9�#B����o�7p�� {�1�#F�֠�.��S�G:9Fq�Lot��W	��L�
�Iz�}���i��������5��ul�h�/7m9�7y*|3��č'��
�|�� /��g�EM���4U�?����m�m#'@dp����|�u��{�Ԡ��W!�-��2upKȿ��7�@g�ul\�R̹���|���d�k�^�8oO�dD2yʇ��͇�N��mU�ۓ��7��C��� s��ѐ���x,B�F�S9@�(��/�`H���P�DoT�oB���-8lDrL��i3�"��[%�5hf�x��<N����v�ԇM4� �3�VZ,	��"���5�X���Q����SOl�!��~��u%�qPGx�(�<E�28�u�>Њ�K�G�h��ެ�?�Jtz��U�f��j��qWǇv*g��:mQ%�ݾ�Z~�^
;��K��-r@�EX2	_z|4��b�����ՠ��x��O{u7��M"��$T�*A#�>�Ԍ�޲ RӫM�q�Uy D�$Z{�v�.�����,�fD�n�-�YsaīL��d��z��)[�E��+׭X:��cߝ�$(t�����Q+v4�.z����T�N�P�'��"�ͅ*�`5j�?Ct�mB��Rg�l�ט�t6��F8	�;n�4�,���¿z-�I���oY�N�'ɩwy:VO����DϓN)'�h%��� �tJ>I���r�Y����V�%���*�%	ܓ3*R5^���q���D�P�-�7��R�M��
�C-�A����XCɔ�V\��&��(�S��r�su�ݚ6���mS�g�7��P�,E�JW}�QtIl��Y\	=H��F����l���J�*�0z%�A>)��zASz=1��hX�C�8�%KB��My�x"�WT]��u_�=����0�M�Ff"xCJCQ�b&�7�m8F%�7,BDh6�(����ﺏ�>���T�*D��2��)�\a4È���E.3�Չ���?F@�#-�<To��:���w�{�P�m�\%x��+���������.h�&:����n��á��l�B8�}�έ��=��G���~8�7�cAѾq��_��O��F_
�o�~9z�DEƙ(ޔQ�a&�7e|-�7�d��?���D�FRg��D�F�QX_n��rG�<��] �6�ky�*�W�ٸa������_��ؔ]�����Mu�L��
Y�f놓[��ǒ\	�����C�n"6q�T4l����L$.D�;�|j��:6�\�t���Om���k~�$	
Bm�u�xOݝ�Q���LD���:�����4k�Q� `���x����e4i@��Y��|f����_�l�O��ے��0u�p ħFP�����t������i����w���(�J�c/"PS����(�x.��]�R{�x�}j2���q���j*�1��A$��!�s�ʇ����-�'͠I+�D�iH��b8�9Ġ�s��:4��A���Ur��E�RW� �0�%���ږk�lc�z���f+
�5�3-����ꆩ�˴@ͨR�c�+4���@+_�O�n0��͚nBx��V����B����1FQ~��cՇ��� ����.>0�ȵF�VQ��h��GF�J�0pO�\m@��E�����{+��24�\9��/h��"kc������� '�M��^���π��3c/$��k*r�,���R&���]�~IV*��V\�LUl=�-�Q�tFLB:� �Ǧ<��P�i��+R����H��s+��S ��u�V�����b�a���|F_I�L�?�z�Z]F�3B�wWi`9�ƭP�?�R;&��
�8��X�o�@�aZ�Q+��R��ͲQ3��G�*�[U}�i���Ah�{���
��o4���iv� �GZ�>� #�Ѝ�I��+BB���D�K=��(�e��h�CF�m�mM�0dd>��c�[�ץr	��6��F
�s��XI�W�YN�L9�2#c���T�Hx�_�6��hLi�L��
�?;m���P��ܹ���F���{��!zy�eL4g�bt�b�ULm�>98���X���k�+�ך�n�^��9<�f�*�>6o@�6{��_U4�Cx槾RҘ��]�a�� -A��f�!&b@��=�'��<�8�i#!�l���2zd?����<w5:���GOe���i$��^b��� �?�2@��*�2�;�8`�0����ݡ�<�&�a��A4��G�z��A�#�8��={��ߔ8|�X^�x܉w��A����EዒL�^��˯f����g�T�g�P��/C����k����{ՅOe�O���5ҞMC}e�i��Y��\X�S]�	aB���>jkP!Nд��
�ga_'m��<�ex���6�Ц�"6�<�N�7��F��������	^=Ut�q��έl�(|��D?BզŇ��m;�u�n&��%���I$QoܜN_ݗ�k1��I�t�������u��i4� ����/�'�5���ŀ�w%b�_�����$!�u=�Ώ���?�V��M��:W��A���{"���_}�#(cE�m�A��3Tz�ژ���S��l&f�o#$������z��?��Q�2�U"=��~�NQ����s�M�LYQ(���h��u�&9^`W��y��+�S���􍠶��w��77��@�?31Dp�­Ϸ�����M����ԃ���3��l��,y��I9�%
9���s������N���R3�_�=	�O�(���(b�Y�Bʅ$���l����#����y��ȳ� ��Zi4L�|`���n�~S���آ���e�f���/�(Jy��7zI��GW{�C����h��?:�O3�-;��dq�,MӪ�ZM���o����v�K��}��� 4��g���������p��?S�g�ݾ��!/mӵ�	�=�����{��(/�4X���z�a e����/������۩{�)�}���z����>3���?y}=�{�y�nE|��.����t�e�u0�*�[�����f��d����Q)��������(�g7g���������ω�,�����uPD���֭��d�5~�#q@$�>�Ɍ�!"�nf�3Z�����8G=\h�9���In��r矫9�y���@;�-�`tv�wc]���_���?7��      �   �  x���1n�0����@�-ǝ�8�Q��\n3����M���m���r],��E��I<?gH�j�5d&��Lވ2�R�e�f٢�J���HTz�ԣz���\��L�,�?,%9�#��n2�QL�i|C���^-aU1�9ֆB,a�a
%�l?;����M������4^�XGn��tL����[��7S
�^�w���hl쒴���Mͅd,'�R��>�Ǆ�4�|D�/�f�u
�kivBjh�<�̡Mpt|>�<4��E	m�<^�q���8n����hm�c�>�36x�LJfW��E.v͓�A���Z��㇋�N˝-)���nH2�r�iZ�<�ӋC�
qb�}�]��R�Lx�'��ۈr�.�;�����������⹬���֟Y�$����      �   �  x��W_s�6�?���#��%?���Z�t/��`4wo7}���}�XW��B:�\�li-�V���oC��ug�����y����]�桍8c�P$C\I�-��+�z�4�w����m�{sqտEg��c�%i&t߹��X�W�n{���w���n��
s�U�w7����[@JAP�K[l�
�RTI�"A���FZ����he{)����R������wWn��M�����u����;>�G���ޏ�X-����?tz��>,�`]LEDIĨ�y�4��9Z��bT�[cm��}�E��]%k�܉~=�Z��h��Yĸ'�?���S��+Ugj����E�ac�4�;��qB�Z����9v�8N���]fg����1.Z�Ώ�!�G�RY�K_ ~Lj�\�C�S?��:<�[�f�6��t�l�{���u��mQ��5���W ��,����\�A�T���c�󰔦��䞨`oF�~�0���POl}0a=[�Y�M:Yi@oa��*}p�yaH��A�ϗOS�N.�|��;ǂs��Jqd��xb������;6`�<3��"�#�[ŵ|׼��<��6�P����B�m��8k�����=z�
�Ƥ��PVZ�$�I��K4Y ?�&K��ӭ5^fq�g�*��.W�!c-�9<� 	�,�!o�wf3��R�6�[5���Q:��)ϒ4� 'FN��ϋ��-u�k��@��q>������#��P<2z^:|q�<V�N�\�[2/u	��-̨�lABuw.�ws��9=r^�vbpX3F���@&	��C��H�<.�q/�[���ތ���,-���]]�*񈁡�I%-�Q����*�!����L�r��|;(���Px���0�����R�+���?I]�=�-�TF�yT�4���e�<����i2-F42r�Mi	�g �#�$�$B���,$��`Ѯ�M��[��ϣ'm��ʛ�6Sԫ�e@`h��=� l	�0�q�f��M%�(�B�Ahi��j������`/M�$��)U�΋�� g#;?��+U;���5��[���P���"�p�%DS�_ԗ�Q���4�$��X��}b��R�2��#���������`���\k��L�k������+ �5$���0���ާ����1d�      �   �   x����� ��f�,�
�b�N�KU�K�F���5$��:�A2��A`Cn�|2�}��h�#MXkS�����������;
���ܻ�3���K
n�6	l30�& �"��좚�w������3�B"�Gɐ�f-�7�lݱ̏�2́�Z(ou�+�Ǒ���`A\,S���b�v˽BtԆꝨt��ƋR���F      �   �   x�UO�
�0|�|E7XFL��c�"?`a�ϟY�f=<�w���0Ǩ6�"#��A�܈�9�(ϼ��O�b-����Z&�V�Sӊ�f0j�mR5P[�;�y���,Co�´�WOK�c�/��<D.9�L1q�kx=C_J�     