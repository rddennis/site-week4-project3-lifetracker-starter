const config = require('./config')
require('dotenv').config("/.env")


test('Node ENV should be test', () => {
    expect(process.env.NODE_ENV).toBe('test');
  });

test('DB User should be Postgres', () => {
    expect(process.env.DATABASE_USER).toBe('postgres');
});

test('Test DB Uri', () => {
    expect(config.getDatabaseUri()).toBe('postgres://postgres:postgres@localhost:5432/lifetracker');
  });


