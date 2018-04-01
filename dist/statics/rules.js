"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformRules = {
    'род': [
        [/([^л])ен$/, { 'м': '$1ен', 'ж': '$1на', 'с': '$1но' }],
        [/лен$/, { 'м': 'лен', 'ж': 'льна', 'с': 'льно' }],
        [/чем$/, { 'м': 'чем', 'ж': 'чема', 'с': 'чемо' }],
        [/вый$/, { 'м': 'вый', 'ж': 'вая', 'с': 'вое' }],
        [/ный$/, { 'м': 'ный', 'ж': 'ная', 'с': 'ное' }],
        [/ной$/, { 'м': 'ной', 'ж': 'ная', 'с': 'ное' }],
        [/щий$/, { 'м': 'щий', 'ж': 'щая', 'с': 'щее' }],
        [/кий$/, { 'м': 'кий', 'ж': 'кая', 'с': 'кое' }]
    ],
    'падеж': [
        [/([бвгджзклмнпрстфхцчшщ])а$/, { 'дательный': '$1у' }, { род: 'ж' }],
        [/([а-я])я$/, { 'дательный': '$1ю' }, { род: 'ж' }]
    ]
};