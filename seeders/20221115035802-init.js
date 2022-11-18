'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Students', [{
      name: 'John',
      lastName: 'Doe',
      email: 'JohnDoe@gmail.com',
      dateOfBirth: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Jonnathan',
      lastName: 'Charpentier',
      email: 'jcharpentier@gmail.com',
      dateOfBirth: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Books', [{
      name: 'Brave New World',
      description: "Brave New World is a dystopian novel by English author Aldous Huxley, written in 1931 and published in 1932.[2] Largely set in a futuristic World State, whose citizens are environmentally engineered into an intelligence-based social hierarchy, the novel anticipates huge scientific advancements in reproductive technology, sleep-learning, psychological manipulation and classical conditioning that are combined to make a dystopian society which is challenged by only a single individual: the story's protagonist. Huxley followed this book with a reassessment in essay form, Brave New World Revisited (1958), and with his final novel, Island (1962), the utopian counterpart. The novel is often compared to George Orwell's Nineteen Eighty-Four (1949).",
      numberOfPages: 350,
      publishedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'The Great Gatsby',
      description: "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan. The novel was inspired by a youthful romance Fitzgerald had with socialite Ginevra King, and the riotous parties he attended on Long Island's North Shore in 1922. Following a move to the French Riviera, Fitzgerald completed a rough draft of the novel in 1924. He submitted it to editor Maxwell Perkins, who persuaded Fitzgerald to revise the work over the following winter. After making revisions, Fitzgerald was satisfied with the text, but remained ambivalent about the book's title and considered several alternatives. Painter Francis Cugat's cover art greatly impressed Fitzgerald, and he incorporated aspects of it into the novel.",
      numberOfPages: 800,
      publishedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Students', null, {});
    await queryInterface.bulkDelete('Books', null, {});
  }
};
