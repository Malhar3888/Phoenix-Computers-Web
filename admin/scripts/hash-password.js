#!/usr/bin/env node
// Simple script to generate a bcrypt hash for a password using bcryptjs
// Usage: node scripts/hash-password.js "yourPassword"

const bcrypt = require('bcryptjs')

const pw = process.argv[2]
if(!pw){
  console.error('Usage: node scripts/hash-password.js "yourPassword"')
  process.exit(2)
}

const rounds = 12
bcrypt.genSalt(rounds, (err, salt) => {
  if(err) { console.error(err); process.exit(1) }
  bcrypt.hash(pw, salt, (err, hash) => {
    if(err) { console.error(err); process.exit(1) }
    console.log(hash)
  })
})
