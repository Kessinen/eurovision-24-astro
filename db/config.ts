import { defineDb, defineTable, column } from 'astro:db';

const Users = defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true }),
    username: column.text(),
    password: column.text(),
    profile_picture: column.number({ default: 1 }),
    isAdmin: column.boolean({ default: false }),
  }
})

const Participants = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    turn: column.number(),
    year: column.number(),
    country: column.text(),
    country_img: column.text(),
    name: column.text(),
    song: column.text(),
    img: column.text(),
    artist_url: column.text()
  }
})

const Reviews = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    user_id: column.number({ references: () => Users.columns.id }),
    participant_id: column.number({ references: () => Participants.columns.id }),
    melody: column.number(),
    performance: column.number(),
    wardrobe: column.number()
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: { Users, Participants, Reviews }
});
