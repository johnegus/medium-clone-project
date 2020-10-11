'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert(
        "Stories",
        [
          {
            title: "The Reading Rainbow",
            body: "I love reading on a rainbow!",
            subtitle: "Ever wondered where reading would take you?",
            userId: 1,
            imageUrl:
              "https://images.unsplash.com/photo-1530519362533-b36020711133?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: "The Phantom Menace",
            body: "Episode I",
            subtitle: "Everyone has to read this.",
            userId: 3,
            imageUrl:
              "https://images.unsplash.com/photo-1513001900722-370f803f498d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: "Attack of the Clones",
            body: "Episode II",
            subtitle: "Such an exciting storyline...",
            userId: 1,
            imageUrl:
              "https://images.unsplash.com/photo-1560747570-846e8dbe919b?ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: "The Unicorn",
            subtitle: "Horse With a Horn",
            body:
              "Cupcake ipsum dolor sit amet pudding sweet roll biscuit donut. Candy I love I love jujubes marzipan. Macaroon jelly-o macaroon soufflé tart I love I love gummi bears. I love sugar plum croissant jelly beans. Lollipop croissant candy canes lollipop I love. Sweet roll pudding topping jelly jujubes. I love ice cream pie cookie I love muffin. Marzipan marshmallow cake macaroon bear claw caramels toffee brownie toffee. Croissant croissant chocolate bar gummies jelly beans oat cake fruitcake. Tiramisu croissant cotton candy danish chupa chups chocolate bar dessert dragée bear claw. Fruitcake apple pie chocolate bar I love biscuit pastry jelly-o I love tootsie roll. Cake icing lollipop cotton candy cupcake sweet roll sweet roll. Toffee I love chocolate chocolate bar ice cream bear claw marzipan liquorice. Dragée gingerbread halvah sugar plum jelly beans. Gingerbread lollipop candy. Chocolate cotton candy muffin chocolate bar macaroon dragée apple pie tootsie roll. Croissant cake sugar plum. Chocolate bar pudding croissant chocolate bar. Soufflé fruitcake I love cake. Chupa chups I love jelly-o sweet dragée. Ice cream chupa chups chocolate cake topping lemon drops sweet ice cream I love liquorice. Biscuit cookie donut pastry oat cake gingerbread sweet roll jujubes macaroon. Pastry toffee oat cake. I love I love tiramisu chocolate cake apple pie marzipan donut dessert. Liquorice marzipan gummi bears dessert sugar plum soufflé lollipop sweet I love. Dessert I love I love cake tiramisu fruitcake. Halvah chupa chups sesame snaps brownie sweet powder fruitcake bonbon chocolate cake. Biscuit I love ice cream cake chupa chups jelly. Dessert jelly beans fruitcake I love caramels chocolate I love halvah. Biscuit chupa chups cake I love carrot cake. Cotton candy icing icing pudding jelly lollipop. Muffin donut donut lemon drops jujubes marzipan jelly-o macaroon. Dragée lemon drops macaroon jelly beans lemon drops ice cream apple pie. Candy canes cookie tiramisu I love. Jelly beans marshmallow marzipan dessert. Macaroon I love lemon drops tiramisu wafer. I love macaroon tootsie roll toffee pastry. Marshmallow soufflé tart marshmallow tart bear claw. Cotton candy cheesecake danish cake sesame snaps sweet roll fruitcake. Dessert topping wafer. Jelly-o dessert fruitcake halvah chupa chups sugar plum biscuit I love. Pie pastry jelly beans cake gummi bears. Marzipan biscuit croissant cake I love candy I love. Topping biscuit chupa chups macaroon toffee croissant gummi bears tiramisu jujubes. Sugar plum soufflé chocolate cake. Lemon drops gummi bears chocolate cake. Toffee bonbon sugar plum cheesecake. Gummi bears cake I love. Candy canes I love chocolate gingerbread cupcake tootsie roll macaroon. Donut croissant jelly jelly beans. Chocolate chocolate I love cookie. I love brownie wafer I love sugar plum jelly beans. I love powder icing. Cotton candy I love jelly beans cotton candy cheesecake cake gummi bears pudding halvah. I love candy halvah muffin caramels cotton candy lemon drops cake jelly-o. Brownie lemon drops cake tart jelly I love dessert sweet. Dessert apple pie cotton candy. Apple pie tootsie roll croissant topping I love brownie marzipan. Pudding I love I love caramels croissant soufflé chocolate cake. I love cake I love topping pudding cupcake. I love macaroon I love I love macaroon topping. Tart bonbon cake pastry gingerbread. Donut I love gummies I love I love tootsie roll topping icing bonbon. Bear claw topping chocolate macaroon soufflé bonbon cake candy canes tootsie roll.",
            userId: 4,
            imageUrl:
              "https://images.unsplash.com/photo-1527422265102-22027ee90fcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
      );
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Stories', null, {});
  }
};
