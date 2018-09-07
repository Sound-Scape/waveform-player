const db = require('../database/index.js');

test('this is just a sample test', () => {
  expect(true).toBe(true);
});

test('should create Song tables with artist field in database', () => {
  // console.log(Object.keys(db.songSchema));
  expect(!!db.songSchema.artist).toBe(true);
});


// test('should generate timePosted in comments', async () => {
//   console.log(db.Comment, db.Comment.findAll);
//   expect.assertions(1);
//   const result = await db.Comment.findOne({where: {id: 598}});
//   expect(typeof result).toBe('object')
//   // db.Comment.findOne({ where: { id: 598}}).then((result) => {
//   //   console.log('hello');
//   //   expect(typeof db.Comment.sync).toBe('function');
//   // }).catch(err => {
//   //   console.log(err);
//   // });
// });


// it('connects to local database', () => {
//   expect(typeof db.connect).toBe('function');
// });




// db.end(); // Needed to end/exit the async operation