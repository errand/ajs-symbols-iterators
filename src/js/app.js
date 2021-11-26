import Team from './Team';
import Bowman from './characters/Bowman';

const team1 = new Team();

const archer = new Bowman('Archer');
const elf = new Bowman('Elf');
team1.add(archer);
team1.add(elf);
for (let person of team1) { console.log(person) }
