import Chance from "chance";

const chance = new Chance();

export default function handler(req, res) {
  const randomCharacter = {
    firstName: chance.first(),
    lastName: chance.last(),
    gender: chance.gender(),
    address: chance.address(),
    phone: chance.phone(),
  };

  res.status(200).json(randomCharacter);
}
