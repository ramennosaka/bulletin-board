CREATE TABLE tb_gw_abnormal_log
(
    id                  BIGSERIAL PRIMARY KEY,
    log_id              INTEGER NOT NULL,
    abnormal_status     BOOLEAN NOT NULL,
    occurrence_time     TIMESTAMPTZ
);

CREATE TABLE tb_gw_log_details
(
    log_id  INTEGER NOT NULL PRIMARY KEY,
    detail  VARCHAR(255)
);

CREATE TABLE tb_gw_mc_flow_count
(
    id     BIGSERIAL NOT NULL PRIMARY KEY,
    count  INTEGER NOT NULL
);

CREATE TABLE tb_gw_weld_buffer_count
(
    filled_buffer_count INTEGER NOT NULL,
    created_at          TIMESTAMPTZ,
    uuid                UUID    NOT NULL PRIMARY KEY
);

CREATE TABLE tb_pa_impact_info
(
    id              BIGSERIAL PRIMARY KEY,
    pa_cycle_time   INTEGER NOT NULL
);