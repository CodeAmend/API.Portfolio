const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SkillSchema = Schema({
  name: {
    type: String,
    unique: true,
    required: true
  }
});

const Skill = mongoose.model('skill', SkillSchema);

module.exports = Skill;
