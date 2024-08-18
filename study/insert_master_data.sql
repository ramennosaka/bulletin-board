INSERT INTO tb_pa_impact_info (id, pa_cycle_time)
VALUES (1, 46000);

INSERT INTO tb_schedule (START_TIME, END_TIME, WORK_DETAIL_NAME, ROUND_GROUP_NAME, ATTENDANCE_DUTY_ROUND, WORK_TYPE)
VALUES (CURRENT_DATE + '06:30:00'::TIME, CURRENT_DATE + '06:35:00'::TIME, '始業点検', 'ラウンド1', 1,
        'START_UP_INSPECTION'),
       (CURRENT_DATE + '06:35:00'::TIME, CURRENT_DATE + '08:35:00'::TIME, 'ラウンド1稼働', 'ラウンド1', 1, 'OPERATION'),
       (CURRENT_DATE + '08:35:00'::TIME, CURRENT_DATE + '08:45:00'::TIME, 'ラウンド1休憩', 'ラウンド1', 1, 'BREAK'),
       (CURRENT_DATE + '08:45:00'::TIME, CURRENT_DATE + '10:45:00'::TIME, 'ラウンド2稼働', 'ラウンド2', 1, 'OPERATION'),
       (CURRENT_DATE + '10:45:00'::TIME, CURRENT_DATE + '11:30:00'::TIME, '昼休憩', 'ラウンド2', 1, 'LUNCH'),
       (CURRENT_DATE + '11:30:00'::TIME, CURRENT_DATE + '13:20:00'::TIME, 'ラウンド3稼働', 'ラウンド3', 1, 'OPERATION'),
       (CURRENT_DATE + '13:20:00'::TIME, CURRENT_DATE + '13:30:00'::TIME, 'ラウンド3休憩', 'ラウンド3', 1, 'BREAK'),
       (CURRENT_DATE + '13:30:00'::TIME, CURRENT_DATE + '15:05:00'::TIME, 'ラウンド4稼働', 'ラウンド4', 1, 'OPERATION'),
       (CURRENT_DATE + '15:05:00'::TIME, CURRENT_DATE + '15:15:00'::TIME, 'ラップ', 'ラウンド4', 1, 'SHIFT_DUTY'),
       (CURRENT_DATE + '15:15:00'::TIME, CURRENT_DATE + '17:00:00'::TIME, 'ラウンド5稼働', 'ラウンド5', 2, 'OPERATION'),
       (CURRENT_DATE + '17:00:00'::TIME, CURRENT_DATE + '17:10:00'::TIME, 'ラウンド5休憩', 'ラウンド5', 2, 'BREAK'),
       (CURRENT_DATE + '17:10:00'::TIME, CURRENT_DATE + '18:50:00'::TIME, 'ラウンド6稼働', 'ラウンド6', 2, 'OPERATION'),
       (CURRENT_DATE + '18:50:00'::TIME, CURRENT_DATE + '19:35:00'::TIME, '夜休憩', 'ラウンド6', 2, 'DINNER'),
       (CURRENT_DATE + '19:35:00'::TIME, CURRENT_DATE + '21:35:00'::TIME, 'ラウンド7稼働', 'ラウンド7', 2, 'OPERATION'),
       (CURRENT_DATE + '21:35:00'::TIME, CURRENT_DATE + '21:45:00'::TIME, 'ラウンド7休憩', 'ラウンド7', 2, 'BREAK'),
       (CURRENT_DATE + '21:45:00'::TIME, CURRENT_DATE + '23:25:00'::TIME, 'ラウンド8稼働', 'ラウンド8', 2, 'OPERATION'),
       (CURRENT_DATE + '23:25:00'::TIME, CURRENT_DATE + '23:30:00'::TIME, '終業点検', 'ラウンド8', 2,
        'CLOSING_INSPECTION');
